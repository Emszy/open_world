function spawn_player()
{
  context.fillStyle = "red";
  context.beginPath();
  context.rect((canvas.width / 2) + 8, (canvas.height / 2 - 20), player.health / 2, 4);
  context.drawImage(player.image, canvas.width / 2 , canvas.height / 2, 64, 64);
  context.fill();
  context.fillStyle = "black";
}

function spawn_player_items()
{
  health();
  spawn_wall();
  spawn_bullets();
  bullet_hit_wall();
}

function health()
{
  if(player.health < 0)
  {
    player.deaths++;
    player.health = 100;
  }
}

function spawn_bullets()
{
  var x = 0;
  while (player.bullets[x])
  {
    context.fillStyle = "red";
    draw_star(context, player.bullets[x].x - 12 + map_pos_x, player.bullets[x].y - 12 + map_pos_y, 5, 5, 2);
    player.bullets[x].x += player.bullets[x].vel_x;
    player.bullets[x].y += player.bullets[x].vel_y;
    if (player.bullets[x] && (player.bullets[x].x > total_map_width + 50 || player.bullets[x].x < -50 || player.bullets[x].y > total_map_height + 50 ||  player.bullets[x].y < -50 || player.bullets[x].timer > 5000))
    {
      player.bullets.splice(x, 1);
    }     
    x++;
  }
}

function spawn_wall()
{
  var x = 0;
  while (player.walls[x])
  {
      if (player.walls[x] && player.walls[x] && player.walls[x].x - player_x < 750 && player.walls[x].y - player_y < 750 && player_x - player.walls[x].x < 750 && player_y - player.walls[x].y < 750)
      {
        context.beginPath();
        context.fillStyle = player.walls[x].color;
        context.rect((player.walls[x].x - 12) + map_pos_x, player.walls[x].y - 12 + map_pos_y, 25, 25);
        context.fill();
        context.fillStyle = "black";
      }
    x++;
  }
}
