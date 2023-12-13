import style from "./tabelaest.module.css"
import { useState, useEffect } from "react";

export default function Tabela() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {l
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
                console.log('Dados dos produtos:', data);
                setProdutos(data);
            } else {
                console.error('Falha ao obter produtos:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao fazer requisição de produtos:', error);
        }
    };

    return (
        <table border={1}>
            <tr>
                <td>
                    <th>ID</th>
                </td>
                <td>
                    <th>Nome</th>
                </td>
                <td>
                    <th>Descrição</th>
                </td>
                <td>
                    <th>Preço</th>
                </td>
                <td>
                    <th>Quantidade em estoque</th>
                </td>
                <td>
                    <th>Ações</th>
                </td>
            </tr>

            {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.qtd_estoque}</td>
                    <td>
                        Editar | Excluir
                    </td>
                </tr>
            ))}
        </table>
    );

}
