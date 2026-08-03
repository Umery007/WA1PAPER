import Header from "../../components/Header";
import Banner from "../../components/Banner"
import { Container, Content } from "./styles";

export default function Home() {
  return (
    <Container>
      <Header />
    <Banner />
      <Content />
    </Container>
  );
}
