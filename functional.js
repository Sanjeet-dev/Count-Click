
      let counter = 0;
      const box = document.getElementById('box');

      function incrementCounter() {
        counter++;
        document.getElementById('counter').innerHTML = counter;

        if (counter % 5 === 0) {
          box.style.backgroundColor = 'darkred';
        }
      }
    