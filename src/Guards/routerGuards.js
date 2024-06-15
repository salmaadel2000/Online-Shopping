import { useAuthenticationStore } from '@/stores/auth'; 
import router from '@/router'; 

export const requireAuth = (to, from, next) => {
  const authStore = useAuthenticationStore();

  if (authStore.isAuthenticated) {
    next(); 
  } else {
    router.push({ name: 'Login' }); 
  }
};
