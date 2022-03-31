import { Suspense } from "react";

import RootWrapper from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <RootWrapper />
      </Suspense>
    </div>
  );
};

export default App;
