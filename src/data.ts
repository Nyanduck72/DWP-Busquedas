import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Milk",
    price: 3.99,
    category: "dairy",
    isDiscounted: false,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 2.49,
    category: "fruits & vegetables",
    isDiscounted: true,
    originalPrice: 2.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Pasta",
    price: 1.99,
    category: "dry goods",
    isDiscounted: false,
    image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Orange Juice",
    price: 4.49,
    category: "beverages",
    isDiscounted: true,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    name: "Whole Wheat Bread",
    price: 2.99,
    category: "bakery",
    isDiscounted: false,
    image: "https://images.unsplash.com/photo-1547033965-5dd4885e88ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hvbGUlMjB3aGVhdCUyMGJyZWFkfGVufDB8fDB8fHww"
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: 1.49,
    category: "dairy",
    isDiscounted: true,
    originalPrice: 1.99,
    image: "https://images.unsplash.com/photo-1517422361159-d84fd5600d22?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Exotic Butters",
    price: 7.99,
    category: "spreads",
    isDiscounted: false,
    image: "https://pm1.aminoapps.com/6561/4c5b5e58b0fc889463fda9c0d0f6f3e316b1c285_00.jpg"
  },
  {
    id: 8,
    name: "Sparkling Water",
    price: 1.99,
    category: "beverages",
    isDiscounted: true,
    originalPrice: 2.49,
    image: "https://images.unsplash.com/photo-1502396278361-f6ef9aeac89c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhcmtsaW5nJTIwd2F0ZXIlMjBjYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 9,
    name: "Cheddar Cheese",
    price: 5.49,
    category: "dairy",
    isDiscounted: false,
    image: "https://images.unsplash.com/photo-1519411792752-25c2468cccb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWRkYXIlMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    name: "Almond Milk",
    price: 3.49,
    category: "dairy",
    isDiscounted: true,
    originalPrice: 3.99,
    image: "https://images.unsplash.com/photo-1601436423474-51738541c1b1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    name: "Broccoli",
    price: 1.99,
    category: "fruits & vegetables",
    isDiscounted: false,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    name: "Chicken Breast",
    price: 6.99,
    category: "meat",
    isDiscounted: true,
    originalPrice: 7.99,
    image: "https://pbs.twimg.com/profile_images/953081155074625536/v-G24ieI_400x400.jpg"
  },
  {
    id: 13,
    name: "Salmon Fillet",
    price: 9.99,
    category: "meat",
    isDiscounted: false,
    image: "https://shop.gerald.ph/content/images/thumbs/0055115_whole-salmon-fillet-skin-on.jpeg"
  },
  {
    id: 14,
    name: "Avocado",
    price: 1.49,
    category: "fruits & vegetables",
    isDiscounted: true,
    originalPrice: 1.99,
    image: "https://cdn.discordapp.com/attachments/1209684410438520896/1335817423588298813/toilrty.webp?ex=67a18c6c&is=67a03aec&hm=f8bbacfd27ed43ace38d79b9c6e8314568f22975ce7fe3d2be642fe89120c24f&"
  },
  {
    id: 15,
    name: "Granola",
    price: 4.99,
    category: "dry goods",
    isDiscounted: false,
    image: "https://m.media-amazon.com/images/I/71sYFaMFhpL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 16,
    name: "Apple Juice",
    price: 3.49,
    category: "beverages",
    isDiscounted: true,
    originalPrice: 3.99,
    image: "https://lagranbodega.vteximg.com.br/arquivos/ids/206767-600-600/29ABOI151_4.jpg?v=636794499864330000"
  },
  {
    id: 17,
    name: "Peanut Butter",
    price: 1.00,
    category: "spreads",
    isDiscounted: false,
    image: "https://steamuserimages-a.akamaihd.net/ugc/1936014258276493600/312D5FB189CDE1AE01F950C073620F25B4D5A01A/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
  },
  {
    id: 18,
    name: "Tomato Sauce",
    price: 1.99,
    category: "dry goods",
    isDiscounted: true,
    originalPrice: 2.49,
    image: "https://m.media-amazon.com/images/I/81pHdu9ZDmL.jpg"
  },
  {
    id: 19,
    name: "Cereal",
    price: 3.99,
    category: "dry goods",
    isDiscounted: false,
    image: "https://i5.walmartimages.com/seo/Great-Value-Fruit-Spin-Loops-Breakfast-Cereal-21-7-oz_49dba045-fcc4-4aeb-b0bb-bdc8f999e9c8.453754e21cca2e44a470246e1f7b1cf3.jpeg"
  },
  {
    id: 20,
    name: "Fuse Tea",
    price: 2.49,
    category: "beverages",
    isDiscounted: true,
    originalPrice: 2.99,
    image: "https://preview.redd.it/tgojo4e53zf01.jpg?auto=webp&s=cdebc490e36ba9f32d247a67ea9b76ec8ae326e1"
  }
];