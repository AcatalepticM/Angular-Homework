import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {TableEntryFormComponent} from './table-entry-form/table-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableEntryFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
