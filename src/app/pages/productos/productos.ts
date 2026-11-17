import { Component, inject, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { ProductosServices } from '../../services/productos';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos = signal<Producto[]>([]);
  
  private servicio = inject(ProductosServices);
  

  ngOnInit(): void {
    this.servicio.obtenerProductos().subscribe({
      next: (dato : Producto[]) => {
       this.productos.set(dato);
       console.log(dato.slice(0,8))
      } 
    })
  }
}