import GlobalStyles from "./styles/GlobalStyles";
import Router from "./Router"
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import "@fontsource/roboto-slab";
import "@fontsource/im-fell-french-canon-sc";


function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <Footer />
      <Chatbot />
     
    </>
  )
}

export default App