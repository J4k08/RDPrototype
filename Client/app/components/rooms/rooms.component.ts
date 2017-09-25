import { Component }  from '@angular/core';
import { RoomService} from '../../services/room.service'
import {Room}         from '../../../Room';

@Component({
    moduleId: module.id,
    selector: 'rooms',
    templateUrl: 'rooms.component.html'
})

export class RoomsComponent {

    rooms: Room[];
    name: string;

    constructor(private roomService: RoomService) {
        this.roomService.getRooms()
            .subscribe(rooms => {
                this.rooms = rooms;
                console.log(rooms)
            })
    }

    addRoom(event) {
        event.preventDefault();
        var newRoom = {
            name: this.name,
            isFree: false
        };

        this.roomService.addRoom(newRoom)
            .subscribe(room => {
                this.rooms.push(room);
                this.name = "";
                console.log(newRoom);
            });
    }

    deleteRoom(id) {
        var rooms = this.rooms;

        this.roomService.deleteRoom(id).subscribe(data => {
            if(data.n == 1) {
                for(var i = 0; i < rooms.length; i++) {

                    if(rooms[i]._id == id) {
                        rooms.splice(i, 1);
                    }
                }
            }
        })
    }

    updateStatus(room) {

        var _room = {
            _id:     room._id,
            name:    room.name,
            isFree: !room.isFree
        };
        console.log(_room.isFree);

        this.roomService.updateStatus(_room).subscribe(data => {
            room.isFree = !room.isFree;
        })
    }

}
