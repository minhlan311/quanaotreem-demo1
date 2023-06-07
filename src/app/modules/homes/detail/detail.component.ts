import { CartService } from 'src/app/core/services/cart.service';
import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends BaseComponent implements OnInit, AfterViewInit {
  public item:any;
  constructor(injector: Injector, private _cart: CartService) {
    super(injector);
  }

  public _addToCart(item: any) {
    this._cart.addToCart(item);
    alert('Đã thêm vào giở hàng thành công');
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/sanphams/getbyid/'+id).subscribe(res => {
      this.item = res;
    });
    });
  }
  ngAfterViewInit() {
    //this.loadScripts('assets/js/image_product.js', 'assets/js/hide_menu.js', 'assets/js/cart.js');
  }

}
