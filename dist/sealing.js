"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sealed components will NOT propagate custom events.
 * @param child child
 * @param parent parent
 * @param event event
 * @param args args
 */
function preventSealedComponents(child, parent, event, args) {
    return !parent.$options.$sealed;
}
exports.preventSealedComponents = preventSealedComponents;
/**
 * Make mixin of vue-bubbler/sealing
 * @param f true to seal it
 */
function sealed(f) {
    return {
        $sealed: f,
    };
}
exports.sealed = sealed;
