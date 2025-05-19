import { useRef } from "react";
import { Card, CardContainer, CarouselWrapper, NavButton, Title } from "@/styles/Styles";
import DownloadIcon from "@/assets/clips.svg";
import Arrow from "@/assets/arrow.svg";

export const Carrossel = (props) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 270;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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
                <div style={{ cursor: "not-allowed", opacity: 0.5 }}>
                  <img src={item.image} alt={item.genre} />
                  <div className="button">
                    <img src={DownloadIcon} alt="download" />
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
