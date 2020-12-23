export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

// get y set

class Picture {
	// Propiedades
	private _id: number;
	private _title: string;
	private _orientation: PhotoOrientation;

	public constructor(
		id: number,
		title: string,
		orientation: PhotoOrientation
	) {
		this._id = id;
		this._title = title;
		this._orientation = orientation;
	}

	get id() {
		return this._id;
	}

	set id(newId: number) {
		this._id = newId;
	}

	get title() {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}

	get orientation(): PhotoOrientation {
		return this._orientation;
	}
	set orientation(orientation: PhotoOrientation) {
		this._orientation = orientation;
	}

	// Comportamiento
	public toString() {
		return `[id: ${this.id},
             title: ${this.title},
             orientation: ${this.orientation}]`;
	}
}

class Album {
	private _id: number;
	private _title: string;
	private _pictures: Picture[] = [];

	public constructor(id: number, title: string) {
		this._id = id;
		this._title = title;
	}

	get id() {
		return this._id;
	}
	set id(newId: number) {
		this._id = newId;
	}
	get title() {
		return this._title;
	}
	set title(newTitle: string) {
		this._title = newTitle;
	}

	public addPicture(picture: Picture) {
		this._pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal Pictures');
const picture = new Picture(2, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album: ', album);

// Accediendo a los miembros publicos
console.log('pictureId: ', picture.id);

picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';

console.log('album: ', album);
