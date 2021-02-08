import './slider.css';
import sliderdata from './sliderdata.js';



const Slider = () => {
return ( 
        <>
      <div className="slider">
      <div className="slider_parent">
      <div className="slider_child">
         <div id="slider">
            <figure className="container"> 
               
           {sliderdata.map((sdata, index) =>
           (<img style={{ height: sdata.size.height }}
           src={sdata.img} key={index} alt={sdata.index} />))}
               
          </figure>
         </div>
      </div>
    </div>
 </div>
        </>
   );
}
 
export default Slider;
