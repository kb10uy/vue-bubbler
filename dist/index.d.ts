import Vue, { VueConstructor } from 'vue';
/**
 * vue-bubbler option
 */
export interface IBubblerOption {
    /**
     * Decides whether vue-bubbler propagates the event.
     * (default to undefined, all events will be propagated)
     * @param child current Vue instance (a.k.a. this)
     * @param parent parent Vue instance (a.k.a. this.$parent)
     * @param event custom event name
     * @param args args
     */
    shouldPropagate?: (child: Vue, parent: Vue, event: string, args?: any[]) => boolean;
    /**
     * When true, vue-bubbler will NOT add new "$bubble" instance method,
     * instead overrides existing "$on" instance method.
     * (default to false)
     */
    override?: boolean;
}
declare const _default: {
    defaultOption: {
        shouldPropagate: undefined;
        override: boolean;
    };
    /**
     * install vue-bubbler.
     * @param vueConstructor VueConstructor to update
     * @param options options
     */
    install(vueConstructor: VueConstructor<Vue>, options?: IBubblerOption | undefined): void;
};
/**
 * Vue custom event bubbling plugin
 */
export default _default;
declare module 'vue/types/vue' {
    interface Vue {
        $bubble(event: string, ...args: any[]): Vue;
    }
}
