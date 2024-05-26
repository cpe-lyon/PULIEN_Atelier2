interface AuthResquest {
    username : string,
    password : string
}

interface RegisterResquest {
    firstname : string,
    lastname : string,
    login : string,
    email : string,
    password : string,
}


const authProvider = {
    login: ({username, password}: AuthResquest ) =>  {
        const request = new Request('http://localhost:8080/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then(token => {
                localStorage.setItem('auth', token);
                
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    logout: () =>  {
        localStorage.setItem('auth', '');
    },
    register: ({firstname, lastname, login, email,password}: RegisterResquest ) =>  {
        const request = new Request('http://localhost:8080/auth/register', {
            method: 'POST',
            body: JSON.stringify({firstname, lastname, login, email,password}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.text();
            })
            .then(token => {
                localStorage.setItem('auth', token);
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkAuth: () => {
        if(localStorage.getItem('auth') == '' || localStorage.getItem('auth') === undefined  || localStorage.getItem('auth') === null){
            return false;
        }

        const request = new Request('http://localhost:8080/auth/checktoken', {
            method: 'POST',
            body: JSON.stringify({ "token" : localStorage.getItem('auth') }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(res => {
                console.log(res)
                return res === 'true'
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
};

export default authProvider;