import { Routes,Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { CompanyDetails } from "./pages/CompanyDetails";
import { ControlPanel } from "./pages/ControlPanel";
import { OrderPanel } from "./pages/OrderPanel";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/companies' element={<CompaniesPage/>} />
        <Route exact path='/companies/:companyId' element={<CompanyDetails/>} />
        <Route exact path='/control-panel' element={<ControlPanel/>}/>
        <Route exact path='/control-panel/order-request' element={<OrderPanel/>}/>
      </Routes>
    </div>
  );
}

export default App;
