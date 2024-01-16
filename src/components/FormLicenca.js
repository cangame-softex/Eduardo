import React from 'react';
import { useForm } from 'react-hook-form';
// import './FormLicenca.css';
import LogoMarca from './img/logoCangame.png';
import "../App.css";
import { IoHome } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { AiOutlineControl } from "react-icons/ai";

function FormLicenca() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do formulário de licença:', data);
    
  };

  return (
    <div className="formulario-container">    
            <header className="header">
                <img src={LogoMarca} alt="Logo" className="logo" />
                <h1>Formulário de Solicitação de Licença</h1>
            </header>  

            <div className="main-content">
                <aside className="sidebar">
                    <button><IoHome /> Home</button>
                    <button><FaRegPenToSquare /> Cadastro de Contrato</button>
                    <button><FaRegAddressBook /> Cadastro de Licenças</button>
                    <button><AiOutlineControl />Controle de Licenças</button>
                </aside>


      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          
          <input {...register('nome', { required: true })} className='nome'/>
          
          {errors.nome && <span>Nome é obrigatório</span>}
        </label>

        <label>
          E-mail:
          <input
            {...register('email', {required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, //Utiliza essa regex para testar se o email está dentro do padrão
            })}
          />
          {errors.email && (
            <span>Formato do e-mail incorreto. Verifique o e-mail</span>
          )}
        </label>

        <label>
          CPF:
          <input
            {...register('cpf', {
              required: true,
              pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i,
            })}
          />
          {errors.cpf && <span>CPF inválido. Utilize o formato XXX.XXX.XXX-XX</span>}
        </label>

        <label>
          Qtd de licenças:
          <input {...register('licencas', { required: true,
          pattern:  /^\d+$/})} />
          {errors.licencas && <span>Quantidade de licenças inválida. Utilize apenas números</span>}
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
            <footer className="footer">
                <p> Copyright 2023 - Softex - Cangame</p>
            </footer>
    </div>
  );
}

export default FormLicenca;