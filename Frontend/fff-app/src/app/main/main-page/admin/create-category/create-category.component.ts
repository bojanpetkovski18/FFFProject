import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  categoryForm!:FormGroup;

  constructor(private router:Router, private fb:FormBuilder, private categoryService:CategoryService)
  {
    this.categoryForm = fb.group({
      'categoryName' : ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

  ngOnInit() {
  }

  get categoryName()
  {
    return this.categoryForm.get('categoryName');
  }

  onBack() {
    this.router.navigate(["admin"]);
  }

  create() {
    this.categoryService.create(this.categoryForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
