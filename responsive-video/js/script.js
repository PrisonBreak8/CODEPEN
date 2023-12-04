let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');

		let src = vid.querySelector('.list__video').src;
		let title = vid.querySelector('.list__title').innerHTML;

		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-video__title').innerHTML = title;
	};
});