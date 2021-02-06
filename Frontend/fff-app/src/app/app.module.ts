import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './main/main-page/client/home/home.component';
import { CarouselComponent } from './main/main-page/client/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { BannerComponent } from './main/main-page/client/banner/banner.component';
import { MainMenuComponent } from './main/main-page/client/main-menu/main-menu.component';
import { TopsaleComponent } from './main/main-page/client/topsale/topsale.component';
import { TopbestComponent } from './main/main-page/client/topbest/topbest.component';
import { TopsaleGridComponent } from './main/main-page/client/topsale-grid/topsale-grid.component';
import { SliderBrandsComponent } from './main/main-page/client/slider-brands/slider-brands.component';
import { NavFooterComponent } from './main/nav-footer/nav-footer.component';
import { SupplementsComponent } from './main/main-page/client/supplements/supplements.component';
import { SupplementsBannerComponent } from './main/main-page/client/supplements-banner/supplements-banner.component';
import { SupplementsListComponent } from './main/main-page/client/supplements-list/supplements-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { RangePipe } from './pipes/range.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { GearComponent } from './main/main-page/client/gear/gear.component';
import { GearBannerComponent } from './main/main-page/client/gear-banner/gear-banner.component';
import { GearListComponent } from './main/main-page/client/gear-list/gear-list.component';
import { ContactComponent } from './main/main-page/client/contact/contact.component';
import { ProgramsComponent } from './main/main-page/client/programs/programs.component';
import { ProgramsGridComponent } from './main/main-page/client/programs-grid/programs-grid.component';
import { ProgramBannerComponent } from './main/main-page/client/program-banner/program-banner.component';
import { DetailsComponent } from './main/main-page/client/details/details.component';
import { AdminDashboardComponent } from './main/main-page/admin/admin-dashboard/admin-dashboard.component';
import { AdminPageComponent } from './main/main-page/admin/admin-page/admin-page.component';
import { AdminCategoriesComponent } from './main/main-page/admin/admin-categories/admin-categories.component';
import { CommonModule } from '@angular/common';
import { AdminAddCategoryComponent } from './main/main-page/admin/admin-add-category/admin-add-category.component';
import { AdminProductsComponent } from './main/main-page/admin/admin-products/admin-products.component';
import { AdminAddProductComponent } from './main/main-page/admin/admin-add-product/admin-add-product.component';
import { CartComponent } from './main/cart/cart.component';
import { CartItemComponent } from './main/cart-item/cart-item.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'supplements', component: SupplementsComponent },
  { path: 'gear', component: GearComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'details/:id', component: DetailsComponent },
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'categories', component: AdminCategoriesComponent },
      { path: 'products', component: AdminProductsComponent },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CarouselComponent,
    BannerComponent,
    MainMenuComponent,
    TopsaleComponent,
    TopbestComponent,
    TopsaleGridComponent,
    SliderBrandsComponent,
    NavFooterComponent,
    SupplementsComponent,
    SupplementsBannerComponent,
    SupplementsListComponent,
    FilterPipe,
    SortPipe,
    RangePipe,
    GearComponent,
    GearBannerComponent,
    GearListComponent,
    ContactComponent,
    ProgramsComponent,
    ProgramsGridComponent,
    ProgramBannerComponent,
    DetailsComponent,
    AdminDashboardComponent,
    AdminPageComponent,
    AdminCategoriesComponent,
    AdminAddCategoryComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    CartComponent,
    CartItemComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgImageSliderModule,
    NgxPaginationModule,
    CommonModule,
  ],

  exports: [FormsModule, ReactiveFormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
