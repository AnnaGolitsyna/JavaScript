// algo
// 1. create f createLogger /export/
//    *output => methods logger {f} +++
// 2. create f /warn, error, log/ =>
//    *input - string /type/ +++
//    *output - add to memory +++
// 3. create Memory => [{message: , dateTime: , type: }...]
//    *type = warn, error or log +++
//    *dateTime - use new Date() +++
// 4. f getRecords => input - string /warn, error or log/,
//    * if arg - undefind => [all types].sort +++
//    * output => [{type},...].sort(dateTime) - first - new date +++
//    * if not this type => [empty] +++
// 5. refactoring, testing. Check EXPORT.+++

/**
 * @return {object}
 */
export const createLogger = () => {
  const memory = [];

  const warn = text =>
    memory.push({
      message: text,
      type: 'warn',
      dateTime: new Date(),
    });

  const error = text =>
    memory.push({
      message: text,
      type: 'error',
      dateTime: new Date(),
    });

  const log = text =>
    memory.push({
      message: text,
      type: 'log',
      dateTime: new Date(),
    });

  function getRecords(types) {
    if (types === undefined) {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    return memory.filter(el => el.type === types)
    .sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
console.log(logger2.getRecords('error')); // ===> []
console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
