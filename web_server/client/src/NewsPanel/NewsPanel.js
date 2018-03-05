import './NewsPanel.css';
import NewsCard from '../NewsCard/NewsCard';
import React from 'react';

// NewsPanel should maintain a state that is a dynamic list of NewsCard
class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = { news : null };
    }

    // invoked immediately after a component is mounted.
    // instantiate the network request to load data from a remote endpoint
    componentDidMount() {
        this.loadMoreNews();
    }

    // get news data from server/api
    loadMoreNews() {
        const news_url = 'http://' + window.location.hostname + ':3000' + '/news';
        const request = new Request(news_url, { method : 'GET' });

        // use promise here
        fetch(request)
            .then( res => res.json() )
            .then( fetched_news_list => {
                this.setState({
                    news: this.state.news ? this.state.news.concat(fetched_news_list) : fetched_news_list
                });
            });
    }

    // since the news is a dynamic list, we need a function to render the news list
    renderNews() {
        const news_list = this.state.news.map(news_item => {
           return(
               // use "key" attribute to identify each component in the list
               // the virtual DOM can quickly identify the components in the list. It only re-render the modified component instead of the entire list.
               // if the "key" attribute is not provided, it will re-render the entire list when any component is changed
               <a className="list-group-item" key={news_item.digest} href="#">
                   {/* pass the news data as property to NewsCard */}
                   <NewsCard news={news_item}/>
               </a>
           );
        });

        return(
            <div className="container-fluid">
                <div className="list-group">
                    {news_list}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.news) {
            return(
                // we cannot directly render this.state.news
                // since this.state.news is a dynamic list
                // that cannot been hard coded
                <div>
                    {this.renderNews()}
                </div>
            )
        } else {
            return(
                <div id="msg-app-loading">
                    Loading
                </div>
            )
        }
    }
}

export default NewsPanel;