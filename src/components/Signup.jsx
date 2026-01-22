import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session } = UserAuth();

  return (
    <div>
      <form className='max-w-md m-auto pt-4'>
        <h2 className='font-bold pb-2'>
          Cadastre-se hoje!
        </h2>
        <p>
          Já possue uma conta? <Link to='./signin'>Entrar!</Link>
        </p>
        <div className='flex flex-col py-4'>
          <input placeholder='E-mail' className='p-2 rounded border border-gray-300 mt-6 bg-gray-700' type="email" />
          <input placeholder='Password' className='p-2 rounded border border-gray-300 mt-6 bg-gray-700' type="password" />
          <button disabled={loading} className='mt-6 w-full' type='submit'>Cadastrar</button>
        </div>
      </form>
    </div>
  )
}

export default Signup