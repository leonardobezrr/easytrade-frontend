import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
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
                setAuthenticated(true)
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
                    senha: senha
                }),
            })
    
            if (response.ok) {
                console.log("cadastro bem sucedido")
                setAuthenticated(true)
                router.push('/home');
            } else {
                const errorResponse = await response.json(); // Extrai o corpo da resposta em formato JSON
                console.error("falha no cadastro:", errorResponse.error);
            }
        } catch (error) {
            console.error("erro ao fazer cadastro", error)
        }
    }

    const logout = () => {
        // Lógica para desautenticar o usuário
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ authenticated, user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
