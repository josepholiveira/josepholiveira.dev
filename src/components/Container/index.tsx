import React from 'react';

import { Content } from './styles';

export default function Container({ children }) {
  return <Content className="container">{children}</Content>;
}
