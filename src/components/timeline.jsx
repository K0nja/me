import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Start in Esports and Gaming <span>2020-present</span></h2>
                        <p>In 2017 I just moved out of my parents and was a watching tons of esports. I then applied to a ton of different game developers and esports orgs and Team Liquid got back to me. After which I began doing some volunteer and part-time work for them. As time went on I kept doing work for them until I was asked to join the Liquid+ team full-time in 2020 and I've bee doing that ever since!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Post-Grad Work<span>2015-2020</span></h2>
                        <p>Post grad I worked in many differen industries and jobs. From automotive consulting and big data collection to digital advertising and promotions. Afterwhich I then did work for Ford Motor in their new Automotive Teleamatics department and then to Ally Finanical for Automotive sales. While I have worked many jobs the constant chaning helped me learn what I actually loved to do and work on.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate<span>2011-2015</span></h2>
                        <p>I went to the University of Michigan where I played college soccer and completed my degree in Software Engineering with a specialization in Video Game design.  I took courses such as Game Design, Multimedia tools, Database Structure, and Algorithms & Design Patterns.  Along with many Web Development classes to help build fundamentals there.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
