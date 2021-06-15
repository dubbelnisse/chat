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
const HistoryMessage_1 = __importDefault(require("./Messages/HistoryMessage"));
const IncomingMessage_1 = __importDefault(require("./Messages/IncomingMessage"));
const OutgoingMessage_1 = __importDefault(require("./Messages/OutgoingMessage"));
const ChatLogMessage = ({ message, history, }) => {
    const [userId] = react_1.useState(localStorage.getItem('userId') || '');
    const [isGif, updateIsGif] = react_1.useState(false);
    react_1.useEffect(() => {
        if (message.message.toLowerCase().match(/\.(gif)/g)) {
            updateIsGif(true);
        }
    }, [message]);
    if (history) {
        return <HistoryMessage_1.default message={message}/>;
    }
    if (userId === message.userId) {
        return <OutgoingMessage_1.default message={message} isGif={isGif}/>;
    }
    return <IncomingMessage_1.default message={message} isGif={isGif}/>;
};
exports.default = ChatLogMessage;
//# sourceMappingURL=ChatLogMessage.js.map