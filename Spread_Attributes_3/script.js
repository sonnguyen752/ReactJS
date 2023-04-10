const billing = {billingContact: "090786783",billingAdd:"63, Nguyen Vawn Huyen"};
const shipping = {shippingContact: '0989098', shippingAdd: '236, Hoang Quoc Viet'};
const cusInfo = {...billing,...shipping};
console.log(cusInfo)