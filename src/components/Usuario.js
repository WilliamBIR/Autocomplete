import './Usuario.css';
import React,{useState} from "react";

export default function Usuario({Usuarios}){
    const[User,setUser]=useState('')
    const[ListaUsers,setListaUsers]=useState([])
    const[ControlLista,setControl]=useState(0)
    const Limite=2
   
    const handleInputChange= e =>{
        setUser(e.target.value);
        if(e.target.value.length===0){
            setListaUsers([]);
        }
        else{
            Acomodarlista(e.target.value)
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
        setUser(tabla);
        setControl(ListaUsers.indexOf(tabla))
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
            setUser(ListaUsers[ControlLista])
        }
    }
    
    
    return(
        <div>
        <input name="usuarios" type="search" placeholder="Search" onChange={handleInputChange} onKeyDown={Teclapresionada}   value={User}></input>
        <ul>
            {ListaUsers.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd} onClick={()=>Clickenopciones(asd)} value={asd}  style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
        </ul>
        </div>
    )
}
