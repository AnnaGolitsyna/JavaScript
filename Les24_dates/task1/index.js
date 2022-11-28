// input - date, days
// output - string
// algo
// create arr [week days] +++
// create f
// create new date -> get date +++
// get future date -> date + days
// get week day
const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

dayOfWeek(new Date(2022, 10, 5), 10);
dayOfWeek(new Date(2022, 0, 11), 20);
dayOfWeek(new Date(2021, 9, 25), 10);
dayOfWeek(new Date(2022, 4, 1), 10);


