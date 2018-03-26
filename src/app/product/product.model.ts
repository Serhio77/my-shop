export class Product {
    constructor(
      public id: number,
      public Name: string,
      public Price: number,
      public Count: number,
      public Description: string,
    ) {
      this.id = id || null;
    }
  }
  