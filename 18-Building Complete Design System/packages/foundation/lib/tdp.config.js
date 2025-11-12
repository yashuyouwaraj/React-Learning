"use strict";
var tokens = require("./tokens/js/tokens");
var flattenValue = function (obj) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        if (!obj[key].value) {
            result[key] = flattenValue(obj[key]);
        }
        else {
            result[key] = obj[key].value;
        }
    });
    return result;
};
module.exports = {
    prefix: "yashu-",
    theme: {
        colors: flattenValue(tokens.colors),
        borderRadius: flattenValue(tokens.radius),
        spacing: flattenValue(tokens.spacing),
        boxShadow: flattenValue(tokens.shadows),
        fontFamily: {
            sans: ['"inter"'],
        },
    },
    plugins: [],
};
//# sourceMappingURL=tdp.config.js.map