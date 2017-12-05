exports.build = function(title, pagetitle, content, misc) {  
    return [
      '<!doctype html>',
      '<head>',
        '<meta charset="utf-8">',
        '<title>{title}</title>',
        '<link rel="stylesheet" href="/assets/game.css" />',
        '<script type="text/javascript" src="/assets/game.js" ></script>',
        '<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js" ></script>',
      '</head>',
      '<body>',
        '<html lang="en">',
        '<h1>{pagetitle}</h1>',
        '<div id="game">{content}</div>',
        '<div id="misc">{misc}</div>',
      '</body>']
    .join('')
    .replace(/{title}/g, title)
    .replace(/{pagetitle}/g, pagetitle)
    .replace(/{content}/g, content)
    .replace(/{misc}/g, misc);
  };