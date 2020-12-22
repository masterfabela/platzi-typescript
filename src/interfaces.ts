// Funcion para mostrar una fotografia

export {};

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrair = 1, // 1
	Square = 2, // 2
	Panorama = 3, // 3
}

interface Picture {
	title: string;
	date: string;
	orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
	console.log(
		`[title: ${picture.title}, 
      date: ${picture.date}, 
      orientation: ${picture.orientation}]`
	);
}

let myPic = {
	title: 'Test title',
	date: '2020-03',
	orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);
showPicture({
	title: 'Test Title',
	date: '2020-03',
	orientation: PhotoOrientation.Portrair,
	// extra: 'test',
});

interface PictureConfig {
	title?: string;
	date?: string;
	orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
	const picture = { title: 'default', date: '2020-03' };
	if (config.title) {
		picture.title = config.title;
	}
	if (config.date) {
		picture.date = config.date;
	}
	return picture;
}

let picture = generatePicture({});
console.log('picture: ', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture: ', picture);
picture = generatePicture({ title: 'Travel Pic', date: '2021-05' });
console.log('picture: ', picture);

// Interfaz: Usuario
interface User {
	readonly id: number;
	username: string;
	isPro: boolean;
}

let user: User;
user = { id: 10, username: 'joserra', isPro: true };
console.log('User: ', user);
user.username = 'Luis';
// user.id = 5; // error
console.log('User: ', user);
