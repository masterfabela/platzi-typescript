export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

class Picture {
	// Propiedades
	id: number;
	title: string;
	orientation: PhotoOrientation;

	constructor(id: number, title: string, orientation: PhotoOrientation) {
		this.id = id;
		this.title = title;
		this.orientation = orientation;
	}

	// Comportamiento
	toString() {
		return `[id: ${this.id},
             title: ${this.title},
             orientation: ${this.orientation}]`;
	}
}

class Album {
	id: number;
	title: string;
	pictures: Picture[] = [];

	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
	}

	addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal Pictures');
album.addPicture(new Picture(2, 'Platzi session', PhotoOrientation.Square));

console.log('album: ', album);
