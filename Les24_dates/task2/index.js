// input - date{}
// output - time UTC /format '06:43'/
// algo
// create formatter => intl.DateTimeFormay
// create f

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenwichTime = date => {
  const dateForUTC = new Date(date);
  return formatter.format(dateForUTC);
};

console.log(getGreenwichTime(new Date()));
