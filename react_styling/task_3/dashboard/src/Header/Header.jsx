import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
  return (
    <>
      <div className='App-header flex'>
        <img src={holbertonLogo} alt="holberton logo" className='w-[250px] h-[250px]'/>
        <h1 className='flex items-center text-4xl font-bold text-[var(--main-color)]'>School dashboard</h1>
      </div>
    </>
  )
}

export default Header