import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginServiceService } from './Services/login-service.service'
import { AdhodiService } from './Services/Adhodi/adhodi.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Janshakti'
  myForm: FormGroup
  isSidebarOpen = false
  email: any
  userName: any
  password: any
  showPassword: boolean = false
  selectedOption: string = 'adhodi'; // default value


  ngOnInit (): void {}
  get fc () {
    return this.myForm.controls
  }
  constructor (private login: LoginServiceService, private fb: FormBuilder,private router: Router) {
    this.myForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.email]],
      password: new FormControl('', [ Validators.required, Validators.maxLength(12), Validators.minLength(5)
      ])
    })
  }

  onSubmit () {
    if (this.myForm.valid) {
      const formData = this.myForm.value
      this.postFormData(formData);
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

  getData(){
    this.login.getAllTasks().subscribe((tasks:any) => {
      this.userName = tasks;
      console.log(this.userName)
    });
  }
  toggleSidebar () {
    this.isSidebarOpen = !this.isSidebarOpen
  }
  toggleSidebarClose () {
    this.isSidebarOpen = false
  }
  selectOption(option: string) {
    this.selectedOption = option;
    this.navigateBasedOnOption();
  }
  onOptionChange() {
    this.navigateBasedOnOption();
    // if (this.selectedOption === 'adhodi') {
    //   this.router.navigate(['/ShevgaonVillageData']);
    // } else if (this.selectedOption === 'akhatwade') {
    //   // You can handle other options as well
    //   this.router.navigate(['/OtherRouteForAkhatwade']);
    // }
  }
  navigateBasedOnOption() {
    if (this.selectedOption === 'adhodi') {
      this.router.navigate(['/ShevgaonVillageData']);
    } else if (this.selectedOption === 'akhatwade') {
      // Handle navigation for other options
      this.router.navigate(['/OtherRouteForAkhatwade']);
    } else {
      // Handle other cases
      console.log('Selected option:', this.selectedOption);
    }
  }
    // Optionally handle any changes in the parent component when the selection changes
    // console.log('Selected option:', this.selectedOption);

}
