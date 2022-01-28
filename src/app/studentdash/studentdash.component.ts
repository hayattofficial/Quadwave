import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudentDashModel } from './studentdash.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrls: ['./studentdash.component.css']
})
export class StudentdashComponent implements OnInit {
  showAdd!:boolean;
  showUpdate !:boolean;

  formValue !:FormGroup;
  studentModelObj : StudentDashModel = new StudentDashModel();
  studentAll:any;
  constructor(private formbuilder :FormBuilder, private api: ApiService) {

  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email: [''],
      firstName: [''],
      lastName: [''],

    })
    this.getAllStudents();
  }

  clickAddStudent() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postStudentDetails(){
    this.studentModelObj.email = this.formValue.value.email;
    this.studentModelObj.firstName = this.formValue.value.firstName;
    this.studentModelObj.lastName = this.formValue.value.lastName;
    this.api.postStudent(this.studentModelObj).subscribe(res =>{
      console.log(res);
      alert("Student Details Added Successfully");
      this.formValue.reset();

  },
  err =>{
    alert("something went wrong");
})
}
getAllStudents(){
  this.api.getStudent().subscribe(res =>{
    // console.log(res);
    this.studentAll = res;
  })

}

deleteStudents(data: any){
  this.api.deleteStudent(data.id).subscribe(res =>{
    console.log(res);
    alert("Student Details Deleted Successfully");
    this.getAllStudents();

  })
 }
 onView(data:any){
  this.showAdd = false;
  this.showUpdate = false;
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['firstName'].setValue(data.firstName);
  this.formValue.controls['lastName'].setValue(data.lastName);
 }

 onEdit(data: any){
   this.showAdd = false;
   this.showUpdate = true;
   this.studentModelObj.id = data.id;
   this.formValue.controls['email'].setValue(data.email);
   this.formValue.controls['firstName'].setValue(data.firstName);
   this.formValue.controls['lastName'].setValue(data.lastName);
 }

 updateStudentDetails(){
   this.studentModelObj.email = this.formValue.value.email;
   this.studentModelObj.firstName = this.formValue.value.firstName;
   this.studentModelObj.lastName = this.formValue.value.lastName;
   this.api.updateStudent(this.studentModelObj, this.studentModelObj.id).subscribe(res => {
     alert("Record updated successfull !!");
     this.formValue.reset();
     this.getAllStudents();
   })
 }

}
