import { TreeService } from './service/tree.service';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeNodeType } from '../msw_handler/tree-mock-data';

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
    this.treeServ.fetchTreeData().subscribe((data: { data: TreeNode[] }) => {
      this.onLoading = false;
      this.treeData = data.data;
    });
  }
  nodeSelect(event: any) {
    this.selectedFile = event.node;
    console.log(this.selectedFile);
  }

  toggleItem(currentNode: TreeNode) {
    currentNode.expanded = !currentNode.expanded;
  }
}
