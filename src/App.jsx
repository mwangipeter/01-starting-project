import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import TestComponent from "./components/TestComponent";
import { useState } from "react";


function App() {
const [content, setContent] = useState();
  function handleClick(selectedButton) {
    //selectedButton = Components, JSX, Props, State
    setContent(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
            <TestComponent></TestComponent>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {content === "components"} onClick={() => handleClick ("components")}>Components</TabButton>
            <TabButton isSelected = {content === "jsx"} onClick={() => handleClick ("jsx")}>JSX</TabButton>
            <TabButton isSelected = {content === "props"} onClick={() => handleClick ("props")}>Props</TabButton>
            <TabButton isSelected = {content === "state"} onClick={() => handleClick ("state")}>State</TabButton>
          </menu>
          {content ?
          <div id = "tab-content">
            <h3>{EXAMPLES[content].title}</h3>
            <p>{EXAMPLES[content].description}</p>
            <pre>
              <code>{EXAMPLES[content].code}</code>
            </pre>
          </div> 
          : "Please select a topic"}
          
        </section>
      </main>
    </div>
  );
}

export default App;
