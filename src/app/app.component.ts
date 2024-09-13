import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginServiceService } from './Services/login-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup
  isSidebarOpen = false
  email: any
  userName: any
  password: any
  showPassword: boolean = false
  ngOnInit (): void {}
  get fc () {
    return this.myForm.controls
  }
  constructor (private login: LoginServiceService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(5)
      ])
    })
  }
  title = 'Janshakti'

  onSubmit () {
    if (this.myForm.valid) {
      const formData = this.myForm.value
      // this.postFormData(formData);
      alert('You have Successfully Log In')
    } else {
      alert('Please enter valid data')
    }
  }
  postFormData (data: any) {
    this.login.createTask(data).subscribe(
      response => {
        console.log('API response:', response)
      },
      error => {
        console.error('API error:', error)
      }
    )
  }
  toggleSidebar () {
    this.isSidebarOpen = !this.isSidebarOpen
  }
  toggleSidebarClose () {
    this.isSidebarOpen = false
  }
}
