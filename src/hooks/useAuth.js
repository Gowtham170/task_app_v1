import { useState, useEffect } from 'react'

export default () => {

    const [auth, setAuth] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/isLoggedIn', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET',
            body: JSON.stringify()
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            setAuth(data);
          })
          .catch(err => {
            console.log(err);
            return false;
          });
    }, []);

    return { auth };
}

