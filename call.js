let name1 ={
    firstName : 'Ansa',
    lastName: 'Ali',
   
}
let fullName = function(hometown,state){
    console.log(this.firstName + " " + this.lastName + ',' + hometown + ','+state)
}
fullName.call(name1);

let name2={
    firstName: 'Arham',
    lastName:'Ansa',

}
//function borrowing fron name ti name2
fullName.call(name2) 
//here name2 repesents this

//if we want to pass the argument in the function using call we need 
//to pass likename2,'Ernakulam','kerala'
fullName.call(name2,'Ernakulam','kerala') 
//but using apply, pass arguments in array
fullName.apply(name1,['Ernakulam','kerala'])
