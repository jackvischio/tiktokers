import { Component, Input } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: [],
})
export class SettingsComponent {
	@Input('theme') theme = 'primary';

	new_player: string = '';

	player_malus: number = 0;
	player_malus_points: number = 0;
	player_bonus: number = 0;
	player_bonus_points: number = 0;

	gameName = '';
	gamePoints = 0;
	hasLink = false;
	gameLink = '';
	gameSourceDomain = ['TikTok', 'Instagram'];
	gameSource = this.gameSourceDomain[0];

	get players() {
		return this.playersService.getAll().sort();
	}

	constructor(
		private playersService: PlayersService,
		private gamesService: GamesService
	) { }

	addPlayer() {
		if (this.new_player !== '') {
			this.playersService.addNew(this.new_player);
		}
		this.new_player = '';
	}

	delPlayer(id: any) {
		this.playersService.delete(id);
	}

	malus() {
		if (this.player_malus !== 0 && this.player_malus_points !== 0) {
			this.playersService.updatePoints(
				this.player_malus,
				-this.player_malus_points
			);
		}
		this.player_malus = 0;
		this.player_malus_points = 0;
	}

	bonus() {
		if (this.player_bonus !== 0 && this.player_bonus_points !== 0) {
			this.playersService.updatePoints(
				this.player_bonus,
				+this.player_bonus_points
			);
		}
		this.player_bonus = 0;
		this.player_bonus_points = 0;
	}

	gioco() {
		if (this.gameName)
			if (this.hasLink)
				this.gamesService.add(
					this.gameName,
					this.gamePoints,
					this.gameSource,
					this.gameLink
				);
			else this.gamesService.add(this.gameName, this.gamePoints);

		this.gameName = '';
		this.gamePoints = 0;
		this.hasLink = false;
		this.gameLink = '';
	}
}
