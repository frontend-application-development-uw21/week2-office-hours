const date = '2018-04-21T07:00:00.000Z';

// In React, you'll want to import dateformat like this:
// import dateformat from 'dateformat';

// Since this example is using CommonJS modules, we're going to
// import dateformat using "require"
const dateformat = require('dateformat');

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May'
];

const month = new Date(date).getMonth();
console.log(`${months[month]} ${new Date(date).getDate()}`);

console.log(dateformat(date, 'mmm d'));

// One component - different stylings via class
// <Article className="your-articles" article={article[1]} />
// <Article className="missed-articles" article={article[1]} />

// Or two separate components with separate stylings. Your choice.
// <YourArticle article={article[1]} />
// <MissedArticle article={article[1]} />