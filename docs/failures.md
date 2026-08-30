# Day 3 Failures

## 1. client.write(undefined)

SET initially returned undefined, causing `client.write()` to throw an error.

Cause:
- `runCommand()` did not return a response for SET.

Fix:
- SET now returns "OK".

## 2. Newline attached to key

GET initially produced:

name\n

instead of:

name

Cause:
- TCP client input contained a newline.

Fix:
- Parser uses trim().

## 3. Multiple commands in one TCP chunk

Multiple commands could arrive together.

Cause:
- TCP is a byte stream, not a message protocol.

Fix:
- Commands are separated using "\n".

## 4. DEL returned undefined

DEL deleted the key but returned undefined.

Cause:
- store.del() did not return data.delete(key).

Fix:
- store.del() now returns data.delete(key).