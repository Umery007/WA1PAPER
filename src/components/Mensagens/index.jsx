import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiImage,
  FiMessageCircle,
  FiPlus,
  FiSearch,
  FiSend,
  FiX,
} from "react-icons/fi";

import wallpaper from "../../assets/img-cards/paper.jpeg";
import {
  Overlay,
  Panel,
  PanelHeader,
  HeadingGroup,
  Eyebrow,
  PanelTitle,
  HeaderButton,
  PanelBody,
  SectionHeading,
  PrimaryButton,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  SearchField,
  ContactList,
  ContactButton,
  Avatar,
  ContactInfo,
  ContactName,
  ContactHandle,
  ThreadHeader,
  ThreadContact,
  ThreadBody,
  ThreadEmpty,
  MessageBubble,
  PinBubble,
  PinPreview,
  ComposerArea,
  PinPicker,
  PinPickerImage,
  PinPickerButton,
  Composer,
  AttachButton,
  SendButton,
} from "./styles";

const contacts = [
  { id: "lia", name: "Lia Monteiro", handle: "@liacria", color: "#c8cbd4" },
  { id: "caio", name: "Caio Pixel", handle: "@caiopixel", color: "#d7a68b" },
  { id: "nina", name: "Nina Luz", handle: "@ninaluz", color: "#b9b0de" },
];

