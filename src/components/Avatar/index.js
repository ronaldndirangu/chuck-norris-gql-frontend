import React, { useState } from 'react';
import AvatarStyles from './styles';

const Avatar = ({ image, text, history, logout }) => {
  const [show, setShow] = useState(false);

  const doLogout = () => {
    window.localStorage.clear();
    history.push('/');
    logout();
  };
  return (
    <AvatarStyles onClick={() => setShow(!show)}>
      A
      {
        show && (
          <AvatarStyles.DropDown onClick={() => doLogout()}>
            Logout
          </AvatarStyles.DropDown>
        )
      }
    </AvatarStyles>
  );
};

export default Avatar;
