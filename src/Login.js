import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { ServerURL } from "./Componentes/Config";
import { AlertForm } from "./Componentes/Funcoes";
import CabecalhoPagina from "./Componentes/Cabecalho";
import Carregando from "./Componentes/Carregando";

import {
  Coluna,
  CampoEmail,
  CampoSenha,
  FormCadastrar,
  BotaoCadastrar
} from './Estilos'

function Login() {

  const history = useHistory();
  const { register, handleSubmit, errors, control, setValue } = useForm();
  const [ Loading, setLoading ] = useState(false);
  const [ NomeEvento, setNomeEvento ] = useState("Test FortBrasil");

  useEffect(() => {
    if (localStorage.getItem("c_nome") !== null) {
      history.push({ pathname: '/', state: {} });
    }
  }, []);

  const onSubmit = async (data, e) => {  
      
      setLoading(true);

      if(data.c_email == "" || data.c_email == undefined){
        //console.log('passou');
        AlertForm('O campo E-MAIL é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
      }

      else if(data.c_senha == "" || data.c_senha == undefined){
        //console.log('passou');
        AlertForm('O campo SENHA é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
      }

      else if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.c_email)) { 

        setLoading(true);
        var Email = data.c_email.toLowerCase();
        var Senha = data.c_senha;

        const response = await fetch(ServerURL + '/Login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            c_email: Email.replace(' ', ''),
            c_senha: Senha
          }),
        });

        const jsonResult = await response.json();
        console.log(jsonResult);

        if(jsonResult.auth == true){
              
            localStorage.setItem("c_nome", jsonResult.c_nome);
            localStorage.setItem("c_email", jsonResult.c_email);
            localStorage.setItem("LogadoToken", jsonResult.token);
            
            history.push({
              pathname: '/',
              state: {}
            });

            setLoading(false);

        } else {

          AlertForm('E-mail não cadastrado!');
          setLoading(false);  

        }


    } else {

      AlertForm('O campo E-MAIL está com o formato incorreto!');
      setLoading(false);
      e.preventDefault();

    }

  };



  return (
    <>
      <CabecalhoPagina NomeEvento={NomeEvento} />

      {Loading === true ? <Carregando /> : null }

      <FormCadastrar onSubmit={handleSubmit(onSubmit)}>

        <Coluna>

          <CampoEmail>
            <Controller
              control={control}
              ref={register}
              id="c_email"
              name="c_email"
              type="text"
              placeholder={'E-mail'}
              className="CampoForm CampoFormLogin"
              as={InputMask}
              mask=""
              defaultValue={'rafaelviniciusweb@gmail.com'}
            />
          </CampoEmail>

          <CampoSenha>
            <Controller
              control={control}
              ref={register}
              id="c_senha"
              name="c_senha"
              type="password"
              placeholder={'Senha'}
              className="CampoForm CampoFormLogin"
              as={InputMask}
              mask=""
              defaultValue={'102030'}
            />
          </CampoSenha>

          <BotaoCadastrar type="submit">Entrar</BotaoCadastrar>

        </Coluna>

      </FormCadastrar>

    </>
  );
}

export default Login;
