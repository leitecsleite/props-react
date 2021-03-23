import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './style.css';

export default function ListaDeSignos() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        <ItemLista
            signo="Aquário" dataInicio="21/01"
            dataFim="19/02" imagem="assets/aquario.jpg"/>
      </div>
    </div>
  )
}