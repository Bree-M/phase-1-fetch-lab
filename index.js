function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    renderBooks(jsonData);
    return jsonData;
  })
  .catch(error => {
    console.error('Error fetching books:', error);
    throw error;
  });
}
      
     

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Game of Thrones Books';
  main.appendChild(h2);
  
  const ul = document.createElement('ul');
  books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = book.name;
    ul.appendChild(li);
  });
  
  main.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
  