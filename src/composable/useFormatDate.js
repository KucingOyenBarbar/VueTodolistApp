import { ref } from "vue";

export const useFormatDate = ref((timestamps) => {
  return new Date(timestamps).toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
  });
});
