// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState, useRef } from 'react';

// function Login() {
//   const [login, setLogin] = useState(false);
//   const name = useRef('');

//   const handleClick = () => {
//     setLogin(!login);
//   };

//   const handleChange = (e) => {
//     name.current = e.target.value;
//   };
//   if (login === false) {
//     return (
//       <div className="App">
//         <label>
//           {' '}
//           Name:
//           <input type="text" name="name" onChange={handleChange} />
//         </label>
//         <button type="button" onClick={handleClick}>Login</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <label>
//         {' '}
//         Welcome
//         {' '}
//         {' '}
//         {name.current}
//         <button type="button" onClick={handleClick}>Logout</button>
//       </label>
//     </div>
//   );
// }

// export default Login;
