## (Notes for the 6th PA)

### Complexities:

(average/worst) | access | search | insert | delete
--- | --- | --- | --- | ---
** Array ** | Θ(1) / O(1) | Θ(n) / O(n) | Θ(n) / O(n) | Θ(n) / O(n)
** List ** | O(1) | O(n) | O(1) | O(n)
** HashMap ** | N/A | Θ(1) / O(n) | Θ(1) / O(n) | Θ(1) / O(n)
** Stack ** | Θ(n) / O(n) | Θ(n) / O(n) | Θ(1) / O(1) | Θ(1) / O(1)
** Queue ** | Θ(n) / O(n) | Θ(n) / O(n) | Θ(1) / O(1) | Θ(1) / O(1)
** LinkedList ** | Θ(n) / O(n) | Θ(n) / O(n) | Θ(1) / O(1) | Θ(1) / O(1)
http://bigocheatsheet.com/

### HashMap:

* The `put` operation performs the following steps:
    1. calculate hashcode for key
    2. rehash it. lets call the rehashed results as h
    3. calculate bucket index as h & (capacity -1)
    4. now iterate over the bucket and compare key with all existing keys using equals()
    5. if the key already exists, change the value of that Entry object
    6. else create a new Entry object and add to the head of the linked list
    7. increment mod count
    8. resize if necessary


* The `get` operation performs the following steps:
    1. calculate hashcode for key
    2. rehash it. lets call the rehashed results as h
    3. calculate bucket index as h & (capacity -1)
    4. now iterate over the bucket and compare key with all existing keys using equals()
    5. if the key already exists return the corresponding value in the Entry object


* An instance of HashMap has two parameters that affect its performance: initial capacity and load factor.
    * The `capacity` is the number of buckets in the hash table( HashMap class is roughly equivalent to Hashtable, except that it is unsynchronized and permits nulls.), and the initial capacity is simply the capacity at the time the hash table is created.
    * The `load factor` is a measure of how full the hash table is allowed to get before its capacity is automatically increased. When the number of entries in the hash table exceeds the product of the load factor and the current capacity, the hash table is rehashed (that is, internal data structures are rebuilt) so that the hash table has approximately twice the number of buckets.
    * In HashMap class, the default value of load factor is (.75)

##### Sources:
* https://www.quora.com/How-is-Hashmap-in-Java-implemented-internally-What-are-the-pros-and-cons-to-use-it-What-are-the-complexities-it-provides-for-insert-delete-and-lookup
* http://javahungry.blogspot.com/2013/08/hashing-how-hash-map-works-in-java-or.html
* https://dzone.com/articles/hashmap-internal
