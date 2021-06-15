"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const InputElement = styled_components_1.default.input `
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  background-color: #f3f3f3;

  &:focus {
    outline: none;
  }
`;
const Input = ({ name, onChange, placeholder, value, type, }) => {
    return (<InputElement name={name} type={type} onChange={onChange} placeholder={placeholder} value={value}/>);
};
exports.default = Input;
//# sourceMappingURL=Input.js.map