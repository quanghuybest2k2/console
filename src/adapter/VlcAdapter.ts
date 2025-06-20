import MediaPlayer from './MediaPlayer';
import VlcPlayer from './VlcPlayer';

class VlcAdapter implements MediaPlayer {
  private vlcPlayer = new VlcPlayer();

  play(audioType: string, fileName: string): void {
    if (audioType.toLowerCase() === 'vlc') {
      this.vlcPlayer.playVlc(fileName);
    }
  }
}
export default VlcAdapter;
