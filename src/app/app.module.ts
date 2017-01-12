import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NewComponentComponent} from "./new-component/new-component.component";
import {MaterializeDirective} from "angular2-materialize";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule, Routes} from "@angular/router";
import {DiaryComponent} from "./diary/diary.component";
import {MyFoodComponent} from "./my-food/my-food.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";

const appRoutes:Routes = [
  {path: '', component: DiaryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'diary', component: DiaryComponent},
  {path: 'my-food', component: MyFoodComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    MaterializeDirective,
    NavigationComponent,
    DiaryComponent,
    MyFoodComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
