import { createContext, useContext, useState } from "react";

// nastav predvolen0 ghodnoty
const StateContext = createContext({
    user: null,
    token: null,
    // automaticke dokoncovanie
    setToken: () => {},
    setUser: () => {}
});

// skontroluj a nastav token prihlaseneho uzivatela
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    //const [token, _setToken] = useState(123); //testovaci token

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };
    
    // posli spat info ako pole
    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken

            }}>
                {children}
        
        
        </StateContext.Provider>
        )
    }

// exportna fubkcia statusu uzivatela
export const useStateContext = () => useContext(StateContext)