import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { Context } from "./Context";
import Promise from "./pages/Promise";
import Modal from "./Components/Modal/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/promise" element={<Promise />} />
          <Route path="/Modal" element={<Modal />} />
        </Routes>
      </Context>
    </BrowserRouter>
  );
};

export default App;
