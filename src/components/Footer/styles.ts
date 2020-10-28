import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin-top: 260px;
  position: relative;
  margin-top: 250px;

  .text {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 32px;

    p {
      font-size: 14px;
      line-height: 30px;
      color: ${props => props.theme.colors.title};

      a {
        color: ${props => props.theme.colors.title};
      }
    }
  }

  #bottom-bubble {
    position: absolute;
    bottom: 0;
    left: -400px;
    z-index: -1;
    width: 1913px;
  }

  @media (max-width: 1440px) {
    margin-top: 150px;
    
    #bottom-bubble {
      left: -380px;
      width: 1660px;
    }
  }

  @media (max-width: 450px) {
    margin-top: 0px;

    #bottom-bubble {
      display: none;
    }

    .text {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
