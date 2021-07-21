import React, { Component } from "react";

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section
                    className="colorlib-experience"
                    data-section="timeline"
                >
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div
                                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                data-animate-effect="fadeInLeft"
                            >
                                <span className="heading-meta">highlights</span>
                                <h2 className="colorlib-heading animate-box">
                                    Timeline
                                </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article
                                        className="timeline-entry animate-box"
                                        data-animate-effect="fadeInLeft"
                                    >
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>
                                                    Start in Esports and Gaming{" "}
                                                    <span>2020-present</span>
                                                </h2>
                                                <p>
                                                    In 2017 I moved out of my
                                                    parents' house and was
                                                    watching tons of esports. I
                                                    then applied to different
                                                    game developers and esports
                                                    orgs and Team Liquid got
                                                    back to me. I began doing
                                                    some volunteer and part-time
                                                    work for them. As time went
                                                    on, I kept doing work for
                                                    them until I was asked to
                                                    join the Liquid+ team
                                                    full-time in 2020!
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article
                                        className="timeline-entry animate-box"
                                        data-animate-effect="fadeInTop"
                                    >
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>
                                                    Post-Grad Work
                                                    <span>2015-2020</span>
                                                </h2>
                                                <p>
                                                    I worked in many different
                                                    industries and jobs after
                                                    earning my degree. From
                                                    automotive consulting and
                                                    big data collection to
                                                    digital advertising and
                                                    promotions. After those
                                                    roles, I worked for Ford in
                                                    their new Automotive
                                                    Telematics department and
                                                    then Ally Finanical in
                                                    automotive sales. While I
                                                    have worked many jobs, the
                                                    constant changing helped me
                                                    learn what I actually loved
                                                    to do and work on.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article
                                        className="timeline-entry animate-box"
                                        data-animate-effect="fadeInLeft"
                                    >
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>
                                                    Undergraduate
                                                    <span>2011-2015</span>
                                                </h2>
                                                <p>
                                                    I attended to the University
                                                    of Michigan where I played
                                                    college soccer and completed
                                                    my degree in Software
                                                    Engineering with a
                                                    specialization in Video Game
                                                    design. I took courses such
                                                    as Game Design, Multimedia
                                                    Tools, Database Structures,
                                                    and Algorithms & Design
                                                    Patterns. Additionally,
                                                    completed many Web
                                                    Development classes to help
                                                    build fundamentals in a
                                                    different avenue .
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                    <article
                                        className="timeline-entry begin animate-box"
                                        data-animate-effect="fadeInBottom"
                                    >
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none"></div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
