"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A reference turns a value into a reference to a value and
 * exposes methods to update and retrieve the value
 */
class Reference {
    constructor(value) {
        this.value = value;
    }
    updateValue(newValue) {
        this.value = newValue;
    }
    /** Converts a nested reference into an object
     * @param reference The reference to deconstruct
     * @return The data the nested reference conists of */
    getValue() {
        const { value } = this;
        if (Array.isArray(value)) {
            return value.map(val => val instanceof Reference ? val.getValue() : val);
        }
        else if (typeof value === 'object' && value !== null) {
            const clone = {};
            Object.keys(value).forEach(key => {
                clone[key] = value[key] instanceof Reference ?
                    value[key].getValue()
                    : value[key];
            });
            return clone;
        }
        return value;
    }
}
exports.default = Reference;
//# sourceMappingURL=Reference.js.map