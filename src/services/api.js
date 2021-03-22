import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://kms.kuhlmann-pandi.com/api'
});

const getAxiosURL = urlPart => {
  return 'http://kms.kuhlmann-pandi.com/api' + urlPart;
};

const getTokenHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  const header = {"Authorization" : `Bearer ${token}`};
  return header;
}

const axiosParams = (obj) => {
  const params = new URLSearchParams();
  Object.keys(obj).forEach(function(key) {
    params.append(`${key}`, `${obj[key]}`);
  });
  return params;
}

export default {
    checkToken: async (token) => {
        const response = await api.post('/auth/refresh', {
            token
        });
    },
    signIn: async (email, password) => {
      const response = await axios({
        method: 'post',
        url: getAxiosURL('/auth/login'),
        params: axiosParams({email, password}),
      });
      return response.data;
    },
    signOut: async (token) => {
      const response = await api.post('/auth/logout', {token});
      console.warn('RESP', response);
      return response.data;
    },
    getServices: async () => {
        axios.get(getAxiosURL('/servico') , { headers: await getTokenHeader() })
          .then(res => {
            console.warn(res.data);
          }).catch((error) => {
            console.warn(error);
          });
        return res.data;
    }
}