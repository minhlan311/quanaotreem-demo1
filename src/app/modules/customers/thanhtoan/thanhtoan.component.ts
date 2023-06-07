import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent extends BaseComponent implements OnInit {
  public frmKhach: FormGroup;
  public list_items: any;
  public tTong: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.list_items = JSON.parse(localStorage.getItem('cart') || '[]');
    this.tTong = this.list_items.reduce((sum: any, x: any) => sum + x.gia * x.quantity, 0);
    this.frmKhach = new FormGroup({
      'txt_hoten': new FormControl(''),
      'txt_sdt': new FormControl(''),
      'txt_email': new FormControl(''),
      'txt_diachi': new FormControl(''),
      'txt_ghichu': new FormControl('')
    });
  }
  public onSubmit(val:any) {
    debugger;
    let obj:any = {};
    obj.khach =  {
      TenKhachHang:val.txt_hoten,
      DiaChi:val.txt_diachi,
      SoDienThoai:val.txt_sdt,
      Email:val.txt_email
    };
    obj.donhang = [];
    this.list_items.forEach((x:any) => {
      obj.donhang.push({
        MaSanPham: x.maSanPham,
        SoLuong:x.quantity,
        GiaMua:x.gia
      }); 
    }); 
    console.log(obj);
    debugger;
     this._api.post('/api/customers/create-giohang', obj).subscribe(res => {
      let xxx= 1;
      debugger;
    });
  }

}
