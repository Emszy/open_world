function push_coordinates(u1, u2, u3,
                          uf1, uf2, uf3,
                          d1, d2, d3,
                          df1, df2, df3,
                          r1, r2, r3,
                          rf1, rf2, rf3,
                          l1, l2, l3,
                          lf1, lf2, lf3,
                          )
{
  var up = [];
  var upfight = [];
  var down = [];
  var downfight = [];
  var left = [];
  var leftfight = [];
  var right = [];
  var rightfight = [];

  var ret = [];

  up.push(u1);
  up.push(u2);
  up.push(u3);

  upfight.push(uf1);
  upfight.push(uf2);
  upfight.push(uf3);

  down.push(d1);
  down.push(d2);
  down.push(d3);

  downfight.push(df1);
  downfight.push(df2);
  downfight.push(df3);

  right.push(r1);
  right.push(r2);
  right.push(r3);

  rightfight.push(rf1);
  rightfight.push(rf2);
  rightfight.push(rf3);

  left.push(l1);
  left.push(l2);
  left.push(l3);

  leftfight.push(lf1);
  leftfight.push(lf2);
  leftfight.push(lf3);

  ret.push(up);
  ret.push(upfight);
  ret.push(down);
  ret.push(downfight);
  ret.push(right);
  ret.push(rightfight);
  ret.push(left);
  ret.push(leftfight);
  return (ret);
}

function initialize_shapes()
{
  initialize_squares();
  initialize_stars();
  initialize_trees();
  initialize_rocks();
  castles.push(init_castle(random_int(0, 1500), random_int(0, 4000), (random_int(4, 20) * 2)));
  castles.push(init_castle(random_int(10000, 15000), random_int(10000, 15000), (random_int(4, 20) * 2)));

  var knight_pic_coord = push_coordinates(12, 14, 30, 42, 46, 48, 1, 2, 12, 11, 18, 28, 37, 35, 37, 11, 17, 28, 1, 12, 35, 11, 17, 28);
  var knight_archer_pic_coord = push_coordinates(6, 29, 38, 39, 45, 47, 6, 29, 38, 0, 7, 9, 6, 29, 38, 7, 39, 45, 6, 29, 38, 7, 39, 45);
  var forest_assassin_pic_coord = push_coordinates(16, 37, 30, 8, 11, 25, 16, 37, 30, 8, 11, 25, 7, 16,  30, 8, 11, 31, 7, 16, 30, 8, 11, 31);
  var forest_archer_pic_coord = push_coordinates(16, 37, 30, 19, 26, 29, 16, 37, 30, 19, 26, 29, 7, 16, 30, 19, 33, 29, 7, 16, 30, 19, 33, 29);
  var armored_pic_coord = push_coordinates(9, 14, 18, 7, 10, 27, 9, 14, 18, 7, 10, 27, 9, 14, 18, 7, 10, 27, 9, 14, 18, 7, 10, 27);
  for (var x = 0; x < 30; x++)
  {

      // init_armor_bandit();
      // init_armor_bandit_archer();
      // init_enemy("knight", 150, 30, 31, 0, knight_pic_coord);
      // init_enemy("knight archer", 150, 30, 31, 6, knight_archer_pic_coord);
      // init_enemy("forest assassin", 150, 40, 20, 31, forest_assassin_pic_coord);
      // init_enemy("forest archer", 130, 40, 20, 31, forest_archer_pic_coord);
      init_enemy("armored", 250, 15, 50, 0, armored_pic_coord);

  }
}

