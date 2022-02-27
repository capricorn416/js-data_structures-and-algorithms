class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
function defaultEquals(a, b) {
  return a === b
}
class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

// 链表
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }
  // 向链表尾部添加元素
  push(element) {
    const node = new Node(element)
    let current
    if(this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next != null) {
        current = current.next
      }
      current.next = node
    }
    this.count ++ 
  }
  // 获取指定位置的元素
  getElementAt(index) {
    if(index>=0 && index <= this.count) {
      let current = this.head
      for(let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  // 根据位置移除元素
  removeAt(index) {
    if(index < 0 || index >= this.count) return undefined
    let current = this.head
    if(index === 0) {
      this.head = this.head.next
    } else {
      // let previous = null
      // for(let i = 0; i < index; i++) {
      //   previous = current
      //   current = current.next
      // }
      // previous.next = current.next
      let previous = this.getElementAt(index-1)
      current = previous.next
      previous.next = current.next
    }
    this.count --
    return current.element
  }
  // 在某位置插入元素
  insert(index, element) {
    if(index >= 0 && index < this.count) {
      let node = new Node(element)
      if(index === 0) {
        node.next = this.head
        this.head = node
      } else {
        let previous = this.getElementAt(index-1)
        node.next = previous.next
        previous.next = node
      }
      this.count ++
      return true
    }
    return false
  }
  // 返回元素的位置
  indexOf(element) {
    let pos = -1
    let current = this.head
    for(let i = 0; i < this.count && current != null; i++) {
      if(this.equalsFn(element, current.element)) {
        pos = i
        break
      }
      current = current.next
    }
    return pos
  }
  // 根据值移除元素
  remove(element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  getHead() {
    return this.head
  }
  toString() {
    if(this.head == null) return ''
    let objString = `${this.head.element}`
    let current = this.head.next
    for(let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }  
    return objString
  }
} 

// 双向链表
class DoublyLinkedList extends LinkedList{
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }
  // 在指定位置插入
  insert(element, index) {
    if(index >= 0 && index <= this.count) {
      let node = new DoublyNode(element)
    }
  }
}