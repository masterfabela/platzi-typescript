import { User, Album, Picture, PhotoOrientation } from "./photo-app";

const user = new User(1,'masterfabel','Jose Ramon', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'Typescript Course', '2020-03', PhotoOrientation.Landscape);

user.addAlbum(album);
album.addPicture(picture);

console.log('USer',user);