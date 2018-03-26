export class Order {
    constructor(
      public Name: string,
      public Price: number,
      public Count: number      
    ) {
    }

    public GetTotal() : number
    {
        return this.Price * this.Count;
    }
  }
  