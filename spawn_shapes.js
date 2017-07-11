function spawn_squares()
{
  var x = 0;
  while (x < spawn_amount)
  {
      if (square[x] && square[x].x - player_x < 750 && square[x].y - player_y < 750 && player_x - square[x].x < 750 && player_y - square[x].y < 750)
      {
        draw_squares(square[x].x, square[x].y, 25, 25, square[x].color);
      }

    if (square[x] && square[x].x + square[x].hit_x - player_x < 50 && square[x].y + square[x].hit_y - player_y < 50 && player_x - square[x].x - square[x].hit_x < 50 && player_y - square[x].y - square[x].hit_y < 50)
    {
      square.color = red;
      player.squares.push(square[x]);
      square.splice(x, 1);
    }
    x++;
  }

}

function spawn_triangles()
{
  var x = 0;
  x = 0;
  while (x < spawn_amount)
  {
    if (triangle[x] && triangle[x].x - player_x < 750 && triangle[x].y - player_y < 750 && player_x - triangle[x].x < 750 && player_y - triangle[x].y < 750)
    {
      context.fillStyle = triangle[x].color;
      drawTriangle(context, triangle[x].x + map_pos_x, triangle[x].y + map_pos_y, triangle[x].width, triangle[x].height, context.fill);
      context.fillStyle = "black";
    }
    if (triangle[x] && triangle[x].x - player_x < 50 && triangle[x].y + triangle[x].hit_y - player_y < 50 && player_x - triangle[x].x - triangle[x].hit_x < 50 && player_y - triangle[x].y - triangle[x].hit_y < 50)
    {
      triangle[x].color = red;
      player.triangles.push(triangle[x]);
      triangle.splice(x, 1);
    }
      x++;
  }

}

function spawn_stars()
{
  var x;

  x = 0;
  while (x < spawn_amount)
  {
    if (star[x] && star[x].x - player_x < 750 && star[x].y - player_y < 750 && player_x - star[x].x < 750 && player_y - star[x].y < 750)
    {
      context.fillStyle = star[x].color;
      draw_star(context, star[x].x + map_pos_x, star[x].y + map_pos_y, 5, 5, 2);
      context.fillStyle = "black";
    }
     if (star[x] && star[x].x - player_x < 35 && star[x].y - player_y < 35 && player_x - star[x].x < 35 && player_y - star[x].y < 35)
    {
      star[x].color = red;
      player.stars.push(star[x]);
      star.splice(x, 1);
    }
    x++;
  }
}

function spawn_moons()
{
  var x;

  x = 0;
  while (x < spawn_amount)
  {
    if (moon[x] && moon[x].x - player_x < 750 && moon[x].y - player_y < 750 && player_x - moon[x].x < 750 && player_y - moon[x].y < 750)
    {
      context.fillStyle = moon[x].color;
      draw_moon(moon[x].x + map_pos_x, moon[x].y + map_pos_y);
      context.fillStyle = "black";
    }
     if (moon[x] && moon[x].x + 30 - player_x < 30 && moon[x].y + 50 - player_y < 50 && player_x - moon[x].x  - 10 < 50 && player_y - moon[x].y - 10 < 50)
    {
      moon[x].color = red;
      player.moons.push(moon[x]);
      moon.splice(x, 1);
    }
    x++;
  }
}

function spawn_hexagons()
{
  var x;

  x = 0;
  while (x < spawn_amount)
  {
    if (hexagons[x] && hexagons[x].x - player_x < 750 && hexagons[x].y - player_y < 750 && player_x - hexagons[x].x < 750 && player_y - hexagons[x].y < 750)
    {
      context.fillStyle = hexagons[x].color;
      draw_polygon(hexagons[x].x + map_pos_x, hexagons[x].y + map_pos_y, hexagons[x].sides, hexagons[x].color, hexagons[x].size);
      context.fillStyle = "black";
    }
     if (hexagons[x] && hexagons[x].x - player_x < 30 && hexagons[x].y - player_y < 50 && player_x - hexagons[x].x  < 50 && player_y - hexagons[x].y  < 50)
    {
      hexagons[x].color = red;
      player.hexagons.push(hexagons[x]);
      hexagons.splice(x, 1);
    }
    x++;
  }

}

function spawn_octogons()
{
  var x;

  x = 0;
  while (x < spawn_amount)
  {
    if (octogons[x] && octogons[x].x - player_x < 750 && octogons[x].y - player_y < 750 && player_x - octogons[x].x < 750 && player_y - octogons[x].y < 750)
    {
      context.fillStyle = octogons[x].color;
      draw_polygon(octogons[x].x + map_pos_x, octogons[x].y + map_pos_y, octogons[x].sides, octogons[x].color, octogons[x].size);
      context.fillStyle = "black";
    }
     if (octogons[x] && octogons[x].x - player_x < 30 && octogons[x].y - player_y < 50 && player_x - octogons[x].x  < 50 && player_y - octogons[x].y  < 50)
    {
      player.octogons.push(octogons[x]);
      octogons.splice(x, 1);
    }
    x++;
  }
}

function spawn_shapes()
{
  
  spawn_player();
  spawn_squares();
  spawn_triangles();
  spawn_stars();
  spawn_moons();
  spawn_hexagons();
  spawn_octogons();
}