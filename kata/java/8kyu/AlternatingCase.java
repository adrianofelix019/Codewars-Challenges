/*
 * Define String.prototype.toAlternatingCase (or a similar function/method such
 * as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected
 * language; see the initial solution for details) such that each lowercase
 * letter becomes uppercase and each uppercase letter becomes lowercase.
 * For example:
 * "hello world" == "HELLO WORLD"
 * "HELLO WORLD" == "hello world"
 * "hello WORLD" == "HELLO world"
 * "HeLLo WoRLD" == "hEllO wOrld"
 * "12345" == "12345"
 * "1a2b3c4d5e" == "1A2B3C4D5E"
 * "StringUtils.toAlternatingCase" == "sTRINGuTILS.TOaLTERNATINGcASE"
 */

import java.util.Arrays;
import java.util.stream.Collectors;

public class StringUtils {
  
  public static String toAlternativeString(String string) {
		String[] stringArray = string.split("");
		String resultString = Arrays.stream(stringArray).map(c -> {
			if (c.equals(c.toLowerCase()))
				return c.toUpperCase();
			else if (c.equals(c.toUpperCase()))
				return c.toLowerCase();
			return c;
		}).collect(Collectors.joining());
		
		return resultString;
  }
}