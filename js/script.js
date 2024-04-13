let age = prompt('Enter your age:');

let movie_type = prompt('Enter movie type: regular or 3D');

let time = prompt('Enter time of day: morning or evening');

switch (true) {
  case age < 10:
    let price = 5;
    if ((movie_type = '3D')) {
      price = price + 5;
    }
    if ((time = 'evening')) {
      let evening_price = 5;
      price = evening_price + price;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price} ლარი.`);
    break;
  case age > 10 && age < 65:
    let price2 = 15;
    if ((movie_type = '3D')) {
      price2 = price2 + 5;
    }
    if ((time = 'evening')) {
      let evening_price2 = 5;
      price2 = evening_price2 + price2;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price2} ლარი.`);
    break;
  case age > 65:
    let price3 = 10;
    if ((movie_type = '3D')) {
      price3 = price3 + 5;
    }
    if ((time = 'evening')) {
      let evening_price3 = 5;
      price3 = evening_price3 + price3;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price3} ლარი.`);
    break;
}
