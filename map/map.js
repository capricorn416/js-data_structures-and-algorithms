function defaultToString(item) {
  if(item === null) return 'NULL'
  else if(item === undefined) return 'UNDEFINED'
  else if(typeof item === 'string' || item instanceof String) return `${item}`
  return item.toString()
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

// 字典
class Map {
  constructor(tostrFn = defaultToString) {
    this.tostrFn = tostrFn
    this.table = {}
  }
  // 检查键是否存在
  hasKey(key) {
    return this.table[this.tostrFn(key)] != null
  }
  // 设置键值对
  set(key, value) {
    if(key != null && value != null) {
      this.table[this.tostrFn(key)] = new ValuePair(key, value)
      return true
    }
    return false
  }
  // 删除键值对
  

}