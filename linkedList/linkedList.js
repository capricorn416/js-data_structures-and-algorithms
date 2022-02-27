// import { Node } from './node'
// import { defaultEquals } from './defaultEquals'

// 结点
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

// 判断相等
function defaultEquals(a, b) {
  return a === b
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
} 