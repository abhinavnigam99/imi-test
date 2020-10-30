import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  children = ['Yes', 'No'];
  hasChild: any;
  detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.detailsForm = this.formBuilder.group({
      child: ['No', Validators.required],
      childrenCount: [0],
      childrenDetail: new FormArray([])
    });
  }

  onSubmit() {
    this.detailsForm.get('childrenCount').setValue('');
    console.log(this.detailsForm);
  }

  childValue() {
    this.hasChild = this.detailsForm.get('child').value;
    if (this.hasChild === 'Yes') {
      this.detailsForm.get('childrenCount').setValidators([Validators.required, Validators.min(1)]);
      this.detailsForm.get('childrenCount').updateValueAndValidity();
    } else {
      this.detailsForm.get('childrenCount').clearValidators();
      this.detailsForm.get('childrenCount').updateValueAndValidity();
    }
    console.log(this.hasChild);
  }

  childCountChange(e) {
    const numberOfChild = e.target.value || 0;
    if (this.formArrayValue.length < numberOfChild) {
      for (let i = this.formArrayValue.length; i < numberOfChild; i++) {
        this.formArrayValue.push(this.formBuilder.group({
          title: ['', [Validators.required, Validators.pattern('^[a-zA-Z.]*$'), Validators.minLength(2)]],
          firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(2)]],
          lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(2)]],
        }));
      }
    } else {
      for (let i = this.formArrayValue.length; i >= numberOfChild; i--) {
        this.formArrayValue.removeAt(i);
      }

    }
  }

  get formValue() { return this.detailsForm.controls; }
  get formArrayValue() { return this.formValue.childrenDetail as FormArray; }

}
