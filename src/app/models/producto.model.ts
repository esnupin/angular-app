export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

//Extraccion de las propiedades nefcesarias para crear un nuevo producto
export type  ProductInput = Pick<Producto, 'title' | 'price' | 'description' | 'category' | 'image'>;

