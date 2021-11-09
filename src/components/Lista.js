import './Lista.css';
import React,{useState} from "react";


export default function Lista({Peliculas}){
    const[buscando,setVegetal]=useState('')
    const [Listafil,setLista]=useState([]);
    const [Alertafinal,setAlerta]=useState('');
    const[emoji,setEmoji]=useState('');
    const[Limite,setLimite]=useState(4);
    const[ControlLista,setControl]=useState(0)

    
    const handleInputChange= e =>{
        setVegetal(e.target.value);
        setAlerta('');     
        if(e.target.value.length===0){
            setLista([]);
            setEmoji('');
            setControl(1);
        }
        else{
            setEmoji('🔍')
            Acomodarlista(e.target.value)
        }
    }

    const Acomodarlista=(Abuscar)=>{
        const numostr=isNaN(Abuscar[0]);
        var aux=[];
        var aux2=0;
        var otro=removeAccents(Abuscar.toLowerCase());
        Peliculas.map(Peli=>{                   
            if(removeAccents(Peli.id.toLowerCase()).includes(otro) || removeAccents(Peli.title.toLowerCase()).includes(otro)  || removeAccents(Peli.rank.toLowerCase()).includes(otro)  ){
                if(aux2<Limite){    
                    aux2+=1;  
                    if(numostr){
                        if(otro.length >= 2 && otro.substring(0,2)==="tt"){
                            aux.push(Peli.id);
                        }
                        else{
                            aux.push(Peli.title);    
                        }
                    }          
                    else{
                        aux.push(Peli.rank);
                    }
                }
            }
            return(
                setLista(aux)     
            )                
        })
    }

    const Clickenopciones=tabla=>{
        setVegetal(tabla);
    }
    const Cambiarlimite=(e)=>{
        setLimite(e.target.value)

    }

    const Alertaalsubir=()=>{
        var aux=0;
        setLista([]);
        if(buscando.length===0){
            setEmoji('🛠')
            setAlerta('Sin texto para empezar a buscar');
        }   
        else{ 
            Peliculas.map(Peli=>{
                if(Peli.id.includes(buscando) ||Peli.title.includes(buscando) || Peli.rank.includes(buscando)){
                    setAlerta('Movie Found, Title: '+Peli.title+' Rank: '+Peli.rank+' Id:'+Peli.id)
                    setEmoji('😎')

                    aux+=1;
                }    
                return(aux)
            })
            if(aux<1){
                setAlerta('Not found')
                setEmoji('😢')
            
            }
            else{
            }
        }
    }

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 
    
    const Teclapresionada=(e)=>{
        if(e.key==='ArrowDown' &&ControlLista<Limite-1){
            console.log("Abajo presionado")
            setControl(prevControl =>prevControl+1)
            
        }
        else if(e.key==='ArrowUp' &&ControlLista>0){
            console.log("Arriba presionado")
            setControl(prevControl =>prevControl-1)
        }
        else if(e.key==="Enter"){
            e.preventDefault();
            console.log("Enter presionado")
            setVegetal(Listafil[ControlLista])
        }
    }



    return(
        <div>
        <input name="buscando" type="search" placeholder="Search" onChange={handleInputChange}  onKeyUp={Teclapresionada}  value={buscando}></input>
        <select onChange={Cambiarlimite}>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            
        </select>
        <button onClick={()=>Alertaalsubir()}>Buscar</button>

        <ul>
            {Listafil.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd}   onClick={()=>Clickenopciones(asd)} value={asd} style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
        </ul>

        <p>{Alertafinal}
        <span>{emoji}</span></p>


        </div>
    )
}