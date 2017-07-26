function initialize_shapes()
{
  initialize_squares();
  initialize_stars();
  initialize_trees();
  initialize_rocks();
  castles.push(init_castle(random_int(0, 1500), random_int(0, 4000), (random_int(4, 20) * 2)));
  castles.push(init_castle(random_int(10000, 15000), random_int(10000, 15000), (random_int(4, 20) * 2)));
  

}

function init_castle(orig_x, orig_y, size)
{
  var image_dist = size;
  var origin_x = orig_y;
  var origin_y = orig_x;
  var wall_offset = 128;
  var tower_dist = wall_offset * image_dist;
  var castle = [];

  if (image_dist % 2 == 1)
  {
      image_dist++;
  }
   //make castle corners;
    castle[0] = new castle_piece(castle_image, 196, 0, 116, 224, origin_x, origin_y + map_pos_y, 256, 256, "castle corner");
    castle[1] = new castle_piece(castle_image, 196, 0, 116, 224, origin_x + tower_dist, origin_y + map_pos_y, 256, 256, "castle corner");
    castle[2] = new castle_piece(castle_image, 196, 0, 116, 224, origin_x , origin_y + map_pos_y + tower_dist, 256, 256, "castle corner");
    castle[3] = new castle_piece(castle_image, 196, 0, 116, 224, origin_x + tower_dist , origin_y + map_pos_y + tower_dist, 256, 256, "castle corner");
    //make castle walls
    var z = 4;
    for (var x = 0; x < image_dist - 2; x++)
    {
      if (x == image_dist / 2)
      {
         castle[z] = new castle_piece(castle_image, 416, 96, 96, 96, origin_x + (256 + (128 * x)), origin_y + wall_offset, 128, 128, "castle door");
         z++;
         castle[z] = new castle_piece(castle_image, 416, 96, 96, 96, origin_x + (256 + (128 * x)), (origin_y + tower_dist) + wall_offset, 128, 128, "castle door");
         z++;
      }
      else
      {

        castle[z] = new castle_piece(castle_image, 416, 0, 96, 96, origin_x + (256 + (128 * x)), (origin_y + tower_dist) + wall_offset, 128, 128, "castle wall");
         z++;
         castle[z] = new castle_piece(castle_image, 416, 0, 96, 96, origin_x + (256 + (128 * x)), origin_y + wall_offset, 128, 128, "castle wall");
         z++;
          castle[z] = new castle_piece(castle_image, 224, 224, 64, 96, origin_x + (256 + (128 * x)), (origin_y + tower_dist) + wall_offset, 128, 128, "castle_flag"); // make flag on wall
         z++;
      }
       castle[z] = new castle_piece(castle_image, 416, 0, 96, 96, (origin_x + tower_dist + 128) , origin_y + wall_offset + (128 + (128 * x)), 128, 128, "castle wall");
       z++;
       castle[z] = new castle_piece(castle_image, 416, 0, 96, 96, origin_x, origin_y + wall_offset + (128 + (128 * x)), 128, 128, "castle wall");
       z++;
    }
    //make castle floor
    for (var x = 0; x < image_dist; x++)
    {
      for (var y = 0; y < image_dist - 2; y++)
      {
        castle[z] = new castle_piece(castle_image, 192, 318, 96, 96, (origin_x + 128) + (128 * x), (origin_y + 256) + (128 * y), 128, 128, "castle floor");
        z++;
      }
    }
    for (var x = 0; x < image_dist - 2; x++)
    {
      castle[z] = new castle_piece(castle_image, 192, 318, 96, 96, (origin_x + 256) + (128 * x), (origin_y) + (128 * image_dist), 128, 128, "castle floor");
      z++;
    }

    var i = crate.length;
    var j = anvils.length;
    for (var x = 0; x < image_dist; x++)
    {
      for (var y = 0; y < image_dist - 2; y++)
      {
        if (random_int(0, 100) > 95)
        {      
          crate[i] = new crates(castle_image, 224, 455, 64, 64, (origin_x + 128) + (128 * x) + random_int(1,100), (origin_y + 256) + (128 * y) + random_int(1,100), 64, 64);
          i++;
          crate[i] = new crates(castle_image, 290, 455, 32, 64, (origin_x + random_int(0, 128)) + (128 * x) + random_int(90,250), (origin_y + 256) + (128 * y) + random_int(98,200), 64, 64);
          i++;
          if (random_int(0, 100) > 97)
          {
            anvils[j] = new anvil(castle_image, 160, 256, 32, 32, (origin_x + 128) + (128 * x) + random_int(-1, -100), (origin_y + 256) + (128 * y) + random_int(1,100), 64, 64);
            j++;
          }
        }
      }
    }
    

    return (castle);
}

