import { useRef, useState } from "react";
import { Card, CardContainer, CarouselWrapper, NavButton, Title } from "@/styles/Styles";
import DownloadIcon from "@/assets/clips.svg";
import LockIcon from "@/assets/lock.svg";
import Arrow from "@/assets/arrow.svg";
import { Laoding } from "./Loading";

export const Carrossel = (props) => {
  const carouselRef = useRef(null);
  const [loadingId, setLoadingId] = useState(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 270;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleDownloadClick = (item) => {
    setLoadingId(item.id);

    setTimeout(() => {
      window.open(item.link, "_blank", "noopener,noreferrer");
      setLoadingId(null);
    }, 2000); // 2 segundos de feedback visual
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
                <div style={{ cursor: loadingId === item.id ? "wait" : "pointer" }} onClick={() => handleDownloadClick(item)}>
                  <img src={item.image} alt={item.genre} />
                  <div className="button">
                    {loadingId === item.id ? (
                      <Laoding />
                    ) : (
                      <>
                        <img src={DownloadIcon} alt="download" />
                        Baixar aqui
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div style={{ cursor: "not-allowed", filter: "grayscale(1)" }}>
                  <img src={item.image} alt={item.genre} />
                  <div className="button">
                    <img src={LockIcon} alt="lock" />
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
