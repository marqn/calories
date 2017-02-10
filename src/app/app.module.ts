import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MaterializeDirective} from "angular2-materialize";
import {NavigationComponent} from "./navigation/navigation.component";
import {RouterModule, Routes} from "@angular/router";
import {DiaryComponent} from "./pages/diary/diary.component";
import {MyFoodComponent} from "./pages/statistic/statistic.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {DateChooserComponent} from "./pages/diary/date-chooser/date-chooser.component";
import {AddItemComponent} from "./pages/diary/add-item/add-item.component";
import {AngularFireModule, AuthProviders, AuthMethods} from "angularfire2";
import {DiaryService} from "./services/diary.service";
import {DropdownComponent} from "./lib/dropdown/dropdown.component";
import {ProfileService} from "./services/profile.service";

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCDcNX_oUuaE2LaSBV-FdQkmj1xS7dM-qQ",
  authDomain: "calories-37b6e.firebaseapp.com",
  databaseURL: "https://calories-37b6e.firebaseio.com",
  storageBucket: "calories-37b6e.appspot.com"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

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
    MaterializeDirective,
    NavigationComponent,
    DiaryComponent,
    MyFoodComponent,
    ProfileComponent,
    LoginComponent,
    DateChooserComponent,
    AddItemComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    DiaryService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
