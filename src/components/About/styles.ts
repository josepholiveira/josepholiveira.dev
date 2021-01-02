import styled from 'styled-components';
import Button from '../Button';

export const Content = styled.div`
  display: flex;
  margin-top: 260px;

  img {
    align-self: flex-start;
  }

  #left-bubble {
    position: absolute;
    left: 0;
    top: 575px;
    z-index: -1;
  }

  .about {
    padding: 120px 0 0 126px;

    span {
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      display: flex;
      align-items: center;
      font-weight: 600;

      &::before {
        content: ' ';
        width: 40px;
        height: 2px;
        background: #36364d;
        display: block;
        margin-right: 16px;
      }
    }

    h2 {
      width: 437px;
      height: 137px;
      margin-top: 64px;
      color: ${props => props.theme.colors.title};
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
    }

    p {
      width: 447px;
      font-size: 20px;
      margin-top: 40px;
      color: ${props => props.theme.colors.texts};
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;

      b {
        font-weight: bold;
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .socials {
    display: flex;
    align-self: flex-start;
  }


  @media (max-width: 1120px) {
    padding: 0 24px;

    .selfie {
      flex: 1;
    }
    .socials {
      display: none;
    }
  }

  @media(max-width: 900px) {
    display: flex;

    flex-direction: column;
    margin-top: 160px;
    width: 100%;

    #left-bubble {
      display: none;
    }

    .about {
      padding: 31px 0 0 0;

      span {
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;

        &::before {
          content: ' ';
          width: 40px;
          height: 2px;
          background: #36364d;
          display: block;
          margin-right: 16px;
        }
      }

      p {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;
    padding: 0px 24px;

    .selfie {
      align-self: flex-start;
      width: 172.48px;
      height: 221px;
    }

    #left-bubble {
      display: none;
    }

    .about {
      padding: 31px 0 0 0;

      span {
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;

        &::before {
          content: ' ';
          width: 40px;
          height: 2px;
          background: #36364d;
          display: block;
          margin-right: 16px;
        }
      }

      h2 {
        width: 326px;
        height: 110px;
        margin-top: 48px;
        color: ${props => props.theme.colors.title};
        font-size: 26px;
        line-height: 38px;
      }

      p {
        width: 326px;
        font-size: 20px;
        margin-top: 24px;
        color: ${props => props.theme.colors.texts};
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;

        b {
          font-weight: bold;
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    .socials {
      display: none;
    }
  }
`;

export const SocialButton = styled(Button)`
  padding: 18px;
  background: transparent;
  margin-left: 24px;
  display: flex;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    align-self: center;
  }
`;
