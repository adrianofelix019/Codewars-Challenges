# Inspired by the development team at Vooza, write the function that
# - accepts the name of a programmer, and
# - returns the number of lightsabers owned by that person.
#
# The only person who owns lightsabers is Zach, by the way.
# He owns 18, which is an awesome number of lightsabers.
# Anyone else owns 0.
#
# For example(Input --> Output):
# "anyone else" --> 0
# "Zach" --> 18

defmodule Lightsabers do
  def how_many_lightsabers_do_you_own("Zach"), do: 18

  def how_many_lightsabers_do_you_own(_), do: 0
end
