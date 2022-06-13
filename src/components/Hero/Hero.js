import React, {useEffect} from 'react'
import {FiMail} from 'react-icons/fi'
import {HeroSection, Heading, HeroText, ButtonContainer, HeroButton, ImageCharacter, HeroImage, HeroContent, ButtonWrapper, CharacterContainer} from './HeroStyles'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
    const dragConstraints = {top:0, button:0, right:0, bottom:0, left:0};
    const variants = {
        hover:{
            y: 15,
            transition:{
                yoy: Infinity,
                duration: .6,
            }
        }
    }

    const {ref, inView} = useInView({
        rootMargin: '-100px',
    })

    useEffect(()=>{
        console.log(inView)
    },[inView])

  return (
    <HeroSection id='hero'>
        <HeroImage className="pattern" src='./images/hero-pattern-bg-lg.png' />
        <HeroImage className="guy" src='./images/hero-guy-1.png' />
        <CharacterContainer>
            <ImageCharacter variants={variants} whileHover='hover' drag dragConstraints={dragConstraints} className="one" src='./images/image 1.png' />
            <ImageCharacter variants={variants} whileHover='hover' drag dragConstraints={dragConstraints} className="two" src='./images/image 2.png' />
            <ImageCharacter variants={variants} whileHover='hover' drag dragConstraints={dragConstraints} className="three" src='./images/image 3.png' />
        </CharacterContainer>
        <HeroContent>
            <Heading>We are Designify</Heading>
            <HeroText>
                A team of passionate designers and developers ready to provide unique and outstanding products for you!
            </HeroText>
            <ButtonContainer ref={ref}>
                <ButtonWrapper>
                    <HeroButton
                    onClick={()=> console.log('todo')}
                    className={inView ? '' : 'corner'}
                    >
                        {inView ? (<>Chat with us</> ): (<FiMail color="white" size='2.4rem' />)}
                    </HeroButton>
                </ButtonWrapper>
            </ButtonContainer>

        </HeroContent>
    </HeroSection>
  )
}


export default Hero;