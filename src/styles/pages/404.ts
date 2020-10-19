import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh;
    color: ${props => props.theme.colors.title};
  }

  .purple {
    color: ${props => props.theme.colors.background};
    background: ${props => props.theme.colors.primary};

    span {
      font-weight: bold;
      font-size: 220px;
    }
  }

  h3 {
    align-self: flex-start;
    font-weight: bold;
  }

  .sorry-text {
    margin-top: 15px;
    line-height: 40px;
  }

  a {
    color: ${props => props.theme.colors.title};
    background: ${props => props.theme.colors.primary};
    padding: 20px 40px;
    margin-top: 20px;
    align-self: flex-start;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    user-select: none;
  }

  a:hover {
    background: ${props => darken(0.05, props.theme.colors.primary)};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
