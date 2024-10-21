let name ={
    firstName : 'Ansa',
    lastName: 'Ali',
   
}
let fullName = function(){
    console.log(this.firstName + " " + this.lastName)
}
fullName.call(name);

let name2={
    firstName: 'Arham',
    lastName:'Ansa',

}
//function borrowing fron name ti name2
fullName.call(name2) //here name2 repesents this

