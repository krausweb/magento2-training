define([
    'uiComponent',
    'mage/translate'
], function(Component, $t){
    'use strict';

    return Component.extend({
        defaults: {
            placeholderText: $t('Enter your shipping comment')
        },
        initialize: function () {
            return this._super();
        }
    });
});
