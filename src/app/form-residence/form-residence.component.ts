import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.scss']
})
export class FormResidenceComponent implements OnInit{
  residenceForm = this.formbuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    image: ['', Validators.required], 
  });
  constructor (private formbuilder: FormBuilder){
    
    }
    ngOnInit(): void {
      
     
  }
  submitForm() {
    console.log(this.residenceForm.value);
  }
}
