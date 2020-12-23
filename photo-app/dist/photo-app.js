"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Picture = exports.PhotoOrientation = void 0;
var item_1 = require("./item");
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrair"] = 1] = "Portrair";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; // 3
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, date, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this.date = date;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: false,
        configurable: true
    });
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n             title: " + this.title + ",\n             orientation: " + this.orientation + "]";
    };
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(item_1.Item));
exports.Picture = Picture;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this._pictures = [];
        return _this;
    }
    Album.prototype.addPicture = function (picture) {
        this._pictures.push(picture);
    };
    return Album;
}(item_1.Item));
exports.Album = Album;
