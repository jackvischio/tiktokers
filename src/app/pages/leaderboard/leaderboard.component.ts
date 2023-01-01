import { Component, Input } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styles: [],
})
export class LeaderboardComponent {
	
	@Input('theme') theme='primary';

  	get players() {
		let players = [...this.playersService.getAll()].sort((a,b) => (b.points - a.points));
		let maxp = Math.round((players[0].points)*1.1);
		maxp = (maxp > 0) ? maxp : 1;
		return players.map((elem:any) => {
			elem.perc = Math.round(elem.points * 100 / maxp);
			return elem;
		});
	}

	constructor(private playersService:PlayersService) {}
}
