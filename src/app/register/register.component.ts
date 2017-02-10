import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
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
    ,
    age: {
      title: 'age'
    }
  }
};
data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age:"23"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    age:"26"
  },
  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz",
    age:"34"
  }
];
}
