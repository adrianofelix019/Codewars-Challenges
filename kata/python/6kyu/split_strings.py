'''
Complete the solution so that it splits the string into pairs of two
characters. If the string contains an odd number of characters then it should
replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') # should return ['ab', 'c_']
solution('abcdef') # should return ['ab', 'cd', 'ef']
'''

from functools import reduce

# Dividir uma string inteira em pares de caracteres
# Caso a sobre um caractere sozinho formar uma par com _
def solution(s):
    result = []
    for i in range(0, len(s)-1, 2):
        result.append(s[i] + s[i+1])
    
    if len(s) % 2 == 1:
        result.append(s[-1]+'_')
    return result


print(solution('abc')) # should return ['ab', 'c_']
print(solution('abcdef')) # should return ['ab', 'cd', 'ef']
