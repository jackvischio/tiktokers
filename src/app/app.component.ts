import { Component, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TikTokers';

  // settings
  menu = [
    { id: 0, title: 'settings' },
    { id: 1, title: 'challenges' },
    { id: 2, title: 'leaderboard' },
  ];
  themes = [
    'primary',
    'secondary',
    'dark',
    'warning',
    'success',
    'danger',
    'info',
  ];

  // current
  tab = 1;
  theme = 'danger';
  bg = 'light';

  goto(id: any) {
    this.tab = id;
  }

  nextTheme() {
    let next = '';
    do {
      next = this.themes[(Math.random() * this.themes.length) | 0];
    } while (next == this.theme);
    this.theme = next;
    this.bg = ['warning'].includes(next) ? 'light' : 'dark';
  }

  reset() {
    if (confirm('Are you sure about that???')) {
      localStorage.clear();
      window.location.reload();
    }
  }
}
