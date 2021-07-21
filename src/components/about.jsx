import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="row row-bottom-padded-sm animate-box"
                                    data-animate-effect="fadeInLeft"
                                >
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">
                                                About Us
                                            </span>
                                            <h2 className="colorlib-heading">
                                                Who Am I?
                                            </h2>
                                            <p>
                                                I am a Software Engineer grad
                                                with an insane passion for two
                                                things: Soccer and Video Games.
                                                Specifically Liverpool FC and
                                                anything esports and Twitch.
                                            </p>
                                            <p>
                                                I have always wanted to work in
                                                the video game industry in
                                                anyway since I was a child. My
                                                mom even remembers a day when I
                                                was in kindergarden and I said
                                                "I want to make video games!"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div
                                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">
                                    Here are some of my expertise
                                </h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Front-End Web Development</h3>
                                        <p>
                                            I have experience building websites
                                            and services using React, HTML, CSS,
                                            Vue.js, and Angular.js
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Back-End Web Development</h3>
                                        <p>
                                            Work in a variety of differnet
                                            backends using Spring-Boot,
                                            Express.js, and even C#
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Game Development</h3>
                                        <p>
                                            For fun I like to make games and
                                            mess around with Unity and Unreal
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
