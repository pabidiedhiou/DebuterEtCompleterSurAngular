import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent implements OnInit {
  userEmail!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userEmail = 'pabikwozil@gmail.com';
  }
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }
}
