import Vue from 'vue';

/**
 * Sealed components will NOT propagate custom events.
 * @param child child
 * @param parent parent
 * @param event event
 * @param args args
 */
export function preventSealedComponents(child: Vue, parent: Vue, event: string, args: any[]) {
    return !(parent.$options as any).$sealed;
}

/**
 * Make mixin of vue-bubbler/sealing
 * @param f true to seal it
 */
export function sealed(f: boolean) {
    return {
        $sealed: f,
    };
}

declare module 'vue/types/vue' {
    // tslint:disable-next-line:interface-name
    interface Vue {
        $sealed: boolean;
    }
}
