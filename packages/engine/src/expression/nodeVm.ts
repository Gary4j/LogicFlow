// import vm from 'node:vm';
const vm = require('vm');

const runInNewContext = async (code: string, globalData: any = {}) => {
  const context = vm.createContext(globalData);
  vm.runInContext(code, context);
  return context;
};

export {
  runInNewContext,
};
