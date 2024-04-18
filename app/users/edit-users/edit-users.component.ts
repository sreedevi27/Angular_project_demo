import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss'],
})
export class EditUsersComponent implements OnInit {
  userId: string = '';
  userEditData: any;
  dataloaded:boolean=false;
  editUserForm: FormGroup = new FormGroup({});
  
  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar,private router: Router
  ) {}
  editUserId() {
    if(this.userId!==''){
    this.service.updateUsers(this.userId,this.editUserForm.value).subscribe(
      (data) => {
        this._snackBar.open('user edited');
      },
      (err) => {
        console.log('error');
      }
    )
    }
  }
  ngOnInit(): void {
    //getting the data
    this.dataloaded=false;
    this.activatedRoute.params.subscribe((data) => {
      this.userId = data['id'];
    });
    if (this.userId !== '') {
      this.service
        .viewUsers(this.userId)
        .toPromise()
        .then((data) => {
          this.userEditData = data;
          Object.assign(this.userEditData, data);
          console.log("user edit data:",this.userEditData)
          //creating the form
          this.editUserForm = this.formBuilder.group({
            username: new FormControl(this.userEditData['username']),
            email: new FormControl(this.userEditData['email']),
            phone: new FormControl(this.userEditData['phone']),
          });
          this.dataloaded=true;
        })
        .catch((err) => {
          console.log('error');
        });
    }
  }
  goToHomePage() {
    this.router.navigate(['/users']); // Replace '/' with your home page route if it's different
  }
  

}
