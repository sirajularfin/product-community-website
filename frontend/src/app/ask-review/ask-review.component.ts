import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
      selector: 'app-ask-review',
      templateUrl: './ask-review.component.html',
      styleUrls: ['./ask-review.component.css']
})
export class AskReviewComponent implements OnInit {

      alert: boolean = false;
      alertMsg: string = ``;

      navbarShade = `navbar-dark`;
      navbarColor = `bg-dark`;
      activeUser: string = this.activatedRoute.snapshot.params[`id`];

      constructor(private activatedRoute: ActivatedRoute, private service: AppService, private router: Router) { }
      ngOnInit(): void {
      }

      inputReader = new FormGroup({
            name: new FormControl(``),
            code: new FormControl(``),
            brand: new FormControl(``),
      })

      onSubmit(): void {
            if (this.inputReader.value.code == ``) {
                  this.alertMsg = `Required fields can't be left blank`;
                  this.alert = true;
                  return;
            }

            let url: string = `http://localhost:9090/request`;
            this.service.postRequest(url, this.inputReader.value).subscribe((response) => {
                  if (response != null) {
                        this.alertMsg = `The product already exist. Redirecting to it in 3 sec`;
                        this.alert = true;
                        setTimeout(() =>
                              this.router.navigateByUrl(`home/${this.activeUser}/search/${this.inputReader.value.name}/${response}`), 3000
                        );
                  }
            },
                  (error) => {
                        this.alertMsg = `Sorry! The product doesn't exit in the database.`;
                        this.alert = true;
                  }
            );
      }

      onClick() {
            this.alert = false;
      }
}
