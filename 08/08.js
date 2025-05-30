const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;

console.log(car); // format: JSON

const obj = JSON.parse(car);
console.log(obj); // format: OBJ
console.log(obj.model);
console.log(obj.price);
console.log(obj.hello);

const json = JSON.stringify(obj);
console.log(json); // format: JSON
console.log(json.model);
console.log(json.price);
console.log(json.hello);