import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-sign-up-sign-in',
  templateUrl: './user-sign-up-sign-in.component.html',
  styleUrls: ['./user-sign-up-sign-in.component.css']
})
export class UserSignUpSignInComponent implements OnInit {

  @ViewChild('container', { read: ElementRef, static: false }) container!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

}
