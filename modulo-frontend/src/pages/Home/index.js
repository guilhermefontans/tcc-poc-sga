import React from 'react';
import Login from '../../Login'

function Home() {
    if (! localStorage.getItem("token")) {
        return <Login></Login>
    }

    const name = localStorage.getItem("name")
    const role = localStorage.getItem("role")

    return (
        <h4>Bem vindo {name}, você está logado como ({role})</h4>
    );
}
export default Home;
