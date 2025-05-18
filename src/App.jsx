import { Container } from "@/styles/Styles";
import Logo from "@/assets/logo.png";
import { Carrossel } from "@/components/Carrossel";

// Importando as listas separadas por gênero
import { ListaFunk, ListaGospel, ListaSertanejo, ListaPagode, ListaFestaJunina, ListaRock, ListaNamorados, ListaEletronica } from "./Arquivos/Index";

function App() {
  return (
    <Container>
      <img className="logo" src={Logo} alt="logo" />
      <Carrossel arquivos={ListaFunk} title="PSD Funk" />
      <Carrossel arquivos={ListaGospel} title="PSD Gospel" />
      <Carrossel arquivos={ListaSertanejo} title="PSD Sertanejo" />
      <Carrossel arquivos={ListaPagode} title="PSD Pagode" />
      <Carrossel arquivos={ListaFestaJunina} title="PSD Festa Junina" />
      <Carrossel arquivos={ListaRock} title="PSD Rock" />
      <Carrossel arquivos={ListaNamorados} title="PSD Namorados" />
      <Carrossel arquivos={ListaEletronica} title="PSD Eletrônica" />
    </Container>
  );
}

export default App;
