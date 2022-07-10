import { TreeService } from './service/tree.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  onLoading = true;
  treeData: TreeNode[] = [];
  selectedFile!: TreeNode;

  constructor(private treeServ: TreeService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.treeServ
        .fetchLazyTreeData()
        .subscribe((data: { data: TreeNode[] }) => {
          this.treeData = data.data;
          this.onLoading = false;
        });
    }, 0);
  }

  fetchFullTree() {
    this.treeServ.fetchTreeData().subscribe((data: { data: TreeNode[] }) => {
      this.onLoading = false;
      this.treeData = data.data;
    });
  }

  fetchLazyTree(event: any) {
    this.treeServ
      .fetchLazyTreeData()
      .subscribe((data: { data: TreeNode[] }) => {
        this.onLoading = false;
        event.node.children = data.data;
      });
  }

  toggleItem(currentNode: any) {
    // currentNode.expanded = !currentNode.expanded;
    console.log(currentNode);
    // currentNode.expanded ? this.fetchLazyTree(currentNode) : null;
  }

  /**
   * Lazy loading children of the node. Trigger api to get the children
   * tree data then render the children nodes.
   * @param event :
   */
  nodeExpand(event: any) {
    this.fetchLazyTree(event);
  }
}
