/* Your task is to make a function that can take any non-negative integer as an
 * argument and return it with its digits in descending order. Essentially,
 * rearrange the digits to create the highest possible number.
 *
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class DescendingOrder {
  public static int sortDesc(final int num) {
    List<String> reversedNumArr = Arrays.stream(
                Integer.toString(num).split(""))
                .sorted(Collections.reverseOrder())
                .toList();
       String reversedNumStr = String.join("", reversedNumArr);

        return Integer.parseInt(reversedNumStr);
  }
}
