import { ReplaceHead } from "../layout/head/head";
import { Header } from "../layout/header/header";
import { Wrapper } from "../layout/wrapper";
import { Footer } from "../layout/footer/footer";
import styles from "./local_dining_areas.module.scss";
import { useEffect, useState } from "react";

const title = "Local Dining | The Vegan Blog";
const pageTitle = "Local Dining";
const description =
  "The Vegan Blog is a one stop destination for all your vegan essentials";

// create a list of local vegan restaurants in orlando or look for an api that provides a list of restaurants around the country to use.
// when user clicks one of the restaurant titles google maps will place a pin on the location of that restaurant.
// When the user clicks the pin they will learn more about the restaurant and things of that nature.

export default function LocalDiningAreas(props) {
  useEffect(() => {
    fetch("/api/maps/get_api_key", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer", //
    })
      .then((res) => res.json())
      .then((key) => {
        if (typeof document !== undefined && typeof window !== undefined) {
      ((g) => {
        var h,
          a,
          k,
          p = "The Google Maps JavaScript API",
          c = "google",
          l = "importLibrary",
          q = "__ib__",
          m = document,
          b = window;
        b = b[c] || (b[c] = {});
        var d = b.maps || (b.maps = {}),
          r = new Set(),
          e = new URLSearchParams(),
          u = () =>
            h ||
            (h = new Promise(async (f, n) => {
              await (a = m.createElement("script"));
              e.set("libraries", [...r] + "");
              for (k in g)
                e.set(
                  k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                  g[k]
                );
              e.set("callback", c + ".maps." + q);
              a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
              d[q] = f;
              a.onerror = () => (h = n(Error(p + " could not load.")));
              a.nonce = m.querySelector("script[nonce]")?.nonce || "";
              m.head.append(a);
            }));
        d[l]
          ? console.warn(p + " only loads once. Ignoring:", g)
          : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
      })({
        key: Object.values(key)[0],
        v: "weekly",
        // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
        // Add other bootstrap parameters as needed, using camel case.
      });

      async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary(
          "marker"
        );

        const geocoder = new google.maps.Geocoder();
        const getLatLong = await geocoder.geocode(
          { address: "3201 Corrine Dr. Orlando, fl 32803" },
          (results, status) => {
            return results[0].geometry.location;
          }
        );

        console.log(getLatLong);

        const map = new Map(document.getElementById("map"), {
          center: {
            lat: getLatLong.results[0].geometry.location.lat(),
            lng: getLatLong.results[0].geometry.location.lng(),
          },
          zoom: 19,
          mapId: "VeganRestaurantMap",
        });

        const marker = new AdvancedMarkerElement({
          map,
          position: {
            lat: getLatLong.results[0].geometry.location.lat(),
            lng: getLatLong.results[0].geometry.location.lng(),
          },
          title: "Winter Park Biscuit Company",
        });
        return marker;
      }

      initMap();
    }
      })
  }, []);

  return (
    <Wrapper className={props.className}>
      <ReplaceHead
        canonical={true}
        description={description}
        title={title}
      ></ReplaceHead>
      <Header showBanner={false} />
      <main className={styles["local-dining-areas-container"]}>
        <h2>Local Dining</h2>
        <div className={styles.map} id="map"></div>
      </main>
      <Footer />
    </Wrapper>
  );
}
