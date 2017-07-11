
function draw_star(ctx, x, y, r, p, m)
{
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < p; i++)
    {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r * m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
}

function drawTriangle(context, x, y, triangleWidth, triangleHeight, fillStyle)
{
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + triangleWidth / 2, y + triangleHeight);
  context.lineTo(x - triangleWidth / 2, y + triangleHeight);
  context.closePath();
  context.fillStyle = fillStyle;
  context.fill();
}

function draw_moon(offsetx, offsety)
{
    context.beginPath();
    context.arc(50 + offsetx, 25 + offsety, 25, 0.6 * Math.PI, 1.3 * Math.PI);
    context.bezierCurveTo(20 + offsetx, 5 + offsety, -4 + offsetx, 31 + offsety, 35 + offsetx, 50 + offsety);
    context.fill();
}

function draw_polygon(x, y, numberOfSides, color, size)
{
  var numberOfSides = numberOfSides;
  var size = size;
  var Xcenter = x;
  var Ycenter = y;

  context.beginPath();
  context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
  for (var i = 1; i <= numberOfSides;i += 1)
  {
    context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }
  context.fillStyle = color;
  context.fill();
}

function draw_squares(x, y, width, height, color)
{
  context.beginPath();
  context.fillStyle = color;
  context.rect(x + map_pos_x, y + map_pos_y , 25, 25);
  context.fill();
  context.fillStyle = "black";
}
 