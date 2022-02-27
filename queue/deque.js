class Deque {
  constructor() {
    this.items = {}
    this.lowestCount = 0  // 队首
    this.count = 0  // 队尾（的后一个）
  }
  // 向队首添加元素
  addFront(element) {
    // if(this.isEmpty()) this.items[this.count++] = element
    if(this.isEmpty()) this.addBack(element)
    else if(this.lowestCount > 0) this.items[--this.lowestCount] = element
    else {
      for(let i = this.count; i > this.lowestCount; i--) {
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.items[this.lowestCount] = element
    }

  }
  // 向队尾添加元素
  addBack(element) {
    this.items[this.count++] = element
  }
  // 从队首移除元素
  removeFront() {
    if(this.isEmpty()) return
    let res = this.items[this.lowestCount]
    delete this.items[this.lowestCount++]
    return res
  }
  // 从队尾移除元素
  removeBack() {
    if(this.isEmpty()) return undefined // *
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  // 查看队首元素
  peekFront() {
    if(this.isEmpty()) return
    return this.items[this.lowestCount]
  }
  // 查看队尾元素
  peekBack () {
    if(this.isEmpty()) return
    return this.items[this.count-1]
  }
  // 是否为空
  isEmpty() {
    return this.count === this.lowestCount
  }
  // 长度
  size() {
    return this.count - this.lowestCount
  }
  // 清空
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  // 输出
  toString() {
    if(this.isEmpty()) return ''
    let objString = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}