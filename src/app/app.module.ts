import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from "@angular/common/http";

/*Modulo Formulario*/
import { FormsModule } from '@angular/forms';

/*Paginación*/
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WishlistPipe } from './pipes/wishlist.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FilterPipe,
    PaginatePipe,
    WishlistPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
