import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"]
})
export class AdminLoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  public email = new FormControl("");
  public password = new FormControl("");
  public error = "";
  ngOnInit() {}
  login() {
    this.auth.login(this.email.value, this.password.value).subscribe(
      data => {
        console.log(" response from login is ", data);

        localStorage.setItem("AUTH_TOKEN", data.token);
        this.auth.setUser(data.user);
        // this.auth.setUserId(data.user.user._id);
        localStorage.setItem("USER_ID", data.user.user._id);

        this.router.navigate(["/_admin"]);
        this.email.setValue("");
        this.password.setValue("");
      },
      err => {
        if (err.status === 404) {
          this.error =
            " user not found this email / please register for new account";
        } else {
          this.error = "wrong password ";
        }
        console.log(" error in logging in ", err);
        this.email.setValue("");
        this.password.setValue("");
      }
    );
  }
}
