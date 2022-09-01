import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I am at the shop pages</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
