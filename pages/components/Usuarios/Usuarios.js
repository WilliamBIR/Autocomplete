
import React,{useState,useContext} from "react";
import {useQuery, useMutation, queryCache, QueryClient} from "react-query";
import removeAccents from "../../api/removeAccents"


  const fetchmisDatosRequest = async()=>{
    const response= await fetch('../../api/obtenerusuarios')
    const data= await response.json()
    const {misDatos}=data;
    console.log('Base cargada')
    return misDatos
  }

export default function Usuarios(){
    const {data: misDatos}= useQuery(["misDatos"],fetchmisDatosRequest)
    const[User,setUser]=useState('')
    const[ListaUsuarios,setUsuarios]=useState([])
    const[ControlLista,setControl]=useState(0)
    const[Mensaje,setMensaje]=useState('')
    const Limite=6
    


    const handleInputChange= e =>{   
        setMensaje('')               
        setUser(e.target.value);
        if(e.target.value.length===0){
            document.getElementById('ListaUs').style.display='none';
            setUsuarios([]);

        }
        else{
            document.getElementById('ListaUs').style.display='list-item';
            setUser(e.target.value)
            Acomodarlista(e.target.value)
            BuscaUsuario(e.target.value)
            }
        }

    const Acomodarlista=(Abuscar)=>{
        var aux=[]
        var aux2=0
        var otro=removeAccents(Abuscar.toLowerCase());
        misDatos.map(Usuario=>{                   
            if(removeAccents(Usuario.Nombre.toLowerCase()).includes(otro) ){
                if(aux2<Limite){    
                    aux2+=1;  
                    aux.push(Usuario.Nombre);
                    }
                }
            return(
                setUsuarios(aux)     
            )                
        })
        }
    
        const Teclapresionada=(e)=>{
            if(e.key==='ArrowDown' &&ControlLista<Limite-1 ){
                setControl(prevControl =>prevControl+1)
                if(ControlLista>Limite-1){
                    setControl(Limite-1)
                }
            }
            else if(e.key==='ArrowUp' &&ControlLista>0){
                setControl(prevControl =>prevControl-1)
            }
            else if(e.key==="Enter"){
                setControl(0)
                setUser(ListaUsuarios[ControlLista])
                document.getElementById('ListaUs').style.display='none'; 
                BuscaUsuario(ListaUsuarios[ControlLista])
            }
            }
    
            const Clickenopciones=tabla=>{
                document.getElementById('ListaUs').style.display='none';
                setMensaje('')
                setUser(tabla);
                setControl(ListaUsuarios.indexOf(tabla))
                BuscaUsuario(tabla)
                Acomodarlista(tabla)
                setControl(0)
            }
        
            const BuscaUsuario=NombreUsuario=>{
                misDatos.map(Usuario=>{
                    if(Usuario.Nombre===NombreUsuario){
                        setMensaje('UserFound')
                    }
                })
            }
    
    return(
        <div>
            <p>Usuario: 
            <input onChange={handleInputChange} onKeyDown={Teclapresionada}   value={User} id="Usuarios" name="usuarios" type="search" placeholder="Search" ></input>
            {Mensaje}</p>
            <ul id="ListaUs">
            {ListaUsuarios.map((asd,i)=>{
                return(
                    <li className='Opciones' key={asd} onClick={()=>Clickenopciones(asd)} value={asd}   style={{background: i===ControlLista ? "aquamarine":"white"}}>{asd} </li>
                )
            })}
            </ul>

        </div>
    )
}

