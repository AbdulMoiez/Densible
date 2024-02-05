import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { FooterContactComponent } from './Components/Shared/footer-contact/footer-contact.component';
import { HomeSliderComponent } from './Components/Shared/home-slider/home-slider.component';
import { AboutUSComponent } from './Components/Pages/about-us/about-us.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { TeamComponent } from './Components/Pages/team/team.component';
import { BackendDevelopmentServicesComponent } from './Components/Services/backend-development-services/backend-development-services.component';
import { FrontendDevelopmentServicesComponent } from './Components/Services/frontend-development-services/frontend-development-services.component';
import { CollaborationServicesComponent } from './Components/Services/collaboration-services/collaboration-services.component';
import { DatabaseServicesComponent } from './Components/Services/database-services/database-services.component';
import { CloudServicesComponent } from './Components/Services/cloud-services/cloud-services.component';
import { HomeNavbarComponent } from './Components/Shared/home-navbar/home-navbar.component';
import { DefaultNavbarComponent } from './Components/Shared/default-navbar/default-navbar.component';
import { TermsConditionsComponent } from './Components/Pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './Components/Pages/privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './Components/Pages/blogs/blogs/blogs.component';
import { BlogListComponent } from './Components/Pages/blogs/blogs/list/list.component';
import { TabsComponent } from './Components/Shared/tabs/tabs.component';
import { ProjectsComponent } from './Components/Shared/projects/projects/projects.component';
import { ReviewComponent } from './Components/Shared/review/review/review.component';
import { SolutionsSwiperComponent } from './Components/Shared/solutions-swiper/solutions-swiper.component';
import { Tabs2Component } from './Components/Shared/tabs2/tabs2.component';
import { SolutionSwiperDatabaseComponent } from './Components/Shared/solution-swiper-database/solution-swiper-database.component';
import { CareersComponent } from './Components/Pages/jobs/careers/careers.component';
import { JobListComponent } from './Components/Pages/jobs/careers/list/list.component';
import { BusinessDevelopmentExecutiveComponent } from './Components/Pages/jobs/careers/business-development-executive/business-development-executive.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';
import { BlogShowComponent } from './Components/Shared/blog-show/blog-show.component';
import { AdminPanelComponent } from './Components/Pages/admin-panel/admin-panel.component';
import { NewBlogComponent } from './Components/Pages/new-blog/new-blog.component';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    FooterContactComponent,
    HomeSliderComponent,
    AboutUSComponent,
    ContactUsComponent,
    TeamComponent,
    BackendDevelopmentServicesComponent,
    FrontendDevelopmentServicesComponent,
    CollaborationServicesComponent,
    DatabaseServicesComponent,
    CloudServicesComponent,
    HomeNavbarComponent,
    DefaultNavbarComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    BlogsComponent,
    BlogListComponent,
    TabsComponent,
    ProjectsComponent,
    ReviewComponent,
    SolutionsSwiperComponent,
    Tabs2Component,
    SolutionSwiperDatabaseComponent,
    CareersComponent,
    JobListComponent,
    BusinessDevelopmentExecutiveComponent,
    BlogShowComponent,
    AdminPanelComponent,
    NewBlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
