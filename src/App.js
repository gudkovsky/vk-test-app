import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from 'moment';
import Header from "./header";
import FloorSelect from './components/floor-select.jsx';
import RoomSelect from "./components/room-select.jsx";

import { data as floorData } from './data/mocks.js'
const roomData = [...floorData[0].rooms]


export default function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const minDate = moment().format('YYYY-MM-DD')

  return (
    <form className="form" onSubmit={handleSubmit((data) => {setData(JSON.stringify(data))
      console.log('Данные, полученные из формы: ', {data})
    })}>
      <Header />
      <select {...register("tower", { required: true })}>
        <option value="" disabled selected  hidden> Выберите одну из наших башен </option>
        <option value="A">Башня А</option>
        <option value="B">Башня Б</option>
      </select>

      <select {...register("floor", { required: true })}>
        <option value="" disabled selected  hidden> Выберите этаж </option>
        {floorData.map((floor) => (
          <FloorSelect key={floor.floor}{...floor} />
            ))}
      </select>

      <select {...register("room", { required: true })}>
        <option value="as" disabled selected  hidden> Выберите комнату </option>
       {roomData.map((room) => (
      <RoomSelect key={room.number} room={room}/>
       ))}
      </select>

      <p>Выберите дату и время встречи:</p>

      <input type="date" id="date"  min={minDate} {...register("date", { required: true })}/>
        {/* <input type="time" id="timeFrom" {...register("timeFrom", { required: true })} />
        <input type="time" id="timeTo"  {...register("timeTo", { required: true })} /> */}
      <select {...register("time", { required: true })}>
        <option value="" disabled selected  hidden> Выберите время </option>
        <option time="1">08:00 - 09:00</option>
        <option time="2">09:00 - 10:00</option>
        <option time="3">10:00 - 11:00</option>
        <option time="4">11:00 - 12:00</option>
        <option time="5">12:00 - 13:00</option>
        <option time="6">13:00 - 14:00</option>
        <option time="7">14:00 - 15:00</option>
        <option time="8">15:00 - 16:00</option>
        <option time="9">16:00 - 17:00</option>

      </select>

      <p>Дополните запрос при необходимости</p>

      <textarea {...register("comment")} placeholder="Дополнительная информация" />

      <input type="submit"/>
      <input type='reset' />
    </form>
  );
}