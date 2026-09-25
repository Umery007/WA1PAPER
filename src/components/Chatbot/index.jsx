import { useState } from "react";
import {
  FiMaximize,
  FiMaximize2,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import Prompt from "../Prompt";
import TelaCheia from "../Tela-cheia";
import {
  ChatWindow,
  CloseButton,
  MessageActions,
  Launcher,
  Message,
  Messages,
  MessageIcon,
  Header,
  HeaderActions,
  HeaderButton,
  Subtitle,
  Title,
  LauncherHint,
} from "./styles";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
  }

  return (
    <>
      {isOpen && !isFullScreen && (
        <ChatWindow $isExpanded={isExpanded} aria-label="Conversa com o Toc Toc">
          <Header>
            <div>
              <Title>Oi seja bem vindo!</Title>
              <Subtitle>LogoMarca está online para ajudar</Subtitle>
            </div>
            <HeaderActions>
              <CloseButton
                type="button"
                aria-label="Fechar conversa"
                onClick={() => {
                  setIsOpen(false);
                  setIsExpanded(false);
                  setIsFullScreen(false);
                }}
              >
                <FiX />
              </CloseButton>
            </HeaderActions>
          </Header>

          <Messages>
            <Message>Olá, seja bem-vindo 👋</Message>
            <Message>Olá! Eu sou uma inteligência artificial desenvolvida para ajudar você a criar wallpapers do seu jeito. 🎨✨ Descreva o que você imagina e eu ajudarei a transformar sua ideia em um wallpaper personalizado.
</Message>
            <Message>Você poderia me dizer seu nome?</Message>
            <MessageActions aria-label="Controles de tamanho">
              <MessageIcon
                type="button"
                aria-label={isExpanded ? "Reduzir conversa" : "Ampliar conversa"}
                title={isExpanded ? "Reduzir conversa" : "Ampliar conversa"}
                onClick={() => setIsExpanded((expanded) => !expanded)}
              >
                <FiMaximize2 />
              </MessageIcon>
              {isExpanded && (
                <MessageIcon
                  type="button"
                  aria-label="Abrir tela cheia"
                  title="Abrir tela cheia"
                  onClick={() => setIsFullScreen(true)}
                >
                  <FiMaximize />
                </MessageIcon>
              )}
            </MessageActions>
            <small>Ex: João</small>
          </Messages>

          <Prompt
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onSubmit={handleSubmit}
            placeholder="Crie seu wallpaper"
          />
        </ChatWindow>
      )}

      {isOpen && isFullScreen && (
        <TelaCheia onClose={() => setIsFullScreen(false)} />
      )}

      {!isOpen && (
        <Launcher
          type="button"
          aria-label="Abrir conversa"
          onClick={() => setIsOpen(true)}
        >
          <FiMessageCircle />
          <LauncherHint aria-hidden="true">Que foi Diabe</LauncherHint>
        </Launcher>
      )}
    </>
  );
}
