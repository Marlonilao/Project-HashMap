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

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (head == null) {
      return "List is empty";
    } else {
      let current = head;
      while (current.next != null) {
        current = current.next;
      }

      return current;
    }
  }

  // function at(index) {
  //   if (index == 0) {
  //     return `key: ${head.key}, value: ${head.value}`;
  //   }

  //   if (index >= size) {
  //     return null;
  //   }

  //   let current = head;
  //   let count = 0;
  //   while (count < index) {
  //     current = current.next;
  //     count++;
  //   }
  //   return `key: ${current.key}, value: ${current.value}`;
  // }

  function pop() {
    if (head == null) {
      return false;
    }
    let current = head;
    let previous;

    if (head != null) {
      if (head.next == null) {
        head = null;
        return current;
      }
    }

    while (current.next != null) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    size--;
    return current;
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

  function find(key) {
    let current = head;
    let index = 0;
    while (current) {
      if (current.key == key) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  function toString() {
    if (head == null) {
      return "null";
    }

    let current = head;
    let string = "";

    while (current.next != null) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }

    string += `( ${current.value} ) -> null`;
    return string;
  }

  // function insertAt(value, index) {
  //   if (index == 0) {
  //     prepend(value);
  //     return;
  //   } else if (index == size) {
  //     append(value);
  //     return;
  //   } else if (index > size) {
  //     return "index out of range";
  //   } else {
  //     const node = Node(value);
  //     let current = head;
  //     let previous;
  //     let count = 0;

  //     while (count < index) {
  //       previous = current;
  //       current = current.next;
  //       count++;
  //     }

  //     previous.next = node;
  //     node.next = current;
  //     size++;
  //   }
  // }

  // function removeAt(index) {
  //   if (index >= size || index < 0) {
  //     return "index out of range";
  //   }

  //   let current = head;
  //   let previous;
  //   let count = 0;

  //   if (index == 0 && head != null) {
  //     head = current.next;
  //     size--;
  //     return;
  //   }

  //   if (index == 0 && head == null) {
  //     return "list is empty";
  //   }

  //   while (count < index) {
  //     previous = current;
  //     current = current.next;
  //     count++;
  //   }

  //   previous.next = current.next;
  //   size--;
  // }

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
        current.next = current;
      }

      previous.next = current.next;
    }
  }

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    // at,
    pop,
    contains,
    find,
    toString,
    // insertAt,
    // removeAt,
    update,
    getValue,
    removeNode,
  };
}

export { LinkedList };
