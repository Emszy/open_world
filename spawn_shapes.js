
function spawn_shapes()
{
  spawn_castle();
  spawn_castle_items();
  spawn_player();
  spawn_trees();
  spawn_rocks();
  spawn_squares();
  spawn_stars();
  spawn_enemies();
}

function spawn_castle_items()
{
  for(var x = 0; x < crate.length; x++)
  {
    if (crate[x] && crate[x].map_pos_x - player_x < 750 && crate[x].map_pos_y - player_y < 750 && player_x - crate[x].map_pos_x < 750 && player_y - crate[x].map_pos_y < 750)
    {
      context.drawImage(castle_image, crate[x].atlas_pos_x, crate[x].atlas_pos_y, crate[x].size_x, crate[x].size_y, crate[x].map_pos_x + map_pos_x, crate[x].map_pos_y + map_pos_y, crate[x].map_size_x, crate[x].map_size_y);
      collision(player_x, player_y, 64, 64, crate[x].map_pos_x, crate[x].map_pos_y);
    }
  }
  for(var x = 0; x < anvils.length; x++)
  {
    if (anvils[x] && anvils[x].map_pos_x - player_x < 750 && anvils[x].map_pos_y - player_y < 750 && player_x - anvils[x].map_pos_x < 750 && player_y - anvils[x].map_pos_y < 750)
    {
      context.drawImage(castle_image, anvils[x].atlas_pos_x, anvils[x].atlas_pos_y, anvils[x].size_x, anvils[x].size_y, anvils[x].map_pos_x + map_pos_x, anvils[x].map_pos_y + map_pos_y, anvils[x].map_size_x, anvils[x].map_size_y);
      collision(player_x, player_y, 64, 64, anvils[x].map_pos_x, anvils[x].map_pos_y);
    }
  }
}

function spawn_castle()
{
  for(var x = 0; x < castles.length; x++)
  {
    for(var y = 0; y < castles[x].length; y++)
    {
      if (castles[x] && castles[x][y].map_pos_x - player_x < 900 && castles[x][y].map_pos_y - player_y < 900 && player_x - castles[x][y].map_pos_x < 900 && player_y - castles[x][y].map_pos_y < 900)
      {
        context.drawImage(castle_image, castles[x][y].atlas_pos_x, castles[x][y].atlas_pos_y, castles[x][y].size_x, castles[x][y].size_y, castles[x][y].map_pos_x + map_pos_x, castles[x][y].map_pos_y + map_pos_y, castles[x][y].map_size_x, castles[x][y].map_size_y);
        if (castles[x][y].type == "castle wall")
        {
          collision(player_x, player_y, 64, 64, castles[x][y].map_pos_x, castles[x][y].map_pos_y, 128, 128);
        }
        else if (castles[x][y].type == "castle corner")
        {
          collision(player_x, player_y, 64, 64, castles[x][y].map_pos_x, castles[x][y].map_pos_y, 256, 256);
        }
      }
    }
  }
}

function spawn_rocks()
{
  var x = 0;
  while (x < spawn_amount)
  {
      if (rock[x] && rock[x].x - player_x < 750 && rock[x].y - player_y < 750 && player_x - rock[x].x < 750 && player_y - rock[x].y < 750)
      {
          context.drawImage(rock[x].image, 0, 0, 128, 128, rock[x].x + map_pos_x, rock[x].y + map_pos_y, 128, 128);
          context.drawImage(rock[x].mineral.image, rock[x].mineral.atlas_pos_x, rock[x].mineral.atlas_pos_y, 16, 16, rock[x].x + map_pos_x, rock[x].y + map_pos_y, 32, 32);
          collision(player_x, player_y, 64, 64, rock[x].x, rock[x].y, 128, 128);
      }
    x++;
  }
}

function spawn_trees()
{
  var x = 0;
  while (x < trees.length)
  {
      if (trees[x] && trees[x].x - player_x < 750 && trees[x].y - player_y < 750 && player_x - trees[x].x < 750 && player_y - trees[x].y < 750)
      {
          context.drawImage(trees[x].image, trees[x].atlas_pos, 0, 128, 128, trees[x].x + map_pos_x, trees[x].y + map_pos_y, 128, 128);
          collision(player_x, player_y, 64, 64, trees[x].x, trees[x].y, 128, 128, 1);

      }
    x++;
  }
}

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
