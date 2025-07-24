import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TodoItem } from './app'; // import đúng

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private db: NgxIndexedDBService) {}

  add(todo: TodoItem) {
    return this.db.add('todos', todo);
  }

  getAll() {
    return this.db.getAll('todos');
  }

  delete(id: number) {
    return this.db.delete('todos', id);
  }

  update(todo: TodoItem) {
    return this.db.update('todos', todo);
  }

  getById(id: number) {
    return this.db.getByKey('todos', id);
  }
}