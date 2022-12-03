// algo
// create f shmoment
// => input - date, output - new date /as result methods obj/
// create obj => with funcs on date types
// create copyDate
// create methods obj with add, subtract, result
// add => input - dateType, num; output - this
// subtract => input - dateType, num; output - this
// result => input - none, num; output - copyDate
// add, subtract => call func by obj key with arg (dateType, num)


export const funcsOnDateTypes = {
  years: (date, num) => new Date(date.setFullYear(date.getFullYear() + num)),
  months: (date, num) => new Date(date.setMonth(date.getMonth() + num)),
  days: (date, num) => new Date(date.setDate(date.getDate() + num)),
  hours: (date, num) => new Date(date.setHours(date.getHours() + num)),
  minutes: (date, num) => new Date(date.setMinutes(date.getMinutes() + num)),
  seconds: (date, num) => new Date(date.setSeconds(date.getSeconds() + num)),
  milliseconds: (date, num) => new Date(date.setMilliseconds(date.getMilliseconds() + num)),
};


export const shmoment = date => {
  let dateForChange = new Date(date);

  const calcDate = {
    add(dateType, num) {
      dateForChange = funcsOnDateTypes[dateType](dateForChange, num);
      return this;
    },
    subtract(dateType, num) {
      dateForChange = funcsOnDateTypes[dateType](dateForChange, -num);
      return this;
    },
    result() {
      return dateForChange;
    },
  };
   return calcDate;
};

// console.log(
//   shmoment(new Date(2020, 0, 7, 17, 17, 17))
//     .add('minutes', 2)
//     .add('days', 8)
//     .subtract('years', 1)
//     .result(),
// );
