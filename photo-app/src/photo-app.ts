export enum PhotoOrientation {
  Landscape = 0, // 0
  Portrair = 1, // 1
  Square = 2, // 2
  Panorama = 3 // 3
}

export abstract class Item {
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

export class Picture extends Item {
	public static photoOrientation = PhotoOrientation;
	private _orientation: PhotoOrientation;

	public constructor(
		id: number,
    title: string,
    private date:string,
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

export class Album extends Item {
	private _pictures: Picture[] = [];

	public constructor(id: number, title: string) {
		super(id, title);
	}

	public addPicture(picture: Picture) {
		this._pictures.push(picture);
	}
}

export class User {
	private album: Album[];

	constructor(private id: number, private username: string, private firstName: string, private isPro: boolean) {
		this.album = [];
	}

	addAlbum(album: Album) {
		this.album.push(album);
	}
}