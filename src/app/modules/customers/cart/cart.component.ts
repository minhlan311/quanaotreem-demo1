import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseComponent implements OnInit, AfterViewInit {
  public list: any;
  public tTong: any;
  sanpham:any;
  tongtien=0;
  constructor(injector: Injector, private _router: Router,)
  {
    super(injector);
  }

  public ThanhToan () {
    this._router.navigate(['/customers/thanhtoan']);
  }

  ngOnInit(): void {
    console.log(JSON.parse(localStorage.getItem('listCart')||'{}'));
    this.sanpham=JSON.parse(localStorage.getItem('listCart')||'{}');
    for(let i of this.sanpham){
      this.tongtien=this.tongtien + i.TongTien*i.SoLuong;
    }
  }
  ngAfterViewInit() {
    this.loadScripts('assets/js/hide_menu.js');
  }


  deleteProduct(index:any){
    this.sanpham.splice(index,1);
    localStorage.setItem('listCart',JSON.stringify(this.sanpham));
    this.sanpham=JSON.parse(localStorage.getItem('listCart')||'{}');
    if(this.sanpham==''){
      this.tongtien=0;
      // this.router.navigate(['']);
    }
    else{
      this.tongtien=0;
      for(let i of this.sanpham){
        this.tongtien+=i.TongTien*i.SoLuong;
      }
    }
  }
  public Giam(s: any) {
    for(let i of this.sanpham){
      if(i.MaSP==s.MaSP){
        if(i.SoLuong==1){
          break;
        }
        else{
          i.SoLuong--;
          break;
        }
      }
  }
}
  public Tang(s: any) {
    for(let i of this.sanpham){
      if(i.MaSP==s.MaSP){
          i.SoLuong++;
          break;
        }
    }
  }

  public XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart','');
        this.list = null;
        this.tTong = 0;
    }
  }
  public updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
  }
  public Xoa(maSanPham: any) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
      var index = this.list.findIndex((x: any) => x.maSanPham == maSanPham);
      if (index >= 0) {
        this.list.splice(index, 1);
        this.tTong = this.list.reduce((sum:any, x:any) => sum + x.gia  * x.SoLuong, 0);
      }
    }
  }
}
