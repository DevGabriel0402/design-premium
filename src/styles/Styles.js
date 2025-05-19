import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-height: 100dvh;
  width: 100%;
  gap: 10px;

  .logo {
    width: 100%;
    max-width: 300px;
    height: 150px;
    overflow: hidden;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 200px;
      height: 100px;
      margin-bottom: -30px;
    }
  }
  .description {
    padding-inline: 40px;
    color: #fafafade;
    max-width: 800px;
    text-align: center;
    font-size: 22px;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;

// NOVO: wrapper do carrossel com os botões
export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 1140px;
  padding-inline: 30px;
  background-color: #0b0b0b;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10;
    width: 100%;
    max-width: 1140px;
    pointer-events: none;
    background-image: linear-gradient(to left, #0b0b0b 2%, transparent 20%, transparent 80%, #0b0b0b 98%);
  }
`;

// MODIFICADO: container de cards para scroll horizontal
export const CardContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding-block: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 250px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  color: #fafafa;
  flex-shrink: 0;

  &:hover .button {
    display: flex;
    animation: ${fadeIn} 0.3s ease-in-out;

    @media (max-width: 768px) {
      animation: none;
      max-width: 100%;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 9/16;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      aspect-ratio: 1/1.5;
    }

    &:hover {
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);

      @media (max-width: 768px) {
        mask-image: none;
      }
    }
  }

  .button {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
    transition: all 0.8s;
    text-transform: uppercase;
    font-weight: 600;
    backdrop-filter: blur(2px);
    transition: all 0.5s ease-in-out;

    img {
      width: 40px;
      margin-bottom: 10px;
      background: transparent;
      height: 40px;

      &:hover {
        mask-image: none;
      }
    }

    @media (max-width: 768px) {
      position: absolute;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      gap: 8px;
      height: 60px !important;
      bottom: 0 !important;
      transform: translate(-50%, 0);
      width: 100% !important;
      height: 100%;
      background-color: #262626;

      img {
        display: none;
      }
    }
  }
`;

// NOVO: botões de navegação do carrossel
export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(14, 14, 14, 0.8);
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 80px;
  width: 40px;
  height: 40px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &.left {
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      background: transparent;
      width: 50px;
      transform: rotate(180deg);
      filter: invert(1);
    }
  }

  &.right {
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      background: transparent;
      width: 50px;
      filter: invert(1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  text-align: start;
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  max-width: 1140px;
  padding-top: 20px;
  padding-left: 30px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;
export const ContatoContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 30px;
  right: 30px;
  background-color: #4eec69;
  border-radius: 50px;
  border: 2px solid #4eec69;

  /* Comportamento base */
  width: 60px;
  height: 60px;
  transition: width 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 10px;

  /* Hover animado */
  &:hover {
    width: 280px;

    @media (max-width: 768px) {
      width: 60px;
    }
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
    gap: 10px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  p {
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.4s ease, transform 0.4s ease;
    color: #000;
    pointer-events: none;
    background: transparent;
    white-space: nowrap;
  }

  /* Mostra o texto quando o container é hover */
  &:hover p {
    opacity: 1;
    transform: translateX(0);
  }

  /* Em mobile, o texto é sempre escondido */
  @media (max-width: 768px) {
    p {
      display: none;
    }
  }
`;
