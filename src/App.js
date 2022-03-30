import { Suspense } from "react";

import RootWrapper from "./routes";

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
