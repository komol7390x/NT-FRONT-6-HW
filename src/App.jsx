import { AudioCard, ProductCard } from './components/card'

import { useState } from 'react'

function App() {
  return (
    <>
      <div className='flex flex-col gap-y-10'>
        <ProductCard></ProductCard>
        < br />
        <AudioCard></AudioCard>
      </div>
    </>
  )
}

export default App
