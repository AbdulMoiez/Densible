import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BackendDevelopmentServicesComponent } from './backend-development-services/backend-development-services.component';
import { FrontendDevelopmentServicesComponent } from './frontend-development-services/frontend-development-services.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { DatabaseServicesComponent } from './database-services/database-services.component';
import { CollaborationServicesComponent } from './collaboration-services/collaboration-services.component';
import { TeamComponent } from './team/team.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { BlogListComponent } from './blogs/blogs/list/list.component';
import { BlogDocumentApprovalSpfxComponentComponent } from './blogs/blogs/document-approval-spfx-component/document-approval-spfx-component.component';
import { TascusRestApiComponent } from './blogs/blogs/tascus-rest-api/tascus-rest-api.component';
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
