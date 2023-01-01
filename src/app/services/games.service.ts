import { Injectable } from '@angular/core';
import * as data from '../data/games.json';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
	private model: Game[];

	constructor() {
		if (localStorage.getItem('games') == null) {
		localStorage.setItem('games', JSON.stringify(data.default));
		}
		this.model = this.load();
	}

	private load() {
		let arr = JSON.parse(localStorage.getItem('games') || '[]');
		return arr.map(
		(elem: any) =>
			new Game(
			elem.id,
			elem.title,
			elem.source,
			elem.link,
			elem.played,
			elem.winner,
			elem.points,
			(elem.played ? 'disabled' : 'light'),
			""
			)
		);
	}

	private save() {
		localStorage.setItem('games', JSON.stringify(this.model));
	}

	getAll(): any[] {
		return this.model;
	}

	setWinner(game: number, player: number) {
		try {
			let ga = this.model.filter((e) => e.id == game)[0];
			ga.played = true;
			ga.winner = player;
			console.log(this.model);
			this.save();
		} catch (e) {
			console.log(e);
		}
	}

	add(name: string, points: number, source: string = "", link: string = "") {
		let copy = [...this.model];
		let new_id =
			copy.sort((a: Game, b: Game) => (a.id < b.id ? 1 : -1))[0].id + 1;
		let newGame = new Game(new_id, name, source, link, false, -1, points, "", "");
		this.model.push(newGame);
		this.save();
	}
}
