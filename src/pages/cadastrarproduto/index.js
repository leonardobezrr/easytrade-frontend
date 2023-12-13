import React, { useState } from 'react';
import styles from './cadproduto.module.css' 

export default function CadastrarProduto() {

    const initialState = {
        nome: '',
        descricao: '',
        preco: 0,
        qtd_estoque: 0,
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Dados a serem enviados:', formData);

        const url = 'https://easytrade-backend-p5k1.onrender.com/produtos/criar';

        try {
            let userData = JSON.parse(localStorage.getItem('user'))
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    preco: parseFloat(formData.preco),
                    qtd_estoque: parseInt(formData.qtd_estoque),
                    id_usuario: parseInt(userData.id),
                }),
            });

            if (response.ok) {
                console.log('Produto cadastrado');
                setFormData(initialState);
            } else {
                console.log('Falha ao cadastrar produto');
            }
        } catch (error) {
            console.error('Erro ao enviar a solicitação:', error);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.box} onSubmit={handleSubmit}>
                <h2 className={styles.h2}>Cadastrar Produto</h2>
                <div className={styles.box_interno}>
                    <label className={styles.label}>
                        <input className={styles.input} placeholder='Nome' required={true} type="text" name="nome" value={formData.nome} onChange={handleChange} />
                    </label>
                    <br />
                    <label className={styles.label}>
                        <input className={styles.input} placeholder='Descrição' required={true} type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
                    </label>
                    <br />
                    <label className={styles.label}>
                        Preço:
                        <input className={styles.input} placeholder='Preço' required={true} type="number" name="preco" value={formData.preco} onChange={handleChange} />
                    </label>
                    <br />
                    <label className={styles.label}>
                        Quantidade em Estoque:
                        <input className={styles.input} placeholder='Q° em estoque' required={true} type="number" name="qtd_estoque" value={formData.qtd_estoque} onChange={handleChange} />
                    </label>
                    <br />
                    <button className={styles.but} type="submit">Cadastrar Produto</button>
                </div>
            </form>
        </div>
    );
}
