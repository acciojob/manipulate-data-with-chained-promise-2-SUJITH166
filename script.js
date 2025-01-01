//your JS code here. If required.
function getNumbers() {
  // Returns a promise that resolves with an array of numbers
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

getNumbers()
  .then((numbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 4000); // Delay of 1 second
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent =
          multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000); // Delay of 2 seconds
    });
  })
  .catch((err) => console.error(err));