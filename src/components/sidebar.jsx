import React, { Component } from "react";

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav
                        href="#navbar"
                        className="js-colorlib-nav-toggle colorlib-nav-toggle"
                        data-toggle="collapse"
                        data-target="#navbar"
                        aria-expanded="false"
                        aria-controls="navbar"
                    >
                        <i />
                    </nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div
                                className="author-img"
                                style={{
                                    backgroundImage: "url(images/about.jpg)",
                                }}
                            />
                            <h1 id="colorlib-logo">
                                <a href="index.html">Mario Konja</a>
                            </h1>
                            <span className="email">
                                <i className="icon-mail"></i>{" "}
                                mariok1992@gmail.com
                            </span>
                        </div>
                        <nav
                            id="colorlib-main-menu"
                            role="navigation"
                            className="navbar"
                        >
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active">
                                        <a href="#home" data-nav-section="home">
                                            Introduction
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#about"
                                            data-nav-section="about"
                                        >
                                            About
                                        </a>
                                    </li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li>
                                        <a
                                            href="#timeline"
                                            data-nav-section="timeline"
                                        >
                                            Timeline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.facebook.com/mario.konja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-facebook2" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/K0nja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-twitter2" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/k0nja/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.twitch.tv/konja_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-twitch"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/c/Konja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/mario-konja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-linkedin2" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/K0nja"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p>
                                <small>
                                    Made with{" "}
                                    <i
                                        className="icon-heart"
                                        aria-hidden="true"
                                    />{" "}
                                    and{" "}
                                    <i
                                        className="icon-beer"
                                        aria-hidden="true"
                                    ></i>
                                    <br></br>
                                    Site developed by me<br></br>with help from{" "}
                                    <a
                                        href="https://github.com/dbarochiya/me"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Dhruv
                                    </a>
                                </small>
                            </p>
                            <p>
                                <small>
                                    Coming soon !!<br></br>
                                    game development (maybe)
                                </small>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}
