// 队列
class Queue {
  constructor() {
    this.items = {}
    this.count = 0  // 队尾（的后一个）
    this.lowestCount = 0  // 队首
  }
  // 向队尾添加元素
  enqueue(element) {
    this.items[this.count++] = element
  }
  // 从队首移除元素
  dequeue() {
    if(this.isEmpty()) return
    let res = this.items[this.lowestCount]
    delete this.items[this.lowestCount++]
    return res
  }
  // 查看队首元素
  peek() {
    if(this.isEmpty()) return
    return this.items[this.lowestCount]
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