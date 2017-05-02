/**
 * 绘制单个饼块
 * @param  {[type]}  ctx     绘制上下文
 * @param  {[type]}  point   绘制的饼块的原点
 * @param  {[type]}  radius  绘制的饼块的半径
 * @param  {[type]}  start   绘制的饼块的开始弧度
 * @param  {[type]}  end     绘制的饼块的结束弧度
 * @param  {[type]}  color   绘制饼块的颜色
 * @param  {Boolean} isClear 是否只是做清除处理（保证不会出现脏图）
 * @return {[type]}          [description]
 */
module.exports = function (ctx, point, radius, start, end, color, isClear) {
    //绘制饼块
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = color || "white";
    ctx.strokeStyle = "white";
    var tempStart = start;
    var tempEnd = end;
    if(Math.abs(start - end) == Math.PI*2){
        tempStart = 0;
        tempEnd = Math.PI*2;
    }
    ctx.moveTo(point.x, point.y);
    ctx.lineTo(point.x + radius * Math.cos(tempStart), point.y + radius * Math.sin(tempStart));

    ctx.arc(point.x, point.y, radius, tempStart, tempEnd, false);
    ctx.lineTo(point.x, point.y);
    if (isClear) {
        ctx.stroke();
    }
    ctx.fill();
    ctx.restore();
}
