_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{bE38:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),l=a.a.createElement;t.a=function(){return l("div",{className:"project-start-area bg-color ptb-100"},l("div",{className:"container"},l("div",{className:"row align-items-center"},l("div",{className:"col-lg-6 col-md-12"},l("div",{className:"project-start-image"},l("img",{src:"/img/project-start11.png",alt:"image"}))),l("div",{className:"col-lg-6 col-md-12"},l("div",{className:"project-start-content"},l("h2",null,"Empieza tu proyecto con nosotros"),l("p",null,"Descr\xedbenos un poco de tu empresa y estableceremos contacto contigo."),l(i.a,{href:"/contact"},l("a",{className:"default-btn"},l("i",{className:"flaticon-web"}),"Empecemos",l("span",null))))))),l("div",{className:"vector-shape9"},l("img",{src:"/img/shape/vector-shape9.png",alt:"image"})),l("div",{className:"vector-shape10"},l("img",{src:"/img/shape/vector-shape10.png",alt:"image"})))}},csvi:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("SxW8"),i=n("Ix5F");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?g(e):t}function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function e(t){var n=this,r=t.expanded,a=void 0===r?[]:r,o=t.allowMultipleExpanded,i=void 0!==o&&o,c=t.allowZeroExpanded,d=void 0!==c&&c;l(this,e),u(this,"expanded",void 0),u(this,"allowMultipleExpanded",void 0),u(this,"allowZeroExpanded",void 0),u(this,"toggleExpanded",(function(e){return n.isItemDisabled(e)?n:n.isItemExpanded(e)?n.augment({expanded:n.expanded.filter((function(t){return t!==e}))}):n.augment({expanded:n.allowMultipleExpanded?[].concat(v(n.expanded),[e]):[e]})})),u(this,"isItemDisabled",(function(e){var t=n.isItemExpanded(e),r=1===n.expanded.length;return Boolean(t&&!n.allowZeroExpanded&&r)})),u(this,"isItemExpanded",(function(e){return-1!==n.expanded.indexOf(e)})),u(this,"getPanelAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e);return{role:n.allowMultipleExpanded?void 0:"region","aria-hidden":n.allowMultipleExpanded?!r:void 0,"aria-labelledby":n.getButtonId(e),id:n.getPanelId(e),hidden:!r||void 0}})),u(this,"getHeadingAttributes",(function(e){return{role:"heading"}})),u(this,"getButtonAttributes",(function(e,t){var r=null!==t&&void 0!==t?t:n.isItemExpanded(e),a=n.isItemDisabled(e);return{id:n.getButtonId(e),"aria-disabled":a,"aria-expanded":r,"aria-controls":n.getPanelId(e),role:"button",tabIndex:0}})),u(this,"getPanelId",(function(e){return"accordion__panel-".concat(e)})),u(this,"getButtonId",(function(e){return"accordion__heading-".concat(e)})),u(this,"augment",(function(t){return new e(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({expanded:n.expanded,allowMultipleExpanded:n.allowMultipleExpanded,allowZeroExpanded:n.allowZeroExpanded},t))})),this.expanded=a,this.allowMultipleExpanded=i,this.allowZeroExpanded=d},E=Object(r.createContext)(null),x=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(n=b(this,(e=m(t)).call.apply(e,[this].concat(a)))),"state",new y({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),u(g(n),"toggleExpanded",(function(e){n.setState((function(t){return t.toggleExpanded(e)}),(function(){n.props.onChange&&n.props.onChange(n.state.expanded)}))})),u(g(n),"isItemDisabled",(function(e){return n.state.isItemDisabled(e)})),u(g(n),"isItemExpanded",(function(e){return n.state.isItemExpanded(e)})),u(g(n),"getPanelAttributes",(function(e,t){return n.state.getPanelAttributes(e,t)})),u(g(n),"getHeadingAttributes",(function(e){return n.state.getHeadingAttributes(e)})),u(g(n),"getButtonAttributes",(function(e,t){return n.state.getButtonAttributes(e,t)})),n}return p(t,e),d(t,[{key:"render",value:function(){var e=this.state,t=e.allowZeroExpanded,n=e.allowMultipleExpanded;return Object(r.createElement)(E.Provider,{value:{allowMultipleExpanded:n,allowZeroExpanded:t,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(r.PureComponent);u(x,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var w=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(n=b(this,(e=m(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return p(t,e),d(t,[{key:"render",value:function(){return Object(r.createElement)(E.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent),A=function(e){var t=e.className,n=void 0===t?"accordion":t,a=e.allowMultipleExpanded,o=e.allowZeroExpanded,i=e.onChange,l=e.preExpanded,c=h(e,["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"]);return Object(r.createElement)(x,{preExpanded:l,allowMultipleExpanded:a,allowZeroExpanded:o,onChange:i},Object(r.createElement)("div",s({"data-accordion-component":"Accordion",className:n},c)))},I=0,O=I;var j=/[\u0009\u000a\u000c\u000d\u0020]/g;function k(e){return""!==e&&!j.test(e)||(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1)}var P=Object(r.createContext)(null),N=function(e){function t(){var e,n;l(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return u(g(n=b(this,(e=m(t)).call.apply(e,[this].concat(o)))),"toggleExpanded",(function(){n.props.accordionContext.toggleExpanded(n.props.uuid)})),u(g(n),"renderChildren",(function(e){var t=n.props,a=t.uuid,o=t.dangerouslySetExpanded,i=null!==o&&void 0!==o?o:e.isItemExpanded(a),l=e.isItemDisabled(a),c=e.getPanelAttributes(a,o),d=e.getHeadingAttributes(a),u=e.getButtonAttributes(a,o);return Object(r.createElement)(P.Provider,{value:{uuid:a,expanded:i,disabled:l,toggleExpanded:n.toggleExpanded,panelAttributes:c,headingAttributes:d,buttonAttributes:u},children:n.props.children})})),n}return p(t,e),d(t,[{key:"render",value:function(){return Object(r.createElement)(w,null,this.renderChildren)}}]),t}(r.Component),_=function(e){return Object(r.createElement)(w,null,(function(t){return Object(r.createElement)(N,s({},e,{accordionContext:t}))}))},C=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(n=b(this,(e=m(t)).call.apply(e,[this].concat(a)))),"renderChildren",(function(e){return e?n.props.children(e):null})),n}return p(t,e),d(t,[{key:"render",value:function(){return Object(r.createElement)(P.Consumer,null,this.renderChildren)}}]),t}(r.PureComponent),D=function(e){var t=e.uuid,n=void 0===t?function(){var e=O;return O+=1,"raa-".concat(e)}():t,a=e.className,o=void 0===a?"accordion__item":a,i=e.activeClassName,l=e.dangerouslySetExpanded,c=h(e,["uuid","className","activeClassName","dangerouslySetExpanded"]);return c.id&&k(c.id),Object(r.createElement)(_,{uuid:n,dangerouslySetExpanded:l},Object(r.createElement)(C,null,(function(e){var t=e.expanded&&i?i:o;return Object(r.createElement)("div",s({"data-accordion-component":"AccordionItem",className:t},c))})))};function M(e){var t=function e(t){return t&&(t.matches('[data-accordion-component="Accordion"]')?t:e(t.parentElement))}(e);return t&&Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}var S,B="40",T="35",L="13",Z="36",H="37",Q="39",W="32",q="38",F=function(e){var t=e.toggleExpanded,n=e.className,a=void 0===n?"accordion__button":n,o=h(e,["toggleExpanded","className"]);return o.id&&k(o.id),Object(r.createElement)("div",s({className:a},o,{onClick:t,onKeyDown:function(e){var n=e.which.toString();if(n!==L&&n!==W||(e.preventDefault(),t()),e.target instanceof HTMLElement)switch(n){case Z:e.preventDefault(),function(e){var t=(M(e)||[])[0];t&&t.focus()}(e.target);break;case T:e.preventDefault(),function(e){var t=M(e)||[],n=t[t.length-1];n&&n.focus()}(e.target);break;case H:case q:e.preventDefault(),function(e){var t=M(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n-1];r&&r.focus()}}(e.target);break;case Q:case B:e.preventDefault(),function(e){var t=M(e)||[],n=t.indexOf(e);if(-1!==n){var r=t[n+1];r&&r.focus()}}(e.target)}},"data-accordion-component":"AccordionItemButton"}))},R=function(e){return Object(r.createElement)(C,null,(function(t){var n=t.toggleExpanded,a=t.buttonAttributes;return Object(r.createElement)(F,s({toggleExpanded:n},e,a))}))};!function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"}(S||(S={}));var U=S,V=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return u(g(n=b(this,(e=m(t)).call.apply(e,[this].concat(a)))),"ref",void 0),u(g(n),"setRef",(function(e){n.ref=e})),n}return p(t,e),d(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return Object(r.createElement)("div",s({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(e){if(void 0===e)throw new Error("ref is undefined");if(1!==e.childElementCount||!e.firstElementChild||"AccordionItemButton"!==e.firstElementChild.getAttribute("data-accordion-component"))throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")}}]),t}(r.PureComponent);u(V,"defaultProps",{className:"accordion__heading","aria-level":3});var J=function(e){return Object(r.createElement)(C,null,(function(t){var n=t.headingAttributes;return e.id&&k(e.id),Object(r.createElement)(V,s({},e,n))}))};J.displayName=U.AccordionItemHeading;var X=function(e){var t=e.className,n=void 0===t?"accordion__panel":t,a=e.id,o=h(e,["className","id"]);return Object(r.createElement)(C,null,(function(e){var t=e.panelAttributes;return a&&k(a),Object(r.createElement)("div",s({"data-accordion-component":"AccordionItemPanel",className:n},o,t))}))},Y=a.a.createElement,z=function(){return Y("div",{className:"ptb-100"},Y("div",{className:"container"},Y("div",{className:"faq-accordion"},Y(A,null,Y(D,null,Y(J,null,Y(R,null,"Q1. What is Data Science? List the differences between supervised and unsupervised learning.")),Y(X,null,Y("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))),Y(D,null,Y(J,null,Y(R,null,"Q2. What is Selection Tracer.com?")),Y(X,null,Y("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))),Y(D,null,Y(J,null,Y(R,null,"Q3. What is tracer-variance trade-off?")),Y(X,null,Y("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))),Y(D,null,Y(J,null,Y(R,null,"Q4. What is a confusion matrix?")),Y(X,null,Y("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."))),Y(D,null,Y(J,null,Y(R,null,"Q5. What is the difference between \u201clong\u201d and \u201cwide\u201d format data?")),Y(X,null,Y("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")))))))},K=n("bE38"),G=n("mdYk"),$=a.a.createElement;t.default=function(){return $(a.a.Fragment,null,$(o.a,null),$(i.a,{pageTitle:"FAQ",homePageText:"Home",homePageUrl:"/",activePageText:"FAQ"}),$(z,null),$(K.a,null),$(G.a,null))}},"l//U":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("csvi")}])}},[["l//U",0,2,1,3,4]]]);