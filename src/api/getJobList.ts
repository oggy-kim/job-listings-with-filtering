import instance from './axios';

const getJobList = async () => {
  return await instance.get('./data.json');
};
export default getJobList;
