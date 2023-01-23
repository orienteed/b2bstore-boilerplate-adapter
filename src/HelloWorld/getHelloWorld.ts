import { getHelloWorldState } from '..';

const GetHelloWorld = () => {
  const worldNumber = getHelloWorldState();
  return 'Hello World ' + worldNumber + '!';
};

export default GetHelloWorld;
