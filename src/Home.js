import React,{Component} from 'react';
class Home extends Component{
    render(){
        return(
            <div>
                <h2>Home</h2>
                <p>At this time, results are ordered with the most recent following first — however,
                    this ordering is subject to unannounced change and eventual consistency issues. 
                    Results are given in groups of 20 users and multiple "pages" of results can be navigated through using the next_cursor value in subsequent requests. 
                    See Using cursors to navigate collections for more information
                </p>
            </div>
        )
    }
}
export default Home;