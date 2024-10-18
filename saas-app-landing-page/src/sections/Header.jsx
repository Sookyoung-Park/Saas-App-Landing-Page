import {Link as LinkScroll} from 'react-scroll'

const NavLink=({title})=>(
    <LinkScroll>
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
            <div className="w-full">
                <nav>
                    {/* from styling items tmr 23:19*/}
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