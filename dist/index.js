"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vue custom event bubbling plugin
 */
exports.default = {
    defaultOption: {},
    install: function (vueConstructor, options) {
        var fullOptions = Object.assign({}, options || {});
        // keep original $emit and replace it
        var oldEmit = vueConstructor.prototype.$emit;
        vueConstructor.prototype.$emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var argArray = [event].concat(args);
            oldEmit.apply(this, argArray);
            var parent = this.$parent;
            if (!parent) {
                return this;
            }
            if (!fullOptions.shouldPropagate || fullOptions.shouldPropagate(this, parent, event)) {
                parent.$emit.apply(parent, argArray);
            }
            return this;
        };
    }
};
