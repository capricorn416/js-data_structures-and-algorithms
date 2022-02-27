// 栈——基于对象
class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }
  // 插入元素
  push(element) {
    this.items[this.count++] = element  // count是键名，element是值
  }
  // 栈的大小
  size() {
    return this.count
  }
  // 栈是否为空
  isEmpty() {
    return this.count === 0
  }
  // 弹出元素
  pop() {
    if(this.isEmpty()) return undefined // *
    this.count--
    let result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  // 查看栈顶元素
  peek() {
    if(this.isEmpty()) return undefined // *
    return this.items[this.count-1]
  }
  // 清空栈
  clear() {
    this.items = {}
    this.count = 0
    /*
    while(!this.isEmpty()) this.pop()
    */
  }
  // 打印栈的内容
  toString() {
    if(this.isEmpty()) return ''
    let objString = `${this.items[0]}`
    for(let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }

}