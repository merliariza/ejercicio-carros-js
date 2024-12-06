document.getElementById('brandSelect').addEventListener('change', function() {
    const brand = this.value;
    const carList = document.getElementById('carList');
    const carModels = document.getElementById('carModels');
    const carImage = document.getElementById('carImage');
  
    carModels.innerHTML = '';
    carImage.innerHTML = '';
  
    if (brand) {
      carList.style.display = 'block';
  
      let cars = [];
      let images = [];
  
      if (brand === 'toyota') {
        cars = ['Corolla', 'Camry', 'Yaris'];
        images = ['toyota_corolla.webp', 'toyota_camry.jpeg', 'toyota_yaris.png'];
      } else if (brand === 'ford') {
        cars = ['Fiesta', 'Focus', 'Mustang'];
        images = ['ford_fiesta.avif', 'ford_focus.jpeg', 'ford_mustang.webp'];
      } else if (brand === 'bmw') {
        cars = ['Serie 3', 'X5', 'Z4'];
        images = ['bmw_serie3.jpeg', 'bmw_x5.jpg', 'bmw_z4.jpg'];
      }
  
      cars.forEach((car, index) => {
        const li = document.createElement('li');
        li.textContent = car;
        li.addEventListener('click', () => {
          carImage.innerHTML = `<img src="images/${images[index]}" alt="${car}">`;
        });
        carModels.appendChild(li);
      });
    } else {
      carList.style.display = 'none';
    }
  });
  