import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password)
      if (result.success) {
        Navigate("./dashboard");
      }
    } catch (err) {
      setError("Ocorreu um erro no cadastro: ", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSignUp} className='max-w-md m-auto pt-4'>
        <h2 className='font-bold pb-2'>
          Cadastre-se hoje!
        </h2>
        <p>
          Já possue uma conta? <Link to='./signin'>Entrar!</Link>
        </p>
        <div className='flex flex-col py-4'>
          <input onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' className='p-2 rounded border border-gray-300 mt-6 bg-gray-700' type="email" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 rounded border border-gray-300 mt-6 bg-gray-700' type="password" />
          <button disabled={loading} className='mt-6 w-full' type='submit'>Cadastrar</button>
          {error && <p className='text-red-600 text-center pt-4'>{error}</p>}
        </div>
      </form>
    </div>
  )
}

export default Signup