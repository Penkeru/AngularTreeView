import {EntityTypeEnum} from '../interface/IEntity';


export enum IconNames {
  Database = 'database',
  Connection = 'server',
  Schema = 'clipboard-list',
  Table = 'table',
  Column = 'columns'
}


export const EntityToIconMapper: Map<EntityTypeEnum, IconNames> = new Map<EntityTypeEnum, IconNames>();
EntityToIconMapper.set(EntityTypeEnum.Connection, IconNames.Connection);
EntityToIconMapper.set(EntityTypeEnum.Database, IconNames.Database);
EntityToIconMapper.set(EntityTypeEnum.Schema, IconNames.Schema);
EntityToIconMapper.set(EntityTypeEnum.Table, IconNames.Table);
EntityToIconMapper.set(EntityTypeEnum.Column, IconNames.Column);



