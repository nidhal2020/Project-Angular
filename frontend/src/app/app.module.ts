import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './partials/search/search.component';
import { TagsComponent } from './partials/tags/tags.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './partials/title/title.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputContainerComponent } from './partials/input-container/input-container.component';
import { InputValidationComponent } from './partials/input-validation/input-validation.component';
import { TextInputComponent } from './partials/text-input/text-input.component';
import { DefaultButtonComponent } from './partials/default-button/default-button.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
