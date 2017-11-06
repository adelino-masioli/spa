import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {environment} from "../../../environments/environment";
import {JwtTokenService} from "../../auth/services/jwt-token.service";


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  banks: Array<Object> = [];
  constructor(private http: Http,  private jwtToken: JwtTokenService) { }

  ngOnInit() {
      this.getBanks();
  }

  getBanks() {
      const requestOptions = new RequestOptions();
      requestOptions.headers = new Headers();
      requestOptions.headers.set('Authorization', `Bearer ${this.jwtToken.token}`);
      requestOptions.headers.set('Content-Type', 'application/json');

     return this.http
          .get(`${environment.api_url}/banks`, requestOptions)
          .toPromise()
          .then(response => this.banks = response.json());
  }
}
