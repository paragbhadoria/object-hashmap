var objectHashMap = require('./index');
var hashMap = new objectHashMap.ObjectHashMap();

hashMap.put("key1", { test: "key1" });
hashMap.put({ key: "key2" }, { test: "key2" });
hashMap.put({ key: "key2" }, { test: "key3" });
console.log(hashMap.toString());