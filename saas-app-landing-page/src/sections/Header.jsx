import {Link as LinkScroll} from 'react-scroll'

const NavLink=({title})=>(
    <LinkScroll
    className='base-bold text-p4 uppercase transition-colors duration-1000 cursor-pointer hover:text-p1 max-lg:h5'
    >
        {title}
    </LinkScroll>
)

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
        <div className="container flex h-14 items-center max-lg:px-5">
            <a className="lg:hidden flex-1 cursor-pointer z-2">
                <img src="/images/xora.svg" width={115} height={55} alt="logo"/>
            </a>
            <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                    {/* from styling items tmr 26:34 need to fix laptop size from making div*/}
                    <ul className="flex max-lg:block max-lg:px-12">
                        <li className="nav-li">
                            <NavLink title='Features' />
                            <div className="dot"/>
                            <NavLink title='Pricing' />
                        </li>

                        <li className="nav-logo">
                            <LinkScroll>
                                <img src="/images/xora.svg" width={160} height={55} alt="logo"/>
                            </LinkScroll>
                        </li>

                        <li className="nav-li">
                            <NavLink title='FAQ' />
                            <div className="dot"/>
                            <NavLink title='Dowload' />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header