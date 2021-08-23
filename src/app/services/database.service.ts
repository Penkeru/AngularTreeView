import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  // Required APIs are:
  // getConnectionTypesList() : [GET]
  // getDatabasesList(connectionId) : [GET]
  // getSchemasList(databaseId): [GET]
  // getTablesList(schemaID) : [GET]
  // getTablesColumns(tableId) : [GET]

  constructor() { }
}
