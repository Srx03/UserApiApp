import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/interface/response.interface';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  response: Response;
  user: User;
  mode: 'edit' | 'locked' = 'locked';
  buttonText: 'Save Changes'| 'Edit'= 'Edit';

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user = (<User>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));
  }

 changeButtonOption( mode: 'edit' | 'locked'): void{
  this.mode = this.mode === 'locked' ? 'edit': 'locked';
  this.buttonText = this.buttonText === 'Edit'? 'Save Changes' : 'Edit';
  if(mode === 'edit'){
    console.log("successfully edited");
  }

  }

}
