import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./features/tasks/pages/task-list/task-list').then((m) => m.TaskList);
    },
  },
  {
    path:'tasks/:id',
    loadComponent:()=>{
      return import('./features/tasks/pages/task-detail/task-detail').then((m)=>m.TaskDetail);
    }
  },
  {
    path: 'categories',
    loadComponent: () => {
      return import('./features/categories/pages/category-list/category-list').then(
        (m) => m.CategoryList
      );
    },
  },
];
