var hash = require('object-hash');

var ObjMap = function() {

};

exports.ObjectHashMap = function() {
    var indexHashArray = new Array();
    var indexObjectArray = new Array();
    var valueObjectArray = new Array();
    var objMap = new ObjMap();
    objMap.put = function(key, value) {
        if (key == undefined) {
            throw "Key can't be undefined";
        } else {
            var hashKey = key;
            if (ifKeyIsObject(key)) {
                hashKey = hash(key);
            } else {
                hashKey = key + "";
            }
            var hashIndex = indexHashArray.indexOf(hashKey);
            if (hashIndex != -1) {
                valueObjectArray[hashIndex] = value;
            } else {
                indexHashArray.push(hashKey);
                indexObjectArray.push(key);
                valueObjectArray.push(value);
            }
        }
    };
    objMap.get = function(key) {
        if (key == undefined) {
            throw "Key can't be undefined";
        } else {
            var hashKey = key;
            if (ifKeyIsObject(key)) {
                hashKey = hash(key);
            } else {
                hashKey = key + "";
            }
            var hashIndex = indexHashArray.indexOf(hashKey);
            if (hashIndex != -1) {
                return valueObjectArray[hashIndex];
            } else {
                return undefined;
            }
        }
    };
    ObjMap.prototype.toString = function() {
        var string = "Map Size : " + indexHashArray.length;
        string += "\n";
        string += "[ ";
        string += "\n";
        //console.log();
        //console.log("{ ");
        for (var i = 0; i < indexObjectArray.length; i++) {
            var key = indexObjectArray[i];
            if (typeof key == "object") {
                key = JSON.stringify(key);
            }
            var value = valueObjectArray[i];
            if (typeof value == "object") {
                value = JSON.stringify(value);
            }
            if (i == indexObjectArray.length - 1) {
                string += "\t" + key + " => " + value;
            } else {
                string += "\t" + key + " => " + value + ", ";
            }
            string += "\n";

        }
        string += "] ";
        return string;

    }
    return objMap;
}



function ifKeyIsObject(key) {
    if (typeof key == "object") {
        console.log("Key is Object");
        return true;
    } else {
        console.log("Key is not Object");
        return false;
    }
}

// var hashMap = new ObjectHashMap();
// hashMap.put("key1", { test: "key1" });
// hashMap.put({ key: "key2" }, { test: "key2" });
// hashMap.put({ key: "key2" }, { test: "key3" });
// console.log(hashMap.toString());

// var hash1 = hash('cdsc');
// var hash2 = hash({ foo: 'bar' });
// console.log(hash1 == hash2);