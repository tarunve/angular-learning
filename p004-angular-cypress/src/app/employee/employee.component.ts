import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
    serviceResponse: any;

  constructor(
      private readonly employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
      this.employeeService.retrieveEmplyees().subscribe((response) => {
          console.log(`response : ${JSON.stringify(response)}`)
          this.serviceResponse = response;
      })
  }

}
