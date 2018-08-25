//declaring global variables to be called later in the program
let storesArray = [];

let elBody = document.getElementById('my-body');

//let elStoreName = document.getElementById('store-name');  // extra
//console.log(elStoreName);

// define a constructor
let CookieStore = function(name, location, employees, hours, type, CookESales, minCustomers, maxCustomers){

    this.store = name;
    this.location = location;
    this.employees = employees;
    this.hours = hours;
    this.type = type;
    this.sales = CookESales;
    this.minCust = minCustomers;
    this.maxCust = maxCustomers;
};
console.log(CookieStore);

//populate instances of the constructor with store data
let StoreOne = new CookieStore('Northern Cookies', 'North', 5, '1pm-10pm', 'Chocolate', 20, 10, 20);

let StoreTwo = new CookieStore('Crooked Cookies', 'South', 5, '1pm-10pm', 'Chocolate Chip', 20, 10, 20);

let StoreThree = new CookieStore('Kay\'s Cookies', 'East', 5, '1pm-10pm', 'Sugar', 20, 10, 20);

//push instances of Cookie Store constructor data to an Array of stores
storesArray.push(StoreOne, StoreTwo, StoreThree);
console.log(StoreOne, StoreThree, StoreTwo);

function displayStoreNames() {
    for(let i = 0; i < storesArray.length; i+=1){
        let elStoreName = document.createElement('h1');
        elStoreName.setAttribute('class','store-name');
        elBody.appendChild(elStoreName);
        elStoreName.innerHTML = storesArray[i].store;
    }
}

console.log(storesArray[0].hours);

displayStoreNames();

