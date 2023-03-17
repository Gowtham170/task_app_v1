import { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {

  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get('http://localhost:4000/isLoggedIn', {withCredentials: true});
      return res.data;
    } catch(err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(data);
      }
    )();
    // fetch('http://localhost:4000/isLoggedIn', {
    //   withCredentials: true
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setAuth(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     return false;
    //   });
  }, []);

  return { auth };
}

