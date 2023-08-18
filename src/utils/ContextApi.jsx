import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) =>{
    const [imageSearch, setImageSearch] = useState(false)
    
    const store= {
        imageSearch,
        setImageSearch
    }
    return <Context.Provider value={store}>
        {props.children}
    </Context.Provider>
}