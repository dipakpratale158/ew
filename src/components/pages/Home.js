import React from 'react'
import '../../App.css';
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

const Home = () => {
  return (
    <div>
         <h1 style={{fontFamily:'Comic Sans MS',textAlign:'center'}}>TOURS</h1>
     <div className="a">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Place</th>
          <th>Event</th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>JUL16</td>
          <td>DETROIT, MI</td>
          <td>DTE ENERGY MUSIC THEATRE</td>
          <td><Button variant="info">BUY TICKETS</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>JUL19</td>
          <td>TORONTO,ON</td>
          <td>
BUDWEISER STAGE</td>
<td><Button variant="info">BUY TICKETS</Button></td>

        </tr>
        <tr>
          <td>3</td>
          <td>JUL 22</td>
          <td>BRISTOW, VA</td>
          <td>JIGGY LUBE LIVE</td>
          <td><Button variant="info">BUY TICKETS</Button></td>
          
        </tr>
        <tr>
          <td>4</td>
          <td>JUL 22</td>
          <td>BRISTOW, VA</td>
          <td>JIGGY LUBE LIVE</td>
          <td><Button variant="info">BUY TICKETS</Button></td>
          
        </tr>
        <tr>
          <td>5</td>
          <td>AUG 2</td>
          <td>LAS VEGAS, NV</td>
          <td>
        T-MOBILE ARENA</td>
        <td><Button variant="info">BUY TICKETS</Button></td>
          
        </tr>
        <tr>
          <td>6</td>
          <td>AUG 7</td>
          <td>BRISTOW, VA</td>
          <td>JIGGY LUBE LIVE</td>
          <td><Button variant="info">BUY TICKETS</Button></td>
          
        </tr>
      </tbody>
    </Table>
        
    </div>
    
      <p className="p">Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of
          sorrows, hates no prosecutors will unfold in the enduring of which
          were born in it? Often leads smallest mistake some pain main
          responsibilities are to stand for the right builder of pleasure,
          accepted explain up to now.</p>
    </div>
  )
}

export default Home;
