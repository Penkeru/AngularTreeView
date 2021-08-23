import {Component} from '@angular/core';
import {ITree, ITreeNode} from './models/interface/tree';
import {DatabaseService} from './services/database.service';
import {IconNames} from './models/enums/icon-names.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public treeRootsList: ITree;
  public currentSelectedNode: ITreeNode;
  public currentExpandedNode: ITreeNode;

  constructor(private databaseService: DatabaseService) {
    this.treeRootsList = [
      {
        nodeDisplayName: 'something',
        nodeIcon: IconNames.Database,
        disabled: true,
        expanded: false, children: [
          {
            expanded: false,
            nodeDisplayName: 'something1',
          },
          {
            expanded: false,
            nodeDisplayName: 'something2',
            isLeaf: true,
          }
        ]
      },
      {
        nodeDisplayName: 'something',
        nodeIcon: IconNames.Database,
        expanded: false, children: [
          {
            expanded: false,
            nodeDisplayName: 'something1',
          },
          {
            expanded: false,
            nodeDisplayName: 'something2',
            isLeaf: true
          }
        ]
      }
    ];
  }

  public onSelectedNode(selectedNode: ITreeNode): void {
    this.currentSelectedNode = selectedNode;
  }

  public onExpandNode(expandedNode: ITreeNode): void {
    this.currentExpandedNode = expandedNode;
  }
}
