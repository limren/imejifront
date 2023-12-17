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
exports.Image = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Image_1 = require("../../utils/API/Image");
require("../../styles/Image.css");
var Edit_1 = require("../../assets/icons/Edit");
var Delete_1 = require("../../assets/icons/Delete");
var Close_1 = require("../../assets/icons/Close");
exports.Image = function () {
    var _a = react_1.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(""), description = _b[0], setDescription = _b[1];
    var _c = react_1.useState(""), translatedText = _c[0], setTranslatedText = _c[1];
    var id = react_router_dom_1.useParams().id;
    var _d = react_query_1.useQuery(["getImage", id], function () { return Image_1.getImage(id); }, {
        refetchOnWindowFocus: false,
        staleTime: 5000
    }), isLoading = _d.isLoading, data = _d.data, error = _d.error;
    var _e = react_1.useState(false), isFetching = _e[0], setIsFetching = _e[1];
    var _f = react_1.useState(false), isFetchingMod = _f[0], setIsFetchingMod = _f[1];
    var _g = react_1.useState(false), isModifyMode = _g[0], setIsModifyMode = _g[1];
    var navigate = react_router_dom_1.useNavigate();
    var formattedCreatedDate = new Date(data === null || data === void 0 ? void 0 : data.image.created_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    var formattedUpdatedDate = new Date(data === null || data === void 0 ? void 0 : data.image.updated_at).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    react_1.useEffect(function () {
        if (data) {
            console.log("data : ", data);
            setTitle(data.image.title);
            setDescription(data.image.description);
            setTranslatedText(data.image.translatedText);
        }
    }, [data]);
    if (isLoading) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Chargement...");
    }
    if (!data || error) {
        return react_1["default"].createElement(react_1["default"].Fragment, null, "Une erreur s'est produite");
    }
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsFetching(true);
                    return [4 /*yield*/, Image_1.deleteImage(data.image.id)];
                case 1:
                    response = _a.sent();
                    setIsFetching(false);
                    console.log("response : ", response);
                    if (response.success) {
                        navigate("/dashboard");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var hasBeenModified = function () {
        return (title === data.image.title &&
            description === data.image.description &&
            translatedText === data.image.translatedText);
    };
    var handleConfirm = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (hasBeenModified())
                        return [2 /*return*/];
                    setIsFetchingMod(true);
                    return [4 /*yield*/, Image_1.putImage({
                            id: data.image.id,
                            title: title,
                            description: description,
                            translatedText: translatedText
                        })];
                case 1:
                    response = _a.sent();
                    setIsFetchingMod(false);
                    console.log("response : ", response);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("section", { className: "image" },
        react_1["default"].createElement("section", { className: isFetching || isFetchingMod ? "overlay" : "hidden" },
            react_1["default"].createElement("p", null,
                isFetchingMod ? "Modification" : "Suppression",
                " en cours...")),
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("section", null, isModifyMode ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("input", { type: "text", value: title, onChange: function (e) { return setTitle(e.target.value); } }),
                react_1["default"].createElement("textarea", { rows: 15, cols: 80, value: description, onChange: function (e) { return setDescription(e.target.value); } }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("h2", null, title),
                react_1["default"].createElement("p", null, description)))),
            react_1["default"].createElement("section", { className: "handlers" },
                isModifyMode ? (react_1["default"].createElement("section", { className: "cancel", onClick: function () {
                        setIsModifyMode(false);
                    } },
                    react_1["default"].createElement(Close_1.Close, { setOpen: function () { return setIsModifyMode(false); } }))) : (react_1["default"].createElement("section", { className: "modify", onClick: function () { return setIsModifyMode(true); } },
                    react_1["default"].createElement(Edit_1.Edit, null))),
                react_1["default"].createElement("section", { onClick: handleDelete, className: "delete" },
                    react_1["default"].createElement(Delete_1.Delete, null)))),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement("img", { src: "http://localhost:8000" + data.image.path, alt: data.image.title }),
            react_1["default"].createElement("textarea", { rows: 25, cols: 150, disabled: !isModifyMode, value: translatedText, onChange: function (e) { return setTranslatedText(e.target.value); } })),
        react_1["default"].createElement("footer", null,
            react_1["default"].createElement("p", null,
                "Cr\u00E9ation - ",
                formattedCreatedDate),
            react_1["default"].createElement("p", null,
                "Derni\u00E8re modification - ",
                formattedUpdatedDate)),
        isModifyMode && (react_1["default"].createElement("button", { disabled: hasBeenModified(), onClick: handleConfirm }, "Confirmer les changements"))));
};
