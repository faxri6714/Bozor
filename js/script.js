let bozor = [
  { // марка год цена гарантия
  brand: "Ferrari F430 Spider",
  year: 2004,
  price: 470000,
}, {
  brand: "Ferrari F244",
  year: 2000,
  price: 240000,
}, {
  brand: "Ferrari F100",
  year: 1990,
  price: 250000,
},{
    brand: 'BMW',
    year: 2019,
    price: 500000
},{
    brand: 'Bugatti',
    year: 2020,
    price: 4800000
},{
    brand: 'Rolse Roys',
    year: 2016,
    price: 4000000
},{
    brand: 'Gaz',
    year: 1990,
    price: 10000
},{
    brand: 'Nexa',
    year: 2017,
    price: 12000
},{
    brand: 'Audi',
    year: 2020,
    price: 30000
},{
    brand: 'Djguli',
    year: 2000,
    price: 1000000000
}]

   
let b =[] 
let buy =[]
let noubay = []

for(let item of bozor){
    let bb = item.brand .slice(0,1)
    if(bb == 'B'){
        b.push(item)
    }  
    if(item.year>=2010){
        item.guarantee = true
    }else{
        item.guarantee = false
    }
     if(bb == 'G'){
    bozor.splice(6,1)
     }
     if (item.price <= 499999){
        buy.push(item)
     }else{
        noubay.push(item)
     }
}
bozor.push(buy)
bozor.push(noubay)
let bozor1 = bozor.splice(0, 9)
bozor.unshift(b)
console.log(bozor);