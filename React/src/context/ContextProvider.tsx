import { ReactNode, createContext, useContext, useState } from "react";

interface User {
    name?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}

interface StateContextType {
    user: User;
    token: string | null;
    notification: string | null;
    setUser: (user: User) => void;
    setToken: (token: string | null) => void;
    setNotification: (message: string) => void;
}

const StateContext = createContext<StateContextType>({
    user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    },
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
});

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
    children,
}) => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [token, _setToken] = useState<string | null> (localStorage.getItem("ACCESS_TOKEN"));
    const [notification, _setNotification] = useState<string>("");


    const setToken = () => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    const setNotification = (message: string) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification("");
        }, 5000);
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                notification,
                setUser,
                setToken,
                setNotification,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
