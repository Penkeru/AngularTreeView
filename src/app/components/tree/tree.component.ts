import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpandEvent, ITreeNode} from '../../models/interface/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input() treeRootsList: Array<ITreeNode>;
  @Output() selectedNode: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
  @Output() expandedNode: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
  public currentSelectNode: ITreeNode;

  constructor() {
    this.currentSelectNode = null;
  }

  public onNodeSelect(selectedNode: ITreeNode): void {
    if (selectedNode) {
      if (!this.currentSelectNode) {
        this.currentSelectNode = selectedNode;
      } else {
        this.currentSelectNode.selected = false;
        this.currentSelectNode = selectedNode;
      }
      this.currentSelectNode.selected = true;
      this.selectedNode.emit(this.currentSelectNode);
    }
  }

  public onNodeExpand(expandEvent: ExpandEvent): void {
    if (expandEvent) {
      const event = expandEvent.event;
      event.stopPropagation();
      const currentExpandedNode = expandEvent.currentExpandNode;
      currentExpandedNode.expanded = !currentExpandedNode.expanded;
      this.expandedNode.emit(currentExpandedNode);
    }

  }

}
