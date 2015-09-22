# timerout.js
检测超时，以保证最低延迟时间


usage:
```
        var callback = new Timerout(function(){
                // @a do something
        },3000); 
        app.startup(callback);
```
如果app.startup 3s内启动完成，则最少等待3秒后才执行 @a 部分代码；
如果app.startup 超过3s启动，则启动完成后立即执行@a 部分代码
