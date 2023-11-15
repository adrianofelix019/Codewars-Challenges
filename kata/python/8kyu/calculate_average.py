# Write a function which calculates the average of the numbers in a given list.
#
# Note: Empty arrays should return 0.


def find_average(numbers):
    if len(numbers) == 0:
        return 0
    
    sum = 0
    for number in numbers:
        sum += number
    
    return sum / len(numbers)


print(find_average([1, 2, 3]))
print(find_average([]))