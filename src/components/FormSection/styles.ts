import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  margin-top: 260px;

  

  .formcontent {
    span {
      color: ${props => props.theme.colors.primary};
      font-size: 16px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin-top: 64px;

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
      margin-top: 40px;
      color: ${props => props.theme.colors.title};
      font-weight: 600;
      font-size: 3.6rem;
      line-height: 4.6rem;
    }

    p {
      font-size: 20px;
      margin-top: 24px;
      color: ${props => props.theme.colors.texts};
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 3rem;
    }
  }

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;
    padding: 0;

    .formcontent {
      padding: 31px 0 0 0;

      span {
        margin: 0 24px;
      }

      h2 {
        width: 326px;
        color: ${props => props.theme.colors.title};
        font-size: 26px;
        line-height: 38px;
        margin: 0 24px;
        margin-top: 48px;
      }

      p {
        width: 326px;
        font-size: 20px;
        color: ${props => props.theme.colors.texts};
        font-weight: 300;
        font-size: 16px;
        line-height: 30px;
        margin: 24px 24px 0;
      }
    }
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  margin-left: 127px;

  @media (max-width: 1120px) {
    margin-top: 64px;
    margin-left: 0px !important;
  }
`;

export const Form = styled.form`
  background: #1c1c2e;
  color: ${props => props.theme.colors.subs};
  padding: 64px;

  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;

  p {
    font-size: 16px;
    line-height: 16px;
    margin-top: 40px;
    color: ${props => props.theme.colors.title};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
  }

  .radio-group {
    display: flex;

    /* label */
    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;

      &.no {
        margin-left: 32px;
      }

      font-size: 16px;
      line-height: 16px;
      margin-top: 40px;
      color: ${props => props.theme.colors.title};
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 16px;

      margin-top: 20px;

      cursor: pointer;
      position: relative;
    }

    /* input */
    .radio {
      opacity: 0;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }

    /* checked state */
    .radio:checked + .design::before {
      opacity: 1;
    }

    /* .design */
    .design {
      width: 24px;
      height: 24px;

      border: 2px solid ${props => props.theme.colors.primary};
      border-radius: 100%;
      margin-right: 16px;

      position: relative;
    }

    .design::before,
    .design::after {
      content: '';
      display: block;

      width: inherit;
      height: inherit;

      border-radius: inherit;

      position: absolute;
      transform-origin: center center;
    }

    .design:before {
      background: ${props => props.theme.colors.primary};
      opacity: 0;
      transition: 0.3s;

      width: 10px;
      height: 10px;
      top: 5px;
      left: 5px;
    }
  }

  .number-pages-container {
    display: flex;
    margin-top: 24px;

    .seven-plus {
      display: none;
    }

    .pages {
      & + .pages {
        margin-left: 8px;
      }

      .radio {
        opacity: 0;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }

      .page-number {
        font-size: 16px;
        line-height: 16px;
        border: 1.5px solid #4545e5;
        box-sizing: border-box;
        color: ${props => props.theme.colors.texts};
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
      }

      input:checked + .page-number {
        background: #4545e5;
        color: ${props => props.theme.colors.title};
      }
    }
  }

  @media (max-width: 700px) {
    padding: 24px;

    .number-pages-container {
      .seven-plus {
        display: block;
      }

      .seven,
      .eight,
      .nine,
      .ten-plus {
        display: none;
      }

      .pages {
        .page-number {
          font-size: 15px;
          line-height: 16px;
          border: 1.5px solid #4545e5;
          box-sizing: border-box;
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

export const FormInput = styled.input`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.subs};
  border: 0;
  padding: 24px 22px;
  font-size: 16px;
  line-height: 16px;
  align-self: stretch;

  & + & {
    margin-top: 8px;
  }
`;

export const FormTextArea = styled.textarea`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.subs};
  border: 0;
  padding: 24px 22px;
  font-size: 16px;
  line-height: 16px;
  align-self: stretch;
  resize: none;
  margin-top: 40px;
  min-height: 200px;
`;

export const SubmitButton = styled.button`
  background: ${props => props.theme.colors.primary};
  border: 1.5px solid ${props => props.theme.colors.primary};
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
  padding: 18px;
  transition: 0.3s ease;
  box-sizing: border-box;

  align-self: flex-end;

  &:hover {
    background: ${props => props.theme.colors.primary};
    box-shadow: 0px 10px 40px rgba(69, 69, 229, 0.5);
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 20%;
      cursor: not-allowed !important;

      &:hover{
        box-shadow: none !important;
        background: transparent !important;
      }
    `}

    .icon-spin {
      -webkit-animation: icon-spin 2s infinite linear;
              animation: icon-spin 2s infinite linear;

      margin-right: 5px;
    }

    @-webkit-keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
      }
    }

    @keyframes icon-spin {
      0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
      }
    }
`;
