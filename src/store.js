const data = new Map();

function set(key, value) {
  data.set(key,value);
}

function get(key) {
  return data.get(key);
}

function has(key){
return  data.has(key);
}

function del(key){
return data.delete(key);
}

module.exports = { set, get, has, del };