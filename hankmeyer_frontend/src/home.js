import React,{Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image'
import './App.scss';

export class Home extends Component {
    render(){
        return(
            <div className='monkeys'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.hankmeyer.ca/img/IMG_9296_16-7_1920x840.JPG"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className='titles'>Canoe Trips</h3>
                        <p className='subtitles'>I'm an Avid Canoe Tripper from Ontario, Canada. Check out my blog <a href="https://www.canoecanuck.com/" target="_blank" className="bloglink">Canoe Canuck</a>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.hankmeyer.ca/img/Hogan_pano_16-7_1920x840.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className='titles'>Photography</h3>
                        <p className='subtitles'>Take only photographs, leave only footprints.<br />
                        YouTube: <a href="https://www.youtube.com/@CanoeCanuck" target="_blank" className="bloglink">Canoe Canuck</a>, Flickr: <a href="https://www.flickr.com/photos/hank-meyer/" target="_blank" className="bloglink">Hank Meyer</a>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.hankmeyer.ca/img/IMG_9020_16-7_1920x840.JPG"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className='titles'>And Ivy</h3>
                        <p className='subtitles'>Just a picture of my dog.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='bg-dark text-white schnauzers'><div className='container'><h4>About Me</h4></div></div>
                <div className='frogs'><div className='container d-flex'>
                <div className='welcomepicture d-flex justify-content-start'>
                    <Figure>
                        <a href="/img/Hank_Meyer_Algonquin.JPG" target="_blank"><Image src="https://www.hankmeyer.ca/img/Hank_Meyer_Algonquin_500x375.JPG" thumbnail='true' alt="A Picture of Hank in Algonquin Park" title="A Picture of Hank in Algonquin Park"/></a>
                        <Figure.Caption>
                        <small>Completing another satisfying trip through the Algonquin interior.</small><hr />
                    <h5>Links</h5>
                    <a href="https://www.linkedin.com/in/hank-meyer-1aa156127" target="_blank" className="footerlinks" ><i className="bi bi-linkedin"> </i></a>
                    <a href="https://www.facebook.com/HankMeyer.ca/" target="_blank" className="footerlinks"><i className="bi bi-facebook"> </i></a>
                    <a href="https://twitter.com/Canoe_Canuck" target="_blank" className="footerlinks"><i className="bi bi-twitter"> </i></a>
                    <a href="https://www.instagram.com/canoe_canuck/" target="_blank" className="footerlinks"><i className="bi bi-instagram"> </i></a>
                    <a href="https://www.youtube.com/@CanoeCanuck" target="_blank" className="footerlinks"><i className="bi bi-youtube"> </i></a>
                    <a href="https://github.com/CanoeCanuck" target="_blank" className="footerlinks"><i className="bi bi-github"> </i></a>
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className='welcometext'>
                    <p>Hi there, Thanks for stopping by! Here you'll find a quick summary of my web projects and interests.</p>
                    <p>A little about me- I work in the tech industry but have a passion for the outdoors.</p>
                    <p>Canoe tripping is one of my favourite pastimes, along with some woodworking here and there.</p>
                    <p>On the tech side you can find me working on hobby projects, or messing about with networking and radios outside of work. Keep scrolling to see more about my web projects.</p>
                    <p>Want to get in touch? You can use this <a href="/contact" target="_blank" className="bloglink">Contact Form</a>.</p>
                </div>

                </div></div>
                <div className='dogs'>
                <div className='container d-flex'>
                    <h3>Websites</h3>
                </div>
                <div className='container d-flex'>
                <div className='websitepicture d-flex justify-content-start'>
                <Figure>
                        <a href="https://www.carleycommunityhall.com/" target="_blank"><Image src="https://www.hankmeyer.ca/img/Carley-Hall_100x100.png" thumbnail='true' alt="Carley Community Hall Logo" title="Carley Community Hall Logo" width="100px"/></a>
                        <Figure.Caption>
                        <a href="https://www.carleycommunityhall.com/" target="_blank" className="bloglink">Carley Community Hall</a><br />Community website that I setup and maintain.
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className='websitepicture d-flex justify-content-start'>
                <Figure>
                    <a href="https://www.canoecanuck.com/" target="_blank"><Image src="https://www.hankmeyer.ca/img/CanoeCanuck_100x100.png" thumbnail='true' alt="Canoe Canuck Logo" title="Canoe Canuck Logo" width="100px"/></a>
                        <Figure.Caption>
                            <a href="https://www.canoecanuck.com/" target="_blank" className="bloglink">Canoe Canuck</a><br />My Personal Blog focused around Canoe Tripping advice and Past Trips.
                        </Figure.Caption>
                    </Figure>
                </div>
                <div className='websitepicture d-flex justify-content-start'>
                <Figure>
                    <a href="https://www.hankshosts.com/" target="_blank"><Image src="https://www.hankmeyer.ca/img/HanksHosts.png" thumbnail='true' alt="HanksHosts Logo" title="HanksHosts Logo" width="100px"/></a>
                        <Figure.Caption>
                            <a href="https://www.hankshosts.com/" target="_blank" className="bloglink">HanksHosts.com</a><br />My Personal Sandbox that I hosted some experimental projects on.
                        </Figure.Caption>
                    </Figure>
                </div>
                </div></div>
                <div className='frogs'><div className='container'><h3>Web Dev <a href="https://github.com/CanoeCanuck" target="_blank" className="footerlinks"><i className="bi bi-github"> </i></a></h3>
                        <ul><li>I dabble in some web development. For example, this site is built in React with bootstrap for styling.</li>
                        <li>In the past I have done some personal projects in PHP/MySQL.</li>
                        <li>Some of those include: AJAX RSVP form, HanksHosts.com, Movie Database, Screenshot Uploader.</li>
                        <li>Professionally, I work with SQL Server and debugging ASP.Net Applications.</li></ul>     
                </div></div>
                <div className='dogs'><div className='container'><h3>HomeLab</h3>
                        <ul><li>I run a homelab where I self-host utilities and experiment with a variety of docker containers.</li>
                        <li>Here are some of the Docker containers I work with for home automation and experimentation:
                            <ul>
                            <li><a href="https://registry.hub.docker.com/r/linuxserver/paperless-ngx/" target="_blank">linuxserver/paperless-ngx</a> - Index your scanned documents and store metadata.</li>
                            <li><a href="https://registry.hub.docker.com/r/cranium/pdfcollate/" target="_blank">cranium/pdfcollate</a> - Merge PDFs if your document scanner can't do duplex scanning.</li>
                            <li><a href="https://registry.hub.docker.com/r/djdd87/synoai/" target="_blank">djdd87/synoai</a> - A Synology Surveillance Station notification system utilising DeepStack AI.</li>
                            <li><a href="https://registry.hub.docker.com/r/deepquestai/deepstack/" target="_blank">deepquestai/deepstack</a> - The AI Server empowering every developer to easily integrate AI features Into their applications.</li>
                            <li><a href="https://registry.hub.docker.com/r/dgtlmoon/changedetection.io/" target="_blank">dgtlmoon/changedetection.io</a> - Website change detection and notification. </li>
                            <li><a href="https://registry.hub.docker.com/r/vaultwarden/server/" target="_blank">vaultwarden/server</a> - Alternative implementation of the Bitwarden server API in Rust, including the Web Vault. </li>
                            <li><a href="https://registry.hub.docker.com/r/hankmeyer/partyhankshosts/" target="_blank">hankmeyer/partyhankshosts</a> - My own Docker Container for a basic ASP.NET CoreAPI + ReactJS App I started working on.</li>
                            <li><a href="https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash" target="_blank">mssql/server:2022</a> - SQL Server running on Linux based on Ubuntu 20.04.</li>
                            <li><a href="https://registry.hub.docker.com/r/portainer/portainer-ce/" target="_blank">portainer/portainer-ce</a> -  A lightweight service delivery platform for containerized applications  </li>
                            <li><a href="https://registry.hub.docker.com/r/linuxserver/unifi-controller/" target="_blank">linuxserver/unifi-controller</a> - The Unifi-controller for managing access points.</li>
                            <li><a href="https://registry.hub.docker.com/r/pihole/pihole/" target="_blank">pihole/pihole</a> - A local DNS server/cache for home networks.</li>
                            </ul>    
                        </li>
                        <li>In addition to Docker I utilize Synology's application suite. i.e. Hyper Backup, Surveilance Station, Synology Photos, Web Station.</li>
                        <li>Self-Hosting is not for everyone, but I have found great utility from it. It's also a great way to learn on <i>non-production</i> environments.</li>
                        </ul>      
                </div></div>
            </div>
        )
    }
}