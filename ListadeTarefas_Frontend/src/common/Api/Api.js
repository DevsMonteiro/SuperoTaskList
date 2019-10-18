import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

export function inicializarApi() {
  axios.defaults.baseURL = baseURL;

  configurarAutorizacaoApi();
}

export function configurarAutorizacaoApi() {
  const authStorage = localStorage.getItem('auth__listadetarefas');

  if (authStorage) {
    let auth = JSON.parse(authStorage);

    const { accessToken } = auth;
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`;
    }
  }
}

export function limparAutorizacaoApi() {
  axios.defaults.headers.common = [];
}

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const {
        response: { status }
      } = error;

      if (status === 401) {
        localStorage.removeItem('auth__listadetarefas');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);