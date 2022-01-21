import { Category } from "../models/category";

interface CategoryService {
  getAll: () => Promise<Category[]>;
}

export { CategoryService };
