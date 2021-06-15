"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const date_fns_1 = require("date-fns");
const Wrapper = styled_components_1.default.li `
  display: flex;
  font-size: 15px;
  justify-content: flex-start;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const Inner = styled_components_1.default.div `
  max-width: 80%;
`;
const Msg = styled_components_1.default.div `
  padding: 20px;
  background-color: #e8f4f9;
  border-radius: 20px 20px 20px 3px;
`;
const Time = styled_components_1.default.div `
  color: #999999;
  font-size: 13px;
  margin-top: 10px;
`;
const Gif = styled_components_1.default.img `
  width: 100%;
`;
const IncomingMessage = ({ message, isGif }) => {
    console.log(message);
    return (<Wrapper>
      <Inner>
        <Msg>
          {isGif ? <Gif src={message.message} alt="GIF"/> : message.message}
        </Msg>
        <Time>
          <strong>{message.name}</strong> |{' '}
          {date_fns_1.format(new Date(message.sent), 'H:mm a')}
        </Time>
      </Inner>
    </Wrapper>);
};
exports.default = IncomingMessage;
//# sourceMappingURL=IncomingMessage.js.map