import { Component,OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'

// TODO: Remove Component
@Component({
  selector: 'app-document-approval-spfx-component',
  templateUrl: './document-approval-spfx-component.component.html',
  styleUrls: ['./document-approval-spfx-component.component.scss']
})
export class BlogDocumentApprovalSpfxComponentComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}
  
  Questions = [
    {
      question: "What does the Document Approval Field Customizer do?",
      answer: "The Document Approval Field Customizer integrates an approval workflow into SharePoint document libraries. It leverages Power Automate to send approval emails. The functionality can be tuned using a configuration list.",
    },
    {
      question: "Can I customize the email distribution list?",
      answer: "Yes, the email distribution list can be specified in the configuration list provided with the solution.",
    },
    {
      question: "Is this compatible with all SharePoint versions?",
      answer: "This field customizer is designed for SharePoint Online and may not work with older versions of SharePoint. Ensure you are using the SharePoint Framework version specified in the project details.",
    },
    {
      question: "How do I troubleshoot issues with the field customizer?",
      answer: "Begin by checking the configuration list and ensuring all fields are correctly set. If issues persist, refer to the project's documentation or raise an issue on the GitHub repo.",
    },
    {
      question: "Are there any costs associated with using Power Automate for sending emails?",
      answer: "Power Automate may have associated costs depending on the volume and frequency of emails and the licensing model you're under. Refer to Microsoft's official documentation for Power Automate's pricing details.",
    },
    {
      question: "I found a bug. Where do I report it?",
      answer: "Please raise an issue on the GitHub repository with details about the bug. Make sure to include steps to reproduce it, the expected outcome, and any relevant screenshots or error messages.",
    },
  ]
  htmlForServerConfiguration = `{
    "serveConfigurations": {
        "default": {
            "pageUrl": "https://[your-tenant-name]/sites/SharePointDevelopers/DocumentLibrary/Forms/AllItems.aspx",
            "fieldCustomizers": {
                "ApprovalStatusDev": {
                    //ApprovalStatusDev is the column on which the customizer field will be rendered/applied when served
                    // Column "ApprovalStatusDev" could be any name that exists in the DocumentLibrary

                    "id": "df0e4e1c-b9a1-447f-8ba2-f18db13c02b0",
                    "properties": {
                        "sampleText": "Value"
                    }
                }
            }
        }
    }
}`
ngOnInit() {
  this.titleService.setTitle('Document Approval Workflows with Field Customization');
  this.meta.addTag({ name: 'description', content: "Streamlining Document Approval Workflows in SharePoint with Field Customization" });
}
// Getting Blogs Data

}
