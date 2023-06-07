import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { CuahangComponent } from './cuahang/cuahang.component';
import { DanhmucComponent } from './danhmuc/danhmuc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    CuahangComponent,
    DanhmucComponent,



  ],
  imports: [
    CommonModule,NgbModule,FormsModule,
    RouterModule.forChild([
      { path: 'detail/:id', component: DetailComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'index', component: IndexComponent },
      { path: 'cuahang', component: CuahangComponent },
      { path: 'danhmuc/:id', component: DanhmucComponent },

    ])
  ]
})
export class HomesModule { }
