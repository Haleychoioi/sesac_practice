let product;
let price;

function goMart() {
  console.log("마트에 가서 어떤 음료를 살 지 고민한다..");
  return 10;
}

function pickDrink() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("고민 끝!!");
      product = "제로콜라";
      price = 2000;
      // resolve({product, price});
      reject();
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function noPay() {
  console.log("금액 부족 ㅠㅠ");
}

async function exec() {
  try {
    goMart();
    await pickDrink().then(() => pay());
    noPay();
  } catch {
  }
}

exec();
