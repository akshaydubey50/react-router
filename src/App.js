import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";

import { Admin } from "./components/Admin";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NewsProduct } from "./components/NewsProduct";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { User } from "./components/User";
import { User1 } from "./components/User1";
import { User2 } from "./components/User2";
import { User3 } from "./components/User3";
import { UserDetails } from "./components/UserDetails";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="order-summary" element={<OrderSummary />} />
      <Route path="products" element={<Products/>}>
        <Route index element={<FeaturedProduct />} />
        <Route path="featured" element={<FeaturedProduct/>} />
        <Route path="news" element={<NewsProduct/>} />
      </Route>
      <Route path="user" element={<User/>}>
        <Route path="user1" element={<User1 />}/>
        <Route path="user2" element={<User2 />}/>
        <Route path="user3" element={<User3 />}/>
      {/* <Route path=":userId" element={<UserDetails/>} /> */}
      {/* <Route path="admin" element={<Admin/>} /> */}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </>
  );
}

export default App;
