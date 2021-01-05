import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { FooterComponent } from './main/footer/footer.component';
import { HomePageComponent } from './main/main-page/home/home-page/home-page.component';
import { AdminMenuComponent } from './main/main-page/admin/admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './main/main-page/admin/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './main/main-page/admin/dashboard/dashboard.component';
import { CategoriesComponent } from './main/main-page/admin/categories/categories.component';
import { BrandsComponent } from './main/main-page/admin/brands/brands.component';
import { ProductsComponent } from './main/main-page/admin/products/products.component';
import { ProgramsComponent } from './main/main-page/admin/programs/programs.component';
import { CreateCategoryComponent } from './main/main-page/admin/create-category/create-category.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes = [
  { path: '', component: HomePageComponent },
  {
    path: 'admin', component: AdminDashboardComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'categories', component: CategoriesComponent
      },
      {
        path: 'brands', component: BrandsComponent
      },
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'programs', component: ProgramsComponent
      },
      {
        path: 'create-category', component: CreateCategoryComponent
      },
    ]
  },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, HomePageComponent,
                AdminMenuComponent, AdminDashboardComponent, DashboardComponent,
                CategoriesComponent, BrandsComponent, ProductsComponent,
                ProgramsComponent, CreateCategoryComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,
            ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
