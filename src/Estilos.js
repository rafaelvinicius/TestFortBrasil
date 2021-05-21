import styled from 'styled-components';

import BgFormCadastrar from "./images/bglogin.jpg"
import IcoSair from "./images/ico_sair.png"

export const Clear = styled.div`
    clear: both;
`;

export const Coluna = styled.div`
    width: calc(100% - 100px);
    max-width: 1650px;
    margin: 20px auto;
    @media(max-width: 800px) {
        width: calc(100% - 40px);
    }
`;

export const LocaisLista = styled.div`
    width: calc(100% - 40px);
    margin: 0 auto;
    border-top: 1px solid #000000;
    div {
        border-bottom: 1px solid #000000;
        padding: 10px;
    }
`;


export const ColunaLive = styled.div`
    width: calc(100% - 100px);
    max-width: 1650px;
    margin: 0 auto;
    @media(max-width: 1740px) {
        max-width: 1400px;
    }
    @media(max-width: 1490px) {
        max-width: 1280px;
    }
    @media(max-width: 1365px) {
        width: calc(100% - 50px);
        max-width: 1150px;
    }
    @media(max-width: 1130px) {
        width: calc(100% - 50px);
        max-width: 1000px;
    }
`;


export const BackgroundImg = styled.div`
    display: grid;
    background-image: url(${props => props.Background});
    background-position: top center;
    background-repeat: no-repeat;
    background-color: ${props => props.bgcolor};
    min-height: 100vh;
    @media(max-width: 800px) {
        background-image: url(${props => props.BackgroundMob});
    }
`;

export const LogoLogin = styled.img`
    width: 100%;
    display: block;
    margin: 235px auto 30px auto;
    max-width: ${props => props.MaxWidth+'px'};
    @media(max-width: 600px) {
        max-width: 170px;
    }
`;

export const Hashtag = styled.div`
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    color: #0033a1;
    text-align: center;
    font-size: 35px;
    margin-bottom: 10px;
    @media(max-width: 600px) {
        font-size: 20px;
    }
`;

export const DataEvento = styled.img`
    width: 100%;
    display: block;
    margin: 0 auto 30px auto;
    max-width: ${props => props.MaxWidth+'px'};
    @media(max-width: 600px) {
        max-width: 230px;
    }
`;

export const FormCadastrar = styled.form`
    /* background-image: url(${BgFormCadastrar}); */
    background-position: top center;
    background-repeat: no-repeat;
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 100%;
`;

export const FormEditar = styled(FormCadastrar)`
`;


export const CampoForm = styled.div`

    max-width: 464px;
    margin: 0 auto;
    div {
        text-align: left;
        margin-bottom: 5px;
        font-size: 13px;
    }
    input {
        font-family: 'NIVEA Brand Type TT';
        font-weight: 500;
        font-size: 20px;
        max-width: 430px;

        background-color: #FFFFFF;
        color: #0033a1;
        border: none;
        outline: none;

        padding: 15px 15px;
        width: calc(100% - 34px);
        -webkit-box-sizing: initial;
        -moz-box-sizing: initial;
        box-sizing: initial;
        border-radius: 4px;
        border: 2px solid #ddbba3;
        margin-bottom: 13px;

        @media(max-width: 650px) {
        }
     }
`;

export const CampoNome = styled(CampoForm)`
`;

export const CampoEmail = styled(CampoForm)`
`;

export const CampoSenha = styled(CampoForm)`
`;

export const CampoBusca = styled(CampoForm)`
    width: 100%;
    input {
        font: inherit;
        color: currentColor;
        width: 100%;
        border: 0;
        height: 1.1876em;
        margin: 0;
        display: block;
        min-width: 0;
        background: none;
        box-sizing: content-box;
        animation-name: mui-auto-fill-cancel;
        letter-spacing: inherit;
        animation-duration: 10ms;
        -webkit-tap-highlight-color: transparent;
    }
`;

export const DivBusca = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

export const CampoPergunta = styled.div`
    textarea {
        font-family: 'NIVEA Brand Type TT';
        font-weight: 500;
        font-size: 20px;
        max-width: inherit;
        min-height: 250px;

        background-color: #FFFFFF;
        color: #0033a1;
        border: none;
        outline: none;
        resize: none;

        padding: 15px 15px;
        width: calc(100% - 32px);
        -webkit-box-sizing: initial;
        -moz-box-sizing: initial;
        box-sizing: initial;
        border-radius: 20px;
        border: 2px solid #ddbba3;
        margin-bottom: 10px;

        @media(max-width: 650px) {
        }
     }
`;

export const BotaoCadastrar = styled.button`
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    border: none; 
    cursor: pointer; 
    outline: none;
    border-radius: 4px;
    padding: 15px 15px;
    color: #FFFFFF;
    background-color: #0033a1;
    max-width: 460px;
    width: calc(100% - 0px);
    margin-bottom: 20px;
    -webkit-user-select: none;
    user-select: none;
    &:hover {
        color: #FFFFFF;
        background-color: #5656a9;
    }
    @media(max-width: 650px) {
    }
`;

export const DivPlayerVideo = styled.div`
    display: flex;
    width: calc(100% - 30px);
    /* height: calc(100% - 0px); */
    /* padding: 25px; */
    text-align: right;
    max-width: 1280px;
    display: inline-block;
    @media(max-width: 1260px) {
        width: calc(100% - 0px);
    }
    @media(max-width: 1040px) {
        width: calc(100% - 0px);
        padding-right: 0px;
        margin-bottom: 20px;
    }
`;

export const TextoSuporte = styled.div`
    font-family: 'NIVEA Brand Type TT ExCon';
    font-weight: normal;
    font-size: 18px;
    display: table;
    color: #637394;
    text-align: center;
    border-bottom: 1px solid #637394;
    margin: 30px auto 10px auto;
    span {
        font-weight: 500;
    }
    @media(max-width: 600px) {
        font-size: 16px;
    }
    @media(max-width: 550px) {
        border-bottom: none;
        span {
            display: block;
        }
    }
    @media(max-width: 400px) {
        font-size: 14px;
    }
`;

export const VideoPerguntas = styled.div`
    display: flex;
    -webkit-box-shadow: 2px 5px 35px 5px rgb(221 187 163 / 30%);
    box-shadow: 2px 5px 35px 5px rgb(221 187 163 / 30%);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    @media(max-width: 1040px) {
        display: block;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
`;

export const BtSair = styled.a`
    font-family: 'NIVEA Brand Type TT';
    font-weight: 500;
    color: #ddbba3;
    font-size: 18px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    &:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        background-image: url(${IcoSair});
        background-position: center center;
        background-size: contain;
        margin-left: 10px;
    }
    &:hover {
        color: #0033a1;
    }
    @media(max-width: 600px) {
        font-size: 15px;
        &:after {
            width: 18px;
            height: 18px;
        }
    }
`;

export const BtMenu = styled.a`
    font-family: 'NIVEA Brand Type TT';
    font-weight: 500;
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border-radius: 4px;
    background-color: #ddbba3;
    padding: 10px 15px;
    margin-right: 10px;
    display: inline-block;
    &:hover {
        color: #FFFFFF;
        background-color: #000000;
    }
    @media(max-width: 600px) {
        font-size: 15px;
    }
    @media(max-width: 520px) {
        margin-bottom: 10px;
    }
`;

export const BotaoEnviar = styled.button`
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    border: none; 
    cursor: pointer; 
    outline: none;
    border-radius: 100px;
    padding: 15px 15px;
    color: #FFFFFF;
    background-color: #0033a1;
    max-width: 460px;
    width: calc(100% - 0px);
    -webkit-user-select: none;
    user-select: none;
    &:hover {
        color: #FFFFFF;
        background-color: #5656a9;
    }
    @media(max-width: 650px) {
    }
`;

export const ChatComentarios = styled.div`
    width: 100%;
    max-width: 430px;
    background-color: rgb(255 255 255 / 100%);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    @media(max-width: 1365px) {
        max-width: 350px;
    }
    @media(max-width: 1200px) {
        max-width: 300px;
    }
    @media(max-width: 1040px) {
        max-width: inherit;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;

        -webkit-box-shadow: 2px 5px 35px 5px rgb(221 187 163 / 30%);
        box-shadow: 2px 5px 35px 5px rgb(221 187 163 / 30%);
    }
`;

