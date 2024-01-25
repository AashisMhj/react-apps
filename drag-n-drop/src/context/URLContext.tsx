import { useContext, createContext, ReactNode, useState, useEffect } from "react";


export type URLContextType = {
    currentPath: string,
    navigate: (new_value: string) => void;
}

const ContextDefaultValue: URLContextType = {
    currentPath: "/",
    navigate: () => { }
}

export const URLContext = createContext(ContextDefaultValue);

export const useURLContext = () => {
    return useContext(URLContext);
}

const URLProvider = ({ children }: { children: ReactNode }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const handlePropsState = () => {
            setCurrentPath(window.location.pathname);
        }

        // popstate event listener to handle back/forward navigation
        window.addEventListener('popstate', handlePropsState);

        return () => {
            window.removeEventListener('popstate', handlePropsState);
        }
    }, []);

    const navigate = (path: string) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    }
    return (
        <URLContext.Provider value={{ currentPath, navigate }}>
            {
                children
            }
        </URLContext.Provider>
    )
}

export default URLProvider;