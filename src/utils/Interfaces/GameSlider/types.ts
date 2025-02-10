export interface Game {
    title: string;
    userCount: number;
    rating: string;
    imageUrl: string;
  }
  
  export interface GameCardProps extends Game {
    className?: string;
  }
  
  export interface GameSliderProps {
    games: Game[];
    className?: string;
  }