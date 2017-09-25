/**
 * Created by jakobhaglof on 2017-09-22.
 */
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Jakob:1234@ds143774.mlab.com:43774/rdprototype', ['rooms']);


// Get all rooms
router.get('/rooms', function(request, response, next){
    db.rooms.find(function(error, rooms){
        if(error){
            response.send(error);
        }
        response.json(rooms);
    });
});

// Get Single room
router.get('/room:id', function(request, response, next){
    db.rooms.findOne({_id: mongojs.ObjectID(request.params.id)}, function(err, room){
        if(Err){
            response.send(err);
        }
        response.json(room);
    });

});

//Save Room

router.post('/room',function(request, response, next) {
    var room = request.body;
    if(!room.name || !(room.isFree + '')) {
        response.status(400);
        response.json({
            'error': 'BAD DATA'
        })
    }else {
        db.rooms.save(room, function(err, room) {
            if(err) {
                response.send(err);
            }
            response.json(room);
        })
    }
});

// Delete Room
router.delete('/room/:id', function(request, response, next) {
    db.rooms.remove({_id: mongojs.ObjectID(request.params.id)}, function(err, room) {
        if(err) {
            response.send(err);
        }
        response.json(room);
    });
});

// Update Room
router.put('/room/:id', function(request, response, next) {
    var room = request.body;
    var updRoom = {};


    if(room.isfree) {
        updRoom.isFree = !room.isFree;
    }else {
        updRoom.isFree = room.isFree;
    }
    if(room.name){
        updRoom.name = room.name;
    }

    if(!updRoom){
        response.status(400);
        response.json({
            "error":"Bad data"
        });
    } else {

        console.log(updRoom);
        db.rooms.update({_id: mongojs.ObjectID(request.params.id)},updRoom,{}, function(err, room) {
            if(err) {
                response.send(err);
            }
            response.json(room);
        });
    }
});

module.exports = router;