# nou
nou = Null Or Undefined

Tired of writing  `util.isNullOrUndefined`? This module is for you! It creates shortcut methods such as `isNou` or `isNull`.

# Usage:

```javascript
const nou = require('nou');

var x; //x is undefined

nou.isNou(null); //true
nou.isNou(x); //true
nou.isNull(null); //true
nou.isNull(x); //true

nou.isNotNou(""); //true
nou.isNotNull(""); //true
nou.isDefined(""); //true
```
# installation:
`npm i --save nou`

# this is the actual code
```javascript
module.exports = {
    isNou: (x) => {
        return util.isNullOrUndefined(x);
    },
    isNotNou: (x) => {
        return !util.isNullOrUndefined(x);
    },
    isNull: (x) => {
        return util.isNullOrUndefined(x);
    },
    isNotNull: (x) => {
        return !util.isNullOrUndefined(x);
    },
    isDefined: (x) => {
        return !util.isNullOrUndefined(x);
    }
}
```

