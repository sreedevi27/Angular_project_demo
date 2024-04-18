import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})

export class ViewUsersComponent implements OnInit{
 
 
  userId:string='';
  userIdData :any;
  constructor(private service:UserService,private activatedRoute:ActivatedRoute){
  
  }
  ngOnInit(): void {
  
  this.activatedRoute.params.subscribe(data=>{
  this.userId=data['id']
  })
  this.service.viewUsers(this.userId).subscribe(data =>{
    this.userIdData=data;
  })
    

  }
}
