import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CheckoutView from "@/views/CheckoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
      redirect: { name: "checkout", params: { id: 10001 } },
    },
    {
      path: "/checkout?transactionId=:id",
      name: "checkout",
      component: CheckoutView,
    },
  ],
});

export default router;
