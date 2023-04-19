let objects = [
{ one : "Василий", surname : "Васильев",},

{ one : "Иван",    surname : "Иванов",},

{ one : "Петр",    surname : "Петров",}
]

console.log (objects[1].surname);

let searchObj = {};

let a = 

function search (obj, firstName, secondName) {
    let obj = [];
    for (i = 0 ; i <=obj.length ; i++) {

        console.log(obj[i].one , obj[i].secondName);
        // if ((obj[i].one === firstName) && (obj[i].surname === secondName)){
        //     searchObj = obj[i];
        // }
        // else console.log("Asshanded")
    }
}


search (objects , "Иван" , "Иванов");




