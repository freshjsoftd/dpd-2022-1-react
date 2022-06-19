import React, { useEffect, useState } from 'react'

const styles = {
  fontSize: '30px',
  listStyle: 'none'
}

function CallbackItem({getItems}) {

  const [items, setItems] = useState([])


  useEffect(() => {
    const newItems = getItems();
    setItems(newItems)
    console.log(`Render # ${newItems.length}`);
  }, [getItems]);

  return (
    <ul style={styles}>
      {items.map((item) => <li key={Math.random() * 1000}>{item}</li>)}
    </ul>
  )
}

export default CallbackItem