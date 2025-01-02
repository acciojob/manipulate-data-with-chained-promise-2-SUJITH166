//your JS code here. If required.
function getNumbers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 1000); // Resolve immediately
  });
}

getNumbers()
  .then((numbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = evenNumbers.join(", ");
        resolve(evenNumbers);
      }, 1000); // Delay of 1 second
    });
  })
  .then((evenNumbers) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent =
          multipliedNumbers.join(", ");
        resolve(multipliedNumbers);
      }, 2000); // Total delay of 2 seconds
    });
  })
  .catch((err) => console.error(err));