"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vue custom event bubbling plugin
 */
exports.default = {
    defaultOption: {
        shouldPropagate: undefined,
        override: false,
    },
    /**
     * install vue-bubbler.
     * @param vueConstructor VueConstructor to update
     * @param options options
     */
    install: function (vueConstructor, options) {
        var fullOptions = Object.assign({}, this.defaultOption, options || {});
        // keep original $emit and replace it
        var emit = vueConstructor.prototype.$emit;
        var bubble = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var argArray = [event].concat(args);
            emit.apply(this, argArray);
            var parent = this.$parent;
            if (!parent) {
                return this;
            }
            if (!fullOptions.shouldPropagate || fullOptions.shouldPropagate(this, parent, event, args)) {
                bubble.apply(parent, argArray);
            }
            return this;
        };
        if (fullOptions.override) {
            vueConstructor.prototype.$emit = bubble;
        }
        else {
            vueConstructor.prototype.$bubble = bubble;
        }
    },
};
