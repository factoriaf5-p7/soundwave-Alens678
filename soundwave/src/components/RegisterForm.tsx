import { Button } from "./Button"
import { useState } from "react";

export const RegisterForm=()=> {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

 

  return (
    <div>
      <form action="">
        <label htmlFor=""> Name:
          <input type="text" value={Name} onChange={e => setName(e.target.value)}/>
        </label>
        <label htmlFor="">Email:
          <input type="text" value={Email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="">Password:
          <input type="text" value={Password} onChange={e => setPassword(e.target.value)} />
        </label>
        <Button/>
      </form>
    </div>
  )
}
