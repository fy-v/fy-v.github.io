// 获取整个文档（页面）的宽度，并将其赋值给pageX变量
var pageX = $(document).width();
// 获取整个文档（页面）的高度，并将其赋值给pageY变量
var pageY = $(document).height();
// 初始化用于记录鼠标纵坐标位置的变量，初始值设为0
var mouseY = 0;
// 初始化用于记录鼠标横坐标位置的变量，初始值设为0
var mouseX = 0;

// 为整个文档绑定一个'mousemove'（鼠标移动）事件监听器，当鼠标在文档内移动时会触发这个回调函数
$(document).mousemove(function(event) {
    // 在鼠标移动事件发生时，获取鼠标相对于文档的纵坐标位置（从页面顶部开始计算的距离）
    // 将该值赋给mouseY变量，用于后续计算
    mouseY = event.pageY;
    // 计算yAxis的值，这个值用于控制元素在垂直方向上的位置变化（比如CSS的translate属性在垂直方向的偏移量）
    // 计算公式：先计算鼠标位置与页面垂直中心位置的差值（pageY / 2 - mouseY），然后除以页面总高度pageY，
    // 最后乘以300，这样就根据鼠标在垂直方向上的位置得到了一个相应的缩放后的垂直偏移量值
    yAxis = (pageY / 2 - mouseY) / pageY * 300;

    // 获取鼠标相对于文档的横坐标位置（从页面左侧开始计算的距离），并将其除以-pageX（这里对横坐标位置做了取反等处理）
    // 然后赋值给mouseX变量，用于后续计算
    mouseX = event.pageX / -pageX;
    // 计算xAxis的值，这个值用于控制元素在水平方向上的位置变化（比如CSS的translate属性在水平方向的偏移量）
    // 计算公式：先将处理后的mouseX乘以-100，再减去100，得到一个根据鼠标水平位置变化的水平偏移量值
    xAxis = -mouseX * 100 - 100;

    // 使用jQuery的css方法，选择类名为'box__ghost-eyes'的元素，并设置它的CSS的'transform'属性
    // 'transform'属性的值通过字符串拼接的方式，设置了translate函数，将前面计算得到的xAxis（水平方向的偏移百分比）
    // 和yAxis（垂直方向的偏移百分比）传入，以此来动态改变元素的位置，实现根据鼠标移动而产生相应的视觉位置变化效果
    $('.box__ghost-eyes').css({
        'transform': 'translate(' + xAxis + '%,-' + yAxis + '%)'
    });
});