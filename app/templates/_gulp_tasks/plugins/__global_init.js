(function (root) {
    root = root || window;
    var __init = {

        __init_register: {

            before_init: [],
            init: [],
            after_init: []
        },
        __init_order: ['before_init', 'init', 'after_init'],


        addInitFunction: function (func, hook) {
            hook = hook || 'init'; //  a key in __init_register (and __init_order)

            if (typeof func === 'function') {

                if (this.__init_register[hook] === undefined) {
                    this.__init_register[hook] = [];
                    this.__init_order.push(hook);
                }
                this.__init_register[hook].push(func); // put to the end

            }
        },

        execInitFunctions: function (parameters, this_object) {

            parameters = parameters || [];
            this_object = this_object || window;

            for (var hook in this.__init_order) { // go though the hooks in order
                var method = this.__init_order[hook];

                if (this.__init_register[method] !== undefined) {
                    for (var type in this.__init_register[method]) { // calling all functions in the hook
                        var func = this.__init_register[method][type];

                        func.apply(this_object, parameters);

                    }
                }
            }
        }
    };
    root.__init = __init;
})