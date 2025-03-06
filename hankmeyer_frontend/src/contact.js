import React,{Component} from 'react';

export class Contact extends Component {
    render(){

        window.location.replace('https://www.canoecanuck.com/about/contact/');
        
        return(
            <p>If you are not redirected, <a href="https://www.canoecanuck.com/about/contact/">click here</a></p>
            )
        }
    }