import { ApiService } from './../../../core/services/api.service';
import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends BaseComponent implements OnInit,AfterViewInit {
  public list_item:any;
  constructor( injector: Injector,public router: Router) {
    super(injector);
   }
  ngOnInit(): void {
    this._api.get('API/sanphams/getxe').subscribe(res => {
      this.list_item = res;
      console.log(this.list_item);
      // debugger;
      
    });

    //  this._api.post('/api/item/search', {page:1, pageSize:6}).subscribe(res => {
    //   this.list_item = res.data;
    //   debugger;
      setTimeout(() => {
        this.loadScripts('assets/js/order_slideshow_nona.js','assets/js/nonashop.js'); 
      });
    // });

  }
  ngAfterViewInit() { 
    //this.loadScripts('assets/js/hide_menu.js','assets/js/slide_show.js' ); 
   }
   listCart:any=[];
  cart={MaSP:'',TenSP:'',Anh:'',Gia:0,SoLuong:1,TongTien:0}
   addCart(sanpham:any){
    this.cart.MaSP=sanpham.masanpham;
    this.cart.TenSP=sanpham.tensanpham;
    this.cart.Anh=sanpham.anh;
    this.cart.Gia=sanpham.giaban;
    this.cart.TongTien=sanpham.giaban;

    let check=true;
    if(localStorage.getItem('listCart')==null||localStorage.getItem('listCart')==''){
      this.listCart.unshift(this.cart);
      localStorage.setItem('listCart',JSON.stringify(this.listCart));
    }
    else{
      var list=JSON.parse(localStorage.getItem('listCart')||'{}');
      for(let i=0;i<list.length; i++){
        if(list[i].masanpham==this.cart.MaSP){
          list[i].SoLuong=list[i].SoLuong+1
          this.listCart=list;
          localStorage.setItem('listCart',JSON.stringify(this.listCart));
          check=false;
          break
        }
      }
      if(check){
        this.listCart=JSON.parse(localStorage.getItem('listCart')||'{}');
        this.listCart.unshift(this.cart);
        localStorage.setItem('listCart',JSON.stringify(this.listCart));
      }
    }
    console.log(this.listCart);
    this.router.navigate(['customers/cart']);
  }
}
