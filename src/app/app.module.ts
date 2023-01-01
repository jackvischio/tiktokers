import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { GamesComponent } from './pages/games/games.component';
import { PlayersService } from './services/players.service';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { CardComponent } from './commons/card.component';
import { GameComponent } from './pages/games/game/game.component';
import { GamesService } from './services/games.service';
import { InstaPostComponent } from './commons/insta-post/insta-post.component';
import { TikTokPostComponent } from './commons/tiktok-post/tiktok-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LeaderboardComponent,
    GamesComponent,
    SortPipe,
    CardComponent,
    GameComponent,
    InstaPostComponent,
    TikTokPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlayersService, GamesService, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
