"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Chat_1 = __importDefault(require("../routes/Chat/Chat"));
const Start_1 = __importDefault(require("../routes/Start/Start"));
const react_router_dom_1 = require("react-router-dom");
const App = () => {
    return (<react_router_dom_1.Switch>
      <react_router_dom_1.Route exact path="/">
        <Start_1.default />
      </react_router_dom_1.Route>
      <react_router_dom_1.Route path="/chat">
        <Chat_1.default />
      </react_router_dom_1.Route>
    </react_router_dom_1.Switch>);
};
exports.default = App;
//# sourceMappingURL=App.js.map