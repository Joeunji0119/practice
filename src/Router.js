import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { Context } from "./Context";

const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
};

export default App;
