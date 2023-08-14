import '../user/assets/css/style.css'
import '../user/assets/css/animate.min.css'
import '../user/assets/css/gijgo.css'
import '../user/assets/css/slick.css'
import '../user/assets/css/animated-headline.css'
import '../user/assets/css/bootstrap.min.css'
import '../user/assets/css/themify-icons.css'
import '../user/assets/css/slicknav.css'
import '../user/assets/css/responsive.css'
import '../user/assets/css/owl.carousel.min.css'
import '../user/assets/css/nice-select.css'
import '../user/assets/css/fontawesome-all.min.css'
import '../user/assets/css/flaticon.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserDashboard} from "../user/Pages/UserDashboard.jsx";
import {Menu} from "../user/Pages/Menu.jsx";
import {AdminDashboard} from "../admin/pages/AdminDashboard.jsx";
import {AdminMenu} from "../admin/pages/Menu.jsx";
import {Login} from "../admin/component/Login.jsx";
import '../admin/assets/css/flaticon.css'
import '../admin/assets/css/responsiveAdmin.css'
import '../admin/assets/css/bootstrap.min.css'
import '../admin/assets/css/animateAdmin.css'
import '../admin/assets/css/bootstrap-grid.css'
import '../admin/assets/css/baguetteBox.min.css'
import '../admin/assets/css/bootstrap-grid.min.css'
import '../admin/assets/css/bootstrap-reboot.css'
import '../admin/assets/css/bootstrap-reboot.min.css'
import '../admin/assets/css/color_2.css'
import '../admin/assets/css/custom.css'
import '../admin/assets/css/font-awesome.css'
import '../admin/assets/css/jquery.fancybox.css'
import '../admin/assets/css/jquery.fancybox.min.css'
import '../admin/assets/css/perfect-scrollbar.css'
import '../admin/assets/css/semantic.min.css'
import '../admin/assets/css/styleAdmin.css'
import {NotFount} from "../admin/component/404.jsx";
import {My} from "../admin/pages/My.jsx";
import {Course} from "../admin/pages/Course.jsx";
import {Doctor} from "../admin/pages/Doctor.jsx";
import {Lesson} from "../admin/pages/Lesson.jsx";
import {Users} from "../admin/pages/User.jsx";
import {Register} from "../admin/pages/Register.jsx";
import {RMenu} from "../user/Pages/RMenu.jsx";
import {Contact} from "../user/Pages/Contact.jsx";
import {AllMessage} from "../admin/pages/Message.jsx";
import {Categories} from "../user/Pages/Category.jsx";
import {Category} from "../admin/pages/Category.jsx";
import {GetLesson} from "../user/Pages/GetLesson.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/admin"} element={<AdminDashboard/>}>
                        <Route index element={<AdminMenu/>}/>
                        <Route path={"/admin/category"} element={<Category/>}/>
                        <Route path={"/admin/course"} element={<Course/>}/>
                        <Route path={"/admin/my"} element={<My/>}/>
                        <Route path={"/admin/doctor"} element={<Doctor/>}/>
                        <Route path={"/admin/lesson"} element={<Lesson/>}/>
                        <Route path={"/admin/user"} element={<Users/>}/>
                        <Route path={"/admin/message"} element={<AllMessage/>}/>
                    </Route>
                    <Route path={"/auth/login"} element={<Login/>}/>
                    <Route path={"/auth/register"} element={<Register/>}/>
                    <Route path={"/"} element={<UserDashboard/>}>
                        <Route index element={<Menu/>}/>
                        <Route path={"/menu"} element={<RMenu/>}/>
                        <Route path={"/my"} element={<My/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/categories/:id"} element={<Categories/>}/>
                        <Route path={"/courses/:id"} element={<GetLesson/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFount/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
