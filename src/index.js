import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import img1 from './images/dp1.jpg'
import p1 from './images/p1.jpg'

function Hi(props) {
  const [isBright,setIsBright]=React.useState(true);
  const mode=()=>{
    setIsBright(!isBright)

  };
  return<div className='for'> 
  <button className={isBright ? 'Bmode' :'Dmode'} onClick={mode}>Change Mode</button>
<div className={isBright ? 'Bmain' :'Dmain'}>
    
    <div className='inner'>
    
      <img className='dp' src={props.ima} />
      <h4>{props.name}</h4>
    </div>
    <p className="date">{props.date}</p>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Commodi cupiditate quisquam sapiente, non quaerat lab
      orum sint nostrum ipsam sit qui,
      veniam ea dicta
      excepturi, porro autem repellendus hic! Quo, praesentium. </p>
    <img class='product' src={props.pma} />
    <button className='ract'>Like</button>
    <button className='ract'>Comment</button>
    <button className='ract'>Share</button>
  </div>;
  </div>


}
ReactDom.render(<div><Hi name='Zubair Ahmed' ima={img1} pma={p1} date='August 21 at 10:02 AM' />

  </div>,
  document.querySelector('#root'));
