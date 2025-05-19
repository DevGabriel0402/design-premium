import { useRef } from "react";
import { Card, CardContainer, CarouselWrapper, NavButton, Title } from "@/styles/Styles";
import DownloadIcon from "@/assets/clips.svg";
import LockIcon from "@/assets/lock.svg";
import Arrow from "@/assets/arrow.svg";

export const Carrossel = (props) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const card = container?.querySelector("div");
    if (!card || !container) return;

    const cardStyles = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseInt(cardStyles.marginRight) || 20; // fallback se não usar `gap`

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Title>{props.title}</Title>
      <CarouselWrapper>
        <NavButton className="left" onClick={() => scroll("left")}>
          <img src={Arrow} alt="arrow" />
        </NavButton>
        <CardContainer ref={carouselRef}>
          {props.arquivos.map((item) => (
            <Card key={item.id}>
              {item.status === "aberto" ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.genre} />
                  <div className="button">
                    <img src={DownloadIcon} alt="download" />
                    Baixar aqui
                  </div>
                </a>
              ) : (
                <div style={{ cursor: "not-allowed", filter: "grayscale(1)" }}>
                  <img src={item.image} alt={item.genre} />
                  <div className="button">
                    <img src={LockIcon} alt="download" />
                    Indisponível
                  </div>
                </div>
              )}
            </Card>
          ))}
        </CardContainer>
        <NavButton className="right" onClick={() => scroll("right")}>
          <img src={Arrow} alt="arrow" />
        </NavButton>
      </CarouselWrapper>
    </>
  );
};
