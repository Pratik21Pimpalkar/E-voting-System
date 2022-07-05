import React, { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

const LoginRegiWrapper = () => {
    const [toggleLoginReg, setToggleLoginReg] = useState(true);
    const handleToggle = () => {
        setToggleLoginReg(!toggleLoginReg);
    }
    return (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            {
                toggleLoginReg ? <Login handleToggle={handleToggle} />
                    : <Registration handleToggle={handleToggle} />
            }
        </div>
    )
}

export default LoginRegiWrapper