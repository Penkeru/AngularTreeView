import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserPermissionEnum} from '../models/enums/user-permission.enum';
import {ITreeNode} from '../models/interface/tree';
import {map} from 'rxjs/operators';
import {TreeNode} from '../models/classes/tree-node';
import {EntityTypeEnum, IEntity} from '../models/interface/IEntity';
import {ConnectionType, Database, DatabaseType, DBTables, Schema, TableColumns} from '../models/interface/database';

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
    return of([
      {
        name: 'PostgresSQL1',
        id: 1,
        permission: UserPermissionEnum.Admin,
        type: EntityTypeEnum.Connection,
        ip: '1.122.21.10',
        port: 2232,
        numberOfDatabases: 3
      },
      {
        name: 'PostgresSQL2',
        id: 2,
        permission: UserPermissionEnum.Admin,
        type: EntityTypeEnum.Connection,
        ip: '1.122.21.11',
        port: 2232,
        numberOfDatabases: 0
      }, {
        name: 'SQLServer1',
        id: 3,
        permission: UserPermissionEnum.Admin,
        type: EntityTypeEnum.Connection,
        ip: '1.122.21.12',
        port: 2232,
        numberOfDatabases: 3
      }]);
  }

  private getDatabasesList(connectionId: number): Observable<Database[]> {
    let observable: Observable<Database[]> = null;
    if (connectionId === 1) {
      observable = of([
        {
          name: 'playground_temp_base11',
          id: 11,
          permission: UserPermissionEnum.Admin,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.SQL,
          numberOfSchemas: 1
        },
        {
          name: 'playground_temp_base12',
          id: 12,
          permission: UserPermissionEnum.Admin,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.SQL,
          numberOfSchemas: 5
        },
        {
          name: 'playground_temp_base13',
          id: 13,
          permission: UserPermissionEnum.Admin,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.SQL,
          numberOfSchemas: 0
        }
      ]);
    } else if (connectionId === 2) {
      observable = of([]);
    } else if (connectionId === 3) {
      observable = of([
        {
          name: 'postgis31',
          id: 31,
          permission: UserPermissionEnum.Admin,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.NoSQL,
          numberOfSchemas: 1
        },
        {
          name: 'postgis32',
          id: 32,
          permission: UserPermissionEnum.Admin,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.NoSQL,
          numberOfSchemas: 5
        },
        {
          name: 'postgis33',
          id: 33,
          permission: UserPermissionEnum.None,
          type: EntityTypeEnum.Database,
          databaseType: DatabaseType.NoSQL,
          numberOfSchemas: 0
        }
      ]);
    }
    return observable;
  }

  private getSchemasList(databaseId: number): Observable<Schema[]> {
    return of();
  }

  private getTablesList(schemaId: number): Observable<DBTables[]> {
    return of();
  }

  public getTablesColumns(tableId: number): Observable<TableColumns[]> {
    return of();
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
