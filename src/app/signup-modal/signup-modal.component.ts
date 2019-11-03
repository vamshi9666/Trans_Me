import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-signup-modal",
  templateUrl: "./signup-modal.component.html",
  styleUrls: ["./signup-modal.component.css"]
})
export class SignupModalComponent implements OnInit {
  name = new FormControl("");
  collegeId = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  location = new FormControl("");

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MatDialogRef<any>
  ) {}

  ngOnInit() {}
  signup() {
    this.auth
      .signUp(
        this.email.value,
        this.password.value,
        this.name.value,
        this.collegeId.value
      )
      .subscribe(
        data => {
          console.log(" data after signup s ", data);
          localStorage.setItem("AUTH_TOKEN", data.token);
          this.auth.setUserId(data.user._id);
          localStorage.setItem("USER_ID", data.user._id);
          alert(` logged in as ${data.user.email} `);
          this.router.navigate(["/list"]);
          this.dialog.close();
        },
        err => {
          console.log(" error after signup is ", err);
        }
      );
  }
}
