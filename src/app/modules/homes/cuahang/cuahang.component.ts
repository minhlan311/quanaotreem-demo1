import { AfterViewInit, Component, Injector, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-cuahang',
  templateUrl: './cuahang.component.html',
  styleUrls: ['./cuahang.component.css']
})
export class CuahangComponent extends BaseComponent implements OnInit, AfterViewInit{

  public loc:any;
  public page: any = 1;
  public id: any;
  public pageSize: any = 12;
  public list_item: any;
  public totalItem: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.loc = localStorage.getItem('loc') || '';
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._api.post('/api/danhmuc/search', { loc: this.loc, page: this.page, pageSize: this.pageSize, ma_danh_muc: this.id }).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItem;
        setTimeout(() => {
          this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
        });
      });

    });


  }
  public loadPage(page: any) {
    this._api.post('/api/danhmuc/search', {loc: this.loc,  page: page, pageSize: this.pageSize, ma_danh_muc: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItem;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }
 
  public loadData(pageSize:any) {
   this.pageSize = pageSize;
    this._api.post('/api/danhmuc/search', { loc: this.loc, page: 1, pageSize: pageSize, ma_danh_muc: this.id }).subscribe(res => {
      this.list_item = res.data;
      this.totalItem = res.totalItem;
      setTimeout(() => {
        this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
      });
    });
  }

  setDieuKienLoc(loc: any) {
    this.loc = loc;
    localStorage.setItem('loc',loc); 
    this.loadData(this.pageSize);
  }
  ngAfterViewInit() { 
    this.loadScripts('assets/js/hide_menu.js'); 
   }
}
