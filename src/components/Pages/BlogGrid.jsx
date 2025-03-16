import React from 'react';
import { NavLink } from 'react-router-dom';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

const blogs = [
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'We’ll nail your next project, because nobody wants...',
        author: 'John',
        date: '5',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic1.jpg'),
        title: 'Helping you and your house become better acquainted.',
        author: 'John',
        date: '25',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic2.jpg'),
        title: 'Creating quality urban lifestyles, building...',
        author: 'John',
        date: '26',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic3.jpg'),
        title: 'When it comes to your house, don’t mess...',
        author: 'John',
        date: '16',
        month: 'SEP',
        comments: '3 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'Don’t get framed by the competition, trust our...',
        author: 'John',
        date: '18',
        month: 'SEP',
        comments: '5 Comment'
    },
    {
        image: require('./../../images/blog/blog-grid/pic5.jpg'),
        title: 'We’re the construction kings, building up great...',
        author: 'John',
        date: '15',
        month: 'SEP',
        comments: '2 Comment'
    }
]

var bnrimg = require('./../../images/banner/7.jpg');

class BlogGrid extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Banner title="Blog Grid Style" pagename="Blog Grid" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                   
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                       
                    <div className="container">
                            <div className="masonry-outer mfp-gallery news-grid clearfix row ">
                                {blogs.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-6 col-sm-12" key={index}>
                                    <div className="blog-post blog-grid date-style-2">
                                        <div className="sx-post-media sx-img-effect img-reflection">
                                            <NavLink to={"/blog-single"}><img src={item.image} alt="" /></NavLink>
                                        </div>
                                        <div className="sx-post-info p-t30">
                                            <div className="sx-post-meta ">
                                                <ul>
                                                    <li className="post-date"><strong>{item.date}</strong> <span>{item.month}</span> </li>
                                                    <li className="post-author"><NavLink to={"/blog-single"}>By <span>{item.author}</span></NavLink> </li>
                                                    <li className="post-comment"> <NavLink to={"/blog-single"}>{item.comments}</NavLink> </li>
                                                </ul>
                                            </div>
                                            <div className="sx-post-title ">
                                                <h4 className="post-title"><NavLink to={"/blog-single"}>{item.title}</NavLink></h4>
                                            </div>
                                            <div className="sx-post-readmore">
                                                <NavLink to={"/blog-single"} title="READ MORE" rel="bookmark" className="site-button-link">View More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>    
                            <ul className="pagination m-t30 m-b0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li className="active"><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul>
                        </div>
                       
                    </div>
                    
                </div>

                <Footer />
            </>
        );
    };
};

export default BlogGrid;