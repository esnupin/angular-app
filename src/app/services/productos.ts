import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInput, Producto } from '../models/producto.model';


@Injectable({
  providedIn: 'root'
})
export class ProductosServices {
  updateProducto(id: number, form: ProductInput) {
    throw new Error('Method not implemented.');
  }
  private readonly url = 'https://fakestoreapi.com/products';
  private readonly http = inject(HttpClient);


  // Obtener la lista de productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }


  // Crear un producto
  crearProducto(producto: ProductInput): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }


  // Actualizar un producto
  actualizarProducto(id: number, producto: ProductInput): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/${id}`, producto);
  }


   getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}/categories`);
  }
}