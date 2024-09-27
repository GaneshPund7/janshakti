import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RashtravadiModel } from 'src/app/modal/RashtravadiModal';
import { RashtravadiService } from 'src/app/Services/Rashtravadi/rashtravadi.service';

@Component({
  selector: 'app-pathardi-village-data',
  templateUrl: './pathardi-village-data.component.html',
  styleUrls: ['./pathardi-village-data.component.css']
})
export class PathardiVillageDataComponent implements OnInit {
  userName: any;
  @Output() backToMain: EventEmitter<any> = new EventEmitter();

  constructor(private RashtravadiData : RashtravadiService) { }

  jobItems: RashtravadiModel[] = []
  jobItem!: RashtravadiModel

  ngOnInit(): void {
    this.getData();
  }

  toggleView(){
    this.backToMain.emit();
  }

  getData(){
    this.RashtravadiData.getAllTasks().subscribe((tasks:any) => {
      this.userName = tasks;
      this.jobItems = tasks;
      console.log(this.userName)
    });
  }

}
