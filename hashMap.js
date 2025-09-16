import { LinkedList } from "./linkedList.js";

function HashMap(size) {
  let buckets = new Array(size);
  let capacity = buckets.length;
  let loadFactor = 0.8;
  let entries = 0;

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
  }

  function set(key, value) {
    const index = hash(key);
    if (buckets[index] == undefined) {
      buckets[index] = LinkedList();
      buckets[index].append(key, value);
      entries++;
    } else {
      if (buckets[index].contains(key)) {
        buckets[index].update(key, value);
      } else {
        buckets[index].append(key, value);
        entries++;
      }
    }

    const threshold = capacity * loadFactor;
    if (entries > threshold) {
      const additional = new Array(buckets.length * 2);
      buckets.push(additional);
    }
  }

  function get(key) {
    const index = hash(key);
    if (buckets[index] == undefined) {
      return null;
    }

    return buckets[index].getValue(key);
  }

  function has(key) {
    const index = hash(key);
    if (buckets[index] != undefined) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    const index = hash(key);
    if (buckets[index] != undefined) {
      if (buckets[index].contains(key)) {
        buckets[index].removeNode(key);
        entries--;
        return true;
      }
    }
    return false;
  }

  function length() {
    return entries;
  }

  function clear() {
    buckets.forEach((bucket, index) => {
      if (bucket != undefined) {
        delete buckets[index];
      }
    });

    entries = 0;
  }

  function display() {
    let displayArray = buckets
      .filter((bucket) => bucket != undefined)
      .map((bucket) => bucket.getHead());

    return displayArray;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    display,
  };
}

export { HashMap };
