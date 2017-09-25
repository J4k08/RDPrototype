import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class RoomService{
    constructor(private http:Http) {
        console.log('Room Service Initialized');
    }

    getRooms() {
        return this.http.get('/api/rooms')
            .map(response => response.json());
    }

    addRoom(newRoom) {
        console.log(newRoom);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/room', JSON.stringify(newRoom), {headers: headers})
            .map(response => response.json());
    }

    deleteRoom(id) {
        return this.http.delete('api/room/'+id)
            .map(response => response.json());
    }

    updateStatus(room) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/room/' + room._id, JSON.stringify(room), {headers: headers})
            .map(response => response.json());
    }
}