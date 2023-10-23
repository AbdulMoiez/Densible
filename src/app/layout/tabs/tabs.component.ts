import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() tabsArray: string[] = [];
  @Output() onTabChange = new EventEmitter<number>();
  activatedTab: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  setTab(index:number) {
    this.activatedTab = index;
    this.onTabChange.emit(this.activatedTab);
  }


}