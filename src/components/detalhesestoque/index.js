import style from "./detalhes.module.css"
import Image from "next/image"
import { useState, useEffect } from "react";

export default function Detalhes(){

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
    
    return(
        <section className={style.detalhes}>
                <div className={style.infos}>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <p className={style.titlecard}>Item:</p>
                            <p className={style.pdesc}>Lorem ipsun</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Quantidade°:</p>
                            <p className={style.pdesc}>40</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Descrição:</p>
                            <p className={style.pdesc}>Cerveja</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>Preço:</p>
                            <p className={style.pdesc}>R$59,90</p>
                        </div>
                        <div className={style.card}>
                            <p className={style.titlecard}>ID:</p>
                            <p className={style.pdesc}>01</p>
                        </div>
                    </div>
                    <div className={style.pesquisa}>
                        <p>Pesquisar:</p>
                        <Image
                        src="/pesquisa.svg"
                        alt="shape pesquisa"
                        width={13.53}
                        height={13.67}
                        priority
                        />
                    </div>
                </div>
                <div className={style.filtros}>
                    <h3 className={style.h3}>Filtros:</h3>
                    <div className={style.typefiltro}>
                        <div>
                            <p className={style.pfiltros}>item</p>
                        </div>
                        <div>
                            <p className={style.pfiltros}>quantidade</p>
                        </div>
                        <div>
                            <p className={style.pfiltros}>preço</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}