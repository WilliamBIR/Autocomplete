import {QueryClient, QueryClientProvider} from "react-query";
import Usuarios from './components/Usuarios/Usuarios';
import Peliculas from './components/Peliculas/Lista';


const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false,
     },
   },
 })


export default function Home() {

  return (

    <QueryClientProvider client={queryClient}>
      <Usuarios/> 
  
    </QueryClientProvider>
  )
}
