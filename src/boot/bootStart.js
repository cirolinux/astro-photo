import { boot } from 'quasar/wrappers'
import { useCamStore } from 'src/stores/cam-store';
import { useScopeStore } from 'src/stores/scope-store';

const camBot = new useCamStore();
const scopeBot = new useScopeStore();

export default boot(() => {

  camBot.photoCam();
  scopeBot.teleScope();

})
