import { useState } from 'react'
import PhoneShop from './modules/BaiTapGioHang/phone-shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PhoneShop/>
    </>
  )
}

export default App
