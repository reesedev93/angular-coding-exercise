import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from 'src/services/employee.service';
import { employeeReducers } from 'src/store/reducers/employee.reducers';
import { EmployeeEffects } from 'src/store/effects/employee.effects';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeMoreInfoPipe } from './employee-card/employee-status-pipe/employee-more-info.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeMoreInfoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ appState: employeeReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 50 }),
    EffectsModule.forRoot([EmployeeEffects]),
    MatSelectModule,
    MatCardModule,
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
