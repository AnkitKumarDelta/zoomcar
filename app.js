document.addEventListener('DOMContentLoaded', function () {
    // Sample car data (replace with actual data from a backend)
    const cars = [
        { id: 1, name: 'Car 1', model: 'Model A', price: '$50/day' },
        { id: 2, name: 'Car 2', model: 'Model B', price: '$60/day' },
        // Add more cars as needed
    ];

    const carListContainer = document.getElementById('car-list-container');

    // Populate car list
    cars.forEach(car => {
        const carItem = document.createElement('li');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <h3>${car.name}</h3>
            <p>Model: ${car.model}</p>
            <p>Price: ${car.price}</p>
            <button onclick="reserveCar(${car.id})">Reserve Now</button>
        `;
        carListContainer.appendChild(carItem);
    });

    // Sample reservation function (replace with actual reservation logic)
    window.reserveCar = function (carId) {
        alert(`Reserved car with ID ${carId}`);
    };
});
