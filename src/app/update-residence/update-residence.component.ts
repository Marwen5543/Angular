import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Residence } from '../core/models/residence';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.scss']
})
export class UpdateResidenceComponent implements OnInit {
  @Output() outputResidence = new EventEmitter();
  @Input() residence!: Residence;
  updateResidenceForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: [ '', Validators.required],
    image: ['', Validators.required],
    
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateResidenceForm.controls.name.setValue(this.residence.name);
    this.updateResidenceForm.controls.address.setValue(this.residence.address);
    this.updateResidenceForm.controls.image.setValue(this.residence.image);

  }

  submitForm() {
    if (this.residence) {
      // Handle form submission logic here
      const updatedResidence = {
        id: this.residence.id,
        ...this.updateResidenceForm.value
      };
      this.outputResidence.emit(updatedResidence);
      // You can emit this updated residence object to notify the parent component or service
    } else {
      console.error('Residence is null or undefined. Cannot update.');
    }
  }

  
}
