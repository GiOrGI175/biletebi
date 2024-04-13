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
    let fasdaakleba;
    let num = Math.floor(Math.random() * 3) + 1;
    if (num % 2 === 0) {
      price3 = price3 - 5;
      let shidafasdaakleba =
        'გილოცავთ თქვენ გაქვთ ფასდაკლების ბილეთი და თანხას დააკლდა 5 ლარი.';
      fasdaakleba = shidafasdaakleba;
    } else {
      shidafasdaakleba = 'თქვენ არ გაქვთ ფასდაკლეის ბილეთი';
      fasdaakleba = shidafasdaakleba;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price} ლარი. ${fasdaakleba}`);
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
    let fasdaakleba2;
    let num2 = Math.floor(Math.random() * 3) + 1;
    if (num2 % 2 === 0) {
      price2 = price2 - 5;
      let shidafasdaakleba =
        'გილოცავთ თქვენ გაქვთ ფასდაკლების ბილეთი და თანხას დააკლდა 5 ლარი.';
      fasdaakleba2 = shidafasdaakleba;
    } else {
      shidafasdaakleba = 'თქვენ არ გაქვთ ფასდაკლეის ბილეთი';
      fasdaakleba2 = shidafasdaakleba;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price2} ლარი. ${fasdaakleba2} `);
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
    let fasdaakleba3;
    let num3 = Math.floor(Math.random() * 3) + 1;
    if (num3 % 2 === 0) {
      price3 = price3 - 5;
      let shidafasdaakleba =
        'გილოცავთ თქვენ გაქვთ ფასდაკლების ბილეთი და თანხას დააკლდა 5 ლარი.';
      fasdaakleba3 = shidafasdaakleba;
    } else {
      shidafasdaakleba = 'თქვენ არ გაქვთ ფასდაკლეის ბილეთი';
      fasdaakleba3 = shidafasdaakleba;
    }
    alert(`ბილეთის ფასი თქვენთვის არის : ${price3} ლარი. ${fasdaakleba3}`);
    break;
}
