import api from './api'

// funcao para realizar o login
export const loginUser = (body: any): Promise<any> => api.post('/myapiapp/auth/login', body, {
  headers: {
    'Content-Type': 'application/json'
  }
})
