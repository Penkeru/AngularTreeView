import {UserPermissionEnum} from '../models/enums/user-permission.enum';
import {EntityTypeEnum} from '../models/interface/IEntity';
import {ConnectionType, Database, DatabaseType, DBTables, Schema, TableColumns, TableColumnType} from '../models/interface/database';

interface DatabaseMockMap {
  [key: number]: Database[];
}

interface SchemaMockMap {
  [key: number]: Schema[];
}

interface TableMockMap {
  [key: number]: DBTables[];
}

interface TableColumnMockMap {
  [key: number]: TableColumns[];
}

export class MockDataUtils {
  static connectionsList: ConnectionType[] = [
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
    }
  ];

  static DatabaseMap: DatabaseMockMap = {
    1: [
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
    ],
    2: [],
    3: [
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
    ]
  };


  static SchemeMap: SchemaMockMap = {
    11:
      [
        {
          permission: UserPermissionEnum.Admin,
          name: 'kidsSchema',
          id: 111,
          numberOfTables: 2,
          type: EntityTypeEnum.Schema
        }
      ],
    12:
      [
        {
          permission: UserPermissionEnum.Admin,
          name: 'ClassesSchema',
          id: 121,
          numberOfTables: 2,
          type: EntityTypeEnum.Schema
        },
        {
          permission: UserPermissionEnum.Admin,
          name: 'TeachersSchema',
          id: 122,
          numberOfTables: 1,
          type: EntityTypeEnum.Schema
        },
        {
          permission: UserPermissionEnum.Admin,
          name: 'StudentsSchema',
          id: 123,
          numberOfTables: 1,
          type: EntityTypeEnum.Schema
        },
        {
          permission: UserPermissionEnum.None,
          name: 'JanitorSchema',
          id: 124,
          numberOfTables: 2,
          type: EntityTypeEnum.Schema
        },
        {
          permission: UserPermissionEnum.Admin,
          name: 'oldSchoolSchema',
          id: 125,
          numberOfTables: 0,
          type: EntityTypeEnum.Schema
        }
      ],
    31: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'policeSchema',
        id: 311,
        numberOfTables: 2,
        type: EntityTypeEnum.Schema
      }
    ],
    32: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'officerSchema',
        id: 321,
        numberOfTables: 1,
        type: EntityTypeEnum.Schema
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'copsSchema',
        id: 322,
        numberOfTables: 1,
        type: EntityTypeEnum.Schema
      },
      {
        permission: UserPermissionEnum.None,
        name: 'swatSchema',
        id: 323,
        numberOfTables: 1,
        type: EntityTypeEnum.Schema
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'citizenSchema',
        id: 324,
        numberOfTables: 1,
        type: EntityTypeEnum.Schema
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'exCopSchema',
        id: 325,
        numberOfTables: 0,
        type: EntityTypeEnum.Schema
      }
    ],
  };

  static tableMockMap: TableMockMap = {
    111: [{
      type: EntityTypeEnum.Table,
      id: 1111,
      name: 'table1111',
      permission: UserPermissionEnum.Admin,
      numberOfColumns: 3
    }],
    121: [
      {
        type: EntityTypeEnum.Table,
        id: 1211,
        name: 'table1211',
        permission: UserPermissionEnum.Admin,
        numberOfColumns: 3
      },
      {
        type: EntityTypeEnum.Table,
        id: 1212,
        name: 'table1212',
        permission: UserPermissionEnum.Admin,
        numberOfColumns: 2
      }
    ],
    122: [
      {
        type: EntityTypeEnum.Table,
        id: 1221,
        name: 'table1221',
        permission: UserPermissionEnum.Admin,
        numberOfColumns: 0
      }
    ],
    123: [
      {
        type: EntityTypeEnum.Table,
        id: 1231,
        name: 'table1231',
        permission: UserPermissionEnum.Admin,
        numberOfColumns: 3
      },
      {
        type: EntityTypeEnum.Table,
        id: 1232,
        name: 'table1232',
        permission: UserPermissionEnum.None,
        numberOfColumns: 3
      }
    ]
  };

  static tableColumnsMap: TableColumnMockMap = {
    1111: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'name',
        fieldName: 'name',
        fieldType: TableColumnType.String,
        required: true,
        id: 11111,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'age',
        fieldName: 'age',
        fieldType: TableColumnType.Number,
        required: true,
        id: 11112,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'gender',
        fieldName: 'gender',
        fieldType: TableColumnType.String,
        required: true,
        id: 11113,
        type: EntityTypeEnum.Column
      }
    ],
    1211: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'name',
        fieldName: 'name',
        fieldType: TableColumnType.String,
        required: true,
        id: 12111,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'age',
        fieldName: 'age',
        fieldType: TableColumnType.Number,
        required: false,
        id: 12112,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'gender',
        fieldName: 'gender',
        fieldType: TableColumnType.String,
        required: false,
        id: 12113,
        type: EntityTypeEnum.Column
      }
    ],
    1212: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'id',
        fieldName: 'id',
        fieldType: TableColumnType.Number,
        required: true,
        id: 12121,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'name',
        fieldName: 'name',
        fieldType: TableColumnType.String,
        required: true,
        id: 12122,
        type: EntityTypeEnum.Column
      }
    ],
    1231: [
      {
        permission: UserPermissionEnum.Admin,
        name: 'name',
        fieldName: 'name',
        fieldType: TableColumnType.String,
        required: true,
        id: 12311,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'location',
        fieldName: 'location',
        fieldType: TableColumnType.String,
        required: false,
        id: 12312,
        type: EntityTypeEnum.Column
      },
      {
        permission: UserPermissionEnum.Admin,
        name: 'isOpened',
        fieldName: 'isOpened',
        fieldType: TableColumnType.Boolean,
        required: false,
        id: 12313,
        type: EntityTypeEnum.Column
      }
    ]
  };
}
