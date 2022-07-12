import NotificationButton from '../NotificationButton'
import './styles.css'
function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-space">
          <input className="dsmeta-form-control" type="text"/>
        </div>
        <div className="dsmeta-form-control-space">
          <input className="dsmeta-form-control" type="text"/>
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data de Nascimento</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#777</td>
              <td className="show576">28/11/2000</td>
              <td>Edilson</td>
              <td className="show992">19</td>
              <td className="show992">89</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-botton-container">
                  <div className="dsmeta-red-botton">
                  <NotificationButton/>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#543</td>
              <td className="show576">12/02/2001</td>
              <td>Beatriz</td>
              <td className="show992">14</td>
              <td className="show992">32</td>
              <td>R$ 300000.00</td>
              <td>
                <div className="dsmeta-red-botton-container">
                  <div className="dsmeta-red-botton">
                  <NotificationButton/>
                  </div>
                </div>
              </td>
            </tr> <tr>
              <td className="show992">#098</td>
              <td className="show576">08/04/1999</td>
              <td>Ronyhéllen</td>
              <td className="show992">10</td>
              <td className="show992">4</td>
              <td>R$ 6700.00</td>
              <td>
                <div className="dsmeta-red-botton-container">
                  <div className="dsmeta-red-botton">
                    <NotificationButton/>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>

  )
}

export default SalesCard
