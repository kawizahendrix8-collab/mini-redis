function parse(input) {
  input = input.trim();

  const parts = input.split(" ");

  const command = parts[0];
  const key = parts[1];
  const value = parts[2];

  return {
    command: command,
    key: key,
    value: value
  };
}

module.exports = parse;