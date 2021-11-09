import React from 'react';
import './App.css';
import Lista from "./components/Lista";
import Usuario from './components/Usuario';



function App(props) {

    const Peliculas=    
    [
      { "title": "Alien", "rank": "40", "id": "tt0078748" },
      { "title": "American History X", "rank": "33", "id": "tt0120586" },
      { "title": "Apocalypse Now", "rank": "34", "id": "tt0078788" },
      { "title": "Back to the Future", "rank": "44", "id": "tt0088763" },
      { "title": "Casablanca", "rank": "25", "id": "tt0034583" },
      { "title": "Citizen Kane", "rank": "48", "id": "tt0033467" },
      { "title": "City Lights", "rank": "38", "id": "tt0021749" },
      { "title": "City of God", "rank": "21", "id": "tt0317248" },
      { "title": "Das Boot", "rank": "72", "id": "tt0082096" },
      { "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "rank": "39", "id": "tt0057012" },
      { "title": "Fight Club", "rank": "10", "id": "tt0137523" },
      { "title": "Forrest Gump", "rank": "18", "id": "tt0109830" },
      { "title": "Goodfellas", "rank": "15", "id": "tt0099685" },
      { "title": "Inception", "rank": "14", "id": "tt1375666" },
      { "title": "It's a Wonderful Life", "rank": "29", "id": "tt0038650" },
      { "title": "Life Is Beautiful", "rank": "45", "id": "tt0118799" },
      { "title": "Memento", "rank": "37", "id": "tt0209144" },
      { "title": "Modern Times", "rank": "41", "id": "tt0027977" },
      { "title": "North by Northwest", "rank": "43", "id": "tt0053125" },
      { "title": "Once Upon a Time in the West", "rank": "24", "id": "tt0064116" },
      { "title": "One Flew Over the Cuckoo's Nest", "rank": "13", "id": "tt0073486" },
      { "title": "Pulp Fiction", "rank": "4", "id": "tt0110912" },
      { "title": "Psycho", "rank": "30", "id": "tt0054215" },
      { "title": "Raiders of the Lost Ark", "rank": "27", "id": "tt0082971" },
      { "title": "Rear Window", "rank": "28", "id": "tt0047396" },
      { "title": "Saving Private Ryan", "rank": "36", "id": "tt0120815" },
      { "title": "Schindler's List", "rank": "8", "id": "tt0108052" },
      { "title": "Se7en", "rank": "22", "id": "tt0114369" },
      { "title": "Seven Samurai", "rank": "17", "id": "tt0047478" },
      { "title": "Spirited Away", "rank": "42", "id": "tt0245429" },
      { "title": "Star Wars", "rank": "16", "id": "tt0076759" },
      { "title": "Star Wars: Episode V - The Empire Strikes Back", "rank": "11", "id": "tt0080684" },
      { "title": "Sunset Blvd.", "rank": "32", "id": "tt0043014" },
      { "title": "Terminator 2: Judgment Day", "rank": "35", "id": "tt0103064" },
      { "title": "The Dark Knight", "rank": "6", "id": "tt0468569" },
      { "title": "The Godfather", "rank": "2", "id": "tt0068646" },
      { "title": "The Godfather: Part II", "rank": "3", "id": "tt0071562" }, 
      { "title": "The Good, the Bad and the Ugly", "rank": "5", "id": "tt0060196" },
      { "title": "The Lord of the Rings: The Fellowship of the Ring", "rank": "12", "id": "tt0120737" },
      { "title": "The Lord of the Rings: The Return of the King", "rank": "9", "id": "tt0167260" },
      { "title": "The Lord of the Rings: The Two Towers", "rank": "20", "id": "tt0167261" },
      { "title": "The Matrix", "rank": "19", "id": "tt0133093" },
      { "title": "The Pianist", "rank": "47", "id": "tt0253474" },
      { "title": "The Shawshank Redemption", "rank": "1", "id": "tt0111161" },
      { "title": "The Shining", "rank": "46", "id": "tt0081505" },
      { "title": "The Silence of the Lambs", "rank": "23", "id": "tt0102926" },
      { "title": "The Usual Suspects", "rank": "26", "id": "tt0114814" }
  ]
    const Usuarios=[
      {Nombre:"Skadi",Rango:"User"},
      {Nombre:"Merlin",Rango:"User"},
      {Nombre:"Reinnes",Rango:"Admin"},
      {Nombre:"Tamamo",Rango:"User"},
      {Nombre:"Castoria",Rango:"Admin"}

    ]
    return(
    <div className="Todo">
        <h1 className="autot">Autocompletar</h1>
        <p>What movie you are searching?</p>
        <Usuario Usuarios={Usuarios}/>
        <Lista Peliculas={Peliculas}/>
    </div>

    );
  }

export default App;