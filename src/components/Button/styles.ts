import styled from 'styled-components';

export const Container = styled.a`
  color: #fff;
  background: ${props => props.theme.colors.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  user-select: none;
  transition: 0.3s ease;
  text-align: center;
  box-sizing: border-box;
  border: 1.5px solid ${props => props.theme.colors.primary};

  &:hover {
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 10px 40px rgba(69, 69, 229, 0.5);
    cursor: pointer;
  }
`;
