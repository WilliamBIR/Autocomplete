import React,{useState,useContext} from "react";
import {useQuery, useMutation, queryCache, QueryClient} from "react-query";
import removeAccents from "../../api/removeAccents"

const fetchmisDatosRequest = async()=>{
    const response= await fetch('../../api/obtenerpeliculas')
    const data= await response.json()
    const {misDatos: misPeliculas}=data;
    console.log('Peliculas cargadas')
    return misPeliculas
  }

export default function Lista(){
    const {data: misPeliculas}= useQuery(["misPeliculas"],fetchmisDatosRequest)
    const[buscando,setBuscador]=useState('')
    const [Listafil,setLista]=useState([]);
    const[Limite,setLimite]=useState(4);
    const[ControlLista,setControl]=useState(0);
    const[RangoUsuario,setRangoUsuario]=useState({Rango:'NotFound',Alerta:' '})

    const handleInputChange= e =>{
        setBuscador(e.target.value);
        if(e.target.value.length===0){
            setLista([]);
            setControl(1);
            document.getElementById('Lista').style.display='none';
        
        }
        else{
            setBuscador(e.target.value)
            Acomodarlista(e.target.value)
            document.getElementById('Lista').style.display='list-item';

        }
    }

    const Acomodarlista=(Abuscar)=>{
        const numostr=isNaN(Abuscar[0]);
        var aux=[];
        var aux2=0;
        var otro=removeAccents(Abuscar.toLowerCase());
        misPeliculas.map(Peli=>{                   
            if(removeAccents(Peli.id.toLowerCase()).includes(otro) || removeAccents(Peli.title.toLowerCase()).includes(otro)  || Peli.rank===otro  ){
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
        document.getElementById('Lista').style.display='none';
        setBuscador(tabla);
        setControl(Listafil.indexOf(tabla))
        Acomodarlista(tabla)
    }
    const Cambiarlimite=(e)=>{
        setLimite(e.target.value)
    }

    const Alertaalsubir=()=>{
        var aux=0;
        var aux2=' ';
        setLista([]);
        if(buscando.length===0){
            setRangoUsuario({...RangoUsuario,["Alerta"]:'Sin texto para empezar a buscar'})
        }   
        else{ 
            misPeliculas.map(Peli=>{
                if(Peli.id===buscando ||Peli.title===buscando || Peli.rank===buscando){
                    if(RangoUsuario.Rango==='Admin'){
                    aux2='Movie Found, Title: '+Peli.title+' Rank: '+Peli.rank+' Id:'+Peli.id+' Calif: '+Peli.calif
                        setRangoUsuario({...RangoUsuario,["Alerta"]:aux2})
                    }
                    else if(RangoUsuario.Rango==='User'){
                        aux2='Movie Found, Title: '+Peli.title+' Rank: '+Peli.rank+' Id:'+Peli.id
                        setRangoUsuario({...RangoUsuario,["Alerta"]:aux2})
                    }
                    else{
                        aux2='User Not Found'
                        setRangoUsuario({...RangoUsuario,["Alerta"]:aux2})
                    }

                    aux+=1;
                }    
                return(aux)
            })
            if(aux<1){
                aux2='Movie Not found'
                setRangoUsuario({...RangoUsuario,["Alerta"]:aux2})
            }
        }
    }

    const Teclapresionada=(e)=>{
        if(e.key==='ArrowDown' &&ControlLista<Limite-1){
            setControl(prevControl =>prevControl+1)
            
        }
        else if(e.key==='ArrowUp' &&ControlLista>0){
            setControl(prevControl =>prevControl-1)
        }
        else if(e.key==="Enter"){
            document.getElementById('Lista').style.display='none';
            e.preventDefault();
            setBuscador(Listafil[ControlLista])
        }
    }




    return(
        <div>
        <p >Pelicula:  
        <input id="Buscando" name="buscando" type="search" placeholder="Search" onChange={handleInputChange}  onKeyDown={Teclapresionada}  value={buscando}></input>
        <select onChange={Cambiarlimite}>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            
        </select>
        <button onClick={()=>Alertaalsubir()}>Buscar</button>
        </p>
        <ul id="Lista">
            {Listafil.map((asd,i)=>{
                return(
                    <li key={asd}   onClick={()=>Clickenopciones(asd)} value={asd} style={{background: i===ControlLista ? "aquamarine":"white" }} >{asd} </li>
                )
            })}
        </ul>

        <p >{RangoUsuario.Alerta}</p>


        </div>
    )


}