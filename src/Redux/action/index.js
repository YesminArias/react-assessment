import axios from 'axios';


export function getCandidates(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3010/candidates');
        return dispatch({
            type:'GET_CANDIDATES',
            payload: json.data,
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3010/candidates/'+ id);
        return dispatch({
            type:'GET_DETAIL',
            payload: json.data,
        })
    }
}

export function getApplications(idApp){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3010/applications/'+ idApp);
        return dispatch({
            type:'GET_APPLICATIONS',
            payload: json.data,
        })
    }
}

export function getQuestions(questionId){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3010/questions/'+ questionId);
        return dispatch({
            type:'GET_QUESTIONS',
            payload: json.data,
        })
    }
}

export function postComment(payload){
    return async function(){
        const create= await axios.put('http://localhost:3010/applications/'+payload.id, payload);
        return create;
    }
}

export function resState(){
    return {
        type:"RES_STATE",
    }
}