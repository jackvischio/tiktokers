export class Game {
    id: number;
    title: string;
    source: string;
    link: string;
    points: number;
    played: boolean;
    winner: number;
    border: string;
    bg: string;
  
    constructor(id: number, title: string, source: string, link: string, played?: boolean, winner?:number, points?: number, border?: string, bg?: string) {
      this.id = id;
      this.title = title;
      this.source = source;
      this.link = link;
      this.points = points || 5;
      this.played = played || false;
      this.winner = winner || -1;
      this.border = border || "";
      this.bg = bg || ""
    }
}