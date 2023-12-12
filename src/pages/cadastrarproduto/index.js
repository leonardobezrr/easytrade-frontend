import React, { useState } from 'react';

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
            let userData = await localStorage.getItem('user')
            let userDataObj = JSON.parse(userData)
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    preco: parseFloat(formData.preco),
                    qtd_estoque: parseInt(formData.qtd_estoque),
                    id_usuario: parseInt(userDataObj.id),
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Preço:
                    <input type="number" name="preco" value={formData.preco} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Quantidade em Estoque:
                    <input type="number" name="qtd_estoque" value={formData.qtd_estoque} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
}
