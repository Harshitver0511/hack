import React from "react";
import val1 from "./val1.jpg";
import val2 from "./val1.jpg";

export default function Vally() {
  return (
    <div className="tajcont">
      <div className="textarea">
        <h1>Valley of Flowers</h1>
        <p>With a stunning backdrop of the mighty Himalayan ranges, the Valley of Flowers National Park presents an ethereal view and an unforgettable experience for visitors. Spread over an area of 87 sq km in the Chamoli district, the Valley of Flowers National Park is a UNESCO World Heritage Site and forms one of the two core zones (the other being the Nanda Devi National Park) of the Nanda Devi Biosphere Reserve.

The valley is believed to have been discovered in 1931, when three British mountaineers – led by Frank S Smythe – lost their way and chanced upon this spectacular valley. Attracted by the beauty of this place they named it the “Valley of Flowers”.</p>
        <p>
          As the name suggests, Valley of Flowers is a destination where nature
          blooms in full glory offering a breathtaking experience. Exotic
          flowers (over 600 species) like orchids, poppies, primulas, marigold,
          daisies and anemones are an eye-catching spectacle. Sub-alpine forests
          birch and rhododendron cover parts of the park's area. The trek to the
          valley offers eye-catching spectacles like cascading waterfalls and
          wild streams.
        </p>
      </div>
      <div className="tajimg">
        <img src={val2} />
        <img src={val1} />
      </div>
    </div>
  );
}
