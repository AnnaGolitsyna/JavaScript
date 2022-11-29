// input - arr[{}, {}]
// output - {key:[value,...], ...}
// algo
// create f - export
// 1. create new arr +++
// 1.1 create arr with name Month +++
// 2. find students for birthMonth {key:[value,...]}
// 2.1 key => month
// 2.2 value => name
// 2.3 name => sort by date

export const studentsBirthDays = students => {
  const monthNamesArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const copyStudents = [...students];
  const result = copyStudents
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .reduce((acc, { name, birthDate }) => {
      const month = monthNamesArr[new Date(birthDate).getMonth()];
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(name);
      return acc;
    }, {});

  return result;
};

const studentsInfo = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Bim', birthDate: '03/10/2011' },
  { name: 'Jime', birthDate: '05/01/2011' },
];
studentsBirthDays(studentsInfo);
