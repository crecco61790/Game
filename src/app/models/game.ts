
export  class Game {

    MyQuotes:  string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        {Name: 'Player 1'},
        {Name: 'Player 2'},
        {Name: 'Player 3'}
    ];
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1240-700.jpg';
    PlayedQuotes: Quote[] = [
        { Text: "Great minds think alike, but ...", PlayerName:'Player 1', Chosen: false },
        { Text: "Axis of Evile", PlayerName:'Player 2', Chosen: false },
        { Text: "There are two extremes", PlayerName:'Player 3', Chosen: true }
    ];
}

export class User {
    Name: string;
}

export class Quote {
    Text: string;
    PlayerName: string;
    Chosen: boolean = false;
}