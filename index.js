const util = require("util");

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