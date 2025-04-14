document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-consejo');
    const lista = document.getElementById('lista-consejos');
  
    fetch('/consejos')
      .then(res => res.json())
      .then(consejos => {
        consejos.forEach(c => agregarAlDOM(c));
      });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const consejoVerde = document.getElementById('consejoVerde').value;
  
      fetch('/consejos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ consejoVerde })
      })
        .then(res => res.json())
        .then(nuevo => {
          agregarAlDOM(nuevo);
          form.reset();
        })
        .catch(err => console.error(err));
    });
  
    function agregarAlDOM(c) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = `${c.consejoVerde} (${new Date(c.fecha).toLocaleDateString()})`;
      lista.appendChild(li);
    }
  });