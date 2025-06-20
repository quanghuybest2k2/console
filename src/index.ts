import MediaPlayer from './adapter/MediaPlayer';
import VlcAdapter from './adapter/VlcAdapter';

const player: MediaPlayer = new VlcAdapter();
player.play('vlc', 'video.vlc');
player.play('mp4', 'video.mp4');
// output: Playing vlc file. Name: video.vlc
