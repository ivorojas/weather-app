import React, { useState } from "react";
import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import { Route, Routes } from "react-router-dom";
import Ciudad from "../components/Ciudad";
const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  /*
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }*/
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Nav onSearch={onSearch} />} />
        <Route
          exact
          path="/ciudad/:ciudadId"
          element={<Ciudad cities={cities} />}
        />
      </Routes>
      <div className="container_loader_cards">
        {cities.length === 0 ? (
          <div className="loader">
            {/*<img src={loader} width="350px" />*/}
            <h4>Search for a city!</h4>
          </div>
        ) : null}
        <Cards cities={cities} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
