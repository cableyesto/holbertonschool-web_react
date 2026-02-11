import WithLogging from '../HOC/WithLogging'

function Login() {
  return (
    <>
      <div className='border-t-3 border-[var(--main-color)]'>
        <div className='App-body mt-[20px] ml-[20px] h-full'>
          <p>Login to access the full dashboard</p>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' className='border rounded-sm' />
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' className='border rounded-sm' />
          <button className='border rounded-sm'>OK</button>
        </div>
      </div>
    </>
  )
}

export default WithLogging(Login)
