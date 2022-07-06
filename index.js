const cats = ["Milo", "Otis", "Garfield"]



//function destructivelyAppendCat(){
   // cats.push("Ralph")}


 const destructivelyAppendCat = () => cats.push("Ralph")

 const destructivelyPrependCat = () => cats.unshift("Bob")


 const destructivelyRemoveLastCat = () => cats.pop(3)

 const destructivelyRemoveFirstCat = () => cats.shift(0)

 //const appendCat = () => 


 const prependCat = () => cats.slice(3)