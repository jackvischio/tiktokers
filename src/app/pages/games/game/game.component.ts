import {
	Component,
	EventEmitter,
	Input,
	Output,
	OnDestroy,
	OnInit,
	Renderer2,
} from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: [],
})
export class GameComponent implements OnInit, OnDestroy {
	@Input('game') game: any = undefined;
	@Input('theme') theme = 'primary';

	@Output('close') closeEvent = new EventEmitter();
	@Output('themeEvent') themeEvent = new EventEmitter();

	showVideo = false;
	winnerModel = 0;

	get players() {
		return this.playersService.getAll().sort();
	}

	close() {
		this.closeEvent.emit();
	}

	winner() {
		this.playersService.updatePoints(this.winnerModel, this.game.points);
		this.gamesService.setWinner(this.game.id, this.winnerModel);
		this.themeEvent.emit();
		this.close();
	}

	constructor(
		private renderer: Renderer2,
		private playersService: PlayersService,
		private gamesService: GamesService
	) { }

	ngOnInit() {
		this.renderer.addClass(document.body, 'modal-open');
	}

	ngOnDestroy(): void {
		this.renderer.removeClass(document.body, 'modal-open');
	}
}
