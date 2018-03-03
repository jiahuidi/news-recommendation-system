import './NewsCard.css';
import React from 'react';

// news is passed as property from NewsPanel
// NewsCard only does the rendering
class NewsCard extends React.Component {

    // redirect to the url of the news when click on a NewsCard
    redirectToUrl(url, event) {
        // prevent open this url in current page
        event.preventDefault();
        // open the url of the news in a new tab
        window.open(url, '_blank');
    }

    render() {
        // show the image of the news on the left
        // show the title, description, and tags on the right
        return(
            <div className="news-container" onClick={() => this.redirectToUrl(this.props.news.url)}>
                <div className="row">
                    <div className="col s4 fill">
                        <img src={this.props.news.urlToImage} alt={this.props.news.title}/>
                    </div>
                    <div className="col s8">
                        <div className="news-intro-panel">
                            <h4>{this.props.news.title}</h4>
                            <div className="news-description">
                                <p>{this.props.news.description}</p>
                                <div>
                                    {this.props.news.source != null && <div className='chip light-blue news-chip'>{this.props.news.source}</div>}
                                    {this.props.news.reason != null && <div className='chip light-green news-chip'>{this.props.news.reason}</div>}
                                    {this.props.news.time != null && <div className='chip amber news-chip'>{this.props.news.time}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard;