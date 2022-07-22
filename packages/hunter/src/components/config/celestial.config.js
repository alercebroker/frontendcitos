const config = {
  width: 310,
  controls: false,
  datapath: "https://ofrohn.github.io/data/",
  planets: {
    show: false,
  },
  stars: {
    show: false,
  },
  dsos: {
    show: false,
    limit: 30,
  },
  constellations: {
    show: false,
    names: false,
    lines: false,
    bounds: false,
  },
  transform: "equatorial",
  background: {
    fill: "#8778d2",
    opacity: 1,
  },
  mw: {
    show: true,
    style: {
      fill: "#ffffff",
      opacity: 0.3,
    },
  },
  lines: {
    graticule: {
      show: true,
      stroke: "#cccccc",
      width: 0.6,
      opacity: 0.8,
      lon: {
        pos: ["center"],
        fill: "#eee",
        font: "9px Helvetica, Arial, sans-serif",
      },
      lat: {
        pos: ["center"],
        fill: "#eee",
        font: "9px Helvetica, Arial, sans-serif",
      },
    },
  },
};

export default config;