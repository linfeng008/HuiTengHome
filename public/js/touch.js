    var touch = function(obj){
        return new touch(obj)
    };
    var oldX = 0;
    var oldY = 0;
    touch.prototype={
        touchStatt:function(obj){
            obj.addEventListener('touchstart', function (event) { //当滚动开始，获取初始位置
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];
                    oldX = touch.pageX;
                    oldY = touch.pageY;
                }
            }, false);
        },
        touchMove:function(obj){
            obj.addEventListener('touchmove', function (event) { //当滚动中，改变元素大的位置
                if (event.targetTouches.length == 1) {
                    var touch = event.targetTouches[0];
                    if (touch.pageX - oldX > 50) {
                        alert('向右');
                    } else if (touch.pageX - oldX < -50) {
                        alert('向左');
                    }
                    if (touch.pageY - oldY > 50) {
                        alert('向上');
                    } else if (touch.pageY - oldY < -50) {
                        alert('向下');
                    }

                }
            }, false);
        },
        touchEnd:function(obj){
            obj.addEventListener('touchend', function (event) {
                if (event.targetTouches.length == 1) { //当前dom元素上的手指的一个列表
                    var touch = event.targetTouches[0];
                }
            }, false);
        }
    };
