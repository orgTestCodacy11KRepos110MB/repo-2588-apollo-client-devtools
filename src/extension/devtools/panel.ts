import {
  initDevTools,
  writeData,
  handleReload,
  handleReloadComplete,
} from "../../application";
import {
  receiveExplorerRequests,
  receiveSubscriptionTerminationRequest,
  sendResponseToExplorer,
} from "../../application/components/Explorer/explorerRelay";

(window as any).__DEVTOOLS_APPLICATION__ = {
  initialize: initDevTools,
  writeData,
  receiveExplorerRequests,
  receiveSubscriptionTerminationRequest,
  sendResponseToExplorer,
  handleReload,
  handleReloadComplete,
};
