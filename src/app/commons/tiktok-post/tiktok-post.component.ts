import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tiktok-post',
  templateUrl: './tiktok-post.component.html',
  styleUrls: []
})
export class TikTokPostComponent implements OnChanges {
  @Input('link') link = "";
  videoid = "";
  showVideo = false;

  constructor( ) {
		this.loadScript('https://www.tiktok.com/embed.js').then((status) => {
			if (status === 'loaded') {
				this.showVideo = true;
			}
		});
		
	}

	ngOnChanges(): void {
		this.videoid = this.link.substring(this.link.lastIndexOf('/'));
	}

	loadScript(url: any) {
		return new Promise((resolve, reject) => {
		if (document.getElementById('tiktok-script')) {
			resolve('loaded');
		}
		const script = document.createElement('script');
		script.async = true;
		script.src = url;
		script.setAttribute('id', 'tiktok-script');

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
