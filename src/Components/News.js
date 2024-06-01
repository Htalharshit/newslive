import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
const categ=props.category;
    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }    

    const updateNews=async ()=>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3318c528669e42ff8bcfcb7d58f96d3f&page=${page}&pagesize=${props.pagesize}`
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - FastNews`;
        updateNews()
     }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3318c528669e42ff8bcfcb7d58f96d3f&page=${page + 1}&pagesize=${props.pagesize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    };
    return (
        <>
            <h2 className='text-center' style={{marginTop:'80px'}}>{`FastNews- Top ${capitalizeFirstLetter(categ)} News from around the World!`}</h2>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}


export default News
