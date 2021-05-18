import React, {useEffect, useState} from 'react'; 
import axios from 'axios';

function Game(props){

    const{id} = props; 
    const [game, setGame] = useState(null);
  
    useEffect(()=> {
      axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
          setGame(response.data);
      });
    },[]);
  
    if (!game) {
      return (
          <div>

            <div class="spinner-border" role="status">

                <span class="sr-only">  </span>
                
            </div>
            <p> Loading Game {id}</p>
          </div>
      
       ); 
    }    
  
    return (
        <div>
            <p className = "container text-center"> 
                
                <div className = "display-1">
                 {game.name} 
                </div>
                <img className = "m-3" src = {game.image} alt = {game.name}/>
                <div className = "mt-3">
                    <p> <b>Released:</b> {game.releaseYear} </p>
                    <p><b> Country:</b>  {game.country}</p>
                </div>
                
                <div className = "display-4">
                    Price: ${game.price}
                </div>
            </p>
        </div>
     );
}

export default Game;