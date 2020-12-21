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
