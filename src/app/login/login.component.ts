import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {TableData} from './model/table-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  title = 'login works!';
  list = [1, 2, 3];
  settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  }
};
// data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz"
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv"
//   },
//   {
//     id: 11,
//     name: 'Nicholas DuBuque',
//     username: "Nicholas.Stanton",
//     email: "Rey.Padberg@rosamond.biz"
//   }
// ];
tabledata: TableData[];
constructor(
        private LoginService: LoginService
        ) { this.data = []; }
loadtabledata() {
        // Get all comments
         this.LoginService.getData()
                           .subscribe(
                               response => {
                                 this.tabledata = response['data'];
                                 // console.log(response.data);
                               } , // Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
 ngOnInit() {
            // Load comments
            this.loadtabledata();
    }
}
