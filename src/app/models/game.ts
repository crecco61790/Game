
export  class Game {

    MyQuotes:  string[] = [
        "Great minds think alike, but ...",
        "Axis of Evil",
        "There are two extremes"
    ];
    Players: User[] = [
        { Name: 'Steve C' },
        { Name: 'Player 2' },
        { Name: 'Player 3' },
    ];

    Dealer: string = "Steve C";
    
    Picture: string = 'https://media3.s-nbcnews.com/j/msnbc/components/video/201803/tdy_news_welker_trump_180315_1920x1080.nbcnews-ux-1240-700.jpg';
    
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerName: 'Player 2', Chosen: false}
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