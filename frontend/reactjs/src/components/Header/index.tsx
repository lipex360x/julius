import React, { PropsWithChildren } from 'react'
import * as S from './styles'

import Logo from '../../assets/LogoJulius.png'

type HeaderProps = PropsWithChildren<{
  title: string
}>

export default function Header({ title, children }: HeaderProps) {
  return (
    <S.Section>
      
      <S.Container className="container">
        
        <S.Logo>
          <img src={Logo} alt="Logo Julius" />
          <h1>{title}</h1>
        </S.Logo>

        <S.Slogan>
          <span>{children}</span>
        </S.Slogan>

      </S.Container>

    </S.Section>
  )
}
