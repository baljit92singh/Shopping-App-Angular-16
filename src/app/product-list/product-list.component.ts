import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 100 },
    { name: 'Product 2', description: 'Description 2', price: 200 },
    // Add more products as needed
  ];

  constructor(public dialog: MatDialog) {}

  openProductDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '250px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle result if needed
    });
  }
}
