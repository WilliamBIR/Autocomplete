import './Usuario.css';
import React,{useState,useContext} from "react";
import {AppContext} from '../../application/provider';


export default function Usuario({Usuarios}){
    const[User,setUser]=useState('')
    const[ListaUsers,setListaUsers]=useState([])
    const[ControlLista,setControl]=useState(0)
    const[RangoUsuario,setRangoUsuario]=useContext(AppContext)
    const Limite=2


    const handleInputChange= e =>{
        setUser(e.target.value);
        if(e.target.value.length===0){
            setListaUsers([]);
        }
        else{
            Acomodarlista(e.target.value)
            setUser(e.target.value)
            revisarrango(e.target.value)

        }
    }    

    const Acomodarlista=(Abuscar)=>{
        var aux=[]
        var aux2=0
        var otro=removeAccents(Abuscar.toLowerCase());
        Usuarios.map(Usuario=>{                   
            if(removeAccents(Usuario.Nombre.toLowerCase()).includes(otro) ){
                if(aux2<Limite){    
                    aux2+=1;  
                    aux.push(Usuario.Nombre);
                    }
                }
            return(
                setListaUsers(aux)     
            )                
        })
    }

    const Clickenopciones=tabla=>{
        document.getElementById('ListaUs').style.display='none';
        setUser(tabla);
        setControl(ListaUsers.indexOf(tabla))
        revisarrango(tabla)
        Acomodarlista(tabla)
        
    }


    const revisarrango=Uwu=>{
        var aux=0
        setRangoUsuario('User')
        Usuarios.map(Usuario=>{
            if(Usuario.Nombre===Uwu){
                aux+=1;
                setRangoUsuario(Usuario.Rango)
            }

        })
        if(aux===0){
            setRangoUsuario('NotFound')
        }
    }

    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 

      const Teclapresionada=(e)=>{
        if(e.key==='ArrowDown' &&ControlLista<Limite-1){
            setControl(prevControl =>prevControl+1)
            
        }
        else if(e.key==='ArrowUp' &&ControlLista>0){
            setControl(prevControl =>prevControl-1)
        }
        else if(e.key==="Enter"){
            e.preventDefault();
            console.log("Enter presionado")
            setUser(ListaUsers[ControlLista])
            revisarrango(ListaUsers[ControlLista])
        }
    }
    

    document.addEventListener('click', function(event){
        if(event.target.id!="Usuarios"){
            document.getElementById('ListaUs').style.display='none';
        }
        else{
            document.getElementById('ListaUs').style.display='list-item';
        }
    })


    return(
        <div>
        <input id="Usuarios" name="usuarios" type="search" placeholder="Search" onChange={handleInputChange} onKeyDown={Teclapresionada}   value={User}></input>
        <ul id="ListaUs">
            {ListaUsers.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd} onClick={()=>Clickenopciones(asd)} value={asd}  style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
        </ul>
        </div>
    )
}
