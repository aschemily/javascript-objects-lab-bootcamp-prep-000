var recipes = new Object ({})

var obj = {prop :1}
function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign ({}, obj, {[key]:value})
}
 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  
  
}

var recipes = {key: 'value'}
  function updateObjectWithKeyAndValue(object,key,value){
    recipes[key] = value
return recipes
}