///<reference path="../../node_modules/@angular/material/select/typings/select-module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';
import { UserLandingPageComponent } from './user-landing-page/user-landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FunnyComponent } from './funny/funny.component';
import {AngryComponent} from './angry/angry.component';
import { EmotionalComponent } from './emotional/emotional.component';
import { InspiringComponent } from './inspiring/inspiring.component';
import { UserService} from './services/UserService';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { StoryComponent } from './story/story.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StorycontentComponent } from './storycontent/storycontent.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatIconModule} from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatListModule, MatMenuModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchfilterPipe } from './Pipes/searchfilter.pipe';
import { NamefilterPipe } from './Pipes/namefilter.pipe';
import {MatBadgeModule} from '@angular/material/badge';
import {CompareValidatorDirective} from './signup/compare-validator.directive';




const rules = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'userland', component: UserLandingPageComponent, children: [
          { path: '1', component: AngryComponent, outlet: 'category'},
          { path: '2', component: FunnyComponent, outlet: 'category'},
          { path: '3', component: InspiringComponent, outlet: 'category'},
          { path: '4', component: EmotionalComponent, outlet: 'category'}]},
  {path: 'userprofile', component: UserProfileComponent},
    {path: 'storycontent', component: StorycontentComponent},
    /*{path: 'angry', component: AngryComponent, outlet: 'category'}*/
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    ContactUsComponent,
    AboutUsComponent,
    SignupComponent,
    UserLandingPageComponent,
    UserProfileComponent,
    FunnyComponent,
    AngryComponent,
    EmotionalComponent,
    InspiringComponent,
    StoryComponent,
    StorycontentComponent,
    NavbarComponent,
    SearchfilterPipe,
      NamefilterPipe,
      CompareValidatorDirective,

  ],
    entryComponents: [
        StoryComponent,
        AngryComponent,
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rules),
    BrowserAnimationsModule,
    MatRadioModule,
    MatInputModule,
      MatSelectModule,
      MatDialogModule,
      MatButtonModule,
      MatSnackBarModule,
      MatCardModule,
      MatSidenavModule,
      MatGridListModule,
      EditorModule,
      CKEditorModule,
      MDBBootstrapModule.forRoot(),
      MatIconModule,
      LayoutModule,
      MatToolbarModule,
      MatListModule,
      MatMenuModule,
      MatBadgeModule,

  ], schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
