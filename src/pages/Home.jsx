import React from 'react'
import MainNavbar from '../components/MainNavbar'

const Home = () => {
    return (
      <>
      <MainNavbar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-10">O nas</h1>
          <div className="w-full max-w-2xl text-center">
            <p className="mb-5">
              Jesteśmy organizacją non-profit, zarejestrowaną w 2070 B.S. Nasza misja
              to pomoc ludziom w potrzebie.
            </p>
            <p className="mb-5">
              Działamy na rzecz poprawy warunków życia i edukacji dla najbardziej
              potrzebujących, dzięki wsparciu naszych generznych darczyńców i
              wolontariuszy.
            </p>
            <p className="mb-5">
              Od momentu założenia, pomogliśmy tysiącom ludzi w osiągnięciu lepszych
              życiowych możliwości.
            </p>
            <p className="mb-5">Dołącz do nas i pomóż nam zrobić świat lepszym miejscem.</p>
          </div>
        </div>
        </>
      );
}
 
export default Home;