export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

// SuperClase
abstract class Item {
	protected readonly _id: number;
	protected _title: string;

	constructor(id: number, title: string) {
		this._id = id;
		this._title = title;
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}
	set title(title: string) {
		this._title = title;
	}
}

// get y set

class Picture extends Item {
	public static photoOrientation = PhotoOrientation;
	private _orientation: PhotoOrientation;

	public constructor(
		id: number,
		title: string,
		orientation: PhotoOrientation
	) {
		super(id, title);
		this._orientation = orientation;
	}

	get orientation(): PhotoOrientation {
		return this._orientation;
	}
	set orientation(orientation: PhotoOrientation) {
		this._orientation = orientation;
	}

	public toString() {
		return `[id: ${this.id},
             title: ${this.title},
             orientation: ${this.orientation}]`;
	}
}

class Album extends Item {
	private _pictures: Picture[] = [];

	public constructor(id: number, title: string) {
		super(id, title);
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

// picture.id = 100;
picture.title = 'Another title';
album.title = 'Personal Activities';

console.log('album: ', album);

// No se puede crear la instancia al ser abstracta
// const item = new Item(1, 'Test title');
// console.log('item: ', item);

// Probar el miembro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Landscape);
