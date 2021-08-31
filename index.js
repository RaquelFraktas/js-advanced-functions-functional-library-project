// standardizeInput is a helper function to use with the functions that need to
// work with either objects or arrays
// It checks whether the input is an array and, if so, returns a copy of it;
// otherwise, it uses JavaScript's Object.values method to return an array that
// contains the values of the object's properties
const standardizeInput = collection => {
    return collection instanceof Array
      ? collection.slice()
      : Object.values(collection);
  };

function myEach(collection, callback){
     let newCollection= standardizeInput(collection)

     for(let i= 0; i <newCollection.length; i++){
         callback(newCollection[i]);
     }
    return collection;
}

function myMap(collection, callback){
  let newCollection= standardizeInput(collection)
  return newCollection.map(element => callback(element))
}

function myReduce(collection, callback, acc){
    let newCollection = standardizeInput(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
      for (let i= 0; i< newCollection.length; i++){
          acc= callback(acc,newCollection[i], newCollection)
      }
      return acc;
}

function myFind(collection, predicate){
    const newCollection = standardizeInput(collection);
    for(let i= 0; i< newCollection.length; i++){
       if(predicate(newCollection[i])) return newCollection[i];
    }
  return undefined
}

function myFilter(collection, predicate){
    const newCollection = standardizeInput(collection);
    let array= []
    for (let i= 0; i < newCollection.length; i++){
        if (predicate(newCollection[i])){
            array.push(newCollection[i])
        }
    }
  return array
}

function mySize(collection){
    const newCollection = standardizeInput(collection);
    return newCollection.length;
}

function myFirst(array, n= false){
  return n? array.slice(0, n) : array[0];

}

function myLast(array, n= false){
    return n? array.slice(array.length - n, array.length) : array[array.length-1];
}

function myKeys(obj){
    let keys =[];
    for (let key in obj){
        keys.push(key)
    }
    return keys
}

function myValues(obj){
    let values =[];
    for (let value in obj){
        values.push(obj[value])
    }
    return values
}