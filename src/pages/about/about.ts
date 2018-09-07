import { Component, Pipe } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval'


@Component({
  
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  _songs :object[];
  songDisplay: object[];
  choice: string;
  currentSong: object;
  isSongPlaying: boolean;
  songRange: number = 0;
  timerVar;
  timeVal;
  _duration: number = 10;
  timer: number;
  constructor(public navCtrl: NavController, private http: Http) {
  }

  ngOnInit(){
    this.http.get("../assets/song.json")
    .map((Response)=>Response.json())
    .subscribe(
      (data)=> this.songs = data['songs']
    );
    }

    set songs(songs: any){
      this._songs = songs;
      this.songDisplay = songs;
    }
    get songs(){
      return this._songs;
    }
    showSongs(event){
      if(this.choice != ''){
        this.songDisplay = this.songs.filter(song=>song['artist'].includes(this.choice));      
      }else{
        this.songDisplay = this.songs;
      }
    }

    playSong(choice){
      this.currentSong = choice;
      this.isSongPlaying = true;
      this.startTimer(this._duration);
    }

    TooglePlay(){
      this.isSongPlaying = !this.isSongPlaying;
      if(this.isSongPlaying){
        this.startTimer(this.timer);
      }else{
        this.timerVar.unsubscribe();
      }
    }

    changeRange(event){
      console.log(this.songRange);
    }

    startTimer(duration) {
      this.timerVar = Observable.interval(1000) // milliseconds
        .subscribe(x => {
          this.timer = duration - x;
          if (this.timer < 0) {
            this.timerVar.unsubscribe();
          } else {
            console.log(this.timer);
          }
        })
  }

}
