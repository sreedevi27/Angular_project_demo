import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  listUsers() {
    return this.http.get(this.baseUrl);
  }
  viewUsers(id: string) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  addUsers(userobj: any) {
    return this.http.post(this.baseUrl + '/', userobj);
  }
  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateUsers(id: any, userobj: any) {
    return this.http.put(this.baseUrl + '/' + id, userobj);
  }
  // deleteUser(id: string) {
  // return this.http.delete(this.baseUrl + '/' + id).subscribe(
  //   (response: any) => {
  //     console.log('Data deleted successfully:', response);

  //     // Optionally, you can do something with the deleted data here if the API returns it.
  //     // For example, you can update your local data array to remove the deleted item.

  //     // Example of updating a local data array after deletion:
  //     // this.localDataArray = this.localDataArray.filter(item => item.id !== id);
  //   },
  //   (error: any) => {
  //     console.error('Error deleting data:', error);
  //   }
  // );
  // }
}
