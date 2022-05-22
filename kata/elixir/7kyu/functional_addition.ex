# Create a function add(n)/Add(n) which returns a function that always adds n
# to any number
#
# Note for Java: the return type and methods have not been provided to make it
# a bit more challenging.
#
# add_one = Kata.add(1)
# add_one.(3) # 4

defmodule Kata do
  def add(n) do
    fn m -> m + n end
  end
end
