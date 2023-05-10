import React from "react";

export default function RoomSelect ({
  room
}) {

  return (
    <>
      <option disabled={room.isAvailible} value={`room ${room.number} `}>Комната {room.number} </option>
    </>
  )
}