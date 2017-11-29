import axios from 'axios';
import {getRedirectPath} from '../util';

const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const initState={
    inAuth: false,
    redirectTo: '',
    msg: '',
    user: '',
    type: ''
}

function authSuccess(data) {
    return { type:AUTH_SUCCESS, payload: data}
}

export function user(state= initState, action) {
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state, msg: '',redirectTo: getRedirectPath(action.payload),...action.payload,pwd:''}
        case ERROR_MSG:
            return {...state, isAuth: false,msg:action.msg}
        case LOAD_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
    return state
}
function errorMsg(msg) {
    return{ msg, type: ERROR_MSG}
}
export function loadData(userinfo) {
    return {type: LOAD_DATA, payload: userinfo}
}


export function update(data) {
    return dispatch=>{
        axios.post('/user/update',data)
            .then(res=>{
                if(res.status === 200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
export function login({user, pwd}) {
    if (!user|| !pwd){
        return errorMsg("you must input username and pwd")
    }
    return dispatch =>{
        axios.post('/user/login',{user,pwd})
            .then(res=>{
                if(res.status === 200&&res.data.code===0){
                    dispatch(authSuccess(res.data.data))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

export function register({user, pwd, repeatpwd, type}) {
    if(!user||!pwd||!type){
        return errorMsg('input pwd')
    }
    if(pwd !== repeatpwd){
        return errorMsg("pwd and confirmPwd do not identical!")
    }
    return dispatch =>{
        axios.post('/user/register',{user,pwd,type})
            .then(res=>{
                if(res.status === 200&&res.data.code===0){
                    dispatch(authSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}