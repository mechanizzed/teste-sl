import { normalize, schema } from 'normalizr';
import { toast } from 'react-toastify';

import history from '../../services/history';
import usersData from '../../assets/users.json';
import propertiesDate from '../../assets/properties.json';

import { signInSuccess, signOutSuccess } from './user.store';

export const signIn = ({ email, password }) => (dispatch) => {
  const user = new schema.Entity('users');
  const userSchema = { users: user };
  const normalizedDataUser = normalize(usersData, [userSchema]);

  const properties = new schema.Entity('properties');
  const propertiesSchema = { properties: properties };
  const normalizedDataProperties = normalize(propertiesDate, [
    propertiesSchema,
  ]);

  const findUser = normalizedDataUser.result.find(
    (value) => value.email === email && value.password === password,
  );

  if (!findUser) {
    return toast.error('E-mail ou senha inválidos');
  }

  let userValues = {
    email: findUser.email,
  };

  findUser.role === 'admin'
    ? (userValues.properties = normalizedDataProperties.result)
    : (userValues.properties = normalizedDataProperties.result.filter(
        (value) => {
          return findUser.propertyIds.includes(value.id);
        },
      ));

  toast.success('Login realizado com sucesso!');
  dispatch(signInSuccess(userValues));
  return history.push('/propriedades');
};
export const signOut = () => async (dispatch) => {
  return dispatch(signOutSuccess());
};
