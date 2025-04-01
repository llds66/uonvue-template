import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore("user", () => {
  // state
  const username = ref("");
  // getters
  const name = computed(() => "@" + username.value);
  // actions
  function setUsername(name: string) {
    username.value = name;
  }
  return {
    username,
    name,
    setUsername,
  };
});
