import React from 'react'
import './SaveButtun.css'

const saveButtun = () => {
  return (
    <div>
      <div className="save">
          <button type="submit">Сохранить</button>
          </div>
          <div className="reset">
          <button type="reset">Сбросить</button>
          </div>
    </div>
  )
}

export default saveButtun
