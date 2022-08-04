const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log(mars), 4000);
};

getPlanet();

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const sendMarsTemperature = (callback) => {
  const tempMarte = getMarsTemperature();
  setTimeout(
    () => console.log(`Temperatura atual de Marte é : ${tempMarte}`),
    messageDelay()
  );
  setTimeout(() => callback(tempMarte), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
