let name1 ={
    firstNAme:'Ansa',
    lastName:'Ali'
}

function printName(){
    console.log(this.firstNAme+' '+this.lastName)
}

//using bind
let completeName = printName.bind(name1)
completeName() //Ansa Ali

//polyfill bind
//1. create a function which can have access to every fun, like bind 
// Function.prototype.myBind(), myBind is accessible to every fu
//2.return a function,  like completeName()
Function.prototype.myBind= function (arg){
    let obj = this //this is pointing to printNAme since: printName.myBind
   return function(){
    obj.call(arg)
   }
}
let compleNameWithMybind = printName.myBind(name1);
compleNameWithMybind(); //Ansa Ali