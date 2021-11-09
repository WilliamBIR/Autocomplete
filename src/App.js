import React from 'react';
import './App.css';
import Lista from "./components/Peliculas/Lista";
import Usuario from './components/Usuarios/Usuario';
import Provider from "./application/provider";



function App(props) {

    const Peliculas=    
    [
      { "title": "Alien", "rank": "1", "id": "tt0078748","calif": "a" },
      { "title": "American History X", "rank": "2", "id": "tt0120586","calif": "a" },
      { "title": "Apocalypse Now", "rank": "3", "id": "tt0078788" ,"calif": "a"},
      { "title": "Back to the Future", "rank": "4", "id": "tt0088763" ,"calif": "a"},
      { "title": "Casablanca", "rank": "5", "id": "tt0034583" ,"calif": "a"},
      { "title": "Citizen Kane", "rank": "6", "id": "tt0033467" ,"calif": "a"},
      { "title": "City Lights", "rank": "7", "id": "tt0021749" ,"calif": "a"},
      { "title": "City of God", "rank": "8", "id": "tt0317248" ,"calif": "a"},
      { "title": "Das Boot", "rank": "9", "id": "tt0082096" ,"calif": "a"},
      { "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb", "rank": "10", "id": "tt0057012" ,"calif": "a"},
      { "title": "Fight Club", "rank": "11", "id": "tt0137523" ,"calif": "a"},
      { "title": "Forrest Gump", "rank": "12", "id": "tt0109830" ,"calif": "a"},
      { "title": "Goodfellas", "rank": "13", "id": "tt0099685" ,"calif": "a"},
      { "title": "Inception", "rank": "14", "id": "tt1375666" ,"calif": "a"},
      { "title": "It's a Wonderful Life", "rank": "15", "id": "tt0038650" ,"calif": "a"},
      { "title": "Life Is Beautiful", "rank": "16", "id": "tt0118799" ,"calif": "a"},
      { "title": "Memento", "rank": "37", "id": "tt0209144" ,"calif": "a"},
      { "title": "Modern Times", "rank": "17", "id": "tt0027977" ,"calif": "a"},
      { "title": "North by Northwest", "rank": "18", "id": "tt0053125" ,"calif": "a"},
      { "title": "Once Upon a Time in the West", "rank": "19", "id": "tt0064116" ,"calif": "a"},
      { "title": "One Flew Over the Cuckoo's Nest", "rank": "20", "id": "tt0073486" ,"calif": "a"},
      { "title": "Pulp Fiction", "rank": "21", "id": "tt0110912" ,"calif": "a"},
      { "title": "Psycho", "rank": "22", "id": "tt0054215" ,"calif": "a"},
      { "title": "Raiders of the Lost Ark", "rank": "23", "id": "tt0082971","calif": "a" },
      { "title": "Rear Window", "rank": "24", "id": "tt0047396" ,"calif": "a"},
      { "title": "Saving Private Ryan", "rank": "25", "id": "tt0120815" ,"calif": "a"},
      { "title": "Schindler's List", "rank": "26", "id": "tt0108052" ,"calif": "a"},
      { "title": "Se7en", "rank": "27", "id": "tt0114369" ,"calif": "a"},
      { "title": "Seven Samurai", "rank": "28", "id": "tt0047478" ,"calif": "a"},
      { "title": "Spirited Away", "rank": "29", "id": "tt0245429" ,"calif": "a"},
      { "title": "Star Wars", "rank": "30", "id": "tt0076759" ,"calif": "a"},
      { "title": "Star Wars: Episode V - The Empire Strikes Back", "rank": "31", "id": "tt0080684" ,"calif": "a"},
      { "title": "Sunset Blvd.", "rank": "32", "id": "tt0043014" ,"calif": "a"},
      { "title": "Terminator 2: Judgment Day", "rank": "33", "id": "tt0103064" ,"calif": "a"},
      { "title": "The Dark Knight", "rank": "34", "id": "tt0468569" ,"calif": "a"},
      { "title": "The Godfather", "rank": "35", "id": "tt0068646" ,"calif": "a"},
      { "title": "The Godfather: Part II", "rank": "36", "id": "tt0071562" ,"calif": "a"}, 
      { "title": "The Good, the Bad and the Ugly", "rank": "37", "id": "tt0060196" ,"calif": "a"},
      { "title": "The Lord of the Rings: The Fellowship of the Ring", "rank": "38", "id": "tt0120737" ,"calif": "a"},
      { "title": "The Lord of the Rings: The Return of the King", "rank": "39", "id": "tt0167260" ,"calif": "a"},
      { "title": "The Lord of the Rings: The Two Towers", "rank": "40", "id": "tt0167261" ,"calif": "a"},
      { "title": "The Matrix", "rank": "41", "id": "tt0133093" ,"calif": "a"},
      { "title": "The Pianist", "rank": "42", "id": "tt0253474" ,"calif": "a"},
      { "title": "The Shawshank Redemption", "rank": "43", "id": "tt0111161" ,"calif": "a"},
      { "title": "The Shining", "rank": "44", "id": "tt0081505" ,"calif": "a"},
      { "title": "The Silence of the Lambs", "rank": "45", "id": "tt0102926" ,"calif": "a"},
      { "title": "The Usual Suspects", "rank": "46", "id": "tt0114814" ,"calif": "a"}
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
        <Provider>
        <Usuario Usuarios={Usuarios}/>
        <Lista Peliculas={Peliculas}/>
        </Provider>
    </div>

    );
  }

export default App;
