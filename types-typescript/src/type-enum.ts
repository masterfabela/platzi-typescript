// Orientacion para fotografias
// const landscaoe = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0, // 0
    Portrair = 1, // 1
    Square = 2, // 2
    Panorama = 3 // 3
}

const lanscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', lanscape);
console.log('Landscape', PhotoOrientation[0])

enum PictureOrientation {
    Landscape = 10,
    Portrair, 
    Square, 
    Panorama 
}

console.log('portrait', PictureOrientation.Portrair);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    Espana = 'esp'
}

const country: Country = Country.Colombia;
console.log('country', country);