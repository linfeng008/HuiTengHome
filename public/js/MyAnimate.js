var myC =function(){};

myC.prototype ={
    //获取元素属性，
    getStyle: function(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr]; //兼容ie
        } else {
            return window.getComputedStyle(obj, false)[attr];
        }
    },
    startMove: function(obj, json,second,next) {
        var _this = this;
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var flag = true; //开关
            for (var attr in json) {
                //1.取当前值
                var icur = 0;
                if (attr == 'opacity') { //判断是否是 opacity
                    icur = Math.round(parseFloat(_this.getStyle(obj, attr)) * 100);
                } else {
                    icur = parseInt(_this.getStyle(obj, attr)); //获取当前属性的值
                }
                var speed = (json[attr] - icur) / second; //计算速度
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //速度取整
                //检测停止
                if (icur != json[attr]) {
                    flag = false;
                }
                if (attr == 'opacity') {
                    obj.style[attr] = (icur + speed)/100; //
                } else {
                    obj.style[attr] = icur + speed + 'px'; //
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (next) { //回掉函数
                    next();
                }
            }
        }, 30);
    },
    getClass: function(tags, className) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(className);
        } else {
            var tag = document.getElementsByTagName(tags);
            var tagAll = [];
            for (var i = 0; i < tag.length; i++) {
                if (tag[i].className==className) {
                    tagAll.push(tag[i]);
                }
            }
            return tagAll;
        }
    }
}