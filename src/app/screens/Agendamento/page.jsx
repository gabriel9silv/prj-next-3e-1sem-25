'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import styled from 'styled-components';
import MyCalendar from '../../components/calendario/page'; // importando o componente do calendário

const Tela2 = () => {
  const [liked, setLiked] = useState(false);
  const [rating, setRating] = useState(0); // Estado para a avaliação por estrelas
  const [hover, setHover] = useState(0); // Estado para o efeito de hover nas estrelas

  const handleClick = () => {
    setLiked(!liked);
  };

  const handleStarClick = (index) => {
    setRating(index);
  };

  const text = 'A biblioteca da escola é um espaço dedicado à promoção da educação, pesquisa e desenvolvimento intelectual dos alunos. Equipada com uma ampla variedade de livros, periódicos e recursos digitais, a biblioteca oferece um ambiente propício para o estudo individual e em grupo.';

  const StyledInput = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 85%;
    height: 25%;
    margin: 2%;
  `;
  
  const StyledInput2 = styled.input`
    border: 2px solid #1A1B21;
    border-radius: 4px;
    padding: 8px;
    font-size: 16px;
    width: 49rem;
    height: 100%;
    margin: 2%;
    margin-left: -0.5rem;
  `;

  const NameInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 4%;     
  `;

  const NameButton = styled.button`
    margin-left: -5rem;
    padding: 8px;
    font-size: 26px;
    border: 2px solid #fff;
    border-radius: 40px;
    background-color: #fff;
    cursor: pointer;
  `;

  return (
    <div className={styles.scrollView}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.column}>
              <div className={styles.texto2}>
                <h1 className={styles.title}>
                  Biblioteca
                  <button
                    onClick={handleClick}
                    aria-label={liked ? 'Descurtir' : 'Curtir'}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '24px',
                      color: liked ? 'red' : 'black',
                      marginLeft: '10px'
                    }}
                  >
                    {liked ? '❤️' : ' 🤍'}
                  </button>
                </h1>
                <div>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '24px',
                          color: index <= (hover || rating) ? 'gold' : 'grey',
                        }}
                        aria-label={`Avaliação: ${index} estrelas`}
                      >
                        ★
                      </button>
                    );
                  })}
                </div>
                <h2 className={styles.desc}>Descrição</h2>
                <p className={styles.lors}>{text}</p>
              </div>
              <div className={styles.row}>
                <NameInputContainer>
                  <StyledInput2 type="name" placeholder="Nomes" />
                  <NameButton>+</NameButton>
                </NameInputContainer>
                <StyledInput type="date" />
                <StyledInput type="time" />
                <StyledInput type="time" />
                <button className={styles.button}>Finalizar Agendamento</button>
              </div>
              <div className={styles.column}>
                <div className={styles.centro}>
                  <div className={styles.disponivel}>
                    <h1>Disponibilidade</h1>
                  </div>
                  <MyCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tela2;
