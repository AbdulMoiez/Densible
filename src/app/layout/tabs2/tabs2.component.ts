import { Component} from '@angular/core';


@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.component.html',
  styleUrls: ['./tabs2.component.scss']
})
export class Tabs2Component  {
  activeTab = 'tab1'; // Set the initial active tab to 'tab1'

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    
    console.log(`Active Tab: ${this.activeTab}`);   }

}
