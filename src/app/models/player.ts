export class Player {
  id: number;
  name: string;
  points: number;

  constructor(id: number, name: string, points?:number) {
    this.id = id;
    this.name = name;
    this.points = points || 5;
  }
}
