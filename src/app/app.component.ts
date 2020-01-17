import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;
  xdate=new Date().toISOString().slice(0,10)
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [Validators.required,Validators.pattern("[a-zA-Z]{6,30}")]],
          lastName: ['', [Validators.required,Validators.pattern("[a-zA-Z]{6,30}")]],
          number1:   ['',[Validators.required,Validators.pattern("[7-9][0-9]{9}")]],
          email: ['', [Validators.required, Validators.email]],
          date: ['', Validators.required]
                });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid || this.registerForm.pristine) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

    
}
