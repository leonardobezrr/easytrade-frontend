import React, { useState } from 'react';
import style from "./cadvenda.module.css"

export default function CadastrarVenda() {

    // onChange={handleChange} onSubmit={handleSubmit}value={formData.nome}
// value={formData.descricao}
// value={formData.preco}

    
    return(

        <div className={style.container}>
            <form className={style.box}>
                <h2 className={style.h2}>Cadastrar Venda</h2>
                <div className={style.box_interno}>
                    <label className={style.label}>
                        <input className={style.input} placeholder='Data' required={true} type="text" name="Data"   />
                    </label>
                    <br />
                    <label className={style.label}>
                        <input className={style.input} placeholder='Valor' required={true} type="text" name="Valor"   />
                    </label>
                    <br />
                    <label className={style.label}>
                        <input className={style.input} placeholder='Produto' required={true} type="text" name="Produto"  />
                    </label>
                    <br />
                    <br />
                    <button className={style.but} type="submit">Cadastrar Produto</button>
                </div>
            </form>
        </div>
    )
}