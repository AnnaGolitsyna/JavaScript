

/**
 * @param {string[]} allStudentsList
 * @param {string[]} studentsForRetake
 * @return {string[]}
 */
// 1. find good students
// 2. get tham string 'Good job, name'
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => allStudentsList
  .filter(name => !studentsForRetake.includes(name))
  .map(name => `Good job, ${name}`);


// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []
console.log(allStudTest1);