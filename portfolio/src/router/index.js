import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import AllProjects from "../components/AllProjects.vue";
import Resume from "../components/Resume.vue";
import AboutMe from "../components/AboutMe.vue";
import ContactMe from "../components/ContactMe.vue";
import JennetAllProjetcs from "../views/JennetAllProjetcs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/all_projects",
    name: "all_projects",
    component: AllProjects,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/about_me",
    name: "about_me",
    component: AboutMe,
  },
  {
    path: "/contact_me",
    name: "contact_me",
    component: ContactMe,
  },
  {
    path: "/jennetAllProjects",
    name: "jennetAllProjects",
    component: JennetAllProjetcs,
  },
  // {
  //   path: "/signin",
  //   name: "signin",
  //   component: SignIN,
  // },
  // {
  //   path: "/resetpass",
  //   name: "resetpass",
  //   component: ResetPassword,
  // },
  // {
  //   path: "/checkemail",
  //   name: "checkemail",
  //   component: CheckEmail,
  // },
  // {
  //   path: "/verification",
  //   name: "verification",
  //   component: Verification,
  // },
  // {
  //   path: "/newpass",
  //   name: "newpass",
  //   component: CreateNewpass,
  // },
  // {
  //   path: "/brands",
  //   name: "brands",
  //   component: Brands,
  // },
  // {
  //   path: "/shops",
  //   name: "shops",
  //   component: Shops,
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About,
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: Contact,
  // },
  // {
  //   path: "/mainNavbar",
  //   name: "navbar",
  //   component: mainNavbar,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
