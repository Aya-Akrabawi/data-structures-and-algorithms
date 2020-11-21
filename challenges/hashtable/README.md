# Hashtables
Hashtables are often coveted in algorithm optimization for their O(1) constant time lookup. While JavaScript doesn’t have a native Hashtable class, it does have native Objects and Hashmaps(Map) that offer similar functionality when it comes to organizing key/value pairs.

## Challenge
create methoods for hashmap (add,get,contains, and hash)

## Approach & Efficiency
big O(1)

## API:
methods: 
1- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2- get: takes in the key and returns the value from the table.
3- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
4- hash: takes in an arbitrary key and returns an index in the collection.