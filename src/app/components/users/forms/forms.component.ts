import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../services";
import {IUser} from "../../../models";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  users: IUser[];

  @Output()
  event = new EventEmitter<number>();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value);
    this.event.emit(this.form.controls.userId.value);
  }

  getUserId(): void {
    this.event.emit(this.form.controls.userId.value);
  }
}
