import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserPermissionEnum} from '../models/enums/user-permission.enum';
import {ITreeNode} from '../models/interface/tree';
import {map} from 'rxjs/operators';
import {TreeNode} from '../models/classes/tree-node';
import {EntityTypeEnum, IEntity} from '../models/interface/IEntity';
import {ConnectionType, Database, DBTables, Schema, TableColumns} from '../models/interface/database';
import {MockDataUtils} from '../utils/mock-data-utils';

interface IDatabaseApiMapper {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dataBaseApiMapper: IDatabaseApiMapper = {};

  constructor() {
    this.dataBaseApiMapper[EntityTypeEnum.None] = this.getConnectionTypesList;
    this.dataBaseApiMapper[EntityTypeEnum.Connection] = this.getDatabasesList;
    this.dataBaseApiMapper[EntityTypeEnum.Database] = this.getSchemasList;
    this.dataBaseApiMapper[EntityTypeEnum.Schema] = this.getTablesList;
    this.dataBaseApiMapper[EntityTypeEnum.Table] = this.getTablesColumns;

  }

  private getConnectionTypesList(): Observable<ConnectionType[]> {
    return of(MockDataUtils.connectionsList);
  }

  private getDatabasesList(connectionId: number): Observable<Database[]> {
    return of(MockDataUtils.DatabaseMap[connectionId]);
  }

  private getSchemasList(databaseId: number): Observable<Schema[]> {
    return of(MockDataUtils.SchemeMap[databaseId]);
  }

  private getTablesList(schemaId: number): Observable<DBTables[]> {
    return of(MockDataUtils.tableMockMap[schemaId]);
  }

  public getTablesColumns(tableId: number): Observable<TableColumns[]> {
    return of(MockDataUtils.tableColumnsMap[tableId]);
  }

  public fetchCurrentNodeChildren(expandedNode?: ITreeNode): Observable<ITreeNode[]> {
    const nodeEntityType = expandedNode && expandedNode.data.type || EntityTypeEnum.None;
    const parameters = this.getParametersByEntityType(nodeEntityType, expandedNode);
    return this.dataBaseApiMapper[nodeEntityType].apply(this, parameters).pipe(map((response) => this.transformToTreeNode(response, expandedNode)));
  }

  private getParametersByEntityType(type: EntityTypeEnum, expandedNode: ITreeNode): Array<number | string> {
    let parameters = [];
    // we can send here parameters according to entity type, currently supposing that everyone only send ids.
    if (type !== EntityTypeEnum.None) {
      parameters = [expandedNode.data.id];
    }
    return parameters;
  }

  private transformToTreeNode(response: any, nodeParent?: ITreeNode): Observable<ITreeNode[]> {
    return response.map((entityData: IEntity) => {
      return new TreeNode(entityData, nodeParent, entityData.permission !== UserPermissionEnum.Admin);
    });
  }
}
