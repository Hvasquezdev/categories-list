interface Category {
  category_type: number;
  description: {
    eng: string;
    esp: string;
  };
  have_subcategories: boolean;
  image: string;
  name: {
    eng: string;
    esp: string;
  };
  suggested_budget: number;
  uuid4: string;
  vendors: null | unknown;
}

export { Category };