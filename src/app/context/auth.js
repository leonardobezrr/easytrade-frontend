import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAuth, setUserAuth] = useState()
    const [authenticated, setAuthenticated] = useState(false)
    const router = useRouter();

    const login = async (email, senha) => {
        const url = 'https://easytrade-backend-p5k1.onrender.com/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setAuthenticated(true);
                router.push('/home');
                return userData;
            } else {
                console.error('falha no login');
                throw new Error('Falha no login');
            }
        } catch (error) {
            console.error('erro ao fazer login', error);
            throw error;
        }
    }

    const register = async (nome, email, senha) => {
        const url = 'https://easytrade-backend-p5k1.onrender.com/usuarios/criar'

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha,
                }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setAuthenticated(true);
                router.push('/home');
                return userData;
            } else {
                console.error('falha no cadastro');
                throw new Error('Falha no cadastro');
            }
        } catch (error) {
            console.error('erro ao fazer cadastro', error);
            throw error;
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.clear();
    };

    const handleLogout = async () => {
        await logout();
        setUserAuth(false);
        router.push('/'); 
    };

    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout, register, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
