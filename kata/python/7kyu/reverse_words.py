# Complete the function that accepts a string parameter, and reverses each word 
# in the string. All spaces in the string should be retained.
# 
# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

# def reverse_words(text):
#     reversed_words_list = map(lambda word: word[::-1], text.split())
#     return " ".join(reversed_words_list)

def reverse_words(text):
    reversed_list = map(lambda word: word[::-1], text.split(' '))
    return " ".join(reversed_list)
