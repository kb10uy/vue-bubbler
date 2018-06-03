import Vue, { VueConstructor } from 'vue';

// tslint:disable-next-line:max-classes-per-file
// tslint:disable-next-line:no-empty-interface
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

/**
 * Vue custom event bubbling plugin
 */
export default {
    defaultOption: {
        shouldPropagate: undefined,
        override: false,
    },

    /**
     * install vue-bubbler.
     * @param vueConstructor VueConstructor to update
     * @param options options
     */
    install(vueConstructor: VueConstructor<Vue>, options?: IBubblerOption): void {
        const fullOptions = Object.assign<IBubblerOption, IBubblerOption, IBubblerOption>(
            {},
            this.defaultOption,
            options || {},
        );

        // keep original $emit and replace it
        const emit: Vue['$emit'] = vueConstructor.prototype.$emit;
        const bubble = function(this: Vue, event: string, ...args: any[]) {
            const argArray = [event].concat(args);
            emit.apply(this, argArray);

            const parent = this.$parent;
            if (!parent) {
                return this;
            }

            if (!fullOptions.shouldPropagate || fullOptions.shouldPropagate(this, parent, event)) {
                bubble.apply(parent, argArray);
            }

            return this;
        };

        if (fullOptions.override) {
            vueConstructor.prototype.$emit = bubble;
        } else {
            vueConstructor.prototype.$bubble = bubble;
        }
    },
};

// TODO: I should export type definition of $bubble, but it seems to be impossible?