function init_armor_bandit()
{
  var random_x = random_int(0, 10000);
  var random_y = random_int(0, 1000);
  for (m = 0; m < 4; m++)
  {

  var bandit = new enemy("bandit", random_int(100, 150), random_int(3, 7), random_int(3, 8), random_x + random_int(400, 800), random_y + random_int(400, 800), "nothing");
  bandit.up[0] = new animation(16, 15, 30, 48, bandit.x, bandit.y, 48, 48, "bandit up1");
  bandit.up[1] = new animation(270, 15, 30, 48, bandit.x, bandit.y, 48, 48, "bandit up2");
  bandit.up[2] = new animation(398, 15, 30, 48, bandit.x, bandit.y, 48, 48, "bandit up3");

  bandit.attack_up[0] = new animation(82, 15, 38, 52, bandit.x, bandit.y, 48, 48, "bandit attack_up1");
  bandit.attack_up[1] = new animation(338, 15, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_up2");
  bandit.attack_up[2] = new animation(2258, 15, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_up3");

  bandit.down[0] = new animation(16, 142, 32, 52, bandit.x, bandit.y, 48, 48, "bandit down1");
  bandit.down[1] = new animation(270, 142, 32, 52, bandit.x, bandit.y, 48, 48, "bandit down2");
  bandit.down[2] = new animation(398, 142, 32, 52, bandit.x, bandit.y, 48, 48, "bandit down3");

  bandit.attack_down[0] = new animation(82, 142, 46, 52, bandit.x, bandit.y, 48, 48, "bandit attack_down1");
  bandit.attack_down[1] = new animation(338, 142, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_down2");
  bandit.attack_down[2] = new animation(2258, 142, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_down3");

  bandit.right[0] = new animation(20, 207, 32, 52, bandit.x, bandit.y, 48, 48, "bandit right1");
  bandit.right[1] = new animation(270, 207, 32, 52, bandit.x, bandit.y, 48, 48, "bandit right2");
  bandit.right[2] = new animation(398, 207, 32, 52, bandit.x, bandit.y, 48, 48, "bandit right3");

  bandit.attack_right[0] = new animation(82, 207, 46, 52, bandit.x, bandit.y, 48, 48, "bandit attack_right1");
  bandit.attack_right[1] = new animation(338, 207, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_right2");
  bandit.attack_right[2] = new animation(2258, 207, 46, 52, bandit.x, bandit.y, 48, 48, "bandit attack_right3");

  bandit.left[0] = new animation(20, 79, 32, 52, bandit.x, bandit.y, 48, 48, "bandit left1");
  bandit.left[1] = new animation(270, 79, 32, 52, bandit.x, bandit.y, 48, 48, "bandit left2");
  bandit.left[2] = new animation(398, 79, 32, 52, bandit.x, bandit.y, 48, 48, "bandit left3");

  bandit.attack_left[0] = new animation(68, 79, 46, 52, bandit.x, bandit.y, 48, 48, "bandit attack_left1");
  bandit.attack_left[1] = new animation(338, 79, 36, 52, bandit.x, bandit.y, 48, 48, "bandit attack_left2");
  bandit.attack_left[2] = new animation(2240, 79, 46, 52, bandit.x, bandit.y, 48, 48, "bandit attack_left3");

    for (var n = 0; n < 4; n++)
    {
      bandit.waypoints.push(new waypt(random_x + random_int(400, 2000), random_y + random_int(400, 2000)));
    }
    enemies.push(bandit);
  }
}

function init_armor_bandit_archer()
{
  var random_x = random_int(0, 10000);
  var random_y = random_int(0, 1000);
  for (m = 0; m < 4; m++)
  {
    var bandit = new enemy("bandit archer", random_int(100, 150), random_int(7, 20), random_int(3, 20), random_x + random_int(400, 800), random_y + random_int(400, 800), "nothing");
    bandit.up[0] = new animation(16, 15, 30, 48, bandit.x, bandit.y, 48, 48, "archer up1");
    bandit.up[1] = new animation(270, 15, 30, 48, bandit.x, bandit.y, 48, 48, "archer up2");
    bandit.up[2] = new animation(398, 15, 30, 48, bandit.x, bandit.y, 48, 48, "archer up3");

    bandit.attack_up[0] = new animation(207, 4, 38, 52, bandit.x, bandit.y, 48, 48, "archer attack_up1");
    bandit.attack_up[1] = new animation(719, 5, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_up2");
    bandit.attack_up[2] = new animation(2319, 7, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_up3");

    bandit.down[0] = new animation(16, 142, 32, 52, bandit.x, bandit.y, 48, 48, "archer down1");
    bandit.down[1] = new animation(270, 142, 32, 52, bandit.x, bandit.y, 48, 48, "archer down2");
    bandit.down[2] = new animation(398, 142, 32, 52, bandit.x, bandit.y, 48, 48, "archer down3");

    bandit.attack_down[0] = new animation(208, 141, 46, 52, bandit.x, bandit.y, 48, 48, "archer attack_down1");
    bandit.attack_down[1] = new animation(718, 141, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_down2");
    bandit.attack_down[2] = new animation(2702, 141, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_down3");

    bandit.right[0] = new animation(20, 207, 32, 52, bandit.x, bandit.y, 48, 48, "archer right1");
    bandit.right[1] = new animation(270, 207, 32, 52, bandit.x, bandit.y, 48, 48, "archer right2");
    bandit.right[2] = new animation(398, 207, 32, 52, bandit.x, bandit.y, 48, 48, "archer right3");

    bandit.attack_right[0] = new animation(210, 202, 46, 52, bandit.x, bandit.y, 48, 48, "archer attack_right1");
    bandit.attack_right[1] = new animation(1872, 200, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_right2");
    bandit.attack_right[2] = new animation(2705, 202, 46, 52, bandit.x, bandit.y, 48, 48, "archer attack_right3");

    bandit.left[0] = new animation(20, 79, 32, 52, bandit.x, bandit.y, 48, 48, "archer left1");
    bandit.left[1] = new animation(270, 79, 32, 52, bandit.x, bandit.y, 48, 48, "archer left2");
    bandit.left[2] = new animation(398, 79, 32, 52, bandit.x, bandit.y, 48, 48, "archer left3");

    bandit.attack_left[0] = new animation(205, 74, 46, 52, bandit.x, bandit.y, 48, 48, "archer attack_left1");
    bandit.attack_left[1] = new animation(705, 70, 36, 52, bandit.x, bandit.y, 48, 48, "archer attack_left2");
    bandit.attack_left[2] = new animation(2311, 76, 46, 52, bandit.x, bandit.y, 48, 48, "archer attack_left3");

    for (var n = 0; n < 4; n++)
    {
      bandit.waypoints.push(new waypt(random_x + random_int(400, 2000), random_y + random_int(400, 2000)));
    }
    enemies.push(bandit);
  }
}

function init_enemy(type, hp, str, def, archer_power, anim)
{
   var random_x = random_int(0, 10000);
  var random_y = random_int(0, 1000);
  for (m = 0; m < 4; m++)
  {
  var health = random_int(hp, hp + 150);
  var strength = random_int(str, str +  15);
  var defence = random_int(def, def + 13);

  var bad_guy = new enemy(type, health, strength, defence, random_x + random_int(400, 800), random_y + random_int(400, 800), "nothing");
  bad_guy.up[0] = new animation(64 * anim[0][0], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy up1");
  bad_guy.up[1] = new animation(64 * anim[0][1], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy up2");
  bad_guy.up[2] = new animation(64 * anim[0][2], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy up3");

  bad_guy.attack_up[0] = new animation(64 * anim[1][0], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_up1");
  bad_guy.attack_up[1] = new animation(64 * anim[1][1], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_up2");
  bad_guy.attack_up[2] = new animation(64 * anim[1][2], 0, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_up3");

  bad_guy.down[0] = new animation(64 * anim[2][0], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy down1");
  bad_guy.down[1] = new animation(64 * anim[2][1], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy down2");
  bad_guy.down[2] = new animation(64 * anim[2][2], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy down3");

  bad_guy.attack_down[0] = new animation(64 * anim[3][0], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_down1");
  bad_guy.attack_down[1] = new animation(64 * anim[3][1], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_down2");
  bad_guy.attack_down[2] = new animation(64 * anim[3][2], 64 * 2, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_down3");

  bad_guy.right[0] = new animation(64 * anim[4][0], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy right1");
  bad_guy.right[1] = new animation(64 * anim[4][1], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy right2");
  bad_guy.right[2] = new animation(64 * anim[4][2], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy right3");

  bad_guy.attack_right[0] = new animation(64 * anim[5][0], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_right1");
  bad_guy.attack_right[1] = new animation(64 * anim[5][1], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_right2");
  bad_guy.attack_right[2] = new animation(64 * anim[5][2], 64 * 3, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_right3");

  bad_guy.left[0] = new animation(64 * anim[6][0], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy left1");
  bad_guy.left[1] = new animation(64 * anim[6][1], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy left2");
  bad_guy.left[2] = new animation(64 * anim[6][2], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy left3");

  bad_guy.attack_left[0] = new animation(64 * anim[7][0], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_left1");
  bad_guy.attack_left[1] = new animation(64 * anim[7][1], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_left2");
  bad_guy.attack_left[2] = new animation(64 * anim[7][2], 64 * 1, 64, 64, bad_guy.x, bad_guy.y, 64, 64, "bad_guy attack_left3");
  bad_guy.archer_power = random_int(archer_power, archer_power + 20);
    for (var n = 0; n < 4; n++)
    {
      bad_guy.waypoints.push(new waypt(random_x + random_int(400, 2000), random_y + random_int(400, 2000)));
    }
    enemies.push(bad_guy);
  }

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
