import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
    // the + converts the string to a number:
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getProduct(id);
  }

  getProduct(id: number): IProduct {
    this.productService.getProduct(id).subscribe(
      (product) => this.product = product,
      error => this.errorMessage = <any>error,
    );
    return null;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
