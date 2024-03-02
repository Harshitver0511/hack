import React from "react";
import './slider.css';
import taj1 from "./taj1.jpg"
import taj2 from "./taj2.jpg"

export default function Tajmahal() {
  return (
    <div className="tajcont">
      <div className="textarea">
        <h1>Taj Mahal</h1>
        <p>
          The Taj Mahal is an ivory-white marble mausoleum on the south bank of
          the Yamuna river in the Indian city of Agra. It was commissioned in
          1632 by the Mughal emperor Shah Jahan (reigned 1628–1658) to house the
          tomb of his favourite wife Mumtaz Mahal; it also houses the tomb of
          Shah Jahan himself. The tomb is the centrepiece of a 17-hectare
          (42-acre) complex, which includes a mosque and a guest house, and is
          set in formal gardens bounded on three sides by a crenellated wall.
          Construction of the mausoleum was essentially completed in 1643 but
          work continued on other phases of the project for another 10 years.
        </p>
        <p>

The Taj Mahal is considered the best example of Mughal architecture, an architectural style that combines elements from Persian, Indian, and Islamic architectural styles. The mausoleum is made of white marble inlaid with semi-precious stones, including jade, carnelian, lapis lazuli, malachite, and turquoise. The design is symmetrical and features four minarets at the four corners of the plinth. The main dome is surrounded by four smaller domes, and there are a number of other decorative elements, such as calligraphy and floral patterns.
        </p>
      </div>
      <div className="tajimg">
        <img src={taj1} />
        <img src={taj2} />
      </div>
    </div>
  );
}
