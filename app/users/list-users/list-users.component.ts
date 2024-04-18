import { Component ,OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
interface User {
  
  username: string;
  email: number;
  phone:any;
  // Add other properties as needed
}
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = []; 
list: any;
displayedColumns: string[] = [ 'id','username', 'email', 'phone','actions'];
constructor(private service:UserService){

}
ngOnInit(): void {
//  this.service.listUsers().subscribe(data => this.listUsers=data);
this.service.listUsers().pipe(
  map((data: any) => data as User[])
).subscribe((filteredData: User[]) => {
  this.listUsers = filteredData; // Assign the filtered data to the listUsers variable
  // Do any other processing if needed
  // this.list=this.listUsers.filter((val)=>{
  //   return val.name ==="Leanne Graham";
  // })
  // console.log("user:",this.list)
});
}

}
