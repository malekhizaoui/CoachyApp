import React from 'react'
import './domaine.css'
function DomaineCoaching() {
  return (
    <div className='Domain-container'>
        <div className='header-domain'>
            <p>Domaine</p>
            <div className="line"></div>

        </div>
        <div className='allDoamin'>
            <div className='domain'>
                <p>Fitness</p>
            </div>
            <div className='domain'>
            <p>Diet</p>
            </div>
            <div className='domain'>
            <p>Mental</p>
            </div>
            <div className='domain'>
            <p>Fitness</p>
            </div>
            {/* <div className='domain'></div> */}
            {/* <div className='domain'></div>   */}
        </div>
        <div className='content-domain'>
            
            <div className='img-domain'>
                <img className='img-background' />
            </div>
            <div className='img-domain'>
            <img className='img-background' />

            </div>
            <div className='img-domain'>
            <img className='img-background' />

            </div>
            <div className='img-domain'>
            <img className='img-background' />

            </div>
            <div style={{height:150}}></div>
        </div>
    </div>
  )
}

export default DomaineCoaching