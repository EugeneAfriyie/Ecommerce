import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions =[
{
    id:'1',
    deliveryDays:7,
    priceCents:0,
    shippedDay: 4
},
{
    id:'2',
    deliveryDays:3,
    priceCents:499,
    shippedDay: 1
},
{
    id:'3',
    deliveryDays:1,
    priceCents:999,
    shippedDay: 0
}

]



export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
          deliveryOptions.forEach(option =>{
            if(option.id === deliveryOptionId){
              deliveryOption = option;
            }

        })
    return deliveryOption || deliveryOptions[0];
}

// export function shipDate(shippedDay){
//     let date = dayjs();
//     const newDate = date.add(0, 'days');
//     let shipDateString =  newDate.format('dddd, MMMM D YYYY')
//     console.log(shipDateString)
//     return shipDateString;
//     }

