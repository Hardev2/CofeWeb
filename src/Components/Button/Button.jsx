import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        <span>Get Stared</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* From uiverse.io by @Ali-Tahmazi99 */
  button {
    display: inline-block;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #03045e;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease-in;
    z-index: 1;
  }

  button::before,
  button::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 100%;
    transform: skew(15deg);
    transition: all 0.5s;
    overflow: hidden;
    z-index: -1;
  }

  button::before {
    left: -10px;
    background: #272626;
  }

  button::after {
    right: -10px;
    background: #272626;
  }

  button:hover::before,
  button:hover::after {
    width: 58%;
  }

  button:hover span {
    color: white;
    transition: 0.3s;
  }

  button span {
    color: #272626;
    font-size: 14px;
    transition: all 0.3s ease-in;
  }
`;

export default Button;
