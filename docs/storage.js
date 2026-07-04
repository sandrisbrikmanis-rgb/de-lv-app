const memoryStore = {};

const store = {
  getItem(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return Object.prototype.hasOwnProperty.call(memoryStore, key) ? memoryStore[key] : null;
    }
  },
  setItem(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      memoryStore[key] = value;
    }
  }
};

window.store = store;
