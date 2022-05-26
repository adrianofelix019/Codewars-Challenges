# Time to test your basic knowledge in functions! Return the odds from a list:
#
# [1, 2, 3, 4, 5]  -->  [1, 3, 5]
# [2, 4, 6]        -->  []

defmodule OnlyOdd do
  def odds(nums) do
    Enum.filter(nums, fn num -> rem(num, 2) == 1 end)
  end
end
