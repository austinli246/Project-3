import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import Game from './Game';
import '../css/Games.css'
function Games(){

    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    useEffect (() => {
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setGames(response.data);
            console.log(response.data)
            
        });
    },[]); 

    if(games.length === 0 ){
         return  (
            <div className = "text-center display-5 my-auto" >
                <div class="spinner-border" role="status">

                    <span class="sr-only">  </span>
                    
                </div>
                <p> Get Ready... </p>
            </div>
        )
    }

    if (!!selectedGame){
        return (
        <div className = "text-center"> 
           <Game id = {selectedGame} />
           <button className = "btn btn-primary " onClick = {() => setSelectedGame(null)}>Go Back</button> 
        </div>
        );
    }
    return (
       <div>
           <div className = "display-4 text-center p-4 "> GAMES FOR SALE </div>
            <div className = " row d-md-flex align-items-center  flex-wrap ">

                {games.map((game) => {
                    return (
                        <p className = "col-md-6 " key = {game.id}>
                        
                        <div className="card p-2 mx-auto shadow p-3 mb-5 bg-white rounded" >
                            <img src={game.image} className="card-img-top" alt="..."/>

                            <div className="card-body text-center">
                                <h5 className="card-title">{game.name}</h5>
                                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, incidunt. Sed consequuntur beatae accusantium deleniti!</p>
                                <button className="btn btn-primary" onClick = {() => setSelectedGame(game.id)}>
                                Shop Now 
                                </button>

                            </div>
                        </div>

                    
                    </p>
                )
            })}
            </div>
        </div>
    );
}

export default Games;