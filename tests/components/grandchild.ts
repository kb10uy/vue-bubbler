export default {
    template: `<div><button id="grandchild" @click="fire">Grandchild</button></div>`,
    methods: {
        fire() {
            this.$bubble('grandchild');
        },
    },
};
