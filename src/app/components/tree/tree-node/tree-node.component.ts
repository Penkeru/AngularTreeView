import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpandEvent, ITreeNode} from '../../../models/interface/tree';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() currentTreeNode: ITreeNode;
  @Output() nodeExpand: EventEmitter<ExpandEvent> = new EventEmitter<ExpandEvent>();
  @Output() nodeSelect: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();

  constructor() {
  }
}
