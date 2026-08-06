import Header from "../../components/Header";
import Banner from "../../components/Banner"
import Cards from "../../components/Cards";
import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
    <Banner />
    <Cards />
      <Content />
    </Container>
  );
}
