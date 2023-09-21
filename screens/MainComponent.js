import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
  return <DirectoryScreen campsites={campsites} />;
};

export default Main;
