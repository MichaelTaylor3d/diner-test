import type { MenuSlug } from "./menuMeta";

export type MenuItemData = {
  name: string;
  description?: string;
  price: string;
  veg?: boolean;
  vegan?: boolean;
  gf?: boolean;
  note?: string;
};

export type MenuSectionData = {
  label: string;
  note?: string;
  items: MenuItemData[];
};

export const menuContent: Record<MenuSlug, MenuSectionData[]> = {
  "all-day": [
    {
      label: "Starts",
      items: [
        { name: "Mac + Cheese", description: "Ask your server about add-ins", price: "8 / 15", veg: true },
        { name: "Fried Chicken Livers", description: "Honey mustard, onion jam, green onion", price: "10" },
        { name: "Deviled Eggs", description: "Whipped yolks, peanut salsa macha, chives", price: "9", veg: true, gf: true },
        { name: "Brussels", description: "Fried brussels sprouts, peanut salsa macha glaze", price: "6 / 12", vegan: true, gf: true },
        { name: "Lil' Caesar", description: "Little gem, caesar dressing, crouton crumble, cotija, black pepper", price: "8 / 15" },
        { name: "Cauli", description: "Fried cauliflower florets, arugula, pomegranate, pecan, herbs, za'atar dressing", price: "8 / 16", vegan: true, gf: true },
        { name: "Tomato Soup", price: "5 / 9", vegan: true, gf: true },
        { name: "French Fries", description: "Garlic aioli. Poutine +4, pulled pork + slaw +6", price: "5 / 9", veg: true, gf: true },
      ],
    },
    {
      label: "Breakfast",
      items: [
        { name: "Welcome Breakfast", description: "Two eggs, biscuit, jam, choice of home fries or salad. Breakfast proteins +6", price: "12", veg: true },
        { name: "Chicken Fried Steak", description: "Pork sausage gravy, two eggs, biscuit, jam, home fries", price: "22" },
        { name: "Biscuit + Gravy", description: "Pork sausage gravy. Add egg +2", price: "12" },
        { name: "Pancakes", description: "Three cakes, pure maple syrup + butter. Vanilla bean whipped cream or seasonal compote +2", price: "13", veg: true },
        { name: "Yogurt + Granola", description: "Greek yogurt, berries, honey, hemp hearts", price: "14", veg: true },
      ],
    },
    {
      label: "Chicken Biscuits",
      items: [
        { name: "Big Jim", description: "Buttermilk fried chicken, pork sausage gravy, bacon, cheddar, biscuit", price: "15" },
        { name: "Lil' Birdy", description: "Buttermilk fried chicken, cheddar, biscuit", price: "11" },
        { name: "Bumblebee", description: "Buttermilk fried chicken, bee mustard, honey, b+b pickles, biscuit", price: "14" },
      ],
    },
    {
      label: "Burgers",
      note: "Cooked to order",
      items: [
        { name: "Welcome Burger", description: "Six-ounce patty, cheddar, garlic aioli, ketchup, mustard, b+b pickles, onions, brioche", price: "15" },
        { name: "No Way Jose", description: "Six-ounce patty, smoked gouda, muenster, jalapeño relish, arugula, chipotle ranch, brioche", price: "17" },
        { name: "Patty Melt", description: "Six-ounce patty, house cheese, onion jam, secret sauce, rye", price: "16" },
        { name: "Veg Burg", description: "Black bean patty, arugula, tomato, red onion, chipotle mayo, potato bun", price: "14", vegan: true },
      ],
    },
    {
      label: "Sandos",
      items: [
        { name: "Sasha", description: "Smoked pork shoulder, slaw, alabama white sauce, brioche bun", price: "14" },
        { name: "Chicken Melt", description: "Bacon fat roasted chicken salad, cheddar, iceberg, tomato, garlic aioli, sourdough", price: "15" },
        { name: "Fried Green Tomato", description: "Corn relish, chipotle ranch, arugula, sourdough", price: "14", veg: true },
        { name: "Grilled Cheese", description: "House cheese, red pepper pesto, sourdough. Add tomato soup +4", price: "12", veg: true },
        { name: "Mushroom Po' Boy", description: "Tempura beech mushroom, slaw, pickle, remoulade, brioche baguette", price: "15", vegan: true },
      ],
    },
    {
      label: "Mains",
      items: [
        { name: "Steak + Frites", description: "Ten-ounce ribeye, au poivre, shoestring french fries, garlic aioli", price: "32", gf: true },
        { name: "Jambalaya", description: "Smoked pork belly, andouille sausage, chicken, okra, tomato, holy trinity, saffron rice", price: "21", gf: true },
        { name: "Three Sisters", description: "Tepary beans, seasonal squash, nopal salsa, sopes, arbol", price: "18", vegan: true, gf: true },
        { name: "Eggs in Purgatory", description: "Pork + tomato gravy, corn grits, smoked pork belly, poached egg, cotija cheese", price: "18", gf: true },
      ],
    },
    {
      label: "Sides",
      items: [
        { name: "Alabama slaw / side salad / home fries / grits / collard greens / tepary beans", price: "6" },
      ],
    },
  ],
  brunch: [
    {
      label: "Starts",
      items: [
        { name: "Fried Chicken Livers", description: "Honey mustard, onion jam, green onion", price: "10" },
        { name: "Brussels", description: "Fried brussels sprouts, peanut salsa macha glaze", price: "6 / 12", vegan: true, gf: true },
        { name: "Cauli", description: "Fried cauliflower florets, arugula, pomegranate, pecan, herbs, za'atar dressing", price: "8 / 16", vegan: true, gf: true },
        { name: "Mac + Cheese", price: "8 / 15", veg: true },
        { name: "Lil' Caesar", description: "Little gem, caesar dressing, crouton crumble, cotija, black pepper", price: "8 / 15" },
        { name: "Tomato Soup", price: "5 / 9", vegan: true, gf: true },
        { name: "French Fries", description: "Garlic aioli", price: "5 / 9", veg: true },
      ],
    },
    {
      label: "Mains",
      items: [
        { name: "Chicken Fried Steak", description: "Pork sausage gravy, two eggs, biscuit, jam, home fries", price: "22" },
        { name: "Eggs in Purgatory", description: "Pork + tomato gravy, grits, pork belly tasso, poached egg, cotija cheese", price: "18", gf: true },
        { name: "Chilaquiles", description: "Short rib, salsa rojo, two eggs, oaxaca cheese, pickled onion, crema", price: "23", gf: true },
        { name: "Sweet Potato Hash", description: "Tofu eggs, sweet potato, home fries, onions, bell peppers, seasonal veg, chipotle cashew crema, cilantro", price: "18", vegan: true, gf: true },
        { name: "Eggs Divorciados", description: "Two eggs, braised collard greens, tepary beans, home fries, salsa roja, salsa verde, queso fresco, cilantro, flour tortillas", price: "18", veg: true },
        { name: "Welcome Breakfast", description: "Two eggs, biscuit, jam, choice of home fries or salad. Breakfast proteins +6", price: "12", veg: true },
        { name: "Biscuit + Gravy", description: "Pork sausage gravy. Add egg +2", price: "12" },
        { name: "Pancakes", description: "Three cakes, pure maple syrup + butter", price: "13", veg: true },
        { name: "Yogurt + Granola", description: "Greek yogurt, berries, honey, hemp hearts", price: "13", veg: true },
      ],
    },
    {
      label: "Classics",
      items: [
        { name: "Lil' Birdy", description: "Buttermilk fried chicken, cheddar, biscuit", price: "11" },
        { name: "Big Jim", description: "Buttermilk fried chicken, pork sausage gravy, bacon, cheddar, biscuit", price: "15" },
        { name: "Bumblebee", description: "Buttermilk fried chicken, bee mustard, honey, b+b pickles, biscuit", price: "14" },
        { name: "Welcome Burger", description: "Six-ounce patty, cheddar, garlic aioli, ketchup, mustard, b+b pickles, onions, brioche", price: "15" },
        { name: "No Way Jose", description: "Six-ounce patty, smoked gouda, muenster, jalapeño relish, arugula, chipotle ranch, brioche", price: "17" },
        { name: "Fried Green Tomato", description: "Fried green tomatoes, corn relish, chipotle ranch, arugula, sourdough", price: "14", veg: true },
      ],
    },
    {
      label: "Sides",
      items: [
        { name: "Alabama slaw / side salad / home fries / grits / collard greens / tepary beans", price: "6" },
      ],
    },
    {
      label: "Brunch Beverages",
      items: [
        { name: "Mimosa", description: "Orange, grapefruit, or pineapple", price: "12 / 35" },
        { name: "Bloody Mary", description: "Vodka, lemon, cajun bloody mix", price: "14" },
        { name: "Bloody Beer", description: "Modelo Especial, lime, cajun bloody mix", price: "14" },
      ],
    },
  ],
  lunch: [
    {
      label: "Starts",
      items: [
        { name: "Mac + Cheese", price: "8 / 15", veg: true },
        { name: "Brussels", price: "6 / 11", gf: true },
        { name: "Lil' Caesar", price: "8 / 15" },
        { name: "Cauli", price: "8 / 16", vegan: true, gf: true },
        { name: "Soup", description: "Caldo de queso or caldo de tomate", price: "8", veg: true, gf: true },
        { name: "French Fries", description: "Garlic aioli", price: "5 / 9", veg: true },
      ],
    },
    {
      label: "Biscuits",
      items: [
        { name: "Big Jim", price: "15" },
        { name: "Lil' Birdy", price: "11" },
        { name: "Bumblebee", price: "14" },
        { name: "Sasha", description: "Smoked pork shoulder, alabama slaw", price: "12" },
      ],
    },
    {
      label: "Burgs",
      note: "Cooked to order",
      items: [
        { name: "Welcome Burger", description: "Six-ounce patty, cheddar, garlic aioli, ketchup, mustard, b+b pickles, onions, brioche", price: "14" },
        { name: "No Way Jose", description: "Six-ounce patty, smoked gouda, muenster, jalapeño relish, arugula, chipotle ranch, brioche", price: "16" },
        { name: "Patty Melt", description: "Six-ounce patty, house cheese, secret sauce, onion jam, rye", price: "16" },
        { name: "Veg Burg", description: "Black bean patty, arugula, tomato, red onion, chipotle mayo, potato bun", price: "14", vegan: true },
      ],
    },
    {
      label: "Sandos",
      items: [
        { name: "Fried Green Tomato", description: "Fried green tomatoes, corn relish, chipotle ranch, arugula, sourdough", price: "14", veg: true },
        { name: "Chicken Melt", description: "Bacon fat roasted chicken salad, cheddar, iceberg, tomato, sourdough", price: "14" },
        { name: "Grilled Cheese", description: "House cheese, guajillo pesto, sourdough", price: "12", veg: true },
        { name: "Mushroom Po' Boy", description: "Spicy tempura beech mushroom, alabama slaw, tomato, dill pickle, baguette", price: "14", vegan: true },
      ],
    },
    {
      label: "Breakfast",
      items: [
        { name: "Welcome Breakfast", description: "Two eggs, biscuit, choice of home fries or salad. Breakfast protein +5", price: "12", veg: true },
        { name: "Biscuit + Gravy", description: "Pork sausage gravy. Add egg +2", price: "12" },
        { name: "Pancakes", description: "Three cakes, pure maple syrup + butter. Vanilla bean whipped cream or seasonal compote +2", price: "12", veg: true },
      ],
    },
    {
      label: "Sides",
      items: [
        { name: "Alabama Slaw", price: "5" },
        { name: "Side Salad", price: "5" },
        { name: "Home Fries", price: "5" },
      ],
    },
  ],
  dinner: [
    {
      label: "Starts",
      items: [
        { name: "Fried Chicken Livers", description: "Honey mustard, onion jam", price: "9" },
        { name: "Chorizo con Papas", description: "Gruyere, potato, chorizo, fresh tortillas", price: "11", gf: true },
        { name: "Brussels", description: "Fried brussels sprouts, peanut salsa macha glaze", price: "6 / 11", gf: true },
        { name: "Cauli", description: "Fried cauliflower florets, arugula, pomegranate, pecan, herbs, za'atar dressing", price: "8 / 16", vegan: true, gf: true },
        { name: "Deviled Eggs", description: "Whipped yolks, peanut salsa macha, chives", price: "9", veg: true, gf: true },
        { name: "Mac + Cheese", price: "8 / 15", veg: true },
        { name: "Lil' Caesar", description: "Little gem, caesar dressing, crouton crumble, cotija, black pepper", price: "8 / 15" },
        { name: "Soup", price: "5 / 9", veg: true, gf: true },
        { name: "French Fries", description: "Garlic aioli", price: "5 / 9", veg: true },
      ],
    },
    {
      label: "Mains",
      items: [
        { name: "Steak + Frites", description: "Six-ounce or ten-ounce ribeye, chile pequin, peppercorn, cream, steak fries", price: "27 / 40" },
        { name: "Eggs in Purgatory", description: "Pork + tomato gravy, grits, pork belly tasso, poached egg, cotija cheese", price: "18", gf: true },
        { name: "Jambalaya", description: "Saffron rice, lobster stock, chicken, sausage, okra", price: "21", gf: true },
        { name: "Three Sisters", description: "Tepary beans, seasonal squash, nopal salsa, arbol", price: "18", vegan: true, gf: true },
        { name: "Pappardelle", description: "Short rib, pork belly, horseradish cream, yolk", price: "23" },
        { name: "Smoked Chicken Dinner", description: "Leg + thigh, sweet potato mash, braised cabbage, mole blanco, pomegranate, cilantro", price: "24", gf: true },
      ],
    },
    {
      label: "Classics",
      items: [
        { name: "Lil' Birdy", description: "Buttermilk fried chicken, cheddar, biscuit", price: "11" },
        { name: "Big Jim", description: "Buttermilk fried chicken, pork sausage gravy, bacon, cheddar, biscuit", price: "15" },
        { name: "Bumblebee", description: "Buttermilk fried chicken, bee mustard, honey, b+b pickles, biscuit", price: "14" },
        { name: "Welcome Burger", description: "Six-ounce patty, cheddar, garlic aioli, ketchup, mustard, b+b pickles, onions, brioche", price: "16" },
        { name: "No Way Jose", description: "Six-ounce patty, smoked gouda, muenster, jalapeño relish, arugula, chipotle ranch, brioche", price: "16" },
        { name: "Fried Green Tomato", description: "Fried green tomatoes, corn relish, chipotle ranch, arugula, sourdough", price: "14", veg: true },
      ],
    },
    {
      label: "Sides",
      items: [
        { name: "Alabama Slaw", price: "5" },
        { name: "Side Salad", price: "5" },
        { name: "Sweet Potato Mash", price: "6" },
        { name: "Tepary Beans", price: "6" },
        { name: "Saffron Rice", price: "6" },
        { name: "Seasonal Squash", price: "6" },
      ],
    },
  ],
  drinks: [
    {
      label: "Cocktails",
      items: [
        { name: "Pickle Martini", description: "Gin, dry vermouth, clarified pickle brine", price: "13" },
        { name: "Del Desierto", description: "Tequila, mezcal, nopales, pineapple, lime, agave", price: "16" },
        { name: "Googie", description: "Bourbon, dry vermouth, grapefruit, lime, hibiscus honey, orange cream citrate", price: "16" },
        { name: "Hurricane", description: "Rum blend, WD fruit punch", price: "13" },
        { name: "Sindia", description: "Tequila, aperol, orange wine, prickly pear, lemon, sugar", price: "15" },
        { name: "Carajillo", description: "Licor 43, espresso", price: "14" },
        { name: "Sonoran-75", description: "Gin, brut, prickly pear, lemon, sugar", price: "15" },
        { name: "Welcome Mule", description: "Vodka, WD ginger beer, lemon", price: "14" },
        { name: "Gin + Tonic", description: "Gin, WD tonic, lime", price: "15" },
      ],
    },
    {
      label: "Beer — Draft",
      items: [
        { name: "Miller High Life", price: "6 / 11" },
        { name: "Wren House — Valley Beer American Lager", price: "9 / 17" },
        { name: "The Shop — Church Music IPA", price: "9 / 17" },
        { name: "Rotating Seasonal", price: "MP" },
      ],
    },
    {
      label: "Beer — Canned",
      items: [
        { name: "Hamm's", price: "3" },
        { name: "Modelo Especial", price: "6" },
        { name: "PBR Tall Boy", price: "6" },
      ],
    },
    {
      label: "Wine",
      items: [
        { name: "Red — Tempranillo, Castillo, Adrián De Pablo", price: "11 / 30" },
        { name: "White — Colombard Blend, Côtes de Gascogne, Olivier Gessler", price: "11 / 30" },
        { name: "Sparkling Rosé", price: "13 / 40" },
        { name: "Pinot Noir, Burgenland, Meinklang", price: "MP" },
        { name: "Orange — Welschriesling Blend, Burgenland, Meinklang", price: "15 / 43" },
      ],
    },
    {
      label: "Coffee + Tea",
      items: [
        { name: "Drip", price: "4" },
        { name: "Espresso", price: "4.5" },
        { name: "Cold Brew", price: "6" },
        { name: "Americano", price: "4.75" },
        { name: "Cappuccino", price: "6" },
        { name: "Latte", description: "Hazelnut, vanilla, or caramel +$1", price: "6" },
        { name: "Chai Latte", price: "6" },
        { name: "Sunrise", price: "7" },
        { name: "Iced Tea", price: "5" },
        { name: "Hot Tea", description: "Green, black, or herbal", price: "5.25" },
      ],
    },
    {
      label: "Fresh Squeezed",
      items: [
        { name: "WD Fruit Punch", price: "7" },
        { name: "WD Ginger Beer", price: "8" },
        { name: "Prickly Pear Lemonade", description: "Sparkling +2, spiked +6", price: "8" },
        { name: "Hibiscus Limeade", description: "Sparkling +2, spiked +6", price: "8" },
        { name: "Lemonade", description: "Sparkling +2, spiked +6", price: "5" },
        { name: "Orange Juice", price: "6" },
        { name: "Grapefruit Juice", price: "6" },
      ],
    },
    {
      label: "Desserts",
      items: [
        { name: "Chocolate Pecan Pie", description: "Cornmeal crust, vanilla bean whip", price: "8" },
        { name: "Banana Pudding", description: "Cream cheese whip, peanut mazapan, vanilla wafer crumble", price: "10" },
        { name: "Beignets", description: "Sugared apple, apple hunny", price: "6", vegan: true },
        { name: "Ice Cream", description: "Vanilla bean or seasonal", price: "6" },
        { name: "Ice Cream Float", description: "Choose your beverage", price: "6" },
      ],
    },
  ],
  kids: [
    {
      label: "Breakfast",
      items: [
        { name: "Short Stack", description: "Two cakes, pure maple syrup + butter", price: "7", veg: true },
        { name: "WD Kid Breakfast", description: "One egg, sourdough toast, potatoes or seasonal fruit", price: "8", veg: true },
      ],
    },
    {
      label: "Combos",
      note: "Choice of fries or seasonal fruit",
      items: [
        { name: "Grilled Cheese", description: "Cheddar, brioche", price: "8", veg: true },
        { name: "Chicken Tenders", description: "Four buttermilk battered tenders", price: "9" },
        { name: "Cheeseburger", description: "Three-ounce patty, cheddar, potato bun", price: "10" },
        { name: "Mac + Cheese", description: "Durum wheat pasta, cheese sauce", price: "8", veg: true },
      ],
    },
  ],
  "happy-hour": [
    {
      label: "When",
      items: [
        { name: "Everyday 3pm – 6pm", price: "" },
        { name: "Fri & Sat 10pm – Midnight", price: "" },
        { name: "All Day Tuesday", price: "" },
      ],
    },
    {
      label: "Food",
      items: [
        { name: "Welcome Burger", price: "10" },
        { name: "Lil' Birdy Chicken Biscuit", price: "5" },
        { name: "Mac + Cheese", price: "10", veg: true },
        { name: "Brussels Sprouts", price: "5", vegan: true, gf: true },
      ],
    },
    {
      label: "Beer",
      items: [
        { name: "Hamm's", price: "1" },
        { name: "PBR", price: "3" },
        { name: "Miller High Life Draft", price: "5 / 9" },
      ],
    },
    {
      label: "$5 Long Drinks",
      items: [{ name: "Spirit + mixer", price: "5" }],
    },
  ],
};
