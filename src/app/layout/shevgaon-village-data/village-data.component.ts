import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDataModel } from 'src/app/modal/ShowData';
import { AdhodiService } from 'src/app/Services/Adhodi/adhodi.service';

@Component({
  selector: 'app-village-data',
  templateUrl: './village-data.component.html',
  styleUrls: ['./village-data.component.css']
})
export class VillageDataComponent implements OnChanges{

   @Output() backToMain : EventEmitter<any> = new EventEmitter();
  //  @Input() selectedOption!: string;
  //  data: any;
  jobItems: ShowDataModel[] = []
  jobItem!: ShowDataModel
  
  isShowChem = false;
  isShowPhy = false;
  isAddData = false;
  selectedOption!: string;
  data: any;
  // selectedOption: string = 'adhodi';
  // data: any;
  hideandshow : boolean = true;

  constructor(private apiService: AdhodiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.selectedOption = this.route.snapshot.routeConfig?.path || 'ShevgaonVillageData'; // Get route path
    this.fetchData();
  }

  toggleViewPhy(){
    this.isShowPhy = !this.isShowPhy;
    this.hideandshow = !this.hideandshow;
  }
  AddVillageData(){
    this.isAddData = !this.isAddData;
    this.hideandshow = !this.hideandshow;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedOption'] && this.selectedOption) {
      this.fetchData();
    }
  }

  fetchData() {
    if (this.selectedOption === 'ShevgaonVillageData') {
      this.apiService.getAdhodiData().subscribe((data) => {
        this.data = data;
        this.jobItems = data;
      });
    } else if (this.selectedOption === 'OtherRouteForAkhatwade') {
      this.apiService.getAkhatwadeData().subscribe((data) => {
        this.data = data;
        this.jobItems = data;
      });
    }
  }
  }
  // fetchData() {
  //   if (this.selectedOption === 'adhodi') {
  //     this.apiService.getAdhodiData().subscribe(data => {
  //       this.data = data;
  //     });
  //   } else if (this.selectedOption === 'akhatwade') {
  //     this.apiService.getAkhatwadeData().subscribe(data => {
  //       this.data = data;
  //     });
  //   }
  






