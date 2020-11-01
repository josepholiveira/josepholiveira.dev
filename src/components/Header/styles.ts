import styled from 'styled-components';

export const Container = styled.header`
  padding: 40px 0;

  .header-content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  .header-logo {
    width: 102.13px;
    height: 28px;
    align-self: center;
  }

  aside {
    display: flex;

    a {
      font-size: 14px;
      color: ${props => props.theme.colors.title};
      font-weight: 300;

      & + a {
        margin-left: 23px;
        padding-right: 32px;
      }

      &:last-child {
        border-left: 1px solid #6166ff;
        padding-left: 32px;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 24px;

    aside {
      a {
        color: ${props => props.theme.colors.texts};

        & + a {
          margin-left: 20px;
          padding-right: 0;
        }

        &:last-child {
          display: none;
        }
      }
    }
  }
`;
