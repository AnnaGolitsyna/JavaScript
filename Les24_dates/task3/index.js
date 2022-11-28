// input - startDate, endDate
// output - 111d 1h 11m 16s
// algo
// create f
// creat const new dates in ms - date.now
// get date difference
// get amount d, h, m, s

export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const msDay = 86400000;
  const msHour = 3600000;
  const msMin = 60000;
  const msSec = 1000;

  let diffMs = end - start;
  if (startDate > endDate) {
    diffMs *= -1;
  }

  const amountDay = Math.trunc(diffMs / msDay);
  const amountHour = Math.trunc((diffMs - amountDay * msDay) / msHour);
  const amountMin = Math.trunc((diffMs - amountDay * msDay - amountHour * msHour) / msMin);
  const amountSec = Math.trunc(
    (diffMs - amountDay * msDay - amountHour * msHour - amountMin * msMin) / msSec,
  );
    return `${amountDay}d ${amountHour}h ${amountMin}m ${amountSec}s`;
};

getDiff(new Date(2022, 10, 28, 15, 47), new Date(2022, 10, 29, 16, 48, 11));
getDiff(new Date(2021, 10, 28, 15, 47), new Date(2022, 10, 29, 16, 48, 11));
getDiff(new Date(2022, 8, 29, 16, 48, 11), new Date(2022, 10, 29, 16, 48, 11));
getDiff(new Date(2022, 10, 29, 16, 48, 11), new Date(2021, 10, 29, 16, 48, 11));
getDiff(new Date(2022, 10, 28, 10, 17), new Date(2022, 10, 29, 16, 48, 11));
getDiff(new Date(2022, 10, 28, 15, 47, 5), new Date(2022, 10, 29, 16, 48, 11));
