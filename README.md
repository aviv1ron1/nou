# nou
nou = Null Or Undefined

this is a node module that creates shortcut methods for util.isNullOrUndefined

because its too hard and long to write `util.isNullOrUndefined`

instead use:
``
const nou = require('nou');

var x; //x is undefined

nou.isNou(null); //true
nou.isNou(x); //true
nou.isNull(null); //true
nou.isNull(x); //true

nou.isNotNou(""); //true
nou.isNotNull(""); //true
nou.isDefined(""); //true
``

this is the actual code:
``
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
``


installation:
`npm i --save nou`

