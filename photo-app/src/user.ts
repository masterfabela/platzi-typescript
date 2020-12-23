import { Album } from './album';

export class User {
	private albums: Album[];

	constructor(
		private id: number,
		private username: string,
		private firstName: string,
		private isPro: boolean
	) {
		this.albums = [];
	}

	addAlbum(album: Album) {
		this.albums.push(album);
	}

	removeAlbum(album: Album) {
		let deletedAlbum;
		const albumIndex = this.albums.findIndex(
			(arrayAlbum) => arrayAlbum.id === album.id
		);
		if (albumIndex >= 0) {
			deletedAlbum = this.albums.splice(albumIndex, 1);
		}
		return deletedAlbum;
	}
}
