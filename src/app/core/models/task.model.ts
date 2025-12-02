import { Category } from "./category.model";

export interface Task {
  id:number;
  title:string;
  description:string;
  completed:boolean;
  createdAt:string;
  category: Category
}