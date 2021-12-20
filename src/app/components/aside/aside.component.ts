import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CategoryService } from 'src/app/services/category/category.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { IResultViewModel } from 'src/app/viewmodel/iresult-view-model';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit{
  panelOpenState = false;
  departments: any;
  categoriesInDept: any;
  deptId: string = "0";
  constructor(private deptService:DepartmentService, private catgService: CategoryService) {
    this.deptService.getAllDepartments().subscribe({
      next: (departmentsobj) => {
        this.departments = departmentsobj.data;
      }
    });
  }

  getCategories(deptId:string) {
    this.catgService.getCategoriesByDeptID(deptId).subscribe({
      next: (categories) => {
        this.categoriesInDept = categories.data
      }
    })
  }

  ngOnInit(): void {
  }
}
