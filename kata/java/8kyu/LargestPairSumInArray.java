/*
 * Given a sequence of numbers, find the largest pair sum in the sequence.
 *
 * For example
 * 
 * [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
 * [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
 * Input sequence contains minimum two elements and every element is an integer.
 */

public class Solution{
    public static int largestPairSum(int[] numbers){
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : numbers) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest) {
                secondLargest = num;
            }
        }

        return largest + secondLargest;
    }
}
