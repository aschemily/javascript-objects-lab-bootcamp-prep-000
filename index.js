var recipes = new Object ({})

function updateObjectWithKeyAndValue(object, key, value){
 var obj = { prop: 1 }
return object.assign ({}, obj, {[key]:value})
}