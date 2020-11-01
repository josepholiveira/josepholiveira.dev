import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-top: 40px;

  .presentation {
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 5.4rem;
      line-height: 6.4rem;
      margin: 0 24px;
      height: 128px;
      color: ${props => props.theme.colors.title};
    }

    p {
      font-size: 16px;
      margin: 0 24px;
      line-height: 3.0rem;
      margin-top: 2.4rem;
      color: ${props => props.theme.colors.texts};
      font-weight: 300;
    }

    .button-container {
      margin: 0 24px;
      margin-top: 64px;
      display: flex;
      align-items: center;
    }
  }

  #top-bubble {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  #mobile-bubble {
    display: none;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    margin-top: 48px;

    .presentation {
      width: 100%;

      h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-weight: 600;
        font-size: 5.4rem;
        line-height: 6.4rem;
        height: auto;
        color: ${props => props.theme.colors.title};
      }

      p {
        font-size: 1.6rem;
        line-height: 3.0rem;
        margin-top: 10px;
        color: ${props => props.theme.colors.texts};
        font-weight: 300;
      }

      .button-container {
        margin-top: 37px;
      }
    }


    #top-bubble {
      max-width: 600px;
    }

    .programmer {
      max-width: 350px;
      margin-right: 24px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;

    .programmer {
      display: none;
    }

    #top-bubble {
      display: none;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    .presentation {
      h1 {
        margin: 0 24px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-weight: 600;
        font-size: 3rem;
        line-height: 4.2rem;
        height: 7.6rem;
        color: ${props => props.theme.colors.title};
      }

      p {
        margin: 0 24px;
        font-size: 1.5rem;
        line-height: 3.0rem;
        margin-top: 10px;
        color: ${props => props.theme.colors.texts};
        font-weight: 300;
      }

      .button-container {
        justify-content: center;
        margin: 0 24px;
        margin-top: 37px;
      }
    }

    #mobile-bubble {
      display: block;
      width: 100%;
    }

    #top-bubble {
      display: none;
    }

    .programmer {
      display: none;
    }
  }
`;

export const ProjectButton = styled.a`
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
  padding: 22px 64px;

  &:hover {
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 10px 40px rgba(69, 69, 229, 0.5);
    cursor: pointer;
  }

  @media (max-width: 500px) {
    flex: 1;
    font-size: 15px;
    line-height: 16px;
    padding: 17px 30px;
    align-self: stretch;
  }
`;

export const ScrollButton = styled.a`
  color: #fff;
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
  padding: 18px;
  background: transparent;
  margin-left: 24px;
  display: flex;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    align-self: center;
    animation: bouncearrow 2s infinite;

    @keyframes bouncearrow {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }

  @media (max-width: 500px) {
    margin-left: 8px;
    font-size: 15px;
    line-height: 16px;
    padding: 14px;
    cursor: pointer;
  }
`;
