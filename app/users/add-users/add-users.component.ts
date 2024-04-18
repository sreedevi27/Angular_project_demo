import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
 })
export class AddUsersComponent implements OnInit{
  addUserForm: FormGroup= new FormGroup({});

constructor(private  formBuilder:FormBuilder,private userservice:UserService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.addUserForm=this.formBuilder.group({
      username:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email:new FormControl('',[Validators.required, Validators.email]),
      // 'phone':new FormControl(' ',[
      //   Validators.required,
      //   Validators.pattern('^[0-9+()-]*$') // Regular expression for phone number validation
      // ])
      // phone: ['', [Validators.required],
      //    Validators.pattern('^[0-9+()-]*$')]
      phone:new FormControl('',[Validators.required, Validators.maxLength(10)]),
    })}

    createUser(){
      if (this.addUserForm.valid) {
        // Handle form submission here
        //console.log(this.addUserForm.value);
      
console.log(this.addUserForm.value)
this.userservice.addUsers(this.addUserForm.value).subscribe(
  data=>{
    this._snackBar.open("user created")
  },err =>{
    console.log("error")
  })
}
}
}
