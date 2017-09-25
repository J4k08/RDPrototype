import { Component } from '@angular/core';
import { RoomService} from './services/room.service';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [RoomService]
})
export class AppComponent { }