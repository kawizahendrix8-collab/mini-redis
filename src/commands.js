const store = require("./store");

function runCommand(parsed) {

  if (parsed.command === "SET") {
    store.set(parsed.key, parsed.value);
    return "OK";
  }

  else if (parsed.command === "GET") {
    return store.get(parsed.key);
  }

  else if (parsed.command === "EXISTS") {
    return store.has(parsed.key);
  }

  else if (parsed.command === "DEL") {
    return store.del(parsed.key);
  }

  else {
    return "Unknown command";
  }
}

module.exports = runCommand;