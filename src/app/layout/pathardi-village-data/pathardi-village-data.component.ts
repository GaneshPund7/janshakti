import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pathardi-village-data',
  templateUrl: './pathardi-village-data.component.html',
  styleUrls: ['./pathardi-village-data.component.css']
})
export class PathardiVillageDataComponent implements OnInit {
  @Output() backToMain: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleView(){
    this.backToMain.emit();
  }

}
