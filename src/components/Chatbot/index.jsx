import { useState } from "react";
import {
  FiMaximize2,
  FiMessageCircle,
  FiMinimize2,
  FiX,
} from "react-icons/fi";
import Prompt from "../Prompt";
import {
  ChatWindow,
  CloseButton,
  HeaderActions,
  HeaderButton,
  WindowIcon,
  MessageActions,
  Launcher,
  Message,
  Messages,
  MessageIcon,
  Header,
  Subtitle,
  Title,
  LauncherHint,
} from "./styles";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
  }

  return (
    <>
      {isOpen && (
        <ChatWindow $isExpanded={isExpanded} aria-label="Conversa com o Toc Toc">
          <Header>
            <div>
              <Title>Oi seja bem vindo!</Title>
              <Subtitle>LogoMarca está online para ajudar</Subtitle>
            </div>
            <div>
              <CloseButton
                type="button"
                aria-label="Fechar conversa"
                onClick={() => {
                  setIsOpen(false);
                  setIsExpanded(false);
                }}
              >
                <FiX />
              </CloseButton>
            </div>
          </Header>

          <Messages>
            <Message>Olá, seja bem-vindo 👋</Message>
            <Message>Olá! Eu sou uma inteligência artificial desenvolvida para ajudar você a criar wallpapers do seu jeito. 🎨✨ Descreva o que você imagina e eu ajudarei a transformar sua ideia em um wallpaper personalizado.
</Message>
            <Message>Você poderia me dizer seu nome?</Message>
            <MessageActions aria-label="Controles de tamanho">
              {isExpanded && (
                <HeaderActions>
                  <HeaderButton
                    type="button"
                    aria-label="Ampliar janela"
                    title="Ampliar"
                    onClick={() => setIsExpanded(true)}
                  >
                    <WindowIcon $variant="corners" aria-hidden="true" />
                  </HeaderButton>
                </HeaderActions>
              )}
              <MessageIcon
                type="button"
                aria-label={isExpanded ? "Reduzir conversa" : "Ampliar conversa"}
                title={isExpanded ? "Reduzir conversa" : "Ampliar conversa"}
                onClick={() => setIsExpanded((expanded) => !expanded)}
              >
                {isExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
              </MessageIcon>
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
