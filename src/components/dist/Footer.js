"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../styles/Footer.css");
exports.Footer = function () {
    return (react_1["default"].createElement("section", { className: "footer" },
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("h3", null, "Imeji")),
        react_1["default"].createElement("main", { className: "footer-about" },
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "A propos de Imeji")),
                react_1["default"].createElement("li", null, "Carri\u00E8re"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("section", { className: "footer-links" },
                        react_1["default"].createElement("h4", null, "Suivez-nous sur les r\u00E9seaux sociaux"),
                        react_1["default"].createElement("section", null,
                            react_1["default"].createElement("img", { src: "./assets/instagram.svg", className: "footer-link", alt: "Instagram" }),
                            react_1["default"].createElement("img", { src: "./assets/linkedin.svg", className: "footer-link", alt: "Linkedin" }),
                            react_1["default"].createElement("img", { src: "./assets/twitter.svg", className: "footer-link", alt: "Twitter" }))))))));
};
