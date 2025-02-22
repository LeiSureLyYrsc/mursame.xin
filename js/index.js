(() => {
  const vIds = ['BV1qY41117Rt', 'BV1PT421277g', 'BV1eb421n7cZ', 'BV19P411776z', 'BV12f421o71r','BV1nb42177Xc'];

  /**
   * @param {number} max
   * @returns {number}
   */
  function randMax(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  /**
   * @param {any[]} list
   * @returns {string}
   */
  function choose(list) {
    const index = randMax(list.length - 1);
    return list[index];
  }

  window.addEventListener('load', () => {
    window.player = new APlayer({
      container: document.getElementById('aplayer'),
      // fixed: true,
      mini: true,
      loop: 'none',
      audio: [
        {
          name: 'Voice',
          artist: 'ムラサメ',
          url: 'assets/Murasame.ogg',
        },
        {
          name: '恋ひ恋ふ縁',
          artist: 'Famishin / KOTOKO',
          url: 'http://music.163.com/song/media/outer/url?id=473403182.mp3',
        },
      ],
    });

    /** @type {HTMLAnchorElement} */
    const tip = document.getElementById('tip');
    /** @type {HTMLImageElement} */
    const bg = document.getElementById('bg');

    tip.style.opacity = 1;
    tip.addEventListener('click', () => {
      tip.style.opacity = 0;
      bg.style.opacity = 1;
      bg.addEventListener('click', () => {
        window.location.href = `https://www.bilibili.com/video/${choose(vIds)}`;
      });

      setTimeout(() => {
        tip.style.display = 'none';
        window.player.play();
        document.title = '啊啊啊--------!！';
      }, 1000);
    });
  });
})();
