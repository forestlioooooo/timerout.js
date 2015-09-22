(function(root, undefined) {
        'use strict';

        /**
        超时等待期 
        用于：最短等待时间
        usage:
        var callback = new Timerout(function(){
                // @a do something
        },3000); 
        app.startup(callback);
        如果app.startup 3s内启动完成，则最少等待3秒后才执行 @a 部分代码
        如果app.startup 超过3s启动，则启动完成后立即执行@a 部分代码
        */
        root.Timerout = function(callback, delay) {
                var callbacked = false,
                        timeout = false;
                var hook = setTimeout(function() {
                        timeout = true;
                        callbacked && callback();
                }, delay);

                return function() {
                        callbacked = true;
                        timeout && callback();
                };
        };
})(this);
