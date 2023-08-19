import React from 'react'
import facebook from '../../figma-images/images/facebook.png'
import instagram from '../../figma-images/images/instagram.png'
import twitter from '../../figma-images/images/twitter.png'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-section foot'>
            <div className='container'>
                <div className='row d-flex'>
                 

                    <div className="container">
                        <footer className="py-5">
                            <div className="row">
                                <div className='d-flex justify-content-between py-4 my-4 border-bottom text-white'>
                                <h5>About Services Pricing plans Privacy Contact us</h5>
                                    <div className='text-end'>
                                <img  src={facebook} className='image-fluid' alt="" />
                                <img  src={instagram} className='image-fluid' alt="" />
                                <img src={twitter} className='image-fluid' alt="" />
                                </div>
                                </div>
                            <div className="col-6 col-md-2 mb-3 text-white">
                                    <h5>About</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">About Sway</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Plans & Pricing</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Services</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Blog</a></li>
                                       
                                    </ul>
                                </div>

                                <div className=" col-md-2 mb-3 text-white">
                                    <h5>Products</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Primary blocks</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Content block</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Infographic blocks</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Business blocks</a></li>
                       
                                    </ul>
                                </div>

                                <div className="col-md-2 mb-3 text-white">
                                    <h5>Resources</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link-color p-0 text-white">Support center</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Documentation</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Newsletter</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Chanelog</a></li>
                                    
                                    </ul>
                                </div>

                               

                                <div className="col-md-2 mb-3 text-white">
                                    <h5>Follow us</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Twitter</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Dribble</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Facebook</a></li>
                                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Linkedin</a></li>
                                       
                                    </ul>
                                </div>
                                
                                <div className="col-md-4 mb-3 text-white">
                                    <h5>Contact</h5>
                                    <p>New York. 112 W <br /> 34th St, Manhattan <br /> (1) 212-445-4320</p>
                                 </div>

                                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
                                    <p>&copy;Sways by keydesign. All Rights Reserved</p>
                                    <p className='text-center'>Terms of Use Privacy Policy</p>
                                  
                                </div>
                                </div>
                        </footer>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Footer;