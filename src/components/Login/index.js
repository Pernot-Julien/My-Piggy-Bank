// import dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// import Components
import HeaderMenu from 'src/components/HeaderMenu';

// import styles
import './style.scss';

// import actions
import {
  setNewUserName,
  setNewPassword,
  login,
  saveTokenFromLocalStorage,
  saveUserFromLocalStorage,
} from '../../actions/login';

import { savePotsFromLocalStorage } from '../../actions/pots';

function Login() {
  const username = useSelector((state) => state.login.username);
  //console.log(username);
  const password = useSelector((state) => state.login.password);

  // is user logged or not ?
  const logged = useSelector((state) => state.login.logged);

  const navigate = useNavigate();

  //console.log(logged);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // on empêche le rechargement de ma page
    event.preventDefault();
    dispatch(login());
    navigate('/dashboard');
  };

  useEffect(() => {
    if (logged) {
      navigate('/dashboard');
    }
  }, []);

  //! je débute mes tests ici
  const JsonToken = localStorage.getItem('token');
  const JsonUser = localStorage.getItem('user');
  const JsonPots = localStorage.getItem('pots');
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
    // console.log(localStorage.getItem('token'));
      dispatch(saveTokenFromLocalStorage(JsonToken));
      dispatch(saveUserFromLocalStorage(JSON.parse(JsonUser)));
      dispatch(savePotsFromLocalStorage(JSON.parse(JsonPots)));
    }
  }, []);

  return (
    <div className="h-[calc(100vh_-_100px)] flex flex-col justify-start items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 flex flex-col justify-center items-start gap-2
        md:w-[500px]"
      >
        <h3 className="w-fit underline-login-title uppercase text-[1.5em] my-6">
          Me connecter
        </h3>
        <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
          <input
            className="w-4/5 flex align-middle justify-center p-2 rounded-md"
            placeholder="Email"
            type="email"
            value={username}
            onChange={
                    (event) => {
                      dispatch(setNewUserName(event.target.value));
                    }
                }
          />
        </div>

        <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
          <input
            className="w-4/5 flex align-middle justify-center p-2 rounded-md"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={
                    (event) => {
                      dispatch(setNewPassword(event.target.value));
                    }
                }
          />
        </div>

        <input
          className="cursor-pointer inline-flex justify-center rounded-md items-center w-full text-center text-slate- h-12 bg-[#C9DECE] uppercase mt-2 hover:bg-green-300"
          type="submit"
          value="Valider"
        />

      </form>
    </div>
  );
}

export default Login;
