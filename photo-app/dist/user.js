"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.isPro = isPro;
        this.albums = [];
    }
    addAlbum(album) {
        this.albums.push(album);
    }
    removeAlbum(album) {
        let deletedAlbum;
        const albumIndex = this.albums.findIndex((arrayAlbum) => arrayAlbum.id === album.id);
        if (albumIndex >= 0) {
            deletedAlbum = this.albums.splice(albumIndex, 1);
        }
        return deletedAlbum;
    }
}
exports.User = User;
