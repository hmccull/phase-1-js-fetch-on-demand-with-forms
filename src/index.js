const init = () => {
  // create alias variable to select form
  const inputForm = document.querySelector('form');
  // add event listen to form submit
  inputForm.addEventListener('submit', (e) => {
    // prevent submit event default action
    e.preventDefault();
    // assign input value to variable
    const input = e.target.children[1].value;

    // fetch data request
    fetch(`http://localhost:3000/movies/${input}`)
    .then(response => response.json())
    .then(data => {
        // create alias variables to select title and summary elements
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        // assign said var content equal to returned data 
        title.innerText = data.title;
        summary.innerText = data.summary;

        // reset form after submit 
        inputForm.reset();
    });
  });
};

document.addEventListener('DOMContentLoaded', init);

