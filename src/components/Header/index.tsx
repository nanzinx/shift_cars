import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import LogoImgHome from '../../assets/images/logo.png'
import BannerImgHome from '../../assets/images/fundo.png'

import * as S from './styles'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()

  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'

  const titleRestaurate = 'Restaurantes'
  const titleCarrinho = '0 produto(s) no carrinho'

  return (
    <S.HeaderPage className="container">
      <S.Imagem
        style={{ backgroundImage: `url(${BannerImgHome})` }}
        background={background}
      >
        <div className="container">
          <S.ContainerHeader>
            <S.RestaurantName>{titleRestaurate}</S.RestaurantName>
            <Link title="Clique aqui para retornar a pagina home" to="/">
              <img
                className="imagemLogoLnk"
                src={LogoImgHome}
                alt="efood"
                width="150"
                height="50"
              />
            </Link>

            <S.CarrinhoDeProdutos>
              <S.CartButton role="button">{titleCarrinho}</S.CartButton>
            </S.CarrinhoDeProdutos>
          </S.ContainerHeader>
          <S.Titulo>{titleText}</S.Titulo>
        </div>
      </S.Imagem>
    </S.HeaderPage>
  )
}

export default React.memo(Header)
