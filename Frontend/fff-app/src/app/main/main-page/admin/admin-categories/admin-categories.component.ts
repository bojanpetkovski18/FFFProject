import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategory';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss'],
})
export class AdminCategoriesComponent implements OnInit {
  data!: Array<ICategory>;
  temp_var: Object = false;
  constructor(
    private service: CategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.service.getCategories().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.temp_var = true;
    });
  }

  flag: boolean = false;
  OnAddNew() {
    this.flag = !this.flag;
  }

  onDelete(id: number) {
    this.service.deleteCategory(id).subscribe((res) => {
      this.getAllCategories();
    });
  }
}
