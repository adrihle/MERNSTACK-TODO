import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import logo from '../../assets/images/logoapp.png'

const Lg = () => {
    return (
        <Flipped flipId='lg'>
            <img className='lg' src={logo} alt='logo'/>
        </Flipped>
    )       
}

const Arrow = (props) => {
    return(
        <Flipped flipId='lg'>
            <i className="fas fa-chevron-left fa-2x pl-2" onClick={props.goBack}></i>
        </Flipped>
    )
}

export default function GoBackButton(props) {

    return(
        <Flipper flipKey={props.showLogo}>
            {props.showLogo ? (
                <Lg />
            ) : (
                <Arrow goBack={props.goBack}/>
            )}
        </Flipper>
    );
}