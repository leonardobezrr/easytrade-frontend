import style from "./tabelaest.module.css"
import { useState, useEffect } from "react";

export default function Tabela() {

    const [produtos, setProdutos] = useState([]);

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
            const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/produtos/listar/${idUsuario}`);
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
                <td className={style.td1}>
                    <th className={style.th}>ID</th>
                </td>
                <td className={style.td1}>
                    <th className={style.th}>Nome</th>
                </td>
                <td className={style.td1}>
                    <th className={style.th}>Descrição</th>
                </td>
                <td className={style.td1}>
                    <th className={style.th}>Preço</th>
                </td>
                <td className={style.td1}>
                    <th className={style.th}>Quantidade em estoque</th>
                </td>
                <td className={style.td1}>
                    <th className={style.th}>Ações</th>
                </td>
            </tr>

            {produtos?.map((produto) => (
                <tr key={produto.id}>
                    <td className={style.td}>{produto.id}</td>
                    <td className={style.td}>{produto.nome}</td>
                    <td className={style.td}>{produto.descricao}</td>
                    <td className={style.td}>{produto.preco}</td>
                    <td className={style.td}>{produto.qtd_estoque}</td>
                    <td className={style.td}>
                        Editar | Excluir
                    </td>
                </tr>
            ))}
        </table>
    );

}
