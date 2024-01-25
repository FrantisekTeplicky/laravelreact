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
    // info o prihlasenom uzivatelovi
    const [user, setUser] = useState({
        name: 'Feri'
    });
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    //Testovacie kým nebolo prepojenie s backend
    //const [token, _setToken] = useState(123); //testovaci token
    //const [token, _setToken] = useState(null); //testovaci token

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };
    
    // zadefinuj uzivatela po prihlaseni
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

// exportna fubkcia statusu uzivatela do Signup
export const useStateContext = () => useContext(StateContext)