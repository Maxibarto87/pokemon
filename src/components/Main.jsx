import {Pokemon} from '../assets/data/pokemon'
import styles from '../components/Main.module.css';
import { Card } from './Card';


export function Main() {
  //console.log(Pokemon);
  const typesOfPokemon = Object.keys(Pokemon)
  //console.log(typesOfPokemon);
  //console.log(Pokemon["fire"]);
  //console.log(Pokemon["water"]);
  //console.log(Pokemon["rock"]);
  
  return (

    <div className={styles.mainContainer}>
      
      <h1>Desafio Pokemon</h1>
      <div className='styles.cardContainer'>
            {typesOfPokemon.map(type =>
            <Card key={type} data={Pokemon[type]} />
        

    )}

      </div>
      
      
    </div>
  
  
  )
}
