import React from 'react'

import browse from 'assets/icons/browse.svg'
import foryou from 'assets/icons/foryou.svg'
import create from 'assets/icons/create.svg'
import support from 'assets/icons/support.svg'

import {
    Bar,
    User,
    Navigation,
    NavigationButton,
    NavigationButtonIcon,
    NavigationButtonText,
    Logo,
} from './styles'

const Sidebar = () => {
    const navElements = [
        {
            name: 'Browse',
            to: '/',
            icon: browse,
        },
        {
            name: 'For You',
            to: '/foryou',
            icon: foryou,
        },
        {
            name: 'New Quiz',
            to: '/create',
            icon: create,
        },
        {
            name: 'Support',
            to: '/support',
            icon: support,
        },
    ]
    return (
        <Bar>
            <Logo>Quizzy</Logo>
            <Navigation>
                {navElements.map(item => {
                    return (
                        <NavigationButton key={item.to} to={item.to}>
                            <NavigationButtonIcon src={item.icon} />
                            <NavigationButtonText>
                                {item.name}
                            </NavigationButtonText>
                        </NavigationButton>
                    )
                })}
            </Navigation>
            <User />
        </Bar>
    )
}

export default Sidebar
