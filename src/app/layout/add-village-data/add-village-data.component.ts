import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdhodiService } from 'src/app/Services/Adhodi/adhodi.service';
import { RashtravadiService } from 'src/app/Services/Rashtravadi/rashtravadi.service';

@Component({
  selector: 'app-add-village-data',
  templateUrl: './add-village-data.component.html',
  styleUrls: ['./add-village-data.component.css']
})
export class AddVillageDataComponent implements OnInit {
  @Output() backToMain: EventEmitter<any> = new EventEmitter();
  RashtravadiFormData!: FormGroup
  VillageHeadData!: FormGroup
  selectedOption!: string;

  constructor(private adhodiService : AdhodiService, private fb: FormBuilder,private route: ActivatedRoute) {
    this.VillageHeadData = this.fb.group({
      villageName: new FormControl('', Validators.required),
      taluka: new FormControl('', [ Validators.required]),
      villageTotalVotting: new FormControl(''),
      males: new FormControl('', [ Validators.required]),
      femails: new FormControl('', [ Validators.required]),
      maratha: new FormControl('', [ Validators.required]),
      muslim: new FormControl('', [ Validators.required]),
      dhangar: new FormControl('', [ Validators.required]),
      vanjari: new FormControl('', [ Validators.required]),
      mali: new FormControl('', [ Validators.required]),
      dalit: new FormControl('', [ Validators.required]),
      vadar: new FormControl('', [ Validators.required]),
      laman: new FormControl('', [ Validators.required]),
      kumbhar: new FormControl('', [ Validators.required]),
      navhi: new FormControl('', [ Validators.required]),
      
    })
   }
  ngOnInit(): void {
    this.selectedOption = this.route.snapshot.routeConfig?.path || 'ShevgaonVillageData'; // Get route path
    this.postFormData;
  }
  toggleView(){
    this.backToMain.emit();
  }

  onSubmit () {
    if (this.VillageHeadData.valid) {
      const formData = this.VillageHeadData.value
      this.postFormData(formData);
      alert('You have Successfully Added Data')
      this.toggleView();
    } else {
      alert('Please enter valid data')
    }
  }
  postFormData (data: any) {
    if (this.selectedOption === 'ShevgaonVillageData') {
    this.adhodiService.postAdhodiData(data).subscribe(
      response => {
        console.log('API response:', response)
      },
      error => {
        console.error('API error:', error)
      }
    )
  } else if (this.selectedOption === 'OtherRouteForAkhatwade') {
    this.adhodiService.postAkhadwadeData(data).subscribe(
      response => {
        console.log('API response:', response)
      },
      error => {
        console.error('API error:', error)
      }
    )
  }
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOption'] && this.selectedOption) {
      // this.fetchData();
      this.postFormData;
    }
  }

}
