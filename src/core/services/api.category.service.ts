import { api } from "@/plugins/axios";
import { Category } from "../domain/models/category";
import { CategoryService } from "../domain/services/category.service";

class ApiCategoryService implements CategoryService {
  getAll = async (): Promise<Category[]> => {
    const { data } = await api.get("/category");    

    return data.data;
  };

  static getAllByName = (params: {
    categories: Category[];
    name: string;
  }): Category[] => {
    const categories = [...params.categories];

    return categories.filter((category) => {
      const { name } = category;
      const searchedName = params.name.toLowerCase();

      return (
        name.esp.toLowerCase().includes(searchedName) ||
        name.eng.toLowerCase().includes(searchedName)
      );
    });
  };
}

export { ApiCategoryService };
