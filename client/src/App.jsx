import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/homePage/Home'
import Navbar from './component/Navbar';
import AboutUs from './pages/aboutUs/AboutUs';
import Loader from './pages/adminPanel/admin-panel src/common/Loader';
import PageTitle from './pages/adminPanel/admin-panel src/components/PageTitle';
import ECommerce from './pages/adminPanel/admin-panel src/pages/Dashboard/ECommerce';
import LoginPage from './pages/adminPanel/admin-panel src/pages/Login/Login';
import RegisterPage from './pages/adminPanel/admin-panel src/pages/Register/Register';
import Calendar from './pages/adminPanel/admin-panel src/pages/Calendar';
import Profile from './pages/adminPanel/admin-panel src/pages/Profile';
import FormElements from './pages/adminPanel/admin-panel src/pages/Form/FormElements';
import FormLayout from './pages/adminPanel/admin-panel src/pages/Form/FormLayout';
import Tables from './pages/adminPanel/admin-panel src/pages/Tables';
import Settings from './pages/adminPanel/admin-panel src/pages/Settings';
import Chart from './pages/adminPanel/admin-panel src/pages/Chart';
import Alerts from './pages/adminPanel/admin-panel src/pages/UiElements/Alerts';
import Buttons from './pages/adminPanel/admin-panel src/pages/UiElements/Buttons';
import SignIn from './pages/adminPanel/admin-panel src/pages/Authentication/SignIn';
import SignUp from './pages/adminPanel/admin-panel src/pages/Authentication/SignUp';
import DefaultLayout from './pages/adminPanel/admin-panel src/layout/DefaultLayout';

const AdminPanel = lazy(() => import('./pages/adminPanel/AdminPanel'));

export default function App() {
  const location = useLocation();

  // Check if the current path starts with "/admin"
  const isAdminPath = location.pathname.startsWith('/admin');
 
 
  return (
    <div>
      {/* <BrowserRouter></BrowserRouter> */}
{isAdminPath ? (
  <Suspense fallback={<Loader />}> 
          <AdminPanel />
        </Suspense>

):(
  <>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="about-us" element={<AboutUs />} />
  </Routes>
  </>
)

      }

   
    </div>
  )
}

    // <BrowserRouter>
    // <Navbar/>
   

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="about-us" element={<AboutUs />} />
    //     {/* <Route path="admin" element={<AdminPanel />} /> */}
    //     {/* <DefaultLayout> */}

    //     <Route
    //       path="admin"
    //       element={
    //         <>
    //           <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <ECommerce />
    //         </>
    //       }
    //     >
    //     <Route
    //       path='login'
    //       element={
    //         <>
    //           <PageTitle title="Login Page" />
    //           {/* <PageTitle title="Login Page" />
    //           <PageTitle title="Login Page" /> */}
    //           <LoginPage />
    //         </>
    //       }
    //     />
    //     <Route
    //       path='register'
    //       element={
    //         <>
    //           <PageTitle title="Login Page" />
    //           {/* <PageTitle title="Login Page" />
    //           <PageTitle title="Login Page" /> */}
    //           <RegisterPage />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="calendar"
    //       element={
    //         <>
    //           <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Calendar />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="profile"
    //       element={
    //         <>
    //           <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Profile />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="forms/form-elements"
    //       element={
    //         <>
    //           <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormElements />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="forms/form-layout"
    //       element={
    //         <>
    //           <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormLayout />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="tables"
    //       element={
    //         <>
    //           <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Tables />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="settings"
    //       element={
    //         <>
    //           <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Settings />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="chart"
    //       element={
    //         <>
    //           <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Chart />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="ui/alerts"
    //       element={
    //         <>
    //           <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Alerts />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="ui/buttons"
    //       element={
    //         <>
    //           <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Buttons />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="auth/signin"
    //       element={
    //         <>
    //           <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignIn />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="auth/signup"
    //       element={
    //         <>
    //           <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignUp />
    //         </>
    //       }
    //     />
    //     </Route>
    //     {/* </DefaultLayout> */}
    //     {/* Add more routes as needed */}
    //   </Routes>
   
    // </BrowserRouter>