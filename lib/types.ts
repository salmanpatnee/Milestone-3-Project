type Slug = {
  current: string;
  _type: "slug";
};

type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type Product = {
  _id: string;
  image: Image;
  price: number;
  subtitle: string;
  title: string;
  slug: Slug;
  salePrice: number; 
  details: any
};
