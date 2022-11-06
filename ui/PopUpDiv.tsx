import styled from 'styled-components';

const PopUpDiv = styled.div`
  background: none;
  position: fixed;
  width: 100%;
  top: calc(50% + 2rem);
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100vh - 3rem);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  .pop-up {
    display: flex;
    flex: 1 0 auto;
    flex-wrap: wrap;
    position: fixed;
    top: calc(50% + 2rem);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    height: 100vh - 4rem;
    border-radius: 1rem;
    overflow: hidden;
    padding: 1rem;

    img {
      max-width: 20rem;
      max-height: calc(100vh - 8rem);
      border-radius: 1rem;
    }

    section {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-width: 20rem;
      width: min-content;
      gap: 1rem;
      padding: 1rem;
    }
  }
`;

export default PopUpDiv;
