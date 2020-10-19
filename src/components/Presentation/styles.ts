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
      font-size: 54px;
      line-height: 64px;
      height: 128px;
      color: ${props => props.theme.colors.title};
    }

    p {
      font-size: 16px;
      line-height: 30px;
      margin-top: 24px;
      color: ${props => props.theme.colors.texts};
      font-weight: 300;
    }

    .button-container {
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

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin-top: 48px;

    .presentation {
      width: 100%;

      h1 {
        margin: 0 24px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-weight: 600;
        font-size: 26px;
        line-height: 38px;
        height: 76px;
        color: ${props => props.theme.colors.title};
      }

      p {
        margin: 0 24px;
        font-size: 15px;
        line-height: 30px;
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

    #top-bubble {
      display: none;
    }

    #mobile-bubble {
      margin-top: 55px;
      display: block;
      /* max-width: 450px; */
      width: 100%;
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
    margin-left: 8px;
    font-size: 15px;
    line-height: 16px;
    padding: 14px;
    cursor: pointer;
  }
`;
