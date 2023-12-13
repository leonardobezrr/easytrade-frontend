import { useState, useEffect } from "react";

export default function Vendas() {

    const [vendas, setVendas] = useState([]);

    useEffect(() => {
        const idUsuario = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id : null;

        if (idUsuario) {
            fetchProdutos(idUsuario);
        } else {
            console.error('ID do usuário não encontrado.');
        }
    }, []);

    const fetchProdutos = async (idUsuario) => {
        try {
            const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/vendas/listar/${idUsuario}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Dados das vendas:', data);
                setVendas(data);
            } else {
                console.error('Falha ao obter vendas:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao fazer requisição de vendas:', error);
        }
    };

    return (
        <table border={1}>
            <tr>
                <td>
                    <th>ID</th>
                </td>
                <td>
                    <th>Data da venda</th>
                </td>
                <td>
                    <th>Valor da venda</th>
                </td>
                <td>
                    <th>Ações</th>
                </td>
            </tr>

            {vendas.map((venda) => (
                <tr key={venda.id}>
                    <td>{venda.id}</td>
                    <td>{venda.date}</td>
                    <td>{venda.valor_venda}</td>
                    <td>
                        Editar | Excluir
                    </td>
                </tr>
            ))}
        </table>
    )
}