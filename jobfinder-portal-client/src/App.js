import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ForgotPassword from "./Pages/Authentications/ForgotPassword";
import Login from "./Pages/Authentications/Login";
import Signup from "./Pages/Authentications/Signup";
import Blogs from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import JobDetails from "./Pages/Jobs/JobDetails";
import RequireAuth from "./Pages/Authentications/RequireAuth";
import MyProfile from "./Pages/MyProfile/MyProfile";
import PostJobs from "./Pages/Jobs/PostJobs";
import ApplyJobs from "./Pages/Jobs/ApplyJobs";
import Candidates from "./Pages/Candidates/Candidates";
import CandidateResume from "./Pages/Candidates/CandidatesInfo/CandidateResume";
import SearchJobs from "./Pages/Jobs/SearchJobs";
import NotFound from "./Pages/NotFound/NotFound";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import AddReview from "./Pages/Reviews/AddReview";


function App() {
  AOS.init();
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route path="/all-categories" element={<ComingSoon />}></Route>
        <Route path="/bookmark" element={<ComingSoon />}></Route>
        <Route path="/applied-jobs" element={<ComingSoon />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/jobs/:id" element={<JobDetails />}></Route>
        <Route path="/job/search/:title" element={<SearchJobs />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/candidates" element={<RequireAuth><Candidates/></RequireAuth>}></Route>
        <Route path="/candidates/:email" element={<RequireAuth><CandidateResume/></RequireAuth>}></Route>
        <Route path="/my-profile" element={<RequireAuth><MyProfile/></RequireAuth>}></Route>
        <Route path="/add-review" element={<RequireAuth><AddReview/></RequireAuth>}></Route>
        <Route path="/post-job" element={<RequireAuth><PostJobs/></RequireAuth>}></Route>
        <Route path="/jobs/apply/:id" element={<RequireAuth><ApplyJobs/></RequireAuth>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Navbar>
  );
}

export default App;
