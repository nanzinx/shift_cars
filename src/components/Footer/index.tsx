import { Link } from 'react-router-dom'
import faceSrc from '../../assets/images/face.png'
import instaSrc from '../../assets/images/insta.png'
import LogoImgHome from '../../assets/images/logo.png'
import twSrc from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.Footers className="container">
    <S.SectionFooter>
      <Link title="Clique aqui para retornar a pagina home" to="/">
        <img className="imagemLogo" src={LogoImgHome} alt="efood" />
      </Link>
      <S.RedeSociais>
        <img src={instaSrc} alt="Instagram" />
        <img src={faceSrc} alt="Facebook" />
        <img src={twSrc} alt="Twitter" />
      </S.RedeSociais>
    </S.SectionFooter>
    <S.Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Titulo>
  </S.Footers>
)

export default Footer