export const DivFormPergunta = styled.div`
    width: calc(100% - 50px);
    padding: 20px 25px 20px 25px;
    text-align: center;
`;

export const RolagemChat = styled.div`
    text-align: left;
    width: calc(100% - 50px);
    margin: 0 auto 0px auto;
    padding: 30px 25px 0px 25px;
    overflow: auto;
    height: calc(927px - 510px);
    font-family: 'NIVEA Brand Type TT';
    font-size: 14.5px;
    div {
        color: #a07c63;
        align-items: center;
        width: calc(100% - 0px);
        border-top: 1px solid hsl(0deg 0% 0% / 10%);
        padding-bottom: 15px;
        padding-top: 15px;
        word-break: break-word;
        &:first-child {
            border-top: 0px solid hsl(0deg 0% 0% / 10%);
            padding-top: 0px;
        }
    span {
        width: 100%;
        display: flex;
        margin-bottom: 5px;
        color: #ddbba3;
        align-items: flex-end;
        b {
            font-size: 14px;
            font-weight: 500;
            width: 100%;
            color: #0033a1;
        }
        i {
            text-transform: uppercase;
            width: 100%;
            font-size: 13px;
            text-align: right;
            font-style: normal;
        }
    }
    }
   
    @media(max-width: 1740px) {
        height: calc(927px - 650px);
    }
    @media(max-width: 1490px) {
        height: calc(927px - 720px);
    }
    @media(max-width: 1365px) {
        height: calc(927px - 720px);
    }
    @media(max-width: 1130px) {
        height: calc(927px - 780px);
    }
    @media(max-width: 1040px) {
        height: calc(927px - 680px);
    }
`;

export const HashtagChat = styled.div`
    background-color: #0033a1;
    color: #FFFFFF;
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    text-align: center;
    font-size: 25px;
    padding: 20px 0;
    border-top-right-radius: 20px;
    -webkit-box-shadow: 2px 5px 15px 5px rgb(221 187 163 / 50%);
    box-shadow: 2px 5px 15px 5px rgb(221 187 163 / 50%);
    @media(max-width: 1365px) {
        padding: 12px 0;
        font-size: 22px;
    }
    @media(max-width: 1200px) {
        padding: 10px 0;
        font-size: 18px;
    }
`;

export const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    background-color: #000000;
    color: #FFFFFF;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const SubTopo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 15px 20px;
    background-color: #dadada;
    margin-bottom: 15px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    div {
        &:first-child {
            width: 100%;
        }
    }
    @media(max-width: 520px) {
        display: block;
        text-align: center;
    }
`;

export const LogoLive = styled.img`
    width: 100%;
    max-width: 120px;
    margin-top: 15px;
    margin-bottom: 15px;
    @media(max-width: 1280px) {
        max-width: 100px;
    }
    @media(max-width: 1000px) {
        max-width: 90px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    @media(max-width: 600px) {
        max-width: 70px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

export const BotaoExcluir = styled.button`
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    background-color: #474747;
    border: 2px solid #474747;
    color: #FFFFFF;
    padding: 10px 15px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    display: block;
    border-radius: 3px;
    margin: 0px 0 0 20px;
    width: calc(100% - 30px);
    max-width: 110px;
    &:hover {
        background-color: #333333;
        border: 2px solid #333333;
        color: #FFFFFF;
    }
    @media(max-width: 650px) {
        margin: 10px 0 0 0px;
        max-width: inherit;
        width: calc(100% - 0px);
    }
`;

export const BtEditarExcluir = styled.button`
    font-family: 'NIVEA Brand Type TT';
    font-weight: bold;
    background-color: #474747;
    border: 2px solid #474747;
    color: #FFFFFF;
    padding: 5px 8px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-block;
    border-radius: 3px;
    margin: 2px 2px 2px 2px;
    width: calc(100% - 4px);
    max-width: 80px;
    &:hover {
        background-color: #333333;
        border: 2px solid #333333;
        color: #FFFFFF;
    }
`;