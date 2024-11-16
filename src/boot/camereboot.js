import { boot } from 'quasar/wrappers'
import { useCamStore } from 'src/stores/cam-store';

const camBot = new useCamStore();

export default boot(() => {

  console.log("BOOT...");
  camBot.photoCam()

})
