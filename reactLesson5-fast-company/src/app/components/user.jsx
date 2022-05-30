import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ id, getById }) => {
  const history = useHistory();

  const handleGoToUsersPage = () => {
    history.replace("/users");
  };
  const user = getById(id);
  return (
    <>
      <h2>{ user.name }</h2>
      <button
        onClick={() => {
          handleGoToUsersPage();
        }}
      >
        Все пользователи
      </button>
    </>
  );
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  getById: PropTypes.func.isRequired
};

export default User;
