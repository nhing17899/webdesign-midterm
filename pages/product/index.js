import React, { useEffect, useState } from 'react'
import { data, images } from '../../constants'
import './Services.css'
import { ServiceItem } from '../index'


const Services = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        }, []);

    const style = {
        top: offset * 0.15 + 'px'
    }

    const goright = {
        marginLeft: offset * 0.5 + 'px'
    }
        
    // services_left.style.top = offset * 0.25 + 'px';
    // services_right.style.top = offset * 0.15 + 'px';
    

  return (
    <div className="app__services">
        <div className="services__title" style={goright}>
            SERVICES
        </div>
        <div className="services__logo">
            <img src={images.logo} alt="" />
        </div>
        <div className="services__list">
            <div className="left__list" id='left_list'>

                {data.services_left.map((sl, index) => (
                    <ServiceItem key={sl.title + index} image={sl.image} title={sl.title} subtitle={sl.subtitle} />
                ))}


            </div>
            <div className="right__list" id='right_list' style={style}>

                {data.services_right.map((sr, index) => (
                    <ServiceItem key={sr.title + index} image={sr.image} title={sr.title} subtitle={sr.subtitle} />
                ))}

            </div>
        </div>
    </div>

  )
}

export default Services;