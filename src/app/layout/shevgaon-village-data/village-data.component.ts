import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-village-data',
  templateUrl: './village-data.component.html',
  styleUrls: ['./village-data.component.css']
})
export class VillageDataComponent implements OnInit {

   @Output() backToMain : EventEmitter<any> = new EventEmitter();

  isShowChem = false;
  isShowPhy = false;
  isAddData = false;
  hideandshow : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleViewPhy(){
    this.isShowPhy = !this.isShowPhy;
    this.hideandshow = !this.hideandshow;
  }
  AddVillageData(){
    this.isAddData = !this.isAddData;
    this.hideandshow = !this.hideandshow;
  }

}




