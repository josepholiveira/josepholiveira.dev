import React from 'react';

import { Container } from './styles';

export default function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