function initialize_rocks()
{
  var rocktype = "";
  var atlas_x;
  var atlas_y;
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      index = random_int(0, 7);
      switch(index)
      {
        case 0:
          rocktype = "amethyst";
          atlas_x = 64;
          atlas_y = 48;
          break;
        case 1:
          rocktype = "fluorite";
          atlas_x = 96;
          atlas_y = 48;
          break;
        case 2:
          rocktype = "stone";
          atlas_x = 16;
          atlas_y = 64;
          break;
        case 3:
          rocktype = "silver";
          atlas_x = 32;
          atlas_y = 64;
          break;
        case 4:
          rocktype = "iron"
          atlas_x = 16;
          atlas_y = 64;
          break;
        case 5:
          rocktype = "coal"
          atlas_x = 96;
          atlas_y = 64;
          break;
        case 6:
          rocktype = "moonrock"
          atlas_x = 0;
          atlas_y = 96;
          break;
        case 7:
          rocktype = "ruby"
          atlas_x = 48;
          atlas_y = 48;
          break;
      }
      for (n = 0; n < 3; n++)
          {
            var temp_pos_x = rand_pos_x + random_int(300, 550);
            var temp_pos_y = rand_pos_y + random_int(300, 550);
            rock[x] = new rocks(100, index, rock_srcs[index], temp_pos_x, temp_pos_y, rocktype, index, atlas_x, atlas_y);
            x++;
          }
       rock[x] = new rocks(100, index, rock_srcs[index], rand_pos_x, rand_pos_y, rocktype, index, atlas_x, atlas_y);

  }
}

function initialize_trees()
{
  logtype = "";
  for (var i = 0; i < spawn_amount + 200; i++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      index = random_int(0, 5);
      atlas_pos = random_int(0, 10);
      switch(index)
      {
        case 0:
          logtype = "log";
          break;
        case 1:
          logtype = "maple log";
          break;
        case 2:
          logtype = "oak";
          break;
        case 3:
          logtype = "cherry";
          break;
        case 4:
          logtype = "magic"
          break;
        case 5:
          logtype = "special"
          break;
      }
      if (atlas_pos > 5)
        atlas_pos = 128;
      else
        atlas_pos = 0;
      x = trees.length;
        for (n = 0; n < 20; n++)
          {
            var temp_pos_x = rand_pos_x + random_int(300, 1000);
            var temp_pos_y = rand_pos_y + random_int(300, 1000);
            trees[x] = new tree(100, index, tree_srcs[index], temp_pos_x, temp_pos_y, logtype, atlas_pos, index);
            x++;
          }
      trees[x] = new tree(100, index, tree_srcs[index], rand_pos_x, rand_pos_y, logtype, atlas_pos, index);
      x++;
  }
}

function initialize_squares()
{
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      var color = colors[Math.floor((Math.random() * colors.length))];
      square[x] = new squares(100, 1, 1, rand_pos_x, rand_pos_y, "sword", color);
  }
}

function initialize_stars()
{
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      var color = colors[Math.floor((Math.random() * colors.length))];
      star[x] = new stars(100, 1, 1, rand_pos_x, rand_pos_y, "sword", color);
  }
}
