import { useContext } from "react";
import climaContext from "../context/ClimaProvider";


const useClima = () => {
    return useContext(climaContext)
}

export default useClima