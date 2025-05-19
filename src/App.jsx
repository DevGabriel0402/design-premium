import { Container } from "@/styles/Styles";
import { Contato } from "@/components/Contato";
import Logo from "@/assets/Logo.png";
import { Carrossel } from "@/components/Carrossel";

// Importando as listas separadas por gênero
import { ListaFunk, ListaGospel, ListaSertanejo, ListaPagode, ListaFestaJunina, ListaRock, ListaNamorados, ListaEletronica } from "./Arquivos/Index";

function App() {
  return (
    <Container>
      <Contato message="Alguma sugestão? Fale conosco!" contato="31991660594" />
      <img className="logo" src={Logo} alt="logo" />
      <p className="description">Flyer Master oferece arquivos PSD de alta qualidade para designers exigentes. Downloads exclusivos, profissionais e modernos.</p>
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
