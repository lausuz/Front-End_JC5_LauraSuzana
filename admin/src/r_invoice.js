import React, { Component } from 'react'; 
import { Link, Route } from 'react-router-dom'; 
import './adminHealthy.css';
import './style.css';
 
import Header from './c_header'; 
import Footer from './c_footer'; 

class r_invoice extends Component { 
  render() { 
  return ( 
    <div>
        <header className="clearfix">
          <div id="logo">
            <img src={require("./images/vegies.png")} style={{width: 100, height: 50}} />
          </div>
          <div id="company">
            <h2 className="name">Healthy-U Kitchen</h2>
            <div>Jl. Cipete 1 No. 12</div>
            <div>(021) 847-5001</div>
            <div><a href="mailto:company@example.com">company@example.com</a></div>
          </div>
        </header>
        <main>
          <div id="details" className="clearfix">
            <div id="client">
              <div className="to">INVOICE TO:</div>
              <h2 className="name">Customer Name</h2>
              <div className="address">Cust. ID</div>
              <div className="address">Address</div>
              <div className="email"><a href="mailto:john@example.com">customer@example.com</a></div>
            </div>
            <div id="invoice">
              <h1>INVOICE00000001</h1>
              <div className="date">Date of Invoice: 26/05/2018</div>
              {/* <div class="date">Due Date: 30/06/2014</div> */}
            </div>
          </div>
          <table border={0} cellSpacing={0} cellPadding={0}>
            <thead>
              <tr>
                <th className="no">#</th>
                <th className="desc">DESCRIPTION</th>
                <th className="unit">UNIT PRICE</th>
                <th className="qty">QUANTITY</th>
                <th className="total">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="no">01</td>
                <td className="desc"><h3>DIET MEALS PAKET 1 MINGGU</h3>Pengantaran senin hingga sabtu</td>
                <td className="unit">Rp950.000,00</td>
                <td className="qty">2</td>
                <td className="total">Rp1.900.000,00</td>
              </tr>
              {/* <tr>
            <td class="no">02</td>
            <td class="desc"><h3>Website Development</h3>Developing a Content Management System-based Website</td>
            <td class="unit">$40.00</td>
            <td class="qty">80</td>
            <td class="total">$3,200.00</td>
          </tr>
          <tr>
            <td class="no">03</td>
            <td class="desc"><h3>Search Engines Optimization</h3>Optimize the site for search engines (SEO)</td>
            <td class="unit">$40.00</td>
            <td class="qty">20</td>
            <td class="total">$800.00</td>
          </tr> */}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} />
                <td colSpan={2}>SUBTOTAL</td>
                <td>Rp1.900.000,00</td>
              </tr>
              <tr>
                <td colSpan={2} />
                <td colSpan={2}>TAX 10%</td>
                <td>Rp19.000,00</td>
              </tr>
              <tr>
                <td colSpan={2} />
                <td colSpan={2}>GRAND TOTAL</td>
                <td>Rp1.919.000,00</td>
              </tr>
            </tfoot>
          </table>
          <div id="thanks">Thank you!</div>
          <div id="notices">
            <div>NOTICE:</div>
            <div className="notice">Sudah termasuk biaya pengantaran untuk daerah Jakarta</div>
          </div>
        </main>
        <footer>
          Invoice was created on a computer and is valid without the signature and seal.
        </footer>
      </div>
    );
  }
}
export default r_invoice;