import React from 'react'
import {FadeIn} from '../components'

const FadeInWrapper = ({children}) => {
  return (
    <>
    {React.Children.map(children, child => (
            <FadeIn>
                {React.cloneElement(child)}
            </FadeIn>
        ))}
    </>
    );
}


export default FadeInWrapper