import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuth = false;

  return (
    <>
      {!isAuth ? (
        <>
        <section className='flex flex-1 justify-center items-center flex-col py-10'>
          <Outlet />
        </section>

        <img
          src='/assets/images/side-img.svg'
          alt='side'
          className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat'
        />
        </>
      ) : (
        <Navigate to="/"  />
      )}
    </>
  )
}

export default AuthLayout
