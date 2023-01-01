import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-insta-post',
  templateUrl: './insta-post.component.html',
  styleUrls: []
})
export class InstaPostComponent {
  @Input('link') link = "";
  showVideo = false;

  constructor( ) {
		this.loadScript('https://www.instagram.com/embed.js').then((status) => {
		if (status === 'loaded') {
			this.showVideo = true;
		}
		});
	}

	loadScript(url: any) {
		return new Promise((resolve, reject) => {
		if (document.getElementById('insta-script')) {
			resolve('loaded');
		}
		const script = document.createElement('script');
		script.async = false;
		script.src = url;
		script.setAttribute('id', 'insta-script');

		script.onload = () => {
			// script is loaded successfully, call resolve()
			resolve('loaded');
		};

		script.onerror = () => {
			// script is not loaded, call reject()
			reject('error');
		};

		document.head.appendChild(script);
		});
	}
}
