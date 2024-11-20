fetch('data.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.querySelector('#blog-list');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const link = document.createElement('a');
      link.href = post.link;
      link.textContent = `${post.title} - ${post.date}`;
      postElement.appendChild(link);

      const description = document.createElement('p');
      description.textContent = post.description;
      postElement.appendChild(description);

      container.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error loading the posts:', error));
