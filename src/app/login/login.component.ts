import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email = new FormControl("");
  password = new FormControl("");
  error: String;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {}
  login() {
    console.log(this.auth);
    this.auth.login(this.email.value, this.password.value).subscribe(
      data => {
        console.log(" response from login is ", data);

        localStorage.setItem("AUTH_TOKEN", data.token);
        this.auth.setUser(data.user);

        this.router.navigate(["/list"]);
      },
      err => {
        if (err.status === 404) {
          this.error =
            " user not found this email / please register for new account";
        } else {
          this.error = "wrong password ";
        }
        console.log(" error in logging in ", err);
      }
    );
    {
    }
  }
  signUp() {
    this.auth.singUp(this.email.value, this.password.value).subscribe(
      data => {
        localStorage.setItem("AUTH_TOKEN", data.token);

        this.auth.setUser(data.user);
        this.router.navigate(["/list"]);

        console.log("signup response is ", data);
      },
      err => {
        this.error = "something went wrong in signing up . please try again";
        console.log(" error in signing up ", err);
      }
    );
  }
}
