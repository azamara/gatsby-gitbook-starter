const ghpages = require('gh-pages');

ghpages.publish('./public', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Done');
  }
});
