import { Component, OnInit,Output ,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title:string;
  desc:string;
  name:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      name:this.name,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);

  }

}