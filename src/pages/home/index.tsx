import React from 'react'
import type { NextPage } from 'next'
import { BsArrowRightShort } from 'react-icons/bs'
import { Button } from '../../components/Atomic/Button'
import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer_content}>
        <span>👏 Olá, somos a...</span>
        <h1>Easy</h1>
        <p>O melhor lugar para gerenciar suas faturas de forma simples, facil e agil </p>
        <p>Vamos começar ?</p>
        <Button className={styles.homeContainer_entry}  label="Logar" />
      </div>
      <img src="/img/banner.svg" alt="Homem criando novas faturas" />
    </div>
  )
}

export default Home
