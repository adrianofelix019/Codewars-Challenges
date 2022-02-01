/*
 * Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
 *
 * Your task is to make 'Past' function which returns time converted to milliseconds.
 *
 * Example:
 * past(0, 1, 1) == 61000
 */

function past(h, m, s) {
  const seconds = s * 1000
  const minutes = m * 60 * 1000
  const hours = h * 60 * 60 * 1000
  return seconds + minutes + hours
}
