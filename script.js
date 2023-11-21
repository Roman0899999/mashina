class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.speed = 0;
      this.engineStarted = false;
    }
  
    startEngine() {
      if (this.engineStarted) {
        return "Двигатель уже заведен.";
      } else {
        this.engineStarted = true;
        return "Двигатель успешно заведен.";
      }
    }
  
    stopEngine() {
      if (!this.engineStarted) {
        return "Двигатель уже выключен.";
      } else {
        this.engineStarted = false;
        return "Двигатель успешно выключен.";
      }
    }
  
    increaseSpeed(speed) {
      if (!this.engineStarted) {
        return "Двигатель не заведен. Сначала заведите двигатель.";
      } else {
        this.speed += speed;
        return `Текущая скорость автомобиля увеличена на ${speed}.`;
      }
    }
  
    decreaseSpeed(speed) {
      if (!this.engineStarted) {
        return "Двигатель не заведен. Сначала заведите двигатель.";
      } else {
        this.speed -= speed;
        return `Текущая скорость автомобиля уменьшена на ${speed}.`;
      }
    }
  
    displayInfo() {
      const engineStatus = this.engineStarted ? "заведен" : "выключен";
      return `Марка: ${this.brand}<br>Модель: ${this.model}<br>Год выпуска: ${this.year}<br>Текущая скорость: ${this.speed}<br>Состояние двигателя: ${engineStatus}`;
    }
  }
  
  const car = new Car("Toyota", "Camry", 2021);
  document.write(car.startEngine() + "<br>"); // Заводим двигатель
  document.write(car.increaseSpeed(100) + "<br>"); // Увеличиваем скорость на 50 км/ч
  document.write(car.displayInfo() + "<br>"); // Отображаем информацию об автомобиле