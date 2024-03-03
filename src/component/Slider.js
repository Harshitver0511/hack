import React from "react";
import SliderItem from "./SliderItem";


export default function Slider() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const items = [ 
    {
      description: "Taj Mahal",
      icon: require("./tajmahal.jpg"),
      text:`The Taj Mahal is an ivory-white Yamuna .`,
      text1:" marble mausoleum on the",
      text2:"  right bank of the river in Agra, Uttar Pradesh, India",
      path:"/Tajmahal",
    },
    {
      description: "Ajanta Cave",
      icon: require("./ajanta.jpg"),
      text:"The Ajanta Caves are 29 rock-cutcentury BCE to about ",
      text1:" Buddhist cave monuments ",
      text2:" dating from the second480 CE in the Aurangabad district of Maharashtra state",
      path:"/AjantaCave"
    },
    {
      description: "Vally Of Flower",
      icon: require("./flowervally.jpg"),
      text:"Valley of Flowers National Park is ",
      text1:"an Indian national park which",
      text2:"  was established in 1982.It is located in Chamoli in the state of Uttarakhand",
      path:"/Vally"
   
    },
  ];

  const updateIndex=(newIndex)=>{
    if(newIndex<0){
      newIndex=items.length-1;
    }
    else if(newIndex >=items.length){
      newIndex=0;
    }
    setActiveIndex(newIndex);
  }
  // setInterval((newIndex) => {
  //   newIndex=newIndex+1;
  //   setActiveIndex(newIndex);
    
  // }, 300);

  return (

    <>
  
    <div className="slider">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((items) => {
          return <SliderItem items={items}  width={"100%"}/>;
        })}
      </div>
      <div className="slider-button">
        <button onClick={()=>{
          updateIndex(activeIndex-1);
        }}   className="button_arrow">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button className="indicator">
          {items.map((item,index)=>{
            return(
              <button 
              onClick={()=>{
                updateIndex(index);
              }}className="indicator_button">
              
              <span className={`material-symbols-outlined ${index===activeIndex? "indicator-symbol-active":"indicator-symbol"}`}>radio_button_checked</span>
            </button>
              
            )
          })}
         
        </button>
        <button 
        onClick={()=>{
          updateIndex(activeIndex+1);
        }} className="button_arrow">
          
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
    </>
  );
}
