import {EntityTypeEnum, IEntity} from './IEntity';

export interface ConnectionType extends IEntity {
  type: EntityTypeEnum.Connection;
  ip: string;
  port: number;
  numberOfDatabases: number;
}

export enum DatabaseType {
  NoSQL = 'nosql',
  SQL = 'sql'
}

export interface Database extends IEntity {
  type: EntityTypeEnum.Database;
  databaseType: DatabaseType;
  numberOfSchemas: number;
}

export interface Schema extends IEntity {
  type: EntityTypeEnum.Schema;
  numberOfTables: number;
}


export interface DBTables extends IEntity {
  type: EntityTypeEnum.Table;
  numberOfColumns: number;
}

export enum TableColumnType {
  Number = 'int',
  String = 'string',
  Boolean = 'boolean'
}

export interface TableColumns extends IEntity {
  type: EntityTypeEnum.Column;
  fieldName: string;
  required: boolean;
  fieldType: TableColumnType;
}



