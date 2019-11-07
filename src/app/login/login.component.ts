import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { AuthService } from "../auth.service";
import { MatDialog } from "@angular/material";
import { SignupModalComponent } from "../signup-modal/signup-modal.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  email = new FormControl("");
  password = new FormControl("");
  error: String;

  constructor(
    private router: Router,
    private auth: AuthService,
    private dailog: MatDialog
  ) {}

  ngOnInit() {}
  login() {
    console.log(this.auth);
    if (this.email.value.trim() === "" || this.password.value.trim() == "") {
      this.error = "enter email and password";
      return;
    }
    this.auth.login(this.email.value, this.password.value).subscribe(
      data => {
        console.log(" response from login is ", data);

        localStorage.setItem("AUTH_TOKEN", data.token);
        this.auth.setUser(data.user);
        // this.auth.setUserId(data.user.user._id);
        localStorage.setItem("USER_ID", data.user.user._id);

        this.router.navigate(["/list"]);
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
  signUp() {
    const modal = this.dailog.open(SignupModalComponent, {
      width: "250px",
      height: "400px"
      // maxWidth: "70vw"
    });
    modal.afterClosed().subscribe(result => {
      console.log(" result is ", result);
    });
    // this.auth.singUp(this.email.value, this.password.value).subscribe(
    //   data => {
    //     localStorage.setItem("AUTH_TOKEN", data.token);

    //     this.auth.setUser(data.user);
    //     this.router.navigate(["/list"]);

    //     console.log("signup response is ", data);
    //   },
    //   err => {
    //     this.error = "something went wrong in signing up . please try again";
    //     console.log(" error in signing up ", err);
    //   }
    // );
  }
  goToAdmin() {
    this.router.navigate(["_admin_login"]);
  }
}
