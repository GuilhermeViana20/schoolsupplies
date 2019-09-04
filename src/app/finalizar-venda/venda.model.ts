class Venda {
    constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public address: string,
    public zip: number,
    public payment: string,
    public date: Date,
    public orderItems: Produtos[] = [],
    public total: number,
    public id?: string
    ) {}
  }
  
  class Produtos {
    constructor(
      public quantity: string,
      public id: string
    ) {}
  }
  
  export { Venda, Produtos }