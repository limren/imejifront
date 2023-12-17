"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Login = void 0;
var react_1 = require("react");
var API_1 = require("../utils/API");
var react_router_dom_1 = require("react-router-dom");
require("../styles/Login.css");
var obj = require("../utils/Text");
exports.Login = function (_a) {
    var setIsAuth = _a.setIsAuth, setToken = _a.setToken;
    var _b = react_1.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(""), password = _c[0], setPassword = _c[1];
    var _d = react_1.useState({
        boolean: false,
        message: ""
    }), emailError = _d[0], setEmailError = _d[1];
    var _e = react_1.useState({
        boolean: false,
        message: ""
    }), pwError = _e[0], setPwError = _e[1];
    var lang = localStorage.getItem("lang") === "fr-FR" ? "fr" : "en";
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var navigate = react_router_dom_1.useNavigate();
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!regex.test(email)) {
                        setEmailError({
                            boolean: true,
                            message: lang === "fr" ? "Email invalide" : "Invalid email"
                        });
                        return [2 /*return*/];
                    }
                    if (password.length < 8) {
                        setPwError({
                            boolean: true,
                            message: lang === "fr" ? "Mot de passe trop court" : "Password too short"
                        });
                        return [2 /*return*/];
                    }
                    console.log("logs : ", email, password);
                    return [4 /*yield*/, API_1.login(email, password)];
                case 1:
                    response = _a.sent();
                    console.log("respojnse : ", response);
                    if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
                        setIsAuth(true);
                        console.log("token : ", response.data.token);
                        setToken(response.data.token);
                        navigate("/");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    console.log("error mdp :", pwError, password.length);
    var objText = localStorage.getItem("lang") === "fr-FR" ? obj.fr : obj.eng;
    return (react_1["default"].createElement("section", { className: "login" },
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("header", null,
                react_1["default"].createElement("h1", null, objText.login)),
            react_1["default"].createElement("main", null,
                react_1["default"].createElement("form", { onSubmit: handleLogin },
                    react_1["default"].createElement("section", null,
                        react_1["default"].createElement("label", { htmlFor: "email" }, objText.enteremail),
                        react_1["default"].createElement("input", { type: "email", id: "email", className: emailError.boolean ? "error" : "", onChange: function (e) {
                                if (!regex.test(e.target.value) && !emailError.boolean) {
                                    setEmailError({
                                        boolean: true,
                                        message: lang === "fr"
                                            ? "Email invalide"
                                            : "Invalid email address"
                                    });
                                }
                                else if (regex.test(e.target.value) && emailError.boolean) {
                                    setEmailError({
                                        boolean: false,
                                        message: ""
                                    });
                                }
                                setEmail(e.target.value);
                            } }),
                        emailError.boolean && react_1["default"].createElement("p", null, emailError.message)),
                    react_1["default"].createElement("section", null,
                        react_1["default"].createElement("label", { htmlFor: "password" }, objText.enterpassword),
                        react_1["default"].createElement("input", { type: "password", id: "password", className: pwError.boolean ? "error" : "", onChange: function (e) {
                                console.log("e : ", e.target.value, "password : ", password);
                                if (e.target.value.length < 8 && !pwError.boolean) {
                                    setPwError({
                                        boolean: true,
                                        message: lang === "fr"
                                            ? "Mot de passe trop court"
                                            : "Password too short"
                                    });
                                }
                                else if (e.target.value.length >= 8 && pwError.boolean) {
                                    setPwError({
                                        boolean: false,
                                        message: ""
                                    });
                                }
                                setPassword(e.target.value);
                            } }),
                        pwError.boolean && react_1["default"].createElement("p", null, pwError.message)),
                    react_1["default"].createElement("input", { type: "submit", value: objText.connect }))))));
};
