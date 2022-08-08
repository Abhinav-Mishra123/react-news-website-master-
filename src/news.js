import React from "react";
import "./App.css"

class News extends React.Component {
    constructor(props) {
      super(props);
      // console.log("i am constructor");
      this.state = { name1: "Loading...",count:0 };
      
    }
    async componentDidMount() {
      // console.log("i am coponentdidmount");
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=39c3025e706146f99c1db7b6e2295f6e`
      );
      let data = await res.json();
      // console.log(data, typeof data.articles, data.articles, typeof ar);
      // let w = { width: "400px" };
      let arr = data.articles.map((p)  => {
        return (

          <div className="p-2 main-container"  style={{boxSizing: "border-box"}}>  
          {/* <!--Card 1--> */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full imgnews" src={p.urlToImage} alt="news"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{p.title}</div>
              <p className="text-gray-700 text-base">
                {p.description}
              </p>
              <button className="font-bold text-xl mb-2"> <a href={p.url}>Read more</a></button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">{p.source.name}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2">{p.publishedAt}</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Latest News</span>
            </div>
          </div>
        </div>
        );
      });
      // console.log(arr);
      this.setState({ name1: arr });
    }
    render() {
      // this.setState({count:this.state.count+1})
      // console.log(" i am render",this.state.count);
      return  <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1">{this.state.name1} </div>;
  }}

export default News;