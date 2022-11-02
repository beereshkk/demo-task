import React from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';

const Account = (props) => {
  const user = useSelector((state) => state.user);

  return (
    <Container fluid className="bg-light" style={{ height: '100vh' }}>
      <div className="fs-5 mx-2 my-3">User Details</div>
      <div className="ms-3">
        <div>
          <p>User Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
      </div>
    </Container>
  );
};

export default Account;
