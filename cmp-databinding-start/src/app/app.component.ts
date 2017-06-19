import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'TestServer', content:'Just a server'}];

  onSererAdded(serverCreated:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverCreated.serverName,
      content: serverCreated.serverContent
    });

    
  }

  onBlueprintAdded(blueprintCreated:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintCreated.serverName,
      content: blueprintCreated.serverContent
    });
  }

}
