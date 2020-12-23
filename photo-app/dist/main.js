"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photo_app_1 = require("./photo-app");
var user = new photo_app_1.User(1, 'masterfabel', 'Jose Ramon', true);
var album = new photo_app_1.Album(10, 'Platzi Pictures');
var picture = new photo_app_1.Picture(1, 'Typescript Course', '2020-03', photo_app_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log('USer', user);
