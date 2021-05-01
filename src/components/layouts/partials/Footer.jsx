import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollTo = (e, t) => {
        e.preventDefault();
        const elem = document.getElementById(t);
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
            <footer className="footer ui-full-bg-norm" style={{backgroundImage: 'url("images/assets/bg@footer.jpg")'}}>
                    
                    <div className="ui-wrapper-large">
                        <div className="container">
                            
                            <div className="row">

                                <div className="col-md-3 logo-x">
                                    <img className="" src="images/assets/logo.svg" className="logo" alt="logo"/>
                                </div>

                                <div className="col-md-9">

                                    <div className="row">

                                        <div className="col-md-3 col-sm-6">
                                            <h4 className="font-gilroybold fs-18 brand-purple mrgb2">Services</h4>
                                            <ul className="font-gilroy links">
                                                <li><Link onClick={(e) => scrollTo(e,'services')} to="" className="link-underlined hover">Document Editing</Link></li>
                                                <li><Link onClick={(e) => scrollTo(e,'services')} to="" className="link-underlined hover">Proof reading</Link></li>
                                                <li><Link onClick={(e) => scrollTo(e,'services')} to="" className="link-underlined hover">Creative writing</Link></li>
                                                <li><Link onClick={(e) => scrollTo(e,'services')} to="" className="link-underlined hover">Corporate content</Link></li>
                                                <li><Link onClick={(e) => scrollTo(e,'services')} to="" className="link-underlined hover">Web Copy</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <h4 className="font-gilroybold fs-18 brand-purple mrgb2">Company</h4>
                                            <ul className="font-gilroy links">
                                                <li><Link to="/check-back" className="link-underlined hover">About Us</Link></li>
                                                <li><Link to="/check-back" className="link-underlined hover">Media</Link></li>
                                                <li><Link to="/check-back" className="link-underlined hover">Careers</Link></li>
                                                <li><Link to="/check-back" className="link-underlined hover">Blog</Link></li>
                                                <li><Link to="/check-back" className="link-underlined hover">Customers</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <h4 className="font-gilroybold fs-18 brand-purple mrgb2">Learn more</h4>
                                            <ul className="font-gilroy links">
                                                <li><Link to="/check-back" className="link-underlined hover">Contact Us</Link></li>
                                                <li><Link to="/check-back" className="link-underlined hover">Mail Us</Link></li>
                                            </ul>
                                        </div>

                                        <div className="col-md-3 col-sm-6">
                                            <h4 className="font-gilroybold fs-18 brand-purple mrgb2">Connect</h4>
                                            <ul className="font-gilroy links">
                                                <li><Link className="link-underlined hover">Connect with us online</Link></li>
                                                <li>
                                                <div class="widget about_widget mrgt1">
                                                    <ul class="social_media list-inline">
                                                        <li class="list-inline-item"><a target="_blank" href="https://twitter.com" class="bg-twitter"><i class="fab fa-twitter onwhite" aria-hidden="true"></i></a></li>
                                                        <li class="list-inline-item"><a target="_blank" href="https://web.facebook.com" class="bg-facebook"><i class="fab fa-facebook-f onwhite" aria-hidden="true"></i></a></li>
                                                        <li class="list-inline-item"><a target="_blank" href="https://www.linkedin.com/company" class="bg-alsphat"><i class="fab fa-linkedin onwhite" aria-hidden="true"></i></a></li>
                                                        <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com" class="bg-instagram"><i class="fab fa-instagram onwhite" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                </div>

                             
                            </div>
                        </div>
            
                    </div>
                    
                    <div className="copyright ui-wrapper-mini" style={{backgroundColor: '#F0F5F8'}}>

                        <div className="container">

                            <div className="ui-text-center">

                                <p className="font-gilroylight fs-14 mrgb0 brand-neutral">Copyright &copy; 2021 - Scribry Consult. All rights reserved.</p>

                            </div>

                        </div>

                    </div>
            
            </footer>

        </>
    )
}
export default Footer;

