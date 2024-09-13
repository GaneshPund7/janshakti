import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-village-data',
  templateUrl: './add-village-data.component.html',
  styleUrls: ['./add-village-data.component.css']
})
export class AddVillageDataComponent implements OnInit {
  @Output() backToMain: EventEmitter<any> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }
  toggleView(){
    this.backToMain.emit();
  }

}
