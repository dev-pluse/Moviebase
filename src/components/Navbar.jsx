
import NavbarItem from './NavbarItem'

const Navbar = () => {
    
  return (
    <div className='justify-center gap-4 flex'>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar