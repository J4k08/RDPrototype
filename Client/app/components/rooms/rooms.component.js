"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var room_service_1 = require("../../services/room.service");
var RoomsComponent = (function () {
    function RoomsComponent(roomService) {
        var _this = this;
        this.roomService = roomService;
        this.roomService.getRooms()
            .subscribe(function (rooms) {
            _this.rooms = rooms;
            console.log(rooms);
        });
    }
    RoomsComponent.prototype.addRoom = function (event) {
        var _this = this;
        event.preventDefault();
        var newRoom = {
            name: this.name,
            isFree: false
        };
        this.roomService.addRoom(newRoom)
            .subscribe(function (room) {
            _this.rooms.push(room);
            _this.name = "";
            console.log(newRoom);
        });
    };
    RoomsComponent.prototype.deleteRoom = function (id) {
        var rooms = this.rooms;
        this.roomService.deleteRoom(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < rooms.length; i++) {
                    if (rooms[i]._id == id) {
                        rooms.splice(i, 1);
                    }
                }
            }
        });
    };
    RoomsComponent.prototype.updateStatus = function (room) {
        var _room = {
            _id: room._id,
            name: room.name,
            isFree: !room.isFree
        };
        console.log(_room.isFree);
        this.roomService.updateStatus(_room).subscribe(function (data) {
            room.isFree = !room.isFree;
        });
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rooms',
        templateUrl: 'rooms.component.html'
    }),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomsComponent);
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=rooms.component.js.map