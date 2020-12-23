export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

class Picture {
	// Propiedades
	private id: number;
	private title: string;
	private orientation: PhotoOrientation;

	public constructor(
		id: number,
		title: string,
		orientation: PhotoOrientation
	) {
		this.id = id;
		this.title = title;
		this.orientation = orientation;
	}

	// Comportamiento
	public toString() {
		return `[id: ${this.id},
             title: ${this.title},
             orientation: ${this.orientation}]`;
	}
}

class Album {
	private id: number;
	private title: string;
	private pictures: Picture[] = [];

	public constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
	}

	public addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal Pictures');
const picture = new Picture(2, 'Platzi session', PhotoOrientation.Square);
album.addPicture(picture);

console.log('album: ', album);

// Accediendo a los miembros publicos
// picture.id = 100;
// picture.title = 'Another title';
// album.title = 'Personal Activities';

console.log('album: ', album);
