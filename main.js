//declaring global variables to be called later in the program
let storeArray = [];

let elBody = document.getElementById('my-body');

let elStoreTitle = document.getElementById('store-title');  //change to store-name when working
console.log(elStoreTitle);

//declaring a variable called StoreOne and assigning it the value of an object literal
	let StoreOne = {
        name: 'Northern Sky Cookies',
        region: 'North',
	    employees: 5,
	    hours: '1pm - 10pm',
	    type: 'Chocolate',
    };
//	print to the console, the elements of the object literal called StoreOne
    console.log(StoreOne);

	let StoreTwo = {
	    name: 'Crooked Cookies',        
        region: 'South',
	    employees: 5,
	    hours: '1pm - 10pm',
	    type: 'Chocolate Chip',
	};
    console.log(StoreTwo);

    let StoreThree = {
        name: 'Kay\'s Cookies',
        region: 'East',
	    employees: 15,
	    hours: '1pm - 10pm',
	    type: 'Snickerdoodles',
	};
    console.log(StoreThree);

//create an array, use pre-defined method push to initialize it to the 3 stores
    storeArray.push(StoreOne, StoreTwo, StoreThree);

//Define a function, use for loop in initializing start value @ 1st index value.
// Evaluate index position of i relative to the length of the storeArray.
// As long as i and its incremented value is less than the length of the array, 
//   print the store title to the index.html page displaying in 'h1' style.  
function displayStoreTitles () {  //<--was here at first
    for(let i = 0; i < storeArray.length; i+=1){
        let elStoreTitle = document.createElement('h1');
        elStoreTitle.setAttribute('class','store-title');
        elBody.appendChild(elStoreTitle);
        elStoreTitle.innerHTML = storeArray[i].name;
    }
}

displayStoreTitles();

