import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-coepian',
  templateUrl: './coepian.component.html',
  styleUrls: ['./coepian.component.css'],
})
export class CoepianComponent implements OnInit {
  o: boolean = false;
  occ: any;
  constructor() {}

  ngOnInit(): void {
    // let headers2 = new Headers();

    // headers2.append('Content-Type', 'application/json');
    // headers2.append('Accept', 'application/json');

    // headers2.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers2.append('Access-Control-Allow-Credentials', 'true');
    axios.get('https://smart-parking-system-server.vercel.app/')
    .then((resp)=>{
      console.log(resp.data)
    });

    // console.log(resp);
    if (this.o) {
      this.occ = 'occupied';
    } else {
      this.occ = 'unoccupied';
    }
  }
}
