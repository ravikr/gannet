
function xmlesc ( str ) {
  return str.replace( /["'<>&]/g, function (a) {
    return { '<':'&lt;', '>':'&gt;', '"':'&quot;', '&':'&amp;', "'":"&apos;" }[a];
  });
}


var allowed_freqs = {
  'always': 1
, 'hourly': 1
, 'daily': 1
, 'weekly': 1
, 'monthly': 1
, 'yearly': 1
, 'never': 1
};


function Sitemap ( url ) {
  this.baseurl = url;
  this.items = [];
}
Sitemap.prototype.add = function ( loc, lastmod, changefreq, priority ) {

  if ( !loc ) {
    return;
  }

  var item = { 'loc': loc };

  if ( !changefreq || !(changefreq in allowed_freqs) ) {
    changefreq = null;
  }

  if ( lastmod && Object.prototype.toString.call(lastmod) == '[object Date]' ) {
    item.lastmod = lastmod;
  }

  // if changefreq was not supplied we calculate the freq based on age:
  if ( changefreq ) {
    item.changefreq = changefreq;
  }
  else if ( lastmod ) {
    // things lastmod > year ago   => 'monthly'
    var age = new Date( Date.now() ) - lastmod;
    if ( age > 864e5 * 365 ) { // more than a year old
      item.changefreq = "monthly";
    }
    else if ( age > 864e5 * 30 ) { // passed about a month's age
      item.changefreq = "weekly";
    }
    else if ( age > 864e5 * 5 ) { // older than 5 days
      item.changefreq = "daily";
    }
    else { // last modified less than 5 days ago
      item.changefreq = "hourly";
    }
  }

  if ( !isNaN(priority) && isFinite(priority) && priority != 0.5 ) {
    item.priority = priority;
  }

  this.items.push( item );

};
Sitemap.prototype.toString = function () {
  var now = new Date( Date.now() );
  var out = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset\n',
    '    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n',
    '    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n',
    '    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n',
    '          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n',
  ];
  this.items.forEach(function ( item ) {
    out.push( '<url>\n' );
    out.push( '  <loc>', xmlesc( item.loc ), '</loc>\n' );
    if ( 'lastmod' in item ) {
      out.push( '  <lastmod>', item.lastmod.toISOString(), '</lastmod>\n' );
    }
    if ( 'changefreq' in item ) {
      out.push( '  <changefreq>', item.changefreq, '</changefreq>\n' );
    }
    if ( 'priority' in item ) {
      out.push( '  <changefreq>', item.changefreq, '</changefreq>\n' );
    }
    out.push( '</url>\n' );
  });
  out.push( '</urlset>' );
  return out.join('');
};


