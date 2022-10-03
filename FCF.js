// Assign function

// 1. assign ke dalam variabel
let fn = function show(){
    console.log('Assign to variabel.')

}

fn() 

// 2. assign ke dalam object
let obj = {
    show : function goShow(){
        console.log('Assign to object.')
    }
}

obj.show()

// 3. assign to array
let arr = []

arr.push(function show(){
    console.log('Assign to array.')
})
arr[0]()

// Pass function as an argument

function show1(){
    return "Assign as an ";
}
function show2(msg, loc) {
    console.log(msg(), loc)
}

show2(show1, "Argument.");

// Return function as a results

function show(){
    return function(){
        console.log("Return function as a results.");
    }
}

show()();