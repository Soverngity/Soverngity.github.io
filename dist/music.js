const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '勇气',
        artist: '棉子',
        url: 'http://music.163.com/song/media/outer/url?id=1411358329.mp3',
        cover: '/images/music.png',
      },
      {
        name: 'Alone',
        artist: 'Alan Walker / Noonie Bao',
        url: 'http://music.163.com/song/media/outer/url?id=444269135.mp3',
        cover: '/images/music.png',
      },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/music.png',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/images/music.png',
      }
    ]
});