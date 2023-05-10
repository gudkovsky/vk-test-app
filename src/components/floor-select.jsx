import React from "react";


export default function FloorSelect ({
  floor
}) {

  return (
    <>
      <option value={`${floor}`} >Этаж {floor} </option>
      {/* добавить генератор этажей */}
    </>
  )
}