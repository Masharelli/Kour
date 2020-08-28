import React, { Component } from 'react';
import Link from 'next/link';
import CoursesDetailsSidebar from './CoursesDetailsSidebar';

class CourseDetailsContent extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="courses-details-area pb-100">
                <div className="courses-details-image">
                    <img src="/img/courses/courses-details.jpg" alt="image" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-desc">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li
                                        className="current"
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                    >
                                        Overview
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab2')}
                                    >
                                        Curriculum
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab3')}
                                    >
                                        Instructor
                                    </li>
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab4')}
                                    >
                                        Reviews
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="tab1" className="tab-pane tabs_item">
                                        <div className="courses-overview">
                                            <h3>Course Description</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            <h3>Certification</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            <h3>Who this course is for</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tab-pane tabs_item">
                                        <div className="courses-curriculum">
                                            <h3>Python Introduction</h3>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">Python Introduction</span>
                                                            <div className="courses-meta">
                                                                <span className="questions">5 questions</span>
                                                                <span className="duration">01 Hour</span>
                                                                <span className="status">Preview</span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3>Stepping into the World of Python</h3>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Introduction</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">15 Min</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Getting Started</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">30 Min</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Creating Arrays</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">45 Min</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Array Indexing</span>
                                                            <div className="courses-meta">
                                                                <span className="questions">4 questions</span>
                                                                <span className="duration">1 Hour</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">NumPy Array Slicing</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">1.5 Hour</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h3>Python MySQL</h3>
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">Python MySQL</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">01 Hour</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">Python MySQL Create Database</span>
                                                            <div className="courses-meta">
                                                                <span className="questions">3 questions</span>
                                                                <span className="duration">1.1 Hour</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span className="courses-name">Python MySQL Create Table</span>
                                                            <div className="courses-meta">
                                                                <span className="duration">1.5 Hour</span>
                                                                <span className="status locked"><i className='flaticon-lock'></i></span>
                                                            </div>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="tab3" className="tab-pane tabs_item">
                                        <div className="courses-instructor">
                                            <div className="single-advisor-box">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="advisor-image">
                                                            <img src="/img/speaker/speaker1.jpg" alt="image" />
                                                        </div>
                                                    </div>
                        
                                                    <div className="col-lg-8 col-md-8">
                                                        <div className="advisor-content">
                                                            <h3>Sarah Taylor</h3>
                                                            <span className="sub-title">Agile Project Expert</span>
                                                            <ul className="social-link">
                                                                <li>
                                                                    <Link href="#">
                                                                        <a className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="tab4" className="tab-pane tabs_item">
                                        <div className="courses-reviews">
                                            <h3>Course Rating</h3>
                                            <div className="rating">
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star checked"></span>
                                                <span className="bx bxs-star"></span>
                                            </div>
                                            <div className="rating-count">
                                                <span>4.1 average based on 4 reviews.</span>
                                            </div>
                                            <div className="row">
                                                <div className="side">
                                                    <div>5 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-5"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>02</div>
                                                </div>
                                                <div className="side">
                                                    <div>4 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-4"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>03</div>
                                                </div>
                                                <div className="side">
                                                    <div>3 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-3"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>04</div>
                                                </div>
                                                <div className="side">
                                                    <div>2 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-2"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>05</div>
                                                </div>
                                                <div className="side">
                                                    <div>1 star</div>
                                                </div>
                                                <div className="middle">
                                                    <div className="bar-container">
                                                        <div className="bar-1"></div>
                                                    </div>
                                                </div>
                                                <div className="side right">
                                                    <div>00</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="courses-review-comments">
                                            <h3>3 Reviews</h3>
                                            <div className="user-review">
                                                <img src="/img/user1.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>
            
                                                    <span className="d-inline-block">James Anderson</span>
                                                </div>
            
                                                <span className="d-block sub-comment">Excellent</span>
                                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                            </div>
            
                                            <div className="user-review">
                                                <img src="/img/user2.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>
            
                                                    <span className="d-inline-block">Sarah Taylor</span>
                                                </div>
            
                                                <span className="d-block sub-comment">Video Quality!</span>
                                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                            </div>
            
                                            <div className="user-review">
                                                <img src="/img/user3.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                    </div>
            
                                                    <span className="d-inline-block">David Warner</span>
                                                </div>
            
                                                <span className="d-block sub-comment">Perfect Coding!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/img/user4.jpg" alt="image" />
                                                
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star checked'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </div>
            
                                                    <span className="d-inline-block">King Kong</span>
                                                </div>
            
                                                <span className="d-block sub-comment">Perfect Video!</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseDetailsContent;