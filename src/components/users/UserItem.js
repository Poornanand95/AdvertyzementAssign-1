import React from 'react';
import './Users.css';
import PropTypes from 'prop-types';

const UserItem = ({ user: { email, first_name, last_name, avatar } }) => {
  return (
    <div className='card etxt-center'>
      <img src={avatar} alt='' className='image' />
      <ul>
        <li>{first_name}</li>
        <li>{last_name}</li>
      </ul>
      <h4>{email}</h4>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
