import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [
    HomeServersComponent,
    InfoServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, SUB_ROUTING, FormsModule],
})
export class SubModule {}
