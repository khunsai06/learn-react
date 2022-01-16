import React from 'react';

const usersURL = 'http://localhost:5000/users';
// const usersURL = 'http://jsonplaceholder.typicode.com/users';
type user = { name: string };

const Users = () => {
  //
  const [error, setError] = React.useState<string>();
  const [data, setData] = React.useState<user[]>();
  const timeoutIdRef = React.useRef<number>();

  //
  React.useEffect(() => {
    fetch(usersURL)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.statusText);
      })
      .then((users) => {
        timeoutIdRef.current = setTimeout(() => {
          setData(users);
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
      });
    return clearTimeout(timeoutIdRef.current);
  }, []);

  return (
    <>
      <h1>users</h1>
      {error ? (
        <h4>{error}</h4>
      ) : !data ? (
        <h4>loading...</h4>
      ) : (
        data?.map(({ name }, index) => {
          return <h4 key={index}>{name}</h4>;
        })
      )}
    </>
  );
};

export default Users;
