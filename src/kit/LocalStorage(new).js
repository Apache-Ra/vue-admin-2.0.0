/**
 * description: LocalStorage
 * create_time: 2017-04-02
 * message: 不接受任何私下吐槽，请当面沟通协调
 * update:
 * 2018-06-03 重构Storage
 * 2019-02-18 修改 constructor中默认STORAGE_KEY
 */
import extend from 'Extend';
import urlParam from './URLParam'

class LocalStorage {
  constructor(STORAGE_KEY) {
    this.date = new Date();
    // this.STORAGE_KEY = (STORAGE_KEY)?{PAGE_PARA: STORAGE_KEY} : {PAGE_PARA: window.location.host};
    this.STORAGE_KEY = (STORAGE_KEY)?{PAGE_PARA: STORAGE_KEY} : {PAGE_PARA: window.location.host+window.location.pathname};
  };
  get(key) {
    let store = localStorage.getItem(key);
    if (store) {
      try {
        store = JSON.parse(store);
      } catch (e) {
        store = undefined;
        this.del(key);
      }
    }
    return Promise.resolve(store || {})
  };

  del(key) {
    localStorage.removeItem(key);
  };

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve(value);
  };

  put(key, value) {
    let me = this;
    return this.get(key).then(data => {
      value = extend(data || {}, value || {});
      return me.set(key, value)
    })
  };

  getParam(key) {
    let UrlParam = new urlParam();
    return this.get(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {};
      return extend(data[key], UrlParam.getURLParam())
    })
  };

  setParam(key, para) {
    let me = this;
    return this.get(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {};
      data[key] = para;
      return me.set(this.STORAGE_KEY.PAGE_PARA, data)
    })
  };

  putParam(key, para) {
    let me = this;
    return this.get(this.STORAGE_KEY.PAGE_PARA).then(data => {
      data = data || {};
      data[key] = extend((data[key] || {}), para);
      return me.set(this.STORAGE_KEY.PAGE_PARA, data)
    })
  };

  removeSubParam(key, subKey) {
    let me = this;
    return this.get(this.STORAGE_KEY.PAGE_PARA).then(data => {
      if (data) {
        delete data[key][subKey];
        return me.set(this.STORAGE_KEY.PAGE_PARA, data);
      }
    })
  }
}
export default LocalStorage
