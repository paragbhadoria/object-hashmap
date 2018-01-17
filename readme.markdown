# object-hashmap

object-hashmap is a map util of the form Map<K,V> where K i.e. key and V i.e. value can be either object or primitive data type. 

## Example usage
JS:
```js
var objectHashMap = require('object-hashmap');
var hashMap = new objectHashMap.ObjectHashMap();

hashMap.put("key1", { test: "key1" });
hashMap.put({ key: "key2" }, { test: "key2" });
hashMap.put({ key: "key2" }, { test: "key3" });
console.log(hashMap.toString());
```

### Installation
Node:
```js
npm install object-hashmap
```

## Methods
```js
//Inserts an element in the map
put(K,V)

//Gets Value asssociated with given key or undefined if there is no such key
get(K)

//Returns String representation of the Map Object
toString()
```

