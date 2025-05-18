import { ContatoContainer } from "../styles/Styles";

export const Contato = (props) => {
  const contato = props.contato;
  const mensagem = "Olá, gostaria de pedir um PSD do nicho: (aqui você pode colocar o nome do nicho).";
  const mensagemFinal = encodeURIComponent(mensagem);

  const handleClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=55${contato}&text=${mensagemFinal}`, "_blank");
  };

  return (
    <ContatoContainer>
      <button onClick={handleClick}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-mensageiro-1859958-1575946.png?f=webp" alt="message icon" />
        <p>{props.message}</p>
      </button>
    </ContatoContainer>
  );
};
