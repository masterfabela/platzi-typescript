export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

interface Entity {
	id: number;
	title: string;
}

interface Album extends Entity {
	description: string;
}

interface Picture extends Entity {
	orientation: PhotoOrientation;
}

const album: Album = {
	id: 1,
	title: 'Meetups',
	description: 'Comminity events around the world',
};

const picture: Picture = {
	id: 1,
	title: 'Family',
	orientation: PhotoOrientation.Landscape,
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('Album: ', album);
console.log('Picture: ', picture);
console.log('Picture: ', newPicture);
