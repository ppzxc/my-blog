var fs = require('fs');
var uf = require('unified');
var rp = require('remark-parse');
var rr = require('remark-rehype');
var rs = require('rehype-stringify');

// var posts = []

var postsPath = '../../../_posts'

function read() {
  var files = fs.readdirSync(postsPath)
  files.forEach(file => {
      var data = fs.readFileSync(postsPath + '/' + file, 'utf-8')
      var parseHtml = uf().use(rp).use(rr).use(rs).processSync(data)
      fs.writeFileSync('../../../public/posts/' + file.replace(/(.md)$/, '') + '.html', parseHtml.toString())
      // posts.push({
      //   name: file,
      //   path: postsPath + '/' + file,
      //   html: parseHtml.toString()
      // })
  })
}

read();