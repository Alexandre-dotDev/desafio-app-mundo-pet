export async function parseHourString(timeStr) {
  const [hours, minutes] = await timeStr.split(":").map(Number);

  return { hours, minutes };
}
