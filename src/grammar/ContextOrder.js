import React, {createContext, useContext, useState} from 'react'

//context 생성
const OrderContext = createContext()

const ContextOrder = () => {
  const [order, setOrder] = useState({
    price:0,
    option:'none',
  })
  return (
    <OrderContext.Provider value={{order,setOrder}}>
      <Order />
      <Total />
    </OrderContext.Provider>
  )
}

const handleChange=(e) =>{
  //e.target.value=''
  let price = 0
  switch (e.target.value) {
    case 'sugar':
        price = 1000
        break
    case 'milk':
        price = 1500
        break
    case 'none':
    default:
        price = 0
        break
    }
    setOrder({ ...order, option: e.target.value, price: price })
}

const Order = () => {
  const {order, setOrder} = useContext(Order)

  return <div>order
    <select value={order.option} onChange={handleChange}>
      <option value="none">None</option>
      <option value="sugar">Sugar</option>
      <option value="milk">Milk</option>
    </select>
  </div>
}
const Total = () =>{
  const { order } = useContext(OrderContext)
  return <div>total
      <p>가격: {order.price}원</p>
      <p>선택 옵션: {order.option}</p>
  </div>
}

export default ContextOrder