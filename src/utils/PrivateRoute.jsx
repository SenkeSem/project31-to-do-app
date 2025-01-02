import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = localStorage.getItem('access_token');

  // const [refreshToken] = useRefreshTokenMutation();

  // // TODO: move this logic to interceptors

  // const refresh = async () => {
  //   try {
  //     let res = await refreshToken({
  //       refresh_token: localStorage.getItem('refresh_token'),
  //     });

  //     console.log(res);
  //     localStorage.setItem('access_token', res.data.access_token);
  //     localStorage.setItem('refresh_token', res.data.refresh_token);
  //     localStorage.setItem('expires_in', res.data.expires_in);
  //   } catch (error) {
  //     console.log(error);
  //     <Navigate to="/login" />;
  //     localStorage.clear();
  //   }
  // };

  // if (Date.now() >= localStorage.getItem('expires_in')) {
  //   refresh();
  // } else {
  //   console.log('Token is valid!');
  // }

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
