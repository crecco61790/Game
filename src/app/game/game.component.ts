import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Game, User, Quote } from '../models/game';
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    Model = new Game();
    Me = new User();

    private _api = "http://localhost:8080/game";

  constructor(private http: Http, 
    private_Messages: MessagesService, 
    private _Game:  GameService, 
    private _Router: Router) {
    
    this.Me = _Game.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }
    
    http.get(this._api + "/quotes", { params : { playerId: this.Me.Name } }).subscribe(data=> this.Me.MyQuotes = data.json())
    setInterval(()=> this.refresh(), 1000)
  }

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  flipPicture(e: MouseEvent){
    this.http.post(this._api + "/picture",{})
        .subscribe();
  }

  submitQuote(e: MouseEvent, text: string){
    e.preventDefault();

    if(this.MyPlayedQuote()) return;

    this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
        .subscribe(data=> {
            if(data.json().success){
                this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 );
            }
        });
  }

  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1;
  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
}