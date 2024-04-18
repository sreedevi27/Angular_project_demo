import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit{
agents: Observable<string> | undefined;
agentName:string | undefined;
constructor(){
  
}
  ngOnInit(): void {
    this.agents= new Observable(
      function(observer){
        try{
          observer.next('ram');
          observer.next('devi');
          observer.next('sree');

        }
        catch(e){
observer.error(e);
        }
      }
    );
this.agents.subscribe(data =>{
this.agentName=data;
})
  }

}
