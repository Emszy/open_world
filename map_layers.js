var mid_dirt = new Image();
var mid_dirt2 = new Image();
var mid_dirt3 = new Image();
var sand1 = new Image();
var sand2 = new Image();
var sand3 = new Image();
var sand4 = new Image();
var light_dirt = new Image();
var grey_dirt = new Image();
var snow = new Image();
var snow1 = new Image();
var snow2 = new Image();
var snow3 = new Image();
var water1 = new Image();
var water2 = new Image();
var water3 = new Image();
var grass1 = new Image();
var grass2 = new Image();
var grass3 = new Image();

function random_int(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function populate_layer0()
{
  var m;
  var n = 0;
  var perc;
  for (x = 0; x < 23000; x++)
  {
    perc = (Math.random());
    m = random_int(1, 3);
    layer0[x] = m;
    if (perc < 0.90)
    {
      while (n < 50)
      {
        layer0[x + n] = m;
        layer0[x - n] = m;
        layer0[x + 151 + n] = m;
        layer0[x + 151 - n] = m;
        n++;
      }
    }
    n = 0;   
  }
}

function populate_layer1()
{
  var m = 0;
  var x = 0;
  for (var i = 0; i < 151; i++)
    {
      for (var j = 0; j < 151; j++)
      {
        m = random_int(4, 7);
        if (j < 40 && i > 120)
        {
          layer1[x] = m;
        }
        else
          layer1[x] = 0;
        x++;
      }
    }
  }

function populate_layer2()
{
  var m = 0;
  var x = 0;
  for (var i = 0; i < 151; i++)
  {
    for (var j = 0; j < 151; j++)
    {
      m = random_int(8, 11);
      if (j >= 39 && i > 110)
      {
        layer2[x] = m;
      }
      else
        layer2[x] = 0;
      x++;
    }
  }
}

function populate_layer3(layer)
{
  var m = 0;
  var x = 0;
  flag = 0;
  start = random_int(20, 90);
  end = random_int(start, start + 20);
  start_y = random_int(20, 90);
  end_y = random_int(start_y, start + 20);
  for (var i = 0; i < 151; i++)
  {
    for (var j = 0; j < 151; j++)
    {
       m = random_int(12, 14);
      if (j >= start + m && j <= end - m && i > start_y - m && i < end_y + m)
      {
        layer[x + 20] = m;
      }
      x++;
    }
    if (end > random_int(101, 150))
    {
      flag = 1;
    }
    if (flag === 0)
    {
      end++;
      start--;
    }
    if (flag === 1)
    {
      end--;
      start++;
    }
  }
}

function consolidate_layers()
{
  var layers = [];
  var x = 0;

  for (var i = 0; i < 151; i++)
  {
    for (var j = 0; j < 151; j++)
    {
      if (layer0[x] > 0)
      {
        layers[x] = new layer_obj(layer0[x], i * 128, j * 128, 128)
        game_map[x] = layers[x];
      }
      if (layer1[x] > 0)
      {
        layers[x] = new layer_obj(layer1[x], i * 128, j * 128, 128)
        game_map[x] = layers[x];
      }
      if (layer2[x] > 0)
      {
        layers[x] = new layer_obj(layer2[x], i * 128, j * 128, 128)
        game_map[x] = layers[x];
      }
      if (layer3[x] > 0)
      {
        layers[x] = new layer_obj(layer3[x], i * 128, j * 128, 128)
        game_map[x] = layers[x];
      }
      x++;
    }
  }
}


function draw_layer0(map_array, pos_x, pos_y, size_x = 128, size_y = 128)
{
  var x = 0;
  for (var i = 0; i < 151; i++)
  {
    pos_x = map_pos_x;
    for (var j = 0; j < 151; j++)
    {
      if (pos_x >= (canvas.width / 2) - (win_width * 2)
        && pos_y >= (canvas.height / 2) - (win_height * 2)
        && pos_x <= (canvas.width / 2) + (win_width * 2)
        && pos_y <= (canvas.height / 2) + (win_height * 2))
      {
        switch (map_array[x].id)
        {
          case 1:
            context.drawImage(mid_dirt, pos_x, pos_y, size_x, size_y);
            break;
          case 2:
            context.drawImage(mid_dirt2, pos_x, pos_y, size_x, size_y);
            break;
          case 3:
            context.drawImage(mid_dirt3, pos_x, pos_y, size_x, size_y);
            break;
          case 4:
            context.drawImage(snow, pos_x, pos_y, size_x, size_y);
            break;
          case 5:
            context.drawImage(snow1, pos_x, pos_y, size_x, size_y);
            break;
          case 6:
            context.drawImage(snow2, pos_x, pos_y, size_x, size_y);
            break;
          case 7:
            context.drawImage(snow3, pos_x, pos_y, size_x, size_y);
            break;
          case 8:
            context.drawImage(sand1, pos_x, pos_y, size_x, size_y);
            break;
          case 9:
            context.drawImage(sand2, pos_x, pos_y, size_x, size_y);
            break;
          case 10:
            context.drawImage(sand3, pos_x, pos_y, size_x, size_y);
            break;
          case 11:
            context.drawImage(sand4, pos_x, pos_y, size_x, size_y);
            break;
          case 12:
            context.drawImage(water1, pos_x, pos_y, size_x, size_y);
            break;
          case 13:
            context.drawImage(water2, pos_x, pos_y, size_x, size_y);
            break;
          case 14:
            context.drawImage(water3, pos_x, pos_y, size_x, size_y);
            break;
        }
      }
      x = x + 1;
      pos_x = pos_x + size_x;
    }
    pos_y = pos_y + size_y;
  }
}


mid_dirt.src  = "sprites/terrain/split_terrain/mid_dirt.png";
mid_dirt2.src  = "sprites/terrain/split_terrain/mid_dirt2.png";
mid_dirt3.src  = "sprites/terrain/split_terrain/mid_dirt3.png";
sand1.src  = "sprites/terrain/split_terrain/sand1.png";
sand2.src  = "sprites/terrain/split_terrain/sand2.png";
sand3.src  = "sprites/terrain/split_terrain/sand3.png";
sand4.src  = "sprites/terrain/split_terrain/sand4.png";
light_dirt.src  = "sprites/terrain/split_terrain/light_dirt.png";
grey_dirt.src  = "sprites/terrain/split_terrain/grey_dirt.png";
snow.src  = "sprites/terrain/split_terrain/snow.png";
snow1.src  = "sprites/terrain/split_terrain/snow1.png";
snow2.src  = "sprites/terrain/split_terrain/snow2.png";
snow3.src  = "sprites/terrain/split_terrain/snow3.png";
water1.src = "sprites/terrain/split_terrain/water1.png";
water2.src = "sprites/terrain/split_terrain/water2.png";
water3.src = "sprites/terrain/split_terrain/water3.png";
grass1.src = "sprites/terrain/split_terrain/grass1.png";
grass2.src = "sprites/terrain/split_terrain/grass2.png";
grass3.src = "sprites/terrain/split_terrain/grass3.png";


