// 集合——无序、唯一
class Set {
  constructor() {
    this.items = {}
  }
  // 检查元素是否存在
  has(element) {
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  // 添加元素
  add(element) {
    if(!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  } 
  // 删除元素
  delete(element) {
    if(this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  // 清空元素
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
    /*
    let count = 0
    for(let key in this.items) {
      if(this.items.hasOwnProperty(key)) count++
    }
    return count
    */
  }
  values() {
    return Object.values(this.items)
  }
  // 并集
  union(otherSet) {
    let unionSet = new Set()
    this.values().forEach(value => {
      unionSet.add(value)
    })
    otherSet.values().forEach(value => {
      // if(!unionSet.has(value)) unionSet.add(value) 不用重复判断，因为调用add时就会判断
      unionSet.add(value)
    })
    return unionSet
  }
  // 交集
  intersection(otherSet) {
    let intersectionSet = new Set()
    let values = this.values()
    let otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if(smallerSet.length > biggerSet.length) {
      smallerSet = values
      biggerSet = otherValues
    }
    smallerSet.forEach((value) => {
      if(biggerSet.has(value)) intersectionSet.add(value)
    })
    return intersectionSet
  }
  // 差集
  difference(otherSet) {
    let differenceSet = new Set()
    this.values().forEach((value) => {
      if(!otherSet.has(value)) differenceSet.add(value)
    })
    return differenceSet
  }
  // 子集
  isSubsetOf(otherSet) {
    if(this.size() > otherSet.size()) return false
    this.values().forEach((value) => {
      if(!otherSet.has(value)) return false
    })
    return true
  }
}