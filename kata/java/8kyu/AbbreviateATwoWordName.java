/* Write a function to convert a name into initials. This kata strictly takes
 * two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * It should look like this:
 *
 * Sam Harris => S.H
 * patrick feeney => P.F 
 */

import java.util.Arrays;
import java.util.stream.Collectors;

public class AbbreviateTwoWords {

  public static String abbrevName(String name) {
    String[] nameArr = name.split(" ");
        return Arrays.stream(nameArr)
                .map(n -> String.valueOf(n.charAt(0)).toUpperCase())
                .collect(Collectors.joining("."));
  }
}