import Vue, { VueConstructor } from 'vue';
declare const _default: {
    defaultOption: {};
    install(vueConstructor: VueConstructor<Vue>, options?: IBubblerOption | undefined): void;
};
/**
 * Vue custom event bubbling plugin
 */
export default _default;
interface IBubblerOption {
    shouldPropagate?: (child: Vue, parent: Vue, event: string, args?: any[]) => boolean;
}
