import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>Popular</Link>
          </li>
          <li>
            <Link>SUV</Link>
          </li>
          <li>
            <Link>Sedan</Link>
          </li>
          <li>
            <Link>Esportivo</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; SHIFT Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
