import { LinkedList } from "./linkedList.js";

function HashMap() {
  let buckets = new Array(16);
  let loadFactor = 0.75;
  let entries = 0;

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % buckets.length;
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

    let threshold = buckets.length * loadFactor;
    if (entries > threshold) {
      const additional = new Array(buckets.length);
      buckets = buckets.concat(additional);
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
    if (buckets[index] != null) {
      return true;
    } else {
      return false;
    }
  }

  function remove(key) {
    const index = hash(key);
    if (buckets[index] != null) {
      if (buckets[index].getSize() <= 1) {
        delete buckets[index];
        entries--;
      } else {
        buckets[index].removeNode(key);
        entries--;
      }
    } else {
      return "key undefined";
    }
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

  function keys() {
    let keysArray = [];
    let filtered = buckets.filter((bucket) => bucket != undefined);
    filtered.forEach((bucket) => {
      keysArray = keysArray.concat(bucket.getKeys());
    });
    return keysArray;
  }

  function values() {
    let valuesArray = [];
    let filtered = buckets.filter((bucket) => bucket != undefined);
    filtered.forEach((bucket) => {
      valuesArray = valuesArray.concat(bucket.getValues());
    });
    return valuesArray;
  }

  function getEntries() {
    let entriesArray = [];
    let filtered = buckets.filter((bucket) => bucket != undefined);
    filtered.forEach((bucket) => {
      entriesArray = entriesArray.concat(bucket.getKeyValue());
    });
    return entriesArray;
  }

  function getBuckets() {
    return buckets.length;
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    getEntries,
    getBuckets,
  };
}

export { HashMap };
