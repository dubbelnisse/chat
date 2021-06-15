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
const Input_1 = __importDefault(require("../../components/Input"));
const Button_1 = __importDefault(require("../../components/Button"));
const uuid_1 = require("uuid");
const react_router_dom_1 = require("react-router-dom");
const Wrapper = styled_components_1.default.div `
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const InputForm = styled_components_1.default.form `
  display: flex;
  max-width: 300px;
`;
const schema = Yup.object().shape({
    name: Yup.string().required('Required').max(30),
});
const Start = () => {
    const history = react_router_dom_1.useHistory();
    return (<Wrapper>
      <formik_1.Formik initialValues={{ name: '' }} validationSchema={schema} onSubmit={({ name }, form) => {
            localStorage.setItem('username', name);
            localStorage.setItem('userId', uuid_1.v4());
            form.resetForm();
            history.push('/chat');
        }}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (<InputForm onSubmit={handleSubmit}>
            <Input_1.default name="name" type="text" onChange={handleChange} placeholder="Username" value={values.name}/>
            <Button_1.default type="submit" disabled={isSubmitting} btnText="GO" marginLeft="20"/>
          </InputForm>)}
      </formik_1.Formik>
    </Wrapper>);
};
exports.default = Start;
//# sourceMappingURL=Start.js.map