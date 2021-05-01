import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {

    let history = useHistory();

    const scrollTo = (e, t) => {
        e.preventDefault();
        const elem = document.getElementById(t);

        if(elem){
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }else{
            history.push('/');
        }
        
    }

    return (
        <>
             <header id="header" className="header header-sticky">
                <div className="">
                
                    <div className="navigation bg-white">
                        <div className="container-fluid">
                        <nav className="main-nav navbar navbar-right navbar-expand-md">
                        <Link to="/" className="navbar-brand logo" href=""><img src="images/assets/logo.svg" alt="logo" /></Link>

                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="menu_toggle">
                            <span className="hamburger">
                                <span />
                                <span />
                                <span />
                            </span>
                            <span className="hamburger-cross">
                                <span />
                                <span />
                            </span>
                            </span>
                        </button>
                        
                        <div id="navbar-collapse" className="navbar-collapse collapse">
                            <div className="orientation">
                                 {/* left */}
                                <ul className="nav navbar-nav brand-blackblue font-gilroy pdl2">
                                    <li className="nav-item"><Link onClick={(e) => scrollTo(e, 'services')}  className="nav-link sv--lnk" to="">Services</Link></li>
                                <li className="nav-item"><Link onClick={(e) => scrollTo(e, 'faqs')}  className className="nav-link" to="">FAQs</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>

                                </ul>
                                {/* right */}
                                <ul className="nav navbar-nav ml-auto ">
                                    <li className="nav-item brand-blackblue font-gilroy"><Link to="/signin" className="nav-link">Login</Link></li>
                                    {/* <li className="nav-item brand-blackblue font-gilroy"><Link to="/signin" className="nav-link">Login</Link></li> */}
                                    <li className="nav-item last"><Link to="/signup" className="btn-signup font-gilroybold onwhite bg-brand-purple">Register</Link></li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                    </div>
                
                </div>
            </header>
           
        </>
    )

}

export default NavBar;