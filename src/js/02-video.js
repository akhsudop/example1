import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const MY_KEY = 'videoplayer-current-time';
const seconds = 0;

player
  .setCurrentTime(JSON.parse(localStorage.getItem(MY_KEY)))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
const play = e => {
  localStorage.setItem(MY_KEY, JSON.stringify(e.seconds));
};
player.on('timeupdate', throttle(play, 1000));
