import { Routes,Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { CompanyDetails } from "./pages/CompanyDetails";
import { ControlPanel } from "./pages/ControlPanel";
import { OrderPanel } from "./pages/customer/OrderPanel";
import { Sidebar } from "./components/Sidebar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { EmployeeList } from "./pages/corporate/employee/EmployeeList";
import { LastOrderList } from "./pages/customer/LastOrderList";
import { AccountDetails } from "./pages/customer/AccountDetails";
import { ErrorPage } from "./pages/ErrorPage";
import { TransportList } from "./pages/corporate/transport/TransportList";
import { SendMessage } from "./pages/customer/message/SendMessage";
import { CompanyInfos } from "./pages/corporate/company/CompanyInfos";
import { CompaniesList } from "./pages/corporate/company/CompaniesList";
import { MessageList } from "./pages/customer/message/MessageList";
import { RatingPage } from "./pages/customer/rate/RatingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/companies' element={<CompaniesPage/>} />
        <Route exact path='/companies/:companyId' element={<CompanyDetails/>} />
        <Route exact path='/control-panel' element={<ControlPanel/>}/>
        
        {/* Customer Panel */}
        <Route exact path='/control-panel/order-request' element={<OrderPanel/>}/>
        <Route exact path='/control-panel/order-list' element={<LastOrderList/>}/>
        <Route exact path='/control-panel/account-details' element={<AccountDetails/>}/>
        <Route exact path='/control-panel/send-message' element={<SendMessage/>}/>
        <Route exact path='/control-panel/messages' element={<MessageList/>}/>
        <Route exact path='/control-panel/rating' element={<RatingPage/>}/>
        

        {/* Corporate Panel */}
        <Route exact path='/control-panel/company/' element={<CompanyInfos/>}/>
        <Route exact path='/control-panel/company/company-list' element={<CompaniesList/>}/>
        <Route exact path='/control-panel/company/employee-list' element={<EmployeeList/>}/>
        <Route exact path='/control-panel/company/truck-list' element={<TransportList/>}/>

        {/* Error Page */}
        <Route exact path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
