import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AboutUSComponent } from './Components/Pages/about-us/about-us.component';
import { ContactUsComponent } from './Components/Pages/contact-us/contact-us.component';
import { BackendDevelopmentServicesComponent } from './Components/Services/backend-development-services/backend-development-services.component';
import { FrontendDevelopmentServicesComponent } from './Components/Services/frontend-development-services/frontend-development-services.component';
import { CloudServicesComponent } from './Components/Services/cloud-services/cloud-services.component';
import { DatabaseServicesComponent } from './Components/Services/database-services/database-services.component';
import { CollaborationServicesComponent } from './Components/Services/collaboration-services/collaboration-services.component';
import { TeamComponent } from './Components/Pages/team/team.component';
import { TermsConditionsComponent } from './Components/Pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './Components/Pages/privacy-policy/privacy-policy.component';
import { BlogsComponent } from './Components/Pages/blogs/blogs/blogs.component';
import { BlogListComponent } from './Components/Pages/blogs/blogs/list/list.component';
import { BlogDocumentApprovalSpfxComponentComponent } from './Components/Pages/blogs/blogs/document-approval-spfx-component/document-approval-spfx-component.component';
import { TascusRestApiComponent } from './Components/Pages/blogs/blogs/tascus-rest-api/tascus-rest-api.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUSComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'services',
    children: [
      {
        path: 'backend-development-services',
        component: BackendDevelopmentServicesComponent,
      },
      {
        path: 'frontend-development-services',
        component: FrontendDevelopmentServicesComponent,
      },
      {
        path: 'cloud-services',
        component: CloudServicesComponent,
      },
      {
        path: 'database-services',
        component: DatabaseServicesComponent,
      },
      {
        path: 'collaboration-services',
        component: CollaborationServicesComponent,
      },
    ],
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    children: [
      { path: '', component: BlogListComponent },
      {
        path: 'document-approval-spfx-component',
        component: BlogDocumentApprovalSpfxComponentComponent,
      },
      {
        path:'tascus-api-project',
        component:TascusRestApiComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
