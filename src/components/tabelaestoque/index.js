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

    const handleExcluir = async (produtoId) => {
        try {
            const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/produtos/deleter/${produtoId}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== produtoId));
                alert('Produto excluido com sucesso!');
            } else {
                console.error('Falha ao excluir produto:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao fazer requisição de exclusão:', error);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th className={style.th}>ID</th>
                    <th className={style.th}>Nome</th>
                    <th className={style.th}>Descrição</th>
                    <th className={style.th}>Preço</th>
                    <th className={style.th}>Quantidade em estoque</th>
                    <th className={style.th}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos?.map((produto) => (
                    <tr key={produto.id}>
                        <td className={style.td}>{produto.id}</td>
                        <td className={style.td}>{produto.nome}</td>
                        <td className={style.td}>{produto.descricao}</td>
                        <td className={style.td}>{produto.preco}</td>
                        <td className={style.td}>{produto.qtd_estoque}</td>
                        <td className={style.td}>
                            <button className={style.but} onClick={() => handleExcluir(produto.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    
    

}
