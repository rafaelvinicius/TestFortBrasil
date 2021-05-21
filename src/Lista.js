import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ServerURL } from "./Componentes/Config";
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
  BtMenu,
  BtEditarExcluir,
  SubTopo
} from './Estilos'

function Lista() {

  const history = useHistory();
  const { register, handleSubmit, errors, control, setValue } = useForm();
  const [ Loading, setLoading ] = useState(true);
  const [ NomeEvento, setNomeEvento ] = useState("Test FortBrasil");
  const [ ListaLocais, setListaLocais ] = useState([]);
  const [ UsuarioNome, setUsuarioNome ] = useState(localStorage.getItem("c_nome"));
  const [ UsuarioEmail, setUsuarioEmail ] = useState(localStorage.getItem("c_email"));
  const [ UsuarioToken, setUsuarioToken ] = useState(localStorage.getItem("LogadoToken"));

  useEffect(() => {
    if (localStorage.getItem("c_nome") === null) { history.push({ pathname: '/login', state: {} }) }
    PegaLista();
  }, []);

  async function PegaLista() {
    const response = await fetch(ServerURL + '/Listar', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': UsuarioToken
      }
    });
    const val = await response.json();
    if(val !== null) {
      if(val.auth === false) {
        LogOut()
      } else {
        setListaLocais(val);
        setLoading(false);
      }
    } else {
      console.log('PegaLista Falhou');
    }  
  }

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

  async function EditarLocal(id) {
    history.push({ pathname: '/editar/'+id, state: {IdLocal: id} });
  }

  async function ExcluirLocal(id) {
    const response = await fetch(ServerURL + '/Excluir', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ IdLocal: id })
    });
    const val = await response.json();
    if(val.excluir == "sim") {
      AlertForm("Local excluído com sucesso!");
      document.getElementById(id).style.display='none';
    } else {
      AlertForm("O local não foi excluído!");
    }  
  }

  function ImprimeMsg(item, index) {
    return <div id={item._id} key={index}>
       {item.c_nome_fantasia}
       {item.c_cnpj}
       {item.c_telefone} 
       <a onClick={()=>ExcluirLocal(item._id)}>Excluir</a>
    </div>
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

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

        {/* <LocaisLista>
          { ListaLocais.length === 0 ? <div></div> : ListaLocais.slice(0).map((item, index) => ImprimeMsg(item, index) ) }
        </LocaisLista> */}




        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Razão Social</StyledTableCell>
                <StyledTableCell align="right">Nome Fantasia</StyledTableCell>
                <StyledTableCell align="right">CNPJ</StyledTableCell>
                <StyledTableCell align="right">Telefone</StyledTableCell>
                <StyledTableCell align="right">E-mail</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ListaLocais.map((item) => (
                <StyledTableRow key={item._id} id={item._id}>
                  <TableCell component="th" scope="row"><strong>{item.c_razao_social}</strong></TableCell>
                  <TableCell align="right">{item.c_nome_fantasia}</TableCell>
                  <TableCell align="right">{item.c_cnpj}</TableCell>
                  <TableCell align="right">{item.c_telefone}</TableCell>
                  <TableCell align="right">{item.c_email}</TableCell>
                  <TableCell align="right">
                    <BtEditarExcluir onClick={()=>EditarLocal(item._id)}>EDITAR</BtEditarExcluir>
                    <BtEditarExcluir onClick={()=>ExcluirLocal(item._id)}>EXCLUIR</BtEditarExcluir>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



      </Coluna>
      }
    </>
  );

}

export default Lista;
