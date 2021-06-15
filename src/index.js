"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = exports.pusher = void 0;
const react_dom_1 = __importDefault(require("react-dom"));
require("./index.css");
const App_1 = __importDefault(require("./routes/App"));
const react_router_dom_1 = require("react-router-dom");
const pusher_js_1 = __importDefault(require("pusher-js"));
exports.pusher = new pusher_js_1.default('07308c3f15524abb4ac3', {
    cluster: 'eu',
});
exports.channel = exports.pusher.subscribe('chat-channel');
const AppRoot = () => (<react_router_dom_1.BrowserRouter>
    <App_1.default />
  </react_router_dom_1.BrowserRouter>);
react_dom_1.default.render(<AppRoot />, document.getElementById('root'));
//# sourceMappingURL=index.js.map