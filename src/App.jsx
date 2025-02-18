import { useState, useEffect } from "react";
import "./App.css";

import { QUOTE_ARR, COLORS_ARR } from "./data";

export const App = () => {
  const rnd = () => Math.floor(Math.random() * QUOTE_ARR.length);

  const [rendom, setRendom] = useState(rnd());
  const [fading, setFading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(false);
    }, 750);

    document.body.style.backgroundColor = COLORS_ARR[rendom];
    document.getElementById("new-quote").style.backgroundColor =
      COLORS_ARR[rendom];
    document.getElementById("tweet-quote").style.backgroundColor =
      COLORS_ARR[rendom];
    document.getElementById("blue-sky-quote").style.backgroundColor =
      COLORS_ARR[rendom];

    return () => clearTimeout(timer);
  }, [rendom]);

  function rendomsCompere() {
    let newRendom;

    do {
      newRendom = rnd();
    } while (newRendom === rendom);
    setFading(true);

    const timer = setTimeout(() => {
      setRendom(newRendom);
      setFading(false);
    }, 750);
    return () => clearTimeout(timer);
  }

  return (
    <div id="quote-box" className="box">
      <div
        className={`changing-quote-and-author-set ${fading ? "fading" : ""}`}
      >
        <p
          id="text"
          className="quote-text"
          style={{ color: COLORS_ARR[rendom] }}
        >
          {QUOTE_ARR[rendom][0]}
        </p>
        <p
          id="author"
          className="quote-author"
          style={{ color: COLORS_ARR[rendom] }}
        >
          {QUOTE_ARR[rendom][1]}
        </p>
      </div>
      <div className="buttons-set">
        <div className="small-buttons-set">
          <a
            className="sending-quote-to-X --sending-quote-peculiarities"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${
              QUOTE_ARR[rendom][0] + QUOTE_ARR[rendom][1]
            }`}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            className="sending-quote-to-BS --sending-quote-peculiarities"
            id="blue-sky-quote"
            href={`https://bsky.app/intent/compose?text=${
              QUOTE_ARR[rendom][0] + QUOTE_ARR[rendom][1]
            }`}
            target="_blank"
            rel="noreferrer"
          >
            B
          </a>
        </div>

        <button
          className="new-quote-button"
          id="new-quote"
          onClick={() => rendomsCompere()}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
