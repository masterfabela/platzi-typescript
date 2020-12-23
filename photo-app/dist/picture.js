"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends item_1.Item {
    constructor(id, title, date, orientation) {
        super(id, title);
        this.date = date;
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
    toString() {
        return `[id: ${this.id},
             title: ${this.title},
             orientation: ${this.orientation}]`;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
