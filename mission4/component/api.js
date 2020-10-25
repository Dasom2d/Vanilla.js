const TODO_API = 'https://todo-api.roto.codes';
const USER_API = 'https://todo-api.roto.codes/users ';

const request = async (fetchUrl, options) => {
    try{
        const res = await fetch(fetchUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            ...options
        });
    
        if(res.ok){
            return await res.json();
        } else {
            throw new Error('조회 중 에러가 발생하였습니다.');
        }
    } catch(e) {
        throw new Error(`서버 통신 중 에러가 발생하였습니다. ; ${e.message}`);
    }
}

const saveTodos = async (url, user, newData) => {
    await request(url+'/'+user, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: newData
        })
    })
}

const getTodos = async (url, user) => {
    return await request(url+'/'+user);
}

const deleteTodos = async (url, user, id) => {
  await request(`${url}/${user}/${id}`, {
        method: 'DELETE'
    }); 
}

const toggleTodos = async (url, user, id) => {
    await request(`${url}/${user}/${id}/toggle`,{
        method: 'PUT'
    });
}

const getUsers = async (url) => {
    return await request(url);
}

export const getTodo = (user) => getTodos(TODO_API, user);
export const saveTodo = (newData, user) => saveTodos(TODO_API, user, newData);
export const deleteTodo = (id, user) => deleteTodos(TODO_API, user, id);
export const toggleTodo = (id, user) => toggleTodos(TODO_API, user, id);
export const getUser = () => getUsers(USER_API);