function initialize_shapes()
{
  initialize_squares();
  initialize_triangles();
  initialize_polygon(hexagons, 6);
  initialize_polygon(octogons, 8);
  initialize_stars();
  initialize_moons();
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

function initialize_triangles()
{
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      var color = colors[Math.floor((Math.random() * colors.length))];
      triangle[x] = new triangles(100, 1, 1, rand_pos_x, rand_pos_y, "sword", color);
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

function initialize_moons()
{
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      var color = colors[Math.floor((Math.random() * colors.length))];
      moon[x] = new moons(100, 1, 1, rand_pos_x, rand_pos_y, "sword", color);
  }
}

function initialize_polygon(array, sides)
{
  for (var x = 0; x < spawn_amount; x++)
  {
      var rand_pos_x = Math.floor((Math.random() * total_map_width) + 1);
      var rand_pos_y = Math.floor((Math.random() * total_map_height) + 1);
      var color = colors[Math.floor((Math.random() * colors.length))];
      array[x] = new polygon(100, 1, 1, rand_pos_x, rand_pos_y, "sword", color, sides);
  }
}