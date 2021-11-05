import React from "react";
import loadable from "@loadable/component";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";

const Header = loadable(() => import("./components/header/index.js"));
const SectionOne = loadable(() =>
  import("./components/home/sectionone/index.js")
);
const SectionTwo = loadable(() =>
  import("./components/home/sectiontwo/index.js")
);
const SectionThree = loadable(() =>
  import("./components/home/sectionthree/index.js")
);
const SectionFour = loadable(() =>
  import("./components/home/sectionfour/index.js")
);
const SectionFive = loadable(() =>
  import("./components/home/sectionfive/index.js")
);
const SectionSix = loadable(() =>
  import("./components/home/sectionsix/index.js")
);
const SectionSeven = loadable(() =>
  import("./components/home/sectionseven/index.js")
);
const SectionEight = loadable(() =>
  import("./components/home/sectioneight/index.js")
);

const App = () => {
  return (
    <HashRouter>
      <div className="container-global">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
      </div>
    </HashRouter>
  );
};

export default App;
