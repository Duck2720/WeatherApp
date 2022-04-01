import axios from "axios";
import { useState } from "react";
import styled from "styled-components"
import CityComponent from "./modules/CityComponent";
import WheatherComponent from "./modules/WheatherInfoComponent";

const API_KEY = "97c848b579d71e0c5df6605498f9c7a1"

const Container = styled.div`
  display: flex;
  flex-direction:column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;



function App() {
  const [city, updateCity] = useState()
  const [weather, updateWeather] = useState()


  const fetchWeather =  async (e) => {
    e.preventDefault()
  const response = await
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    updateWeather(response.data)
    console.log(response.data);
  }
  return (
    <div >
      <Container>
        <AppLabel> React Wheather App</AppLabel>
        {weather ? (
            <WheatherComponent weather = {weather}/>
        ) : (
          <CityComponent updateCity = {updateCity} fetchWeather = {fetchWeather}/>
        )}
      </Container>
    </div>
  );
}

export default App;
