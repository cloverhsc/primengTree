import { TreeNode } from 'primeng/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  constructor(private http: HttpClient) {}

  fetchTreeData() {
    return this.http.get<{ data: TreeNode[] }>('/api/tree');
  }

  fetchLazyTreeData() {
    return this.http.get<{ data: TreeNode[] }>('/api/lazy/tree');
  }
}
