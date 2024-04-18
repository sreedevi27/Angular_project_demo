import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss'],
})
export class DeleteUsersComponent implements OnInit {
  userId: string = '';
  userIdData: any;
  constructor(
    private service: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log('userid:', data);
      this.userId = data['id'];
    });
    if (this.userId) {
      this.service.deleteUser(this.userId).subscribe(
        (data: any) => {
          this.userIdData = data;
          console.log('userIdData:', data);
          this._snackBar.open('user deleted');
          this.route.navigate(['users/list']);
          console.log('Data deleted successfully:', this.userIdData);
        },
        (err) => {
          console.log('error');
        }
      );
    }
  }
  // removeData() {
  //   this.userId.pop();
  //   this.table.renderRows();
  // }
}
