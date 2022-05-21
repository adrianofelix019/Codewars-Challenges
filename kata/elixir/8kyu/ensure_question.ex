# Given a string, write a function that returns the string with a question mark
# ("?") appends to the end, unless the original string ends with a question
# mark, in which case, returns the original string.
#
# For example (Input --> Output)
#
# "Yes" --> "Yes?"
# "No?" --> "No?"

defmodule Parsers do
  def ensure_question(s) do
    if (String.ends_with?(s, "?")) do
      s
    else
      s <> "?"
    end
  end
end
