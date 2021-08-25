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

}


export interface DBTables extends IEntity {

}

export interface TableColumns extends IEntity {

}



