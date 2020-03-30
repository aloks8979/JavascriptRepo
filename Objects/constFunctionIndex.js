console.log('Hello');

let post1 = {
    title : '',
    body : '',
    author : '',
    views : '',
    comments : [
        {author : 'a', body : 'b'}
    ],
    isLive : true
}

function Post(title, body, author)
{
    this.title = title,
    this.body = body,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.isLive = false
}

let pObj = new Post('a','v','c');
console.log(pObj); 