import { parseHourString } from "./parse-hour-string";

export async function getMillisecondsFromMidnight(str) {
  const { hours, minutes } = await parseHourString(str);

  const totalMilliseconds = (hours * 3600 + minutes * 60) * 1000;

  return totalMilliseconds;
}
