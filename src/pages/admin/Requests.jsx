import React from 'react'
import './Request.css'
import SaveButtun from '../../components/admin/SaveButtun'

const Requests = () => {
  return (
    <div>
      <h1>Заявки</h1>
      <div className='table'>
      <table>
        <tr>
          <th>№</th>
          <th>ФИО</th>
          <th>Заказ</th>
          <th>Сумма</th>
          <th>Статус</th>
        </tr>
        <tr>
          <th>1</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td>Отклонен</td>
        </tr>
        <tr>
        <th>2</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td>Подтвержден</td>
        </tr>
        <tr>
        <th>3</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>4</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>5</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>6</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>7</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
          <th>8</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>9</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>10</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>11</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
          <th>12</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>13</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
        <tr>
        <th>14</th>
          <td>Абдылаев А.</td>
          <td>№ 001 название шины</td>
          <td>1000 сом</td>
          <td></td>
        </tr>
      </table>
      </div>
      <div className='buttun'><SaveButtun/></div>
    </div>
  )
}

export default Requests
