import Vue, { VueConstructor } from 'vue';

/**
 * Vue custom event bubbling plugin
 */
export default {
    defaultOption: {},

    install(vueConstructor: VueConstructor<Vue>, options?: IBubblerOption): void {
        const fullOptions = Object.assign<IBubblerOption, IBubblerOption>({}, options || {});

        // keep original $emit and replace it
        const oldEmit: Vue['$emit'] = vueConstructor.prototype.$emit;

        vueConstructor.prototype.$emit = function(this: Vue, event: string, ...args: any[]) {
            oldEmit.apply(this, [event, args]);

            const parent = this.$parent;
            if (!parent) {
                return this;
            }

            if (!fullOptions.shouldPropagate || fullOptions.shouldPropagate(this, parent, event)) {
                oldEmit.apply(parent, [event, args]);
            }

            return this;
        };
    }
}

// tslint:disable-next-line:max-classes-per-file
// tslint:disable-next-line:no-empty-interface
interface IBubblerOption {
    shouldPropagate?: (child: Vue, parent: Vue, event: string, args?: any[]) => boolean;
}
