import { useState } from 'react';

// Global state
const [worldNumber, setworldNumber] = useState<string | null>();

export const setHelloWorldState = (worldNumberReceived: string) => {
  setworldNumber(worldNumberReceived);
};

export const getHelloWorldState = () => {
  return worldNumber;
};

// Export all the functions in this file
export * from './HelloWorld';
