import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  title = 'sentonapp';

  constructor() { }

  ngOnInit(): void {
  }

}
