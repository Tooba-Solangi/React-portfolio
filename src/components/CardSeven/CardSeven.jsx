import React from 'react'
import "./CardSeven.css"
import smileee from '../../figma-images/images/smileee.png'
import emojii from '../../figma-images/images/emojii.png'
import line from '../../figma-images/images/Line.png'

const CardSeven = () => {
    return (
        <div className='card-seven py-5'>
            <div className='container'>
                <h2 className='text-center '>Our Testimonial</h2>
                <h6 className='text-center'>We believe scaling startups require a radically different kind of agency</h6>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="brdr d-flex align-items-start rounded-4">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <img src={smileee} alt="" />
                        </div>
                        <div>
                            <p className="fs-5 card-title">The experts easily identified the
                                wand guided us through the
                                creation of the c.</p>
                            <h3>I love Sway
                                <img src={emojii} alt="" />
                            </h3>
                            <img src={line} alt="" />
                            <h5 className='half'> Vincent Smith CEO at Ritmo</h5>
                        </div>
                    </div>

                    <div class="brdr d-flex align-items-start  rounded-4">
                        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                            <img src={smileee} alt="" />
                        </div>
                        <div>
                            <p class="fs-5 text-body">The experts easily identified the
                                wand guided us through the
                                creation of the c.</p>
                            <h3>I love Sway
                                <img src={emojii} alt="" />
                            </h3>
                            <img src={line} alt="" />
                            <h5 className="half"> Vincent Smith CEO at Ritmo</h5>

                </div>
            </div>

            <div class="brdr d-flex align-items-start  rounded-4">
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <img src={smileee} alt="" />
                </div>
                <div>
                    <p class="fs-5 card-title">The experts easily identified the
                        wand guided us through the
                        creation of the c.</p>
                    <h3>I love Sway
                        <img src={emojii} alt="" />
                    </h3>
                    <img src={line} alt="" />
                    <h5 className="half">  Vincent Smith  CEO at Ritmo </h5>
                </div>
            </div>


        </div>
    </div>
    </div>
    )
}

export default CardSeven;