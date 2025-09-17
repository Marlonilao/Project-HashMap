function Node(key, value, next = null) {
  return {
    key,
    value,
    next,
  };
}

function LinkedList() {
  let head = null;
  let size = 0;

  function append(key, value) {
    if (head == null) {
      prepend(key, value);
      return;
    }
    let node = Node(key, value);
    let current = head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    size++;
  }

  function prepend(key, value) {
    const node = Node(key, value);
    if (head == null) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    size++;
  }

  function contains(key) {
    if (head == null) {
      return false;
    }
    let current = head;
    while (current.key !== key && current.next != null) {
      current = current.next;
    }
    if (current.key == key) {
      return true;
    }
    return false;
  }

  function update(key, newValue) {
    if (head.key == key) {
      head.value = newValue;
    } else {
      let current = head;
      while (current.key !== key) {
        current = current.next;
      }

      current.value = newValue;
    }

    return "Update successful!";
  }

  function getValue(key) {
    let current = head;
    while (current.key != key && current.next != null) {
      current = current.next;
    }

    if (current.key == key) {
      return current.value;
    }

    return null;
  }

  function removeNode(key) {
    if (head.key == key) {
      head = head.next;
    } else {
      let current = head;
      let previous;

      while (current.key != key) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
  }

  function getKeys() {
    let keys = [];
    let current = head;
    while (current != null) {
      keys.push(current.key);
      current = current.next;
    }
    return keys;
  }

  function getValues() {
    let values = [];
    let current = head;
    while (current != null) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  function getKeyValue() {
    let keyValueArray = [];
    let current = head;
    while (current != null) {
      keyValueArray.push([current.key, current.value]);
      current = current.next;
    }

    return keyValueArray;
  }

  function getSize() {
    return size;
  }

  return {
    append,
    contains,
    update,
    getValue,
    removeNode,
    getKeys,
    getValues,
    getKeyValue,
    getSize,
  };
}

export { LinkedList };
