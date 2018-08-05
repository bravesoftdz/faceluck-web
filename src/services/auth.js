import api from './api';

const Auth = {
  isAuthenticated: !!sessionStorage.getItem('@FaceLuck:token'),
  authenticate: async (data) => {
    try {
      const response = await api.post('signin', data);

      await sessionStorage.setItem('@FaceLuck:user', JSON.stringify(response.data.user));
      await sessionStorage.setItem('@FaceLuck:token', response.data.token);

      return response;
    } catch (err) {
      return err;
    }
  },
  signout() {
    sessionStorage.setItem('@FaceLuck:user', '');
    sessionStorage.setItem('@FaceLuck:token', '');
    api.defaults.headers.common.authorization = '';
  },
};

export default Auth;
