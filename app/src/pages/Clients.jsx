// import React from 'react'
// import Mycard from './clientscard.jsx';
// import './pages.css'; 
// import image1 from '../assets/images/clientsimages/1.jpeg';
// import image2 from '../assets/images/clientsimages/2.jpg';
// import image3 from '../assets/images/clientsimages/3.jpg';
// import image4 from '../assets/images/clientsimages/4.jpg';
// import image5 from '../assets/images/clientsimages/5.jpg';
// import image6 from '../assets/images/clientsimages/6.jpg';
// import image7 from '../assets/images/clientsimages/7.jpg';
// import image8 from '../assets/images/clientsimages/8.jpg';
// import image9 from '../assets/images/clientsimages/9.jpg';
// import image10 from '../assets/images/clientsimages/10.jpg';
// import image11 from '../assets/images/clientsimages/11.jpg';
// import image12 from '../assets/images/clientsimages/12.jpg';
// export default function Clients() {
//   const images = [image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11,image12];  // Add more images to this array
//   let box = document.querySelector('.product-container');

//     const btnpressprev = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft - width;
//         console.log(width)
//     }

//     const btnpressnext = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft + width;
//         console.log(width)
//     }
//   return (
//     <div style={{marginTop:'50px'}}>
      
//       <div >
//       <h1 className='clienth1' style={{textAlign:'center' ,fontFamily:'revert',fontSize:'50px',}}>Our Clients</h1>
//       </div>

//       <div style={{borderBottom:'1px solid grey',height:'450px'}}>
//       <div className="product-carousel" >
//     <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
//     <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


//     <div className="product-container">
//     {images.map((image, index) => (
//           <Mycard key={index} cardno={index + 1} image={image} />
//         ))}
//     </div>
// </div>
//       </div>


//       <div style={{height:'700px'}} >
//       <h1 className='clienth1' style={{textAlign:'center' ,fontFamily:'revert',fontSize:'50px',}}>Trusted Clients</h1>



//       </div>


      
      




//     </div>
    
//   )
// }


import React, { useRef } from 'react';
import Mycard from './clientscard.jsx';
import './pages.css';
import image1 from '../assets/images/clientsimages/1.jpeg';
import image2 from '../assets/images/clientsimages/2.jpg';
import image3 from '../assets/images/clientsimages/3.jpg';
import image4 from '../assets/images/clientsimages/4.jpg';
import image5 from '../assets/images/clientsimages/5.jpg';
import image6 from '../assets/images/clientsimages/6.jpg';
import image7 from '../assets/images/clientsimages/7.jpg';
import image8 from '../assets/images/clientsimages/8.jpg';
import image9 from '../assets/images/clientsimages/9.jpg';
import image10 from '../assets/images/clientsimages/10.jpg';
import image11 from '../assets/images/clientsimages/11.jpg';
import image12 from '../assets/images/clientsimages/12.jpg';

export default function Clients() {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12
  ];

  const boxRef = useRef(null);

  const btnpressprev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;
    }
  }

  const btnpressnext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;
    }
  }

  return (
    <div style={{ marginTop: '50px' }}>

      <div>
        <h1 className='clienth1' style={{ textAlign: 'center', fontFamily: 'revert', fontSize: '50px' }}>Our Clients</h1>
      </div>

      <div style={{ borderBottom: '1px solid grey', height: '450px' }}>
        <div className="product-carousel">
          <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
          <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

          <div className="product-container" ref={boxRef}>
            {images.map((image, index) => (
              <Mycard key={index} cardno={index + 1} image={image} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: '700px',marginTop:'40px' }}>
        <h1 className='clienth1' style={{ textAlign: 'center', fontFamily: 'revert', fontSize: '50px' }}>Trusted Clients</h1>

        <div className="grid-container" style={{marginTop:'50px',height:'20px'}}>
  <div className="grid-item"><span className='clientsname'>Vodaphone</span></div>
  <div className="grid-item"><span className='clientsname'>Commercezone</span></div>
  <div className="grid-item"><span className='clientsname'>Alcove</span></div>
  <div className="grid-item"><span className='clientsname'>Rohan Tarang</span> </div>
  <div className="grid-item"><span className='clientsname'>Aarayan Tech Indian Pvt. Ltd</span></div>
  {/* ... more items in the first column */}

  <div className="grid-item"><span className='clientsname'>Creast Avenue</span></div>
  <div className="grid-item"><span className='clientsname'>Auxilife</span></div>
  <div className="grid-item"><span className='clientsname'>GK Associates</span></div>
  <div className="grid-item"><span className='clientsname'>Atul Enterpises</span></div>
  <div className="grid-item"><span className='clientsname'>Empire Square Chinchawad</span></div>
  {/* ... more items in the second column */}

  <div className="grid-item"><span className='clientsname'>b.u. Bhandari Landmarks</span></div>
  <div className="grid-item"><span className='clientsname'>Kirti Avenue</span></div>
  <div className="grid-item"><span className='clientsname'>Sukhawani Construction</span></div>
  <div className="grid-item"><span className='clientsname'>Rajveer Palace</span></div>
  <div className="grid-item"><span className='clientsname'>Caller Cab</span></div>
  {/* ... more items in the third column */}

  <div className="grid-item"><span className='clientsname'>Prime Plus Pimple Soudagar</span></div>
  <div className="grid-item"><span className='clientsname'>Lakhyadeep Palace</span></div>
  <div className="grid-item"><span className='clientsname'>WeekNdTicket</span></div>
  <div className="grid-item"><span className='clientsname'>Planet Pet society</span></div>
  <div className="grid-item"><span className='clientsname'>Planet Milinium</span></div>
  {/* ... more items in the fourth column */}
</div>
      </div>
    </div>
  );
}
