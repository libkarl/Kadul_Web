import React from "react";
import "./infos.css";
import { Link } from "react-router-dom";
import Dojo1 from "../../assets/dojo.jpeg";
import Dojo2 from "../../assets/dojo2.jpeg";

export const KadulProject1 = () => {
  return (
    <section id="info">
      <div className="triple-pane">
        <div className="pane pane-left drop-shadow-2xl " >
          <img src={Dojo2} alt="dojo rigt" />
        </div>

        <div className="pane pane-mid">
          <div className="pane-content">
            <h1>It isn't luxury if you have to think about it.</h1>
            <p>
              Besides the fact that not every chauffeur service operates
              legally, it's hard to differentiate which of the similar-looking
              vehicle offerings found on different car service websites are the
              best. But the reason you might not get what you're hoping for
              isn't because you didn't do your research. It's actually because
              most limo services have the same problem.
            </p>
            <p>
              Limo rental companies often focus on volume - and rather than rely
              on good service to drive sales, they advertise based on the
              vehicles they have in their fleet. But even the rarest vehicles
              (like motor coaches or the coveted Mercedes sprinter limo, for
              example) can vary on upkeep or amenities. And since staff caliber
              is arguably the most important element of all (but the average
              limo service doesn't prioritize this at all) there's going to be
              plenty of uncertainty on what kind of experience you'll have - no
              matter which provider you choose.
            </p>
            <Link to="/kadul" className="anime_bt">
              <span class="ef"></span>Back-{">"}
            </Link>
          </div>
        </div>

        <div className="pane pane-right">
          <img src={Dojo1} alt="dojo front" />
        </div>
      </div>

      <div className="mobile-pane">
        <img src={Dojo1} alt="dojo front" />
        <div className="shadow-wrap">
          <div className="mobile-content">
            <h1>It isn't luxury if you have to think about it.</h1>
            <p>
              Besides the fact that not every chauffeur service operates
              legally, it's hard to differentiate which of the similar-looking
              vehicle offerings found on different car service websites are the
              best. But the reason you might not get what you're hoping for
              isn't because you didn't do your research. It's actually because
              most limo services have the same problem.
            </p>
            <p>
              Limo rental companies often focus on volume - and rather than rely
              on good service to drive sales, they advertise based on the
              vehicles they have in their fleet. But even the rarest vehicles
              (like motor coaches or the coveted Mercedes sprinter limo, for
              example) can vary on upkeep or amenities. And since staff caliber
              is arguably the most important element of all (but the average
              limo service doesn't prioritize this at all) there's going to be
              plenty of uncertainty on what kind of experience you'll have - no
              matter which provider you choose.
            </p>
            <Link to="/kadul" className="anime_bt">
              <span class="ef"></span>Back-{">"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
