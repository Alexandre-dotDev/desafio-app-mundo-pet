export async function getMillisecondsFromMidnight(str) {
  const [hours, minutes] = await str.split(":").map(Number);

  const totalMilliseconds = (hours * 3600 + minutes * 60) * 1000;

  return totalMilliseconds;
}
