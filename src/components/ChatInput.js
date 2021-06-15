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
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const Input_1 = __importDefault(require("../components/Input"));
const Wrapper = styled_components_1.default.div `
  display: flex;
  width: 100%;
  position: relative;
`;
const Form = styled_components_1.default.form `
  width: 100%;
`;
const Button = styled_components_1.default.button `
  background: none;
  position: absolute;
  right: 15px;
  top: 5px;
  font-size: 30px;
`;
const Icon = styled_components_1.default.svg `
  fill: #8f8f8f;
  width: 20px;
`;
const MessageSchema = Yup.object().shape({
    message: Yup.string().required('Required').max(280),
});
const ChatInput = () => {
    return (<Wrapper>
      <formik_1.Formik initialValues={{ message: '' }} validationSchema={MessageSchema} onSubmit={async ({ message }, form) => {
            const name = localStorage.getItem('username') || '';
            const userId = localStorage.getItem('userId') || '';
            await fetch('https://chat-api.nisse.dev/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    userId,
                    message,
                }),
            });
            form.resetForm();
        }}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (<Form onSubmit={handleSubmit}>
            <Input_1.default name="message" type="text" onChange={handleChange} placeholder="Type something" value={values.message}/>
            <Button type="submit" disabled={isSubmitting}>
              <Icon enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/>
                <path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/>
              </Icon>
            </Button>
          </Form>)}
      </formik_1.Formik>
    </Wrapper>);
};
exports.default = ChatInput;
//# sourceMappingURL=ChatInput.js.map