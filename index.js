var _ = require('lodash');
var mixin = require('mixin-class');
module.exports = mixin(
    function(tag) {
        this.tag = tag;
    },
    {
        build: function(config) {
            var tag = this.tag;
            var plainMixin = {};
            var mixinList = [];
            var self = this;             
            _.forEach(config, function(value, key) {
                if (key in tag) {
                    mixinList.push(tag[key](value, self));
                }
                else {
                    plainMixin[key] = value;
                }
            });
            mixinList.push(plainMixin);
            return mixin(mixinList);
        }
    }
)