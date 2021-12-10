import { Routes, RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "Andrea@gmail.com";
  password: string = "Ciao";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  accedi(): void {
    if (this.email === "Andrea@gmail.com" && this.password == "Ciao")
      this.router.navigate(['home']);
    else {
      alert("errore");
    }
  };
}
