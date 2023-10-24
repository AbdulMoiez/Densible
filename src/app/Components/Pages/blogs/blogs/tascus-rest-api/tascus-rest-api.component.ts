import { Component,OnInit } from '@angular/core';
import { Meta, Title} from'@angular/platform-browser'

@Component({
  selector: 'app-tascus-rest-api',
  templateUrl: './tascus-rest-api.component.html',
  styleUrls: ['./tascus-rest-api.component.scss']
})
export class TascusRestApiComponent  implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  Questions = [
    {
      question: "Q1: What is Onion Architecture, and why is it used in this project?",
      answer: " Onion Architecture is an architectural pattern that promotes a clear separation of concerns and dependencies within a software application. It is used in this project to ensure a well-structured and maintainable codebase. The architecture encourages a layered approach, making it easier to manage and scale the application.",
    },
    {
      question: "Q2: What are the prerequisites for setting up the TASCUS REST API Project?",
      answer: "To set up the project, you need to have the .NET Core SDK installed on your machine and SQL Server configured for database operations. Detailed installation instructions are provided in the blog.",
    },
    {
      question: "Q3: Can I use a different database instead of SQL Server with the TASCUS REST API Project?",
      answer: "While the project is configured to work with SQL Server by default, you can adapt it to work with other databases supported by Entity Framework Core. You would need to modify the database connection string and ensure that the database provider is set up correctly.",
    },
    {
      question: "Q4: What are the main layers in the Onion Architecture of the TASCUS REST API Project?",
      answer: "Begin by checking the configuration list and ensuring all fields are correctly set. If issues persist, refer to the project's documentation or raise an issue on the GitHub repo.",
    },
    {
      question: "Q5: Can I deploy the TASCUS REST API Project to a production environment?",
      answer: "Absolutely! The project can be deployed to a production environment by configuring the necessary hosting, database, and security settings. You should follow best practices for deploying ASP.NET Core applications to ensure a secure and efficient production deployment.",
    },
    {
      question: "Q6: How can I test the API endpoints of the TASCUS REST API Project?",
      answer: "You can test the API endpoints of the TASCUS REST API Project using tools like Postman. The blog post provides guidance on using a Postman collection provided with the project to streamline your testing efforts. This allows you to interact with the API endpoints and see the responses.",
    },
  ]
  htmlForServerConfiguration = `{
    "ConnectionStrings": {
      "DefaultConnection": "Server=your_server;Database=your_database;User Id=your_username;Password=your_password;"
    }
}`

htmlForResponse1 = `[
  {
      "step_Name": "Work Instruction",
      "step_Measurement": "Pick Parts Tray",
      "step_Result": "Complete",
      "high_Limit": "",
      "low_Limit": "",
      "step_Status": "PASS",
      "unit": "",
      "step_Run": 1,
      "operation_Name": "Picking",
      "operation_ID": 1000,
      "date": "2023-05-11T06:40:48"
  }
]`
htmlForResponse2 = `{
  "step_Name": "Test Step Name",
  "step_Measurement": "Test Step Measurement",
  "step_Result": "PASS",
  "high_Limit": "Test High Limit",
  "low_Limit": "Test Low Limit",
  "step_Status": "EXECUTING",
  "unit": "Test Unit",
  "step_Run": 0,
  "operation_Name": "Test Operation Name",
  "operation_ID": 1000,
  "serial_Number": "0021116",
  "part_Number": "G090L",
  "date": "2023-08-04T13:32:27.472Z"
}`
htmlForResponse3 = `{
  "message": "Product Result Created Successfully."
}`
htmlForResponse4 = `[
  {
      "status": "EXECUTING",
      "result": "FAIL"
  }
]`
htmlForResponse5 = `{
  "model_Number": "G090L",
  "serial_Number": "0021116",
  "status": "EXECUTING",
  "result": "FAIL",
  "operation_ID": 1000
}`
htmlForResponse6 = `{
  "message": "Product Status updated successfully."
}`
htmlForSteps = `{{Tascus Base Url}}`

ngOnInit() {
  this.titleService.setTitle('Tascus Rest APi Project');
  this.meta.addTag({ name: 'description', content: "Building a Robust REST API with ASP.NET Core and Entity Framework Core using Onion Architecture" });
}
}
