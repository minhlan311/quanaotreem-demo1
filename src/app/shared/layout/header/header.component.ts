import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public danhmucs: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    // this._api.get('api/home/get-danhmuc').subscribe(res => {
    //   this.danhmucs = res;
    //   setTimeout(() => {
    //     this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
    //   });
    // });

  }

}
