import React from 'react'
const NewsItem = (props) => {
    let { title, description, url, urlToImage, author, publishedAt, source } = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: 350 }}>
                    {source}
                </span>
                <img src={!urlToImage ? "https://akm-img-a-in.tosshub.com/aajtak/images/story/202405/663d829359a8b-virat-kohli-101233864-16x9.jpg" : urlToImage}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small>Published by {author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={url} className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
