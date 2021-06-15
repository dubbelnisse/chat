"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const date_fns_1 = require("date-fns");
const Wrapper = styled_components_1.default.div `
  justify-content: flex-start;

  &:not(:first-child) {
    margin-top: 10px;
  }
`;
const Meta = styled_components_1.default.span `
  color: rgb(180, 180, 180);
  margin-right: 10px;
`;
const Msg = styled_components_1.default.span `
  color: rgb(190, 190, 190);
  margin-right: 10px;
`;
const HistoryMessage = ({ message }) => {
    return (<Wrapper>
      <Meta>
        <strong>{message.name}</strong> |{' '}
        {date_fns_1.format(new Date(message.sent), 'H:mm a')}
      </Meta>
      <Msg>{message.message}</Msg>
    </Wrapper>);
};
exports.default = HistoryMessage;
//# sourceMappingURL=HistoryMessage.js.map