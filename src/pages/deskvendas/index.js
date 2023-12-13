import { useState, useEffect } from "react";
import Image from "next/image";
import style from "./vendas.module.css"
import ListaSuspensa from "@/components/listasuspensa";
import Link from "next/link";

export default function Vendas() {

    const filtros = [
        'Data da venda',
        'valor',
        'produto',
        'id',
    ]

    const [vendas, setVendas] = useState([]);
    const [filtro, setFiltros] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [produtosDaVenda, setProdutosDaVenda] = useState([]);
    const [selectedVendaId, setSelectedVendaId] = useState(null);


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

    const fetchProdutosDaVenda = async (idVenda) => {
        try {
            const response = await fetch(`https://easytrade-backend-p5k1.onrender.com/produtosvenda/listar/${idVenda}`);
            if (response.ok) {
                const data = await response.json();
                console.log('Produtos da venda:', data);
                setProdutosDaVenda(data);
            } else {
                console.error('Falha ao obter produtos da venda:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao fazer requisição de produtos da venda:', error);
        }
    };

    const handleVerProdutosClick = (vendaId) => {
        setSelectedVendaId(vendaId);
        setModalOpen(true);
        fetchProdutosDaVenda(vendaId);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedVendaId(null);
        setProdutosDaVenda([]);
    };

    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.start}>
                    <Link href="/home">
                        <Image
                        src="/menubuttom.svg"
                        alt='menubuttom'
                        width={24}
                        height={22.9}
                        priority/>
                    </Link>
                    <h2 className={style.h2}>Movimentação de caixa</h2>
                </div>
                <div className={style.end}>
                    <h2>Nome de usuário</h2>
                    <Image
                    src="/pp.svg"
                    alt='logo usurário'
                    width={24}
                    height={22.9}
                    priority/>
                    <Image
                    src="/bell.svg"
                    alt='logo notificação'
                    width={24}
                    height={22.9}
                    priority/>
                </div>
            </div>
            <div className={style.filtro}>
                <div className={style.filter}>
                    <Image
                        src="/filtro.svg"
                        alt='logo notificação'
                        width={24}
                        height={22.9}
                        priority/>
                </div>
                <p className={style.p1}>Filtrar por:</p>
                <ListaSuspensa
                itens={filtros}
                valor={filtros}
                aoAlterado={valor => setFiltros(valor)}/>
                <p className={style.p1}>Valor:</p>
                <label className={style.label}>
                    <input className={style.input} placeholder='Valor' required={true} type="number" name="preco"/>
                </label>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data da venda</th>
                        <th>Valor da venda</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas?.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.id}</td>
                            <td>{venda.date}</td>
                            <td>{venda.valor_venda}</td>
                            <td>
                                <button onClick={() => handleVerProdutosClick(venda.id)}>ver produtos</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {modalOpen && (
                <dialog open={modalOpen} onClose={handleCloseModal}>
                    <div>
                        <h2>Produtos da Venda</h2>
                        <ul>
                            {produtosDaVenda?.map((produto) => (
                                <li key={produto.id}>{produto.id} | {produto.idproduto} | {produto.idvenda} | {produto.valor_unitario} | {produto.quantidade}</li>
                            ))}
                        </ul>
                        <button onClick={handleCloseModal}>Fechar</button>
                    </div>
                </dialog>
            )}
        </div>
    )
}