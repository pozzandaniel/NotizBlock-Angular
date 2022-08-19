import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ExpansionPanelTopComponent } from './expansion-panel-top/expansion-panel-top.component';
import { ExpansionPanelBottomComponent } from './expansion-panel-bottom/expansion-panel-bottom.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExpansionPanelTopComponent,
    ExpansionPanelBottomComponent,
    ToolbarComponent,
    FormFieldComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
