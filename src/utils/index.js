/**
 * 获取缓存
 * @param {*} name
 * @param {*} isSession 是localStorage还是sessionStorage, true 为 sessionStorage, false 则为 localStorage, 默认是 localStorage
 * @returns
 */
export function getStorage(name, isSession) {
  const storage = isSession ? window.sessionStorage : window.localStorage
  const result = storage.getItem(name)

  return result ? JSON.parse(result) : null
}

/**
 * 设置缓存
 * @param {*} name
 * @param {*} obj
 * @param {*} isSession
 */
export function setStorage(name, obj, isSession) {
  const storage = isSession ? window.sessionStorage : window.localStorage
  storage.setItem(name, JSON.stringify(obj))
}

/**
 * 删除缓存
 * @param {*} name
 * @param {*} isSession
 */
export function delStorage(name, isSession) {
  const storage = isSession ? window.sessionStorage : window.localStorage
  storage.removeItem(name)
}
