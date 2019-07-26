import React, { Component } from 'react'
import logo from '../download.png'

class Header extends Component {
    render() {
        return (
            <div>
                <a href="/"><img src={logo} alt="logo" /></a>
            </div>
        )
    }
}

export default Header
