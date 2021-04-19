import logo from './logo.svg';
import './App.css';

import yourArticles from './_data/your-articles.json'
import Article from './Article';

function App() {
  return (
    <div className="App">
      {yourArticles.map((article, idx) => {
        return <Article article={article} key='idx' />
      })}
      {/* This is why we use props. I don't have to couple my component to
          any of the JSON files. I can pass in my own custom articles and render
          those to the page. Reusable + sharable!
       */}
      <Article
        article={{
          title: 'My custom article',
          author: {
            name: 'Brian Hague'
          }
        }}
      />
    </div>
  );
}

export default App;
