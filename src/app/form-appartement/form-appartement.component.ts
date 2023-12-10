import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appartement',
  templateUrl: './form-appartement.component.html',
  styleUrls: ['./form-appartement.component.scss']
})
export class FormAppartementComponent {
  apartForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.apartForm = this.formbuilder.group({
      appartementNumber: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      floorNumber: ["", [Validators.required, Validators.pattern(/^\d+$/)]],
      surface: ["", [Validators.required]],
      terrace: [false, [Validators.required]],
      surfaceTerrace: ["", { value: '', disabled: true }, [Validators.required]],
      category: ["", [Validators.required]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      residence: ["", [Validators.required]]
    });

    this.apartForm.get('terrace')!.valueChanges.subscribe((value: boolean) => {
      if (value) {
        this.apartForm.get('surfaceTerrace')!.enable();
      } else {
        this.apartForm.get('surfaceTerrace')!.disable();
      }
    });
    
  }
  submitForm(){
    
  }
}
