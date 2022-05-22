# Create a function that takes an integer as an argument and returns "Even"
# for even numbers or "Odd" for odd numbers.

defmodule Codewars do
  def even_or_odd(n) when rem(n, 2) == 0, do: "Even"
  def even_or_odd(_), do: "Odd"
end
