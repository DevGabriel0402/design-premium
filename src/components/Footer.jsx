export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleClick = () => {
    window.open("https://instagram.com/eu.gabrielvieira", "_blank");
  };
  return (
    <footer style={{ color: "#fafafade", textAlign: "center", marginBlock: 20 }}>
      {currentYear} - Feito por{" "}
      <span style={{ cursor: "pointer", fontWeight: 600 }} onClick={handleClick}>
        Gabriel
      </span>
      .
    </footer>
  );
};