export default function Mensagens({ onClose }) {
  const [view, setView] = useState("inbox");
  const [previousView, setPreviousView] = useState("inbox");
  const [activeContact, setActiveContact] = useState(null);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [showPins, setShowPins] = useState(false);
  const [messagesByContact, setMessagesByContact] = useState({});

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const conversations = contacts.filter(
    (contact) => messagesByContact[contact.id]?.length,
  );
  const visibleContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.handle}`.toLowerCase().includes(search.toLowerCase()),
  );
  const messages = activeContact
    ? messagesByContact[activeContact.id] ?? []
    : [];

  function openConversation(contact, from = view) {
    setPreviousView(from);
    setActiveContact(contact);
    setView("conversation");
    setShowPins(false);
  }

  function goBack() {
    setView(view === "conversation" ? previousView : "inbox");
    setShowPins(false);
  }

  function addMessage(message) {
    if (!activeContact) return;
    setMessagesByContact((current) => ({
      ...current,
      [activeContact.id]: [
        ...(current[activeContact.id] ?? []),
        { id: `${Date.now()}-${Math.random()}`, ...message },
      ],
    }));
  }

  function handleSend(event) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    addMessage({ type: "text", text });
    setDraft("");
  }

  function handleSendPin() {
    addMessage({ type: "pin" });
    setShowPins(false);
  }

  return (
    <Overlay onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <Panel id="messages-panel" role="dialog" aria-modal="true" aria-label="Mensagens">
        <PanelHeader>
          {view !== "inbox" && (
            <HeaderButton type="button" aria-label="Voltar" onClick={goBack}>
              <FiArrowLeft />
            </HeaderButton>
          )}
          <HeadingGroup>
            <Eyebrow>WA1PAPER / CONEXÕES</Eyebrow>
            <PanelTitle>
              {view === "inbox"
                ? "Mensagens"
                : view === "new"
                  ? "Nova conversa"
                  : activeContact?.name}
            </PanelTitle>
          </HeadingGroup>
          <HeaderButton type="button" aria-label="Fechar mensagens" onClick={onClose}>
            <FiX />
          </HeaderButton>
        </PanelHeader>

        {view === "inbox" && (
          <PanelBody>
            <SectionHeading>Caixa de entrada</SectionHeading>
            <PrimaryButton type="button" onClick={() => {
              setSearch("");
              setView("new");
            }}>
              <FiPlus />
              Nova conversa
            </PrimaryButton>

            {conversations.length > 0 ? (
              <ContactList aria-label="Conversas recentes">
                {conversations.map((contact) => {
                  const lastMessage = messagesByContact[contact.id].at(-1);
                  return (
                    <ContactButton
                      type="button"
                      key={contact.id}
                      onClick={() => openConversation(contact)}
                    >
                      <Avatar $color={contact.color}>{contact.name[0]}</Avatar>
                      <ContactInfo>
                        <ContactName>{contact.name}</ContactName>
                        <ContactHandle>
                          {lastMessage.type === "pin" ? "Compartilhou um Pin" : lastMessage.text}
                        </ContactHandle>
                      </ContactInfo>
                    </ContactButton>
                  );
                })}
              </ContactList>
            ) : (
              <EmptyState>
                <EmptyIcon><FiMessageCircle /></EmptyIcon>
                <EmptyTitle>Comece uma conversa</EmptyTitle>
                <EmptyDescription>
                  Troque referências e compartilhe Pins com outras pessoas da comunidade.
                </EmptyDescription>
              </EmptyState>
            )}
          </PanelBody>
        )}

        {view === "new" && (
          <PanelBody>
            <SearchField>
              <FiSearch aria-hidden="true" />
              <input
                autoFocus
                aria-label="Buscar pessoas"
                placeholder="Buscar por nome ou usuário"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button type="button" aria-label="Limpar busca" onClick={() => setSearch("")}>
                  <FiX />
                </button>
              )}
            </SearchField>
            <SectionHeading>Pessoas para conhecer</SectionHeading>
            {visibleContacts.length > 0 ? (
              <ContactList aria-label="Pessoas">
                {visibleContacts.map((contact) => (
                  <ContactButton
                    type="button"
                    key={contact.id}
                    onClick={() => openConversation(contact, "new")}
                  >
                    <Avatar $color={contact.color}>{contact.name[0]}</Avatar>
                    <ContactInfo>
                      <ContactName>{contact.name}</ContactName>
                      <ContactHandle>{contact.handle}</ContactHandle>
                    </ContactInfo>
                    <FiArrowLeft className="contact-arrow" aria-hidden="true" />
                  </ContactButton>
                ))}
              </ContactList>
            ) : (
              <EmptyDescription>Nenhuma pessoa encontrada com esse nome.</EmptyDescription>
            )}
          </PanelBody>
        )}

        {view === "conversation" && activeContact && (
          <>
            <ThreadHeader>
              <Avatar $color={activeContact.color}>{activeContact.name[0]}</Avatar>
              <ThreadContact>
                <ContactName>{activeContact.name}</ContactName>
                <ContactHandle>{activeContact.handle}</ContactHandle>
              </ThreadContact>
            </ThreadHeader>
            <ThreadBody aria-live="polite">
              {messages.length === 0 ? (
                <ThreadEmpty>
                  <EmptyIcon><FiMessageCircle /></EmptyIcon>
                  <EmptyTitle>Uma ideia vira conversa.</EmptyTitle>
                  <EmptyDescription>
                    Mande uma mensagem ou compartilhe um Pin para começar.
                  </EmptyDescription>
                </ThreadEmpty>
              ) : (
                messages.map((message) => (
                  message.type === "pin" ? (
                    <PinBubble key={message.id}>
                      <PinPreview src={wallpaper} alt="Pin compartilhado do WA1PAPER" />
                      <span>Pin do WA1PAPER</span>
                    </PinBubble>
                  ) : (
                    <MessageBubble key={message.id}>{message.text}</MessageBubble>
                  )
                ))
              )}
            </ThreadBody>
            <ComposerArea>
              {showPins && (
                <PinPicker>
                  <PinPickerImage src={wallpaper} alt="Prévia do Pin" />
                  <div>
                    <ContactName>Textura de papel</ContactName>
                    <ContactHandle>Pin da coleção WA1PAPER</ContactHandle>
                  </div>
                  <PinPickerButton type="button" onClick={handleSendPin}>
                    Enviar Pin
                  </PinPickerButton>
                </PinPicker>
              )}
              <Composer onSubmit={handleSend}>
                <AttachButton
                  type="button"
                  aria-label="Compartilhar um Pin"
                  aria-expanded={showPins}
                  onClick={() => setShowPins((isVisible) => !isVisible)}
                >
                  <FiImage />
                </AttachButton>
                <input
                  aria-label="Escrever mensagem"
                  placeholder="Escreva uma mensagem..."
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                />
                <SendButton type="submit" aria-label="Enviar mensagem" disabled={!draft.trim()}>
                  <FiSend />
                </SendButton>
              </Composer>
            </ComposerArea>
          </>
        )}
      </Panel>
    </Overlay>
  );
}