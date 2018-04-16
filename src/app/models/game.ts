
export  class Game {


    Players: User[] = [
        { Name: 'Steve C', MyQuotes: [] },
        { Name: 'Player 2', MyQuotes: [] },
        { Name: 'Player 3', MyQuotes: [] },
    ];

    DealerId: string = "Steve C";
    
    Picture: {
        url: string
    }
    PlayedQuotes: Quote[] = [
        { Text: "That's fake news", PlayerId: 'Player 2', Chosen: false}
    ];
}

export class User {
    Name: string;

    MyQuotes:  string[];
}

export class Quote {
    Text: string;
    PlayerId: string;
    Chosen: boolean = false;
}