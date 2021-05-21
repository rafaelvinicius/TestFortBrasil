import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ServerURL } from "./Componentes/Config";
import InputMask from 'react-input-mask';
import { AlertForm } from "./Componentes/Funcoes";
import CabecalhoPagina from "./Componentes/Cabecalho";
import Carregando from "./Componentes/Carregando";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
  Coluna,
  Topo,
  BtSair,
  CampoForm,
  CampoBusca,
  BotaoCadastrar,
  FormEditar,
  BtMenu,
  SubTopo
} from './Estilos'

function Cadastrar(props) {

  const history = useHistory();
  const { register, handleSubmit, errors, control, setValue } = useForm();
  const [ Loading, setLoading ] = useState(false);
  const [ NomeEvento, setNomeEvento ] = useState("Test FortBrasil");
  const [ ListaLocais, setListaLocais ] = useState([]);
  const [ UsuarioNome, setUsuarioNome ] = useState(localStorage.getItem("c_nome"));
  const [ UsuarioEmail, setUsuarioEmail ] = useState(localStorage.getItem("c_email"));
  const [ UsuarioToken, setUsuarioToken ] = useState(localStorage.getItem("LogadoToken"));

  const [ LocalRazaoSocial, setLocalRazaoSocial ] = useState("");
  const [ LocalNomeFantasia, setLocalNomeFantasia ] = useState("");
  const [ LocalCNPJ, setLocalCNPJ ] = useState("");
  const [ LocalTelefone, setLocalTelefone ] = useState("");
  const [ LocalEmail, setLocalEmail ] = useState("");
  const [ LocalEndereco, setLocalEndereco ] = useState("");
  const [ LocalNumero, setLocalNumero ] = useState("");
  const [ LocalCEP, setLocalCEP ] = useState("");
  const [ LocalBairro, setLocalBairro ] = useState("");
  const [ LocalCidade, setLocalCidade ] = useState("");
  const [ LocalEstado, setLocalEstado ] = useState("");



  useEffect(() => {
    if (localStorage.getItem("c_nome") === null) { history.push({ pathname: '/login', state: {} }) }
  }, []);

  function LogOut() {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("c_nome");
      localStorage.removeItem("c_email");
      localStorage.removeItem("LogadoToken");
      history.push({ pathname: '/login', state: {} });
      setUsuarioNome("");
      setUsuarioEmail("");
      setUsuarioToken("");
    }, 200);
  }

  const onSubmit = async (data, e) => {
        
    setLoading(true);

    if(data.c_razao_social == "" || data.c_razao_social == undefined){
        AlertForm('RAZÃO SOCIAL é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_nome_fantasia == "" || data.c_nome_fantasia == undefined){
        AlertForm('NOME FANTASIA é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_cnpj == "" || data.c_cnpj == undefined){
        AlertForm('CNPJ é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_telefone == "" || data.c_telefone == undefined){
        AlertForm('TELEFONE é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_email == "" || data.c_email == undefined){
        AlertForm('E-MAIL é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_endereco == "" || data.c_endereco == undefined){
        AlertForm('ENDEREÇO é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_numero == "" || data.c_numero == undefined){
        AlertForm('NÚMERO é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_cep == "" || data.c_cep == undefined){
        AlertForm('CEP é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_bairro == "" || data.c_bairro == undefined){
        AlertForm('BAIRRO é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_cidade == "" || data.c_cidade == undefined){
        AlertForm('CIDADE é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }
    else if(data.c_estado == "" || data.c_estado == undefined){
        AlertForm('ESTADO é de preenchimento obrigatório!');
        setLoading(false);
        e.preventDefault();
    }

    else {

        const response = await fetch(ServerURL + '/Cadastrar', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-access-token': UsuarioToken
            },
            body: JSON.stringify({
            IdLocal: props.location.state.IdLocal,
            c_razao_social: data.c_razao_social,
            c_nome_fantasia: data.c_nome_fantasia,
            c_cnpj: data.c_cnpj,
            c_telefone: data.c_telefone,
            c_email: data.c_email,
            c_endereco: data.c_endereco,
            c_numero: data.c_numero,
            c_cep: data.c_cep,
            c_bairro: data.c_bairro,
            c_cidade: data.c_cidade,
            c_estado: data.c_estado
            }),
        });

        const val = await response.json();
        console.log(val);    
        
        if(val !== null) {
            if(val.auth === false) {
            LogOut()
            } else {

                if(val.c_retorno == 1) {
                    setLoading(false);
                    AlertForm("Local cadastrado com sucesso!");
                    setTimeout(() => {
                    history.push({ pathname: '/', state: {} });
                    }, 1000);
                } else {
                    setLoading(false);
                    AlertForm("O CNPJ deste local já foi cadastrado em outro momento!");
                }

            }
        } else {
            console.log('Cadastro Falhou');
        }

          
    }    

  };

  const onSubmitBusca = async (data, e) => {
        
    setLoading(true);

    if(data.c_busca == "" || data.c_busca == undefined){
        AlertForm('Você precisa digitar algo para ser pesquisado!');
        setLoading(false);
        e.preventDefault();
    }

    else {

      const response = await fetch(ServerURL + '/Buscar', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'x-access-token': UsuarioToken
        },
        body: JSON.stringify({
        c_busca: data.c_busca
        }),
    });

    const val = await response.json();
    console.log(val);    
    
    if(val !== null) {
        if(val.auth === false) {
        LogOut()
        } else {

          setLoading(false);
          setTimeout(() => {
            // history.push({ pathname: '/busca', state: {} });
          }, 200);


        }
    } else {
        console.log('Busca Falhou');
    }
          
    }    

  };




  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 8px)',
      maxWidth: 400
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  const classes = useStyles();


  return (
    <>
      <CabecalhoPagina NomeEvento={NomeEvento} />
      {Loading === true ? <Carregando /> : null }
      {localStorage.getItem("c_nome") === null ? null :
      <Coluna>

        <Topo>
          <div className="TopEsq"> {UsuarioNome} </div>
          <div className="TopDir"> <BtSair onClick={()=>LogOut()}>Sair</BtSair> </div>
        </Topo>

        <SubTopo>
          <div>
            <BtMenu onClick={()=>history.push({ pathname: '/', state: {} })}>Listar</BtMenu>
            <BtMenu onClick={()=>history.push({ pathname: '/cadastrar', state: {} })}>Cadastrar</BtMenu> 
            <BtMenu onClick={()=>history.push({ pathname: '/buscar', state: {} })}>Buscar</BtMenu>      
          </div>
        </SubTopo>



        <FormEditar onSubmit={handleSubmit(onSubmit)}>
            

          <CampoForm>
              <div>Razão Social:</div>
              <Controller
                control={control}
                ref={register}
                id="c_razao_social"
                name="c_razao_social"
                type="text"
                placeholder={'Razão Social'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>Nome Fantasia:</div>
              <Controller
                control={control}
                ref={register}
                id="c_nome_fantasia"
                name="c_nome_fantasia"
                type="text"
                placeholder={'Nome Fantasia'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>CNPJ:</div>
              <Controller
                control={control}
                ref={register}
                id="c_cnpj"
                name="c_cnpj"
                type="text"
                placeholder={'CNPJ'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask="99.999.999/9999-99"
              />
          </CampoForm>

          <CampoForm>
              <div>Telefone:</div>
              <Controller
                control={control}
                ref={register}
                id="c_telefone"
                name="c_telefone"
                type="text"
                placeholder={'Telefone'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask="(99) 9999-99999"
              />
          </CampoForm>

          <CampoForm>
              <div>E-mail:</div>
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
              />
          </CampoForm>

          <CampoForm>
              <div>Endereço:</div>
              <Controller
                control={control}
                ref={register}
                id="c_endereco"
                name="c_endereco"
                type="text"
                placeholder={'Endereço'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>Número:</div>
              <Controller
                control={control}
                ref={register}
                id="c_numero"
                name="c_numero"
                type="text"
                placeholder={'Número'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>CEP:</div>
              <Controller
                control={control}
                ref={register}
                id="c_cep"
                name="c_cep"
                type="text"
                placeholder={'CEP'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask="99999-999"
              />
          </CampoForm>

          <CampoForm>
              <div>Bairro:</div>
              <Controller
                control={control}
                ref={register}
                id="c_bairro"
                name="c_bairro"
                type="text"
                placeholder={'Bairro'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>Cidade:</div>
              <Controller
                control={control}
                ref={register}
                id="c_cidade"
                name="c_cidade"
                type="text"
                placeholder={'Cidade'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <CampoForm>
              <div>Estado:</div>
              <Controller
                control={control}
                ref={register}
                id="c_estado"
                name="c_estado"
                type="text"
                placeholder={'Estado'}
                className="CampoForm CampoFormLogin"
                as={InputMask}
                mask=""
              />
          </CampoForm>

          <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>

        </FormEditar>


    </Coluna>
      }
    </>
  );

}

export default Cadastrar;
