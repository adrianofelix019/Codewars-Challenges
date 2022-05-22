# Write a function that returns the total surface area and volume of a box as
# a list:
# {area, volume}

defmodule Measurer do
  def get_size(width, height, depth) do
    volume = width * height * depth
    surface_area = 2*(width*height) + 2*(width*depth) + 2*(height*depth)
    {surface_area, volume}
  end
end
