import { Injectable } from '@angular/core';
import * as data from '../data/players.json';
import { Player } from '../models/player';

@Injectable({
	providedIn: 'root',
})
export class PlayersService {
	private model: Player[];

	constructor() {
		if (localStorage.getItem('players') == null) {
			localStorage.setItem('players', JSON.stringify(data.default));
		}
		this.model = this.load();
	}

	private load() {
		let arr = JSON.parse(localStorage.getItem('players') || '[]');
		return arr.map((elem: any) => new Player(elem.id, elem.name, elem.points));
	}

	private save() {
		localStorage.setItem('players', JSON.stringify(this.model));
	}

	getAll(): any[] {
		return this.model;
	}

	getName(id:number): string {
		try {
			return this.model.filter(e => e.id == id)[0].name;
		} catch(e) {
			console.log(e);
			return "";
		}
	}

	addNew(new_player: any) {
		let copy = [...this.model];
		let new_id =
			copy.sort((a: Player, b: Player) => (a.id < b.id ? 1 : -1))[0].id + 1;
		this.model.push(new Player(new_id, new_player));
		this.save();
	}

	delete(id: any) {
		this.model = this.model.filter((e) => e.id !== id);
		this.save();
	}

	updatePoints(id: number, points: number) {
		this.model = this.model.map((e) => {
			if (e.id == id) e.points += points;
			e.points = Math.max(e.points, 0);
			return e;
		});
		this.save();
	}
}
