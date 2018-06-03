import Vue from 'vue';
/**
 * Sealed components will NOT propagate custom events.
 * @param child child
 * @param parent parent
 * @param event event
 * @param args args
 */
export declare function preventSealedComponents(child: Vue, parent: Vue, event: string, args: any[]): boolean;
/**
 * Make mixin of vue-bubbler/sealing
 * @param f true to seal it
 */
export declare function sealed(f: boolean): {
    $sealed: boolean;
};
declare module 'vue/types/vue' {
    interface Vue {
        $sealed: boolean;
    }
}
