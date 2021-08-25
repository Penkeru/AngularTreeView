import {Component, OnInit} from '@angular/core';
import {ITreeNode} from './models/interface/tree';
import {DatabaseService} from './services/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public treeRootsList: ITreeNode[];
  public currentSelectedNode: ITreeNode;
  public currentExpandedNode: ITreeNode;

  constructor(private databaseService: DatabaseService) {

  }

  ngOnInit(): void {
    this.getCurrentNodeChildren();
  }

  public getCurrentNodeChildren(treeNode?: ITreeNode) {
    this.databaseService.fetchCurrentNodeChildren(treeNode).subscribe((treeNodeList: ITreeNode[]) => {
      if (treeNode) {
        treeNode.children = treeNodeList;
      } else {
        this.treeRootsList = treeNodeList;
      }
    });
  }

  public onSelectedNode(selectedNode: ITreeNode): void {
    this.currentSelectedNode = selectedNode;
  }

  public onExpandNode(expandedNode: ITreeNode): void {
    this.currentExpandedNode = expandedNode;
    this.getCurrentNodeChildren(expandedNode);
  }
}
