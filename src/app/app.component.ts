import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titles = ['Mr.', 'Ms.'];
  children = ['Yes', 'No'];
  detailsForm: FormGroup;
  kidsForm: FormGroup;

  ngOnInit() {

    this.kidsForm = new FormGroup({
      child: new FormControl('No', Validators.required),
      childrenCount: new FormControl(null, [Validators.required, Validators.max(10), Validators.min(1)]),
    });

    this.detailsForm = new FormGroup({
      title: new FormControl('Mr.', Validators.required),
      firstName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$'), Validators.minLength(2)]),

    });
  }

  onSubmit() {
    console.log(this.detailsForm);
  }
  /*

    FN and LN: only alphanumeric and length > 2char, else show error below the input
  all fields are required
  errors should be specific
  error should be as-you-type
  no styling is needed */
}
