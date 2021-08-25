import {UserPermissionEnum} from '../enums/user-permission.enum';
import {IconNames} from '../enums/icon-names.enum';

export enum EntityTypeEnum {
  None = '',
  Connection = 'connection',
  Database = 'database',
  Schema = 'schema',
  Table = 'table',
  Column = 'column'
}


export interface IEntity {
  id: number;
  name: string;
  permission: UserPermissionEnum;
  type: EntityTypeEnum;
}

export const EntityTypeToChildCounterField: Map<EntityTypeEnum, string> = new Map<EntityTypeEnum, IconNames>();
EntityTypeToChildCounterField.set(EntityTypeEnum.Connection, 'numberOfDatabases');
EntityTypeToChildCounterField.set(EntityTypeEnum.Database, 'numberOfSchemas');
EntityTypeToChildCounterField.set(EntityTypeEnum.Schema, 'numberOfTables');
EntityTypeToChildCounterField.set(EntityTypeEnum.Table, 'numberOfColumns');
