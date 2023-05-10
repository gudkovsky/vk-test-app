import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from 'moment';
import Header from "./header";
import FloorSelect from './components/floor-select.jsx'

import { data as floorData } from './data/mocks.js'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const minDate = moment().format('YYYY-MM-DD')
  
  // const handlePastTime = (evt) => {
  //   const selectedTime = moment(evt.target.value, 'HH:mm');
  //   const currentTime = moment();
  //   console.log(selectedTime)
  //   if (selectedTime.isBefore(currentTime)) {
  //     evt.target.setCustomValidity('Выберите корректное время')
  //   } else {
  //     evt.target.setCustomValidity('')
  //   }
  // }как сделать выбор времени от и до js
  console.log(floorData)

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Header />
      <select {...register("tower", { required: true })}>
      <option value="" disabled selected  hidden> Выберите одну из наших башен </option>
        <option value="A">Башня А</option>
        <option value="B">Башня Б</option>
      </select>
      <select {...register("floor", { required: true })}>
      <option value="" disabled selected  hidden> Выберите этаж </option>
      {floorData.map((floor) => (
               <FloorSelect {...floor}/>
              ))}
        {/* добавить генератор этажей */}
      </select>
      <select {...register("room", { required: true })}>
      <option value="" disabled selected  hidden> Выберите комнату </option>
        <option value="room 1">Комната 1</option>
        <option value="room 2">Комната 2</option> 
        {/* добавить генератор комнат */}
      </select>
      <p>Выберите дату и время встречи:</p>
      <input type="date" id="date"  min={minDate} {...register("date", { required: true })}/>
      {errors.date && <span>Заполните это поле ДОБАВИТЬ СТИЛИ</span>}

      {/* <input type="time" id="timeFrom" {...register("timeFrom", { required: true })} />
      <input type="time" id="timeTo"  {...register("timeTo", { required: true })} /> */}
      {errors.time && <div>Заполните это поле ДОБАВИТЬ СТИЛИ</div>}
      <select {...register("time", { required: true })}>
      <option value="" disabled selected  hidden> Выберите время </option>
        <option time="1">08:00 - 09:00</option>
        <option room="1">09:00 - 10:00</option>
        <option room="1">10:00 - 11:00</option>
        <option room="1">11:00 - 12:00</option>
        <option room="1">12:00 - 13:00</option>
        <option room="1">13:00 - 14:00</option>
        <option room="1">14:00 - 15:00</option>
        <option room="1">15:00 - 16:00</option>
        <option room="1">16:00 - 17:00</option>
        {/* добавить генератор комнат */}
      </select>
      <p>Дополните запрос при необходимости</p>
      <textarea {...register("comment")} placeholder="Дополнительная информация" />
      <p>{data}</p>
      <input type="submit" onClick={() => {
        
        console.log({data})

      }}/>
      <input type='reset' />
    </form>
  );
}