  
 const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
  ];
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000);
  }
  
  function create4thPost(post, callback) {
    createPost(post, callback);
  }
  
  create4thPost({ title: 'Post Four', body: 'This is post four' }, getPosts);
  