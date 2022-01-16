import React, { Suspense } from 'react';

const Users = React.lazy(() => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  }).then((res) => {
    return import('./pages/Users');
  });
});

// const Users = React.lazy(async () => {
//   await new Promise((res) => {
//     setTimeout(() => {
//       res(true);
//     }, 1000);
//   });
//   return await import('./pages/Users');
// });

const App = () => {
  return (
    <>
      <div style={{ paddingLeft: '1rem' }}>
        <Suspense fallback={<h1>suspense loading...</h1>}>
          <Users />
        </Suspense>
      </div>
    </>
  );
};

export default App;
