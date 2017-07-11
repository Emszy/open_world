function wall_clip()
{
  var x = 0;
   while (player.walls[x])
    {

      if (player_x > player.walls[x].x - 40 && player_x < player.walls[x].x - 10 && player_y > player.walls[x].y - 35 && player_y < player.walls[x].y + 35 )
      {
        map_pos_x += vel_x;
        player_x -= vel_x;
        if(keys[65])
        {
          map_pos_x -= vel_x;
          player_x += vel_x;
        }
      }
      if (player_x > player.walls[x].x + 10 && player_x < player.walls[x].x + 40 && player_y > player.walls[x].y - 35 && player_y < player.walls[x].y + 35 )
      {
        map_pos_x += vel_x;
        player_x -= vel_x;
        if(keys[68])
        {
          map_pos_x -= vel_x;
          player_x += vel_x;
        }
      }
      if (player_y > player.walls[x].y + 30 && player_y < player.walls[x].y + 40 && player_x > player.walls[x].x - 35 && player_x < player.walls[x].x + 35)
      {
         map_pos_y -= vel_y;
         player_y += vel_y;
         if(keys[83])
          {
          map_pos_y += vel_y;
          player_y -= vel_y;
        }
      }
      if (player_y < player.walls[x].y - 30 && player_y > player.walls[x].y - 40 && player_x > player.walls[x].x - 35 && player_x < player.walls[x].x + 35)
      {
        map_pos_y -= vel_y;
        player_y += vel_y;
        if(keys[87])
        {
          map_pos_y += vel_y;
          player_y -= vel_y;
        }
      }
      x++;
    }
}

function bullet_hit_wall()
{
  var x = 0;
  var y = 0;
   while (player.walls[x])
   {
    y = 0;
    while(player.bullets[y])
    {      
      if (player.bullets[y] && player.bullets[y].x > player.walls[x].x - 10 && player.bullets[y].x < player.walls[x].x - 5 && player.bullets[y].y > player.walls[x].y - 35 && player.bullets[y].y < player.walls[x].y + 35 )
        {
          player.bullets[y].x -= 5;
          player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].x > player.walls[x].x + 10 && player.bullets[y].x < player.walls[x].x + 20 && player.bullets[y].y > player.walls[x].y - 35 && player.bullets[y].y < player.walls[x].y + 35 )
        {
            player.bullets[y].x += 5;
            player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].y > player.walls[x].y + 10 && player.bullets[y].y < player.walls[x].y + 20 && player.bullets[y].x > player.walls[x].x - 35 && player.bullets[y].x < player.walls[x].x + 35)
        {
            player.bullets[y].y += 5;
            player.bullets[y].timer++;
        }
        if (player.bullets[y] && player.bullets[y].y < player.walls[x].y - 10 && player.bullets[y].y > player.walls[x].y - 20 && player.bullets[y].x > player.walls[x].x - 35 && player.bullets[y].x < player.walls[x].x + 35)
        {
            player.bullets[y].y -= 5;
            player.bullets[y].timer++;
        }
        y++;
    }
    x++;
  }

}