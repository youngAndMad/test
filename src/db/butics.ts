import {ProductCategory} from "./ProductCategory";

let products:Product[] = [
    {id:1 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:2 ,name:'football ball' , price:800 , productCategories:[ProductCategory.SPORT , ProductCategory.HOBBY]},
    {id:3 ,name:'glasses' , price:3250 , productCategories:[ProductCategory.HEALTH]},
    {id:4 ,name:'flowers' , price:450 , productCategories:[ProductCategory.HOME_THINGS]},
    {id:5 ,name:'meet' , price:900 , productCategories:[ProductCategory.DELICIOUS]},
    {id:6 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:7 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:8 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:9 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:10 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:11 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:12 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:13 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
    {id:14 ,name:'meet' , price:324 , productCategories:[ProductCategory.DELICIOUS]},
];
export let Shops: Shop[] = [
    {id:1,name : "Alga" , location:{ floor:1 , index:1} ,products:[]},
    {id:2,name : "Dem" , location:{ floor:1 , index:2} ,products:[]},
    {id:3,name : "Per" , location:{ floor:1 , index:3} ,products:[]},
];

class Shop {
    id:number;
    name:string;
    location : {
        floor:number;
        index : number;
    };
    products:Product[];
    constructor(id: number, name: string, location: { floor: number; index: number }, products: Product[]) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.products = products;
    }
}

class Product{
    id:number;
    name:string;
    price:number;
    productCategories:ProductCategory[];

    constructor(id: number, name: string, price: number, productCategories: ProductCategory[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.productCategories = productCategories;
    }
}