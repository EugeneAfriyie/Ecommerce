
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
    priceCents:999
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

export function shipDate(dateString, deliveryDays){
    let date = new Date(`${dateString} 2024`);
    
    date.setDate(date.getDate() +1);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let newDate = date.toLocaleDateString('en-US', options);
    console.log(newDate)
    
    return newDate;
    }

