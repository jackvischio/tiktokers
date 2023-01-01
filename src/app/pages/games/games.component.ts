import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent {
	@Input('theme') theme = 'primary';
	@Output('themeEvent') themeEvent = new EventEmitter();

	modal = false;
	placeholder = new Game(-1, 'No Game selected', 'a', 'a');
	selected: any;

	get games() {
		return this.gamesService.getAll().map((e:any) => {
			e.bg = 'bg-' + (e.played ? 'disabled' : 'light');
			return e;
		});
	}

	constructor(private gamesService: GamesService, private playersService: PlayersService) {
		this.selected = this.placeholder;
	}

	open(id: number) {
		this.selected = this.games.filter((e:any) => e.id === id)[0];
		if(!this.selected.played)
			this.modal = true;
	}

	launch() {
		let ids = this.games.filter(e => !e.played).sort(() => (Math.random() > .5) ? 1 : -1).map(e => e.id);
		this.next([-1, ...ids]);
	}

	next(ids:any[]) {
		if(ids.length > 1) {
			console.log(ids);
			try {
				this.games.filter(e => e.id == ids[0])[0].border = "";
			} catch (e) {}
			this.games.filter(e => e.id == ids[1])[0].border = "border-2 border-"+this.theme;
			setTimeout(() => {
				let future = [...ids]
				future.shift();
				this.next(future);
			}, Math.random()*200 + 200);
		}
		else {
			setTimeout(() => {
				this.open(ids[0]);
			}, 800);
		}
	}

	player(id:number) {
		return this.playersService.getName(id);
	}

	closeGame() {
		this.modal = false;
		this.selected.border = "";
	}

	nextTheme() {
		this.themeEvent.emit();
	}
}
