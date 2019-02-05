import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  const token = localStorage.getItem('fastfoodtoken');
  try {
    const tokenInfo = jwtDecode(token);
    console.log('------------> ', tokenInfo)
    return {token, user: tokenInfo};
  } catch (err) {
    return null;
  }
};

export default decodeToken;
