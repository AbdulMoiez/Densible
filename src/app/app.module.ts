import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FooterContactComponent } from './layout/footer-contact/footer-contact.component';
import { HomeSliderComponent } from './layout/home-slider/home-slider.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { BackendDevelopmentServicesComponent } from './backend-development-services/backend-development-services.component';
import { FrontendDevelopmentServicesComponent } from './frontend-development-services/frontend-development-services.component';
import { CollaborationServicesComponent } from './collaboration-services/collaboration-services.component';
import { DatabaseServicesComponent } from './database-services/database-services.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { HomeNavbarComponent } from './layout/home-navbar/home-navbar.component';
import { DefaultNavbarComponent } from './layout/default-navbar/default-navbar.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogListComponent } from './blogs/blogs/list/list.component';
import { BlogDocumentApprovalSpfxComponentComponent } from './blogs/blogs/document-approval-spfx-component/document-approval-spfx-component.component';
import { TabsComponent } from './layout/tabs/tabs.component';
import { ProjectsComponent } from './layout/projects/projects/projects.component';
import { ReviewComponent } from './layout/review/review/review.component';
import { SolutionsSwiperComponent } from './layout/solutions-swiper/solutions-swiper.component';
import { Tabs2Component } from './layout/tabs2/tabs2.component';
import { SolutionSwiperDatabaseComponent } from './layout/solution-swiper-database/solution-swiper-database.component';
import { TascusRestApiComponent } from './blogs/blogs/tascus-rest-api/tascus-rest-api.component';

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
    BlogDocumentApprovalSpfxComponentComponent,
    TabsComponent,
    ProjectsComponent,
    ReviewComponent,
    SolutionsSwiperComponent,
    Tabs2Component,
    SolutionSwiperDatabaseComponent,
    TascusRestApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
