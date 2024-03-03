import React from "react";
import aj1 from "./aj1.jpg";
import aj2 from "./aj2.jpg"
import './slider.css';

export default function AjantaCave() {
  return (
    <>
      <div className="tajcont">
        <div className="textarea">
          <h1>AjantaCave</h1>
          <div className="sacc">
            The Ajanta Caves are 29 rock-cut Buddhist cave monuments dating from
            the second century BCE to about 480 CE in the Aurangabad district of
            Maharashtra state in India. Ajanta Caves are a UNESCO World Heritage
            Site. Universally regarded as masterpieces of Buddhist religious
            art, the caves include paintings and rock-cut sculptures described
            as among the finest surviving examples of ancient Indian art,
            particularly expressive paintings that present emotions through
            gesture, pose and form.
          </div>
          <div className="sacc">
            The authenticity of Ajanta Caves is expressed through the
            architectural forms of chaityagrihas and viharas as well as the
            schemes used in decorating these spaces, such as sculptures and
            painted panels depicting various Buddhist traditions. Its location
            and setting, as well as its materials and substance, are likewise
            authentically associated with the history of Buddhism and with two
            important eras in the history of India.
          </div>
        </div>
        <div className="tajimg">
          <img src={aj1} />
          <img src={aj2} />
        </div>
      </div>
    </>
  );
}
