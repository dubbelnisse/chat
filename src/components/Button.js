"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const ButtonElement = styled_components_1.default.button `
  color: #fff;
  background-color: #385d6e;
  border-radius: 20px;
  padding: 20px 25px;
  margin-top: ${(props) => `${props.marginTop}px` || 0};
  margin-right: ${(props) => `${props.marginRight}px` || 0};
  margin-bottom: ${(props) => `${props.marginBottom}px` || 0};
  margin-left: ${(props) => `${props.marginLeft}px` || 0};
`;
const Button = ({ type, disabled, btnText, marginTop, marginRight, marginBottom, marginLeft, }) => {
    return (<ButtonElement type={type} disabled={disabled} marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft}>
      {btnText}
    </ButtonElement>);
};
exports.default = Button;
//# sourceMappingURL=Button.js.map