const exerciseFive = () => {
  document.getElementById("times").addEventListener("click", () => {
    const times = [120, 80, 200, 100];
    showMessage(console.log, "Los tiempos son " + times.join(", "));
    filterTimes(times, function (result) {
      showMessage(
        console.log,
        "Los tiempos mayores a 2 horas son " + result.join(", ")
      );
    });
  });
};

const filterTimes = (times, callback) => {
  const filteredTimes = times.filter((time) => time / 60 > 2);
  callback(filteredTimes);
};

document.addEventListener("DOMContentLoaded", exerciseFive);
