export const data = [

]

const createDataArray = () => {
  for (let i = 3; i <= 27; i++) {
  let result =  {
    floor: i,
    rooms: [
      {
        number: 1,
        isAvailible: true
      },
      {
        number: 2,
        isAvailible: false
      },
      {
        number: 3,
        isAvailible: false
      },
      {
        number: 4,
        isAvailible: true,
      },
      {
        number: 5,
        isAvailible: false
      },
      {
        number: 6,
        isAvailible: false
      },
       {
        number: 7,
        isAvailible: true
      },
      {
        number: 8,
        isAvailible: true
      },
      {
        number: 9,
        isAvailible: false
      },
      {
        number: 10,
        isAvailible: false
      }
    ]
  }
  data.push(result)
    }
  }
  createDataArray()
