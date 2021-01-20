import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html'
})
export class DatasPage implements OnInit {

  @Input() titulo:string
  dataAtual: Date = new Date()
  completeDate = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  }

  changeData(newData){
    console.log('ionChange', newData.detail.value);
  }

}