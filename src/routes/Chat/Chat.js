"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ChatInput_1 = __importDefault(require("../../components/ChatInput"));
const ChatLog_1 = __importDefault(require("../../components/ChatLog"));
const react_router_dom_1 = require("react-router-dom");
const Wrapper = styled_components_1.default.div `
  display: flex;
  flex-flow: column;
  height: calc(100vh - 40px);
  padding: 20px;
`;
const InputWrapper = styled_components_1.default.div `
  display: flex;
  margin-top: 20px;
`;
const App = () => {
    const history = react_router_dom_1.useHistory();
    const [userId] = react_1.useState(localStorage.getItem('userId') || undefined);
    react_1.useEffect(() => {
        if (!userId) {
            history.push('/');
        }
    });
    return (<Wrapper>
      <ChatLog_1.default />
      <InputWrapper>
        <ChatInput_1.default />
      </InputWrapper>
    </Wrapper>);
};
exports.default = App;
//# sourceMappingURL=Chat.js.map