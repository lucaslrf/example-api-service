import api from './api'

// funcao para realizar um get (não tem body), mas tem params que é para usar com filtros
export const myGet = (): Promise<any> => api.get('/myendpointget', {
  params: {
    // passa os filtros que existe no endpoint aqui
    classifacao: 'NONE'
  },
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'MyToken',
    'x-api-key': 'mycode'
  }
})
