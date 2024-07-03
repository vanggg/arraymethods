fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // const asianCountries = data.filter((country) => country.region === "Asia");
    // console.log(asianCountries);
    // const po = data.filter((country) => country.population < 200000);
    // console.log(po);
    const inf = data.forEach((name, capital, flag) => {
      return name;
    });
    console.log(inf);
  })
  .catch((error) => console.error("Error:", error));
