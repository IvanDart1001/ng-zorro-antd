import { NgModule } from '@angular/core';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabSetComponent } from './nz-tabset.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk';
import { ObserveContentModule } from '@angular/cdk';

@NgModule({
  declarations: [ NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent ],
  exports     : [ NzTabComponent, NzTabSetComponent, NzTabsNavComponent, NzTabLabelDirective, NzTabsInkBarDirective, NzTabBodyComponent ],
  imports     : [ CommonModule, PortalModule, ObserveContentModule ]
})

export class NzTabsModule {
}
