# Can you find the needle in the haystack?
# Write a function findNeedle() that takes an array full of junk but containing
# one "needle"
# After your function finds the needle it should return a message (as a string)
# that says:
# "found the needle at position " plus the index it found the needle, so:
# find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
# should return "found the needle at position 5"
# (in COBOL "found the needle at position 6")

defmodule Finder do
  import Enum

  def find_needle(haystack) do
    i = find_index(haystack, fn junk -> junk == "needle" end)
    "found the needle at position #{i}"
  end
end
