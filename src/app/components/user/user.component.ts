import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
