import styled from "styled-components";

export const ModalEditAddressStyed = styled.div`

    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 101;

    .overlay{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.5);
    }

    .content{
        width: 100%;
        max-width: 520px;
        position: relative;
        padding: 10px;
        background-color: var(--whiteFixed);
        border-radius: 8px;
    }



  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }


  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey-1);
  }

  .closeButton {
    background-color: var(--whiteFixed);
    width: 12px;
    height: 12px;
    border: 2px solid var(--whiteFixed);
    font-size: 10px;
    font-weight: 200;
    padding: 15px;

    color: var(--grey-4);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-0);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: var(--grey-1);
  }

  input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 0px;
    color: var(--grey-1);

    box-sizing: border-box;

    height: 2.5rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;

    border: 1.5px solid var(--grey-7);
    border-radius: 4px;

    &:focus {
      border-color: var(--brand-2);
      outline: none;
    }
  }

  span{
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: 15px;
    height: 15px;
  }

  .buttonsContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    

    margin: 20px 0px;
  }

  button {
    width: 145px;
    height: 48px;
    left: 24px;
    top: 742px;
    background-color: var(--grey-6);
    border: 1.5px solid #dee2e6;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
  }

  .saveButton {
    background: var(--brand-1);
    border: 1.5px solid var(--brand-1);
    color: var(--whiteFixed);
  }

  @media (min-width: 520px) {

    .content{
      padding: 0px 20px;
    }

    .containter2Inputs{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    button {
      width: 160px;
    }
  }
`;
