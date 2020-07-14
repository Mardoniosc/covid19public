function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsBrasilDatasBrasilDatasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\" style=\"flex-direction: column;\">\n\n    <mat-form-field>\n        <mat-label>Selecione uma data</mat-label>\n        <input matInput [matDatepicker]=\"dp3\" disabled (dateInput)=\"addEvent($event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n        <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n      </mat-form-field>\n      <br>\n      <div class=\"cards\" *ngIf=\"estados\">\n        <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n          <mat-grid-tile *ngFor=\"let uf of estados\">\n            <a routerLink=\"/brasil/estados/{{ uf.uf }}\">\n              <mat-card style=\"font-size: 15px; font-weight: bold;\">\n                UF: {{ uf.state }} <br>\n                Casos: {{ uf.cases }}<br>\n                Mortes: {{ uf.deaths }}<br>\n              </mat-card>\n            </a>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsBrasilEstadoBrasilEstadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"cards\">\n      <p>Totais em {{estado.state}}</p>\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-confirmado\">\n            {{ estado.cases | number }} <br>\n            Confirmados\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-recuperados\">\n            {{ estado.refuses | number }} <br>\n            Resultado negativo\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-morte\">\n            {{ estado.deaths | number }} <br>\n            Mortes\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-aguardando-teste\">\n            {{ estado.suspects | number }} <br>\n            Suspeitos\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <p>Ultima atualização: {{dataAtualizada}}</p><br>\n      <button  mat-raised-button routerLink=\"/brasil/estados/grafico/{{ estado.uf }}\">Ver gráfico de evolução no estado</button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsBrasilEstadosBrasilEstadosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"body\">\n  <div class=\"container\" style=\"flex-direction: column;\">\n    <br>\n    <form>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Estado</mat-label>\n        <input\n          matInput\n          placeholder=\"Digite o estado\"\n          #estadoPesquisado\n          (keyup)=\"pesquisa(estadoPesquisado.value)\"\n          style=\"width: 100%;\"\n        >\n      </mat-form-field>\n    </form>\n    <br>\n    <div class=\"cards\">\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile *ngFor=\"let uf of estadosFiltrados\">\n          <a routerLink=\"/brasil/estados/{{ uf.uf }}\">\n            <mat-card style=\"font-size: 15px; font-weight: bold;\">\n              UF: {{ uf.state }} <br>\n              Casos: {{ uf.cases }}<br>\n              Mortes: {{ uf.deaths }}<br>\n            </mat-card>\n          </a>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasildash/brasildash.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasildash/brasildash.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsBrasildashBrasildashComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"cards\">\n      <p>Totais no Brasil</p>\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-confirmado\">\n            {{ pais.cases | number }} <br>\n            Confirmados\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-dia\">\n            {{ pais.todayCases | number }} <br>\n            Casos no Dia\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-recuperados\">\n            {{ pais.recovered | number }} <br>\n            Recuperados\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-morte\">\n            {{ pais.deaths | number }} <br>\n            Mortes\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-morte\">\n            {{ pais.todayDeaths | number }} <br>\n            Mortes no dia\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <p>Acompanhamento</p>\n\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-ativo\">\n            {{ pais.active | number }}\n            Ativos\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-critico\">\n            {{ pais.critical | number }}\n            Críticos\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-aguardando-teste\">\n            {{ pais.totalTests | number }}\n            Aguardando teste\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficoevolucaoestadoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\" style=\"flex-direction: column;\">\n    <h1>EVOLUÇÃO POR ESTADO</h1>\n    <app-linear-julho></app-linear-julho>\n    <app-linear-junho></app-linear-junho>\n    <app-linear-maio></app-linear-maio>\n    <app-linear-abril></app-linear-abril>\n    <app-linear-marco></app-linear-marco>\n    <app-linear-fevereiro></app-linear-fevereiro>\n    <app-linear-janeiro></app-linear-janeiro>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearAbrilLinearAbrilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearFevereiroLinearFevereiroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJaneiroLinearJaneiroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJulhoLinearJulhoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJunhoLinearJunhoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMaioLinearMaioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMarcoLinearMarcoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearLinearComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Evolução do coronarivus JUNHO</h1>\n\n<div class=\"chart-wrapper\">\n  <canvas baseChart\n      [datasets]=\"lineChartData\"\n      [labels]=\"lineChartLabels\"\n      [options]=\"lineChartOptions\"\n      [colors]=\"lineChartColors\"\n      [legend]=\"lineChartLegend\"\n      [chartType]=\"lineChartType\"\n      [plugins]=\"lineChartPlugins\">\n  </canvas>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/global/global.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/global/global.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardGlobalComponentsGlobalGlobalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\n\n  <div class=\"container\">\n    <mat-card class=\"car-global\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"header-image\"></div>\n        <mat-card-title>Mundo</mat-card-title>\n        <mat-card-subtitle>Covid-19</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"content\">\n        <H1>\n          <p> Casos: {{ global.cases | number }} </p>\n          <p> Mortes: {{ global.deaths | number}} </p>\n          <p> Recuperados: {{ global.recovered | number }} </p>\n        </H1>\n      </mat-card-content>\n    </mat-card>\n  </div>\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/pais/pais.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/pais/pais.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardGlobalComponentsPaisPaisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\">\n    <div class=\"cards\">\n      <p>Totais no: {{ pais.country }} </p>\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\" style=\"width: 100%;\">\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-confirmado\">\n            {{ pais.cases | number }} <br>\n            Confirmados\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-dia\">\n            {{ pais.todayCases | number }} <br>\n            Casos no Dia\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-recuperados\">\n            {{ pais.recovered | number }} <br>\n            Recuperados\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-morte\">\n            {{ pais.deaths | number }} <br>\n            Mortes\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-morte\">\n            {{ pais.todayDeaths | number }} <br>\n            Mortes no dia\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n\n      <p>Acompanhamento</p>\n\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-ativo\">\n            {{ pais.active | number }}\n            Ativos\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-critico\">\n            {{ pais.critical | number }}\n            Críticos\n          </mat-card>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-card class=\"card-pais-aguardando-teste\">\n            {{ pais.totalTests | number }}\n            Aguardando teste\n          </mat-card>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/paises/paises.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/paises/paises.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardGlobalComponentsPaisesPaisesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"body\">\n  <div class=\"container\" style=\"flex-direction: column;\">\n    <br>\n    <form>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>País</mat-label>\n        <input\n          matInput\n          placeholder=\"Digite o país\"\n          #nomePais\n          #paisPesquisado\n          (keyup)=\"pesquisa(paisPesquisado.value)\"\n        >\n      </mat-form-field>\n    </form>\n    <br>\n    <div class=\"cards\">\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile *ngFor=\"let pais of paisesFiltrados\">\n          <a routerLink=\"/dashboard/paises/{{ pais.country }}\">\n            <mat-card style=\"font-size: 15px; font-weight: bold;\">\n              pais: {{ pais.country }} <br>\n              Casos: {{ pais.cases }}<br>\n              Mortes: {{ pais.deaths }}<br>\n            </mat-card>\n          </a>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\">\n  Sistema COVID-19 FRONTEND Desenvolvido por Mardonio S Costa\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-header\">\n  <div class=\"conteudo-header\">\n    <nav>\n      <img  class=\"covid-img\" src=\"../../../../assets/covid19.png\" alt=\"COVID19\">\n      <a routerLink=\"/dashboard\">Mundo</a>\n    </nav>\n    <nav>\n      <a>\n        <button mat-button [matMenuTriggerFor]=\"menu\">Brasil</button>\n        <mat-menu #menu=\"matMenu\">\n          <a routerLink=\"/brasil\">\n            <button mat-menu-item>Geral</button>\n          </a>\n          <a routerLink=\"/brasil/estados\">\n            <button mat-menu-item>Estados</button>\n          </a>\n          <a routerLink=\"/brasil/data/\">\n            <button mat-menu-item>Casos por data</button>\n          </a>\n\n        </mat-menu>\n      </a>\n    </nav>\n    <aside>\n      <div class=\"paises-all\">\n        <a routerLink=\"/dashboard/paises\">Todos os paises</a>\n      </div>\n    </aside>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'covidFront';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard */
    "./src/app/dashboard/index.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared */
    "./src/app/shared/index.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _dashboard__WEBPACK_IMPORTED_MODULE_6__["GlobalModule"], _dashboard__WEBPACK_IMPORTED_MODULE_6__["GlobalRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _dashboard__WEBPACK_IMPORTED_MODULE_6__["BrasilModule"], _dashboard__WEBPACK_IMPORTED_MODULE_6__["BrasilRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/brasil-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/dashboard/brasil/brasil-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: routesBrasil, BrasilRoutingModule */

  /***/
  function srcAppDashboardBrasilBrasilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routesBrasil", function () {
      return routesBrasil;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilRoutingModule", function () {
      return BrasilRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/dashboard/brasil/components/index.ts");

    var routesBrasil = [{
      path: 'brasil',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["BrasilComponent"],
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["BrasildashComponent"]
      }, {
        path: 'estados',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["BrasilEstadosComponent"]
      }, {
        path: 'estados/:uf',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["BrasilEstadoComponent"]
      }, {
        path: 'estados/grafico/:uf',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["GraficoevolucaoestadoComponent"]
      }, {
        path: 'data',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["BrasilDatasComponent"]
      }]
    }];

    var BrasilRoutingModule = function BrasilRoutingModule() {
      _classCallCheck(this, BrasilRoutingModule);
    };

    BrasilRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routesBrasil)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BrasilRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/brasil.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/brasil/brasil.module.ts ***!
    \***************************************************/

  /*! exports provided: BrasilModule */

  /***/
  function srcAppDashboardBrasilBrasilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilModule", function () {
      return BrasilModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "./src/app/dashboard/brasil/components/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_maio_linear_maio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_fevereiro_linear_fevereiro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_janeiro_linear_janeiro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_marco_linear_marco_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_abril_linear_abril_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_junho_linear_junho_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.ts");
    /* harmony import */


    var _components_graficoevolucaoestado_graficos_linear_julho_linear_julho_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.ts");

    var BrasilModule = function BrasilModule() {
      _classCallCheck(this, BrasilModule);
    };

    BrasilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_5__["BrasildashComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BrasilComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BrasilEstadosComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BrasilDatasComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BrasilEstadoComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["GraficoevolucaoestadoComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["LinearComponent"], _components_graficoevolucaoestado_graficos_linear_maio_linear_maio_component__WEBPACK_IMPORTED_MODULE_9__["LinearMaioComponent"], _components_graficoevolucaoestado_graficos_linear_fevereiro_linear_fevereiro_component__WEBPACK_IMPORTED_MODULE_10__["LinearFevereiroComponent"], _components_graficoevolucaoestado_graficos_linear_janeiro_linear_janeiro_component__WEBPACK_IMPORTED_MODULE_11__["LinearJaneiroComponent"], _components_graficoevolucaoestado_graficos_linear_marco_linear_marco_component__WEBPACK_IMPORTED_MODULE_12__["LinearMarcoComponent"], _components_graficoevolucaoestado_graficos_linear_abril_linear_abril_component__WEBPACK_IMPORTED_MODULE_13__["LinearAbrilComponent"], _components_graficoevolucaoestado_graficos_linear_junho_linear_junho_component__WEBPACK_IMPORTED_MODULE_14__["LinearJunhoComponent"], _components_graficoevolucaoestado_graficos_linear_julho_linear_julho_component__WEBPACK_IMPORTED_MODULE_15__["LinearJulhoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MatMomentDateModule"]]
    })], BrasilModule);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/brasil.style.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/brasil/brasil.style.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilBrasilStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .body {\n  height: 100%;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv .container {\n  width: 100%;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9icmFzaWwuc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9icmFzaWwuc3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IC5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsBrasilDatasBrasilDatasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\na {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2JyYXNpbC1kYXRhcy9icmFzaWwtZGF0YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9icmFzaWwtZGF0YXMvYnJhc2lsLWRhdGFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2IC5jYXJkcyB7XG4gIHdpZHRoOiA0MzBweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogOTglO1xufVxuXG5hIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BrasilDatasComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilDatasBrasilDatasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilDatasComponent", function () {
      return BrasilDatasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");

    var BrasilDatasComponent = /*#__PURE__*/function () {
      function BrasilDatasComponent(brasiCovidService) {
        _classCallCheck(this, BrasilDatasComponent);

        this.brasiCovidService = brasiCovidService;
      }

      _createClass(BrasilDatasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addEvent",
        value: function addEvent(event) {
          var data = JSON.stringify(event.value);
          data = data.slice(1, 11);
          data = data.replace('-', '');
          data = data.replace('-', '');
          this.carragardados(data);
        }
      }, {
        key: "carragardados",
        value: function carragardados(data) {
          var _this = this;

          console.log(data);
          this.brasiCovidService.casosPorData(data).subscribe(function (data) {
            _this.estados = data.data;
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return BrasilDatasComponent;
    }();

    BrasilDatasComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }];
    };

    BrasilDatasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brasil-datas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brasil-datas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brasil-datas.component.css */
      "./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../brasil.style.css */
      "./src/app/dashboard/brasil/brasil.style.css"))["default"]]
    })], BrasilDatasComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-datas/index.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-datas/index.ts ***!
    \*******************************************************************/

  /*! exports provided: BrasilDatasComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilDatasIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasil_datas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasil-datas.component */
    "./src/app/dashboard/brasil/components/brasil-datas/brasil-datas.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilDatasComponent", function () {
      return _brasil_datas_component__WEBPACK_IMPORTED_MODULE_1__["BrasilDatasComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadoBrasilEstadoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\nbutton {\n  width: 100%;\n}\n\n.card-pais-confirmado {\n  color: rgb(0, 89, 253);\n}\n\n.card-pais-dia {\n  color: rgb(99, 121, 0);\n}\n\n.card-pais-recuperados {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-morte {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-ativo {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-critico {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-aguardando-teste {\n  color: rgb(192, 196, 4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2JyYXNpbC1lc3RhZG8vYnJhc2lsLWVzdGFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2JyYXNpbC1lc3RhZG8vYnJhc2lsLWVzdGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiAuY2FyZHMge1xuICB3aWR0aDogNDMwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2FyZC1wYWlzLWNvbmZpcm1hZG8ge1xuICBjb2xvcjogcmdiKDAsIDg5LCAyNTMpO1xufVxuLmNhcmQtcGFpcy1kaWEge1xuICBjb2xvcjogcmdiKDk5LCAxMjEsIDApO1xufVxuLmNhcmQtcGFpcy1yZWN1cGVyYWRvcyB7XG4gIGNvbG9yOiByZ2IoODEsIDI1MywgNDYpO1xufVxuLmNhcmQtcGFpcy1tb3J0ZSB7XG4gIGNvbG9yOiByZ2IoMjUzLCA0NCwgNDQpO1xufVxuXG4uY2FyZC1wYWlzLWF0aXZvIHtcbiAgY29sb3I6IHJnYig4MSwgMjUzLCA0Nik7XG59XG4uY2FyZC1wYWlzLWNyaXRpY28ge1xuICBjb2xvcjogcmdiKDI1MywgNDQsIDQ0KTtcbn1cbi5jYXJkLXBhaXMtYWd1YXJkYW5kby10ZXN0ZSB7XG4gIGNvbG9yOiByZ2IoMTkyLCAxOTYsIDQpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BrasilEstadoComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadoBrasilEstadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadoComponent", function () {
      return BrasilEstadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BrasilEstadoComponent = /*#__PURE__*/function () {
      function BrasilEstadoComponent(route, brasilService) {
        _classCallCheck(this, BrasilEstadoComponent);

        this.route = route;
        this.brasilService = brasilService;
        this.estado = {};
      }

      _createClass(BrasilEstadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosBrasil();
        }
      }, {
        key: "formataData",
        value: function formataData(data) {
          var dia = data.slice(8, 10);
          var mes = data.slice(5, 7);
          var ano = data.slice(0, 4);
          var hora = data.slice(11, 13);
          hora = (parseInt(hora) - 3).toString();
          var minutos_segundos = data.slice(13, 19);
          data = dia + '/' + mes + '/' + ano + ' ' + hora + minutos_segundos;
          this.dataAtualizada = data;
        }
      }, {
        key: "carregaDadosBrasil",
        value: function carregaDadosBrasil() {
          var _this2 = this;

          this.brasilService.estado(this.ufNome).subscribe(function (data) {
            _this2.estado = data;

            _this2.formataData(_this2.estado.datetime.toLocaleString());

            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return BrasilEstadoComponent;
    }();

    BrasilEstadoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }];
    };

    BrasilEstadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brasil-estado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brasil-estado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brasil-estado.component.css */
      "./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../brasil.style.css */
      "./src/app/dashboard/brasil/brasil.style.css"))["default"]]
    })], BrasilEstadoComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estado/index.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estado/index.ts ***!
    \********************************************************************/

  /*! exports provided: BrasilEstadoComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasil_estado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasil-estado.component */
    "./src/app/dashboard/brasil/components/brasil-estado/brasil-estado.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadoComponent", function () {
      return _brasil_estado_component__WEBPACK_IMPORTED_MODULE_1__["BrasilEstadoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadosBrasilEstadosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\na {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2JyYXNpbC1lc3RhZG9zL2JyYXNpbC1lc3RhZG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYnJhc2lsL2NvbXBvbmVudHMvYnJhc2lsLWVzdGFkb3MvYnJhc2lsLWVzdGFkb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYgLmNhcmRzIHtcbiAgd2lkdGg6IDQzMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbmEge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: BrasilEstadosComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadosBrasilEstadosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadosComponent", function () {
      return BrasilEstadosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");

    var BrasilEstadosComponent = /*#__PURE__*/function () {
      function BrasilEstadosComponent(brasilService) {
        _classCallCheck(this, BrasilEstadosComponent);

        this.brasilService = brasilService;
      }

      _createClass(BrasilEstadosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregaEstados();
        }
      }, {
        key: "carregaEstados",
        value: function carregaEstados() {
          var _this3 = this;

          this.brasilService.estadosAll().subscribe(function (data) {
            _this3.estados = data.data;
            _this3.estadosFiltrados = _this3.estados;
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(estado) {
          this.estadosFiltrados = this.estados.filter(function (x) {
            return x.state.trim().toLowerCase().includes(estado.trim().toLowerCase());
          });
          console.log(estado);
        }
      }]);

      return BrasilEstadosComponent;
    }();

    BrasilEstadosComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }];
    };

    BrasilEstadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brasil-estados',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brasil-estados.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brasil-estados.component.css */
      "./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../brasil.style.css */
      "./src/app/dashboard/brasil/brasil.style.css"))["default"]]
    })], BrasilEstadosComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasil-estados/index.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil-estados/index.ts ***!
    \*********************************************************************/

  /*! exports provided: BrasilEstadosComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilEstadosIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasil_estados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasil-estados.component */
    "./src/app/dashboard/brasil/components/brasil-estados/brasil-estados.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadosComponent", function () {
      return _brasil_estados_component__WEBPACK_IMPORTED_MODULE_1__["BrasilEstadosComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/brasil.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasil.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BrasilComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilComponent", function () {
      return BrasilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BrasilComponent = function BrasilComponent() {
      _classCallCheck(this, BrasilComponent);
    };

    BrasilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "<router-outlet></router-outlet>"
    })], BrasilComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasildash/brasildash.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasildash/brasildash.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsBrasildashBrasildashComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\np {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.card-pais-confirmado {\n  color: rgb(0, 89, 253);\n}\n\n.card-pais-dia {\n  color: rgb(99, 121, 0);\n}\n\n.card-pais-recuperados {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-morte {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-ativo {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-critico {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-aguardando-teste {\n  color: rgb(192, 196, 4);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2JyYXNpbGRhc2gvYnJhc2lsZGFzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9icmFzaWxkYXNoL2JyYXNpbGRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYgLmNhcmRzIHtcbiAgd2lkdGg6IDQzMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1wYWlzLWNvbmZpcm1hZG8ge1xuICBjb2xvcjogcmdiKDAsIDg5LCAyNTMpO1xufVxuLmNhcmQtcGFpcy1kaWEge1xuICBjb2xvcjogcmdiKDk5LCAxMjEsIDApO1xufVxuLmNhcmQtcGFpcy1yZWN1cGVyYWRvcyB7XG4gIGNvbG9yOiByZ2IoODEsIDI1MywgNDYpO1xufVxuLmNhcmQtcGFpcy1tb3J0ZSB7XG4gIGNvbG9yOiByZ2IoMjUzLCA0NCwgNDQpO1xufVxuXG4uY2FyZC1wYWlzLWF0aXZvIHtcbiAgY29sb3I6IHJnYig4MSwgMjUzLCA0Nik7XG59XG4uY2FyZC1wYWlzLWNyaXRpY28ge1xuICBjb2xvcjogcmdiKDI1MywgNDQsIDQ0KTtcbn1cbi5jYXJkLXBhaXMtYWd1YXJkYW5kby10ZXN0ZSB7XG4gIGNvbG9yOiByZ2IoMTkyLCAxOTYsIDQpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasildash/brasildash.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasildash/brasildash.component.ts ***!
    \********************************************************************************/

  /*! exports provided: BrasildashComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasildashBrasildashComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasildashComponent", function () {
      return BrasildashComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");

    var BrasildashComponent = /*#__PURE__*/function () {
      function BrasildashComponent(route, covidService) {
        _classCallCheck(this, BrasildashComponent);

        this.route = route;
        this.covidService = covidService;
        this.pais = {};
      }

      _createClass(BrasildashComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paisNome = 'Brazil';
          this.carregaDadosPais();
        }
      }, {
        key: "carregaDadosPais",
        value: function carregaDadosPais() {
          var _this4 = this;

          this.covidService.pais(this.paisNome).subscribe(function (data) {
            _this4.pais = data;
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return BrasildashComponent;
    }();

    BrasildashComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["CovidService"]
      }];
    };

    BrasildashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brasildash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./brasildash.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/brasildash/brasildash.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./brasildash.component.css */
      "./src/app/dashboard/brasil/components/brasildash/brasildash.component.css"))["default"]]
    })], BrasildashComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/brasildash/index.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/brasildash/index.ts ***!
    \*****************************************************************/

  /*! exports provided: BrasildashComponent */

  /***/
  function srcAppDashboardBrasilComponentsBrasildashIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasildash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasildash.component */
    "./src/app/dashboard/brasil/components/brasildash/brasildash.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasildashComponent", function () {
      return _brasildash_component__WEBPACK_IMPORTED_MODULE_1__["BrasildashComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.css":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.css ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficoevolucaoestadoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 730px;\n  height: 600px;\n}\n\nmat-card {\n  width: 98%;\n}\n\na {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2JyYXNpbC9jb21wb25lbnRzL2dyYWZpY29ldm9sdWNhb2VzdGFkby9ncmFmaWNvZXZvbHVjYW9lc3RhZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvYnJhc2lsL2NvbXBvbmVudHMvZ3JhZmljb2V2b2x1Y2FvZXN0YWRvL2dyYWZpY29ldm9sdWNhb2VzdGFkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiAuY2FyZHMge1xuICB3aWR0aDogNzMwcHg7XG4gIGhlaWdodDogNjAwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDk4JTtcbn1cblxuYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: GraficoevolucaoestadoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficoevolucaoestadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraficoevolucaoestadoComponent", function () {
      return GraficoevolucaoestadoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GraficoevolucaoestadoComponent = /*#__PURE__*/function () {
      function GraficoevolucaoestadoComponent() {
        _classCallCheck(this, GraficoevolucaoestadoComponent);
      }

      _createClass(GraficoevolucaoestadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GraficoevolucaoestadoComponent;
    }();

    GraficoevolucaoestadoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-graficoevolucaoestado',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./graficoevolucaoestado.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./graficoevolucaoestado.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.css"))["default"]]
    })], GraficoevolucaoestadoComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/index.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/index.ts ***!
    \*************************************************************************************/

  /*! exports provided: LinearAbrilComponent, LinearFevereiroComponent, LinearMaioComponent, LinearMarcoComponent, LinearJunhoComponent, LinearJulhoComponent, LinearComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearComponent", function () {
      return _linear__WEBPACK_IMPORTED_MODULE_1__["LinearComponent"];
    });
    /* harmony import */


    var _linear_abril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./linear-abril */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearAbrilComponent", function () {
      return _linear_abril__WEBPACK_IMPORTED_MODULE_2__["LinearAbrilComponent"];
    });
    /* harmony import */


    var _linear_fevereiro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./linear-fevereiro */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearFevereiroComponent", function () {
      return _linear_fevereiro__WEBPACK_IMPORTED_MODULE_3__["LinearFevereiroComponent"];
    });
    /* harmony import */


    var _linear_maio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./linear-maio */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMaioComponent", function () {
      return _linear_maio__WEBPACK_IMPORTED_MODULE_4__["LinearMaioComponent"];
    });
    /* harmony import */


    var _linear_marco__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./linear-marco */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMarcoComponent", function () {
      return _linear_marco__WEBPACK_IMPORTED_MODULE_5__["LinearMarcoComponent"];
    });
    /* harmony import */


    var _linear_junho__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./linear-junho */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJunhoComponent", function () {
      return _linear_junho__WEBPACK_IMPORTED_MODULE_6__["LinearJunhoComponent"];
    });
    /* harmony import */


    var _linear_julho__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./linear-julho */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJulhoComponent", function () {
      return _linear_julho__WEBPACK_IMPORTED_MODULE_7__["LinearJulhoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/index.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/index.ts ***!
    \**************************************************************************************************/

  /*! exports provided: LinearAbrilComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearAbrilIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_abril_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-abril.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearAbrilComponent", function () {
      return _linear_abril_component__WEBPACK_IMPORTED_MODULE_1__["LinearAbrilComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.css":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.css ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearAbrilLinearAbrilComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLWFicmlsL2xpbmVhci1hYnJpbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: LinearAbrilComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearAbrilLinearAbrilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearAbrilComponent", function () {
      return LinearAbrilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearAbrilComponent = /*#__PURE__*/function () {
      function LinearAbrilComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearAbrilComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearAbrilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this5 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this5.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this5.ufNome) {
                _this5.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this6 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this6.ufNome) {
                _this6.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 3, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 3) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'ABRIL DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearAbrilComponent;
    }();

    LinearAbrilComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearAbrilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-abril',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-abril.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-abril.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-abril/linear-abril.component.css"))["default"]]
    })], LinearAbrilComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/index.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/index.ts ***!
    \******************************************************************************************************/

  /*! exports provided: LinearFevereiroComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearFevereiroIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_fevereiro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-fevereiro.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearFevereiroComponent", function () {
      return _linear_fevereiro_component__WEBPACK_IMPORTED_MODULE_1__["LinearFevereiroComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.css":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.css ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearFevereiroLinearFevereiroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLWZldmVyZWlyby9saW5lYXItZmV2ZXJlaXJvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: LinearFevereiroComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearFevereiroLinearFevereiroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearFevereiroComponent", function () {
      return LinearFevereiroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearFevereiroComponent = /*#__PURE__*/function () {
      function LinearFevereiroComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearFevereiroComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearFevereiroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this7 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this7.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this7.ufNome) {
                _this7.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this8 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this8.ufNome) {
                _this8.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 1, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 1) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'FEVEREIRO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearFevereiroComponent;
    }();

    LinearFevereiroComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearFevereiroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-fevereiro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-fevereiro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-fevereiro.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-fevereiro/linear-fevereiro.component.css"))["default"]]
    })], LinearFevereiroComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.css":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.css ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJaneiroLinearJaneiroComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLWphbmVpcm8vbGluZWFyLWphbmVpcm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: LinearJaneiroComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJaneiroLinearJaneiroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearJaneiroComponent", function () {
      return LinearJaneiroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearJaneiroComponent = /*#__PURE__*/function () {
      function LinearJaneiroComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearJaneiroComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearJaneiroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this9 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this9.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this9.ufNome) {
                _this9.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this10 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this10.ufNome) {
                _this10.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 0) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'JANEIRO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearJaneiroComponent;
    }();

    LinearJaneiroComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearJaneiroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-janeiro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-janeiro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-janeiro.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-janeiro/linear-janeiro.component.css"))["default"]]
    })], LinearJaneiroComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/index.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/index.ts ***!
    \**************************************************************************************************/

  /*! exports provided: LinearJulhoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJulhoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_julho_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-julho.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJulhoComponent", function () {
      return _linear_julho_component__WEBPACK_IMPORTED_MODULE_1__["LinearJulhoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.css":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.css ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJulhoLinearJulhoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLWp1bGhvL2xpbmVhci1qdWxoby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: LinearJulhoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJulhoLinearJulhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearJulhoComponent", function () {
      return LinearJulhoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearJulhoComponent = /*#__PURE__*/function () {
      function LinearJulhoComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearJulhoComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearJulhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this11 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this11.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this11.ufNome) {
                _this11.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this12 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this12.ufNome) {
                _this12.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 6, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 6) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'JULHO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearJulhoComponent;
    }();

    LinearJulhoComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearJulhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-julho',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-julho.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-julho.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-julho/linear-julho.component.css"))["default"]]
    })], LinearJulhoComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/index.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/index.ts ***!
    \**************************************************************************************************/

  /*! exports provided: LinearJunhoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJunhoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_junho_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-junho.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJunhoComponent", function () {
      return _linear_junho_component__WEBPACK_IMPORTED_MODULE_1__["LinearJunhoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.css":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.css ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJunhoLinearJunhoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLWp1bmhvL2xpbmVhci1qdW5oby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: LinearJunhoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearJunhoLinearJunhoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearJunhoComponent", function () {
      return LinearJunhoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearJunhoComponent = /*#__PURE__*/function () {
      function LinearJunhoComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearJunhoComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearJunhoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this13 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this13.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this13.ufNome) {
                _this13.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this14 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this14.ufNome) {
                _this14.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 5, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 5) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'JUNHO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearJunhoComponent;
    }();

    LinearJunhoComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearJunhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-junho',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-junho.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-junho.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-junho/linear-junho.component.css"))["default"]]
    })], LinearJunhoComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/index.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/index.ts ***!
    \*************************************************************************************************/

  /*! exports provided: LinearMaioComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMaioIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_maio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-maio.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMaioComponent", function () {
      return _linear_maio_component__WEBPACK_IMPORTED_MODULE_1__["LinearMaioComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMaioLinearMaioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLW1haW8vbGluZWFyLW1haW8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: LinearMaioComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMaioLinearMaioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearMaioComponent", function () {
      return LinearMaioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearMaioComponent = /*#__PURE__*/function () {
      function LinearMaioComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearMaioComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearMaioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this15 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this15.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this15.ufNome) {
                _this15.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this16 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this16.ufNome) {
                _this16.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 4, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 4) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'MAIO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearMaioComponent;
    }();

    LinearMaioComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearMaioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-maio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-maio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-maio.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-maio/linear-maio.component.css"))["default"]]
    })], LinearMaioComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/index.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/index.ts ***!
    \**************************************************************************************************/

  /*! exports provided: LinearMarcoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMarcoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_marco_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear-marco.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMarcoComponent", function () {
      return _linear_marco_component__WEBPACK_IMPORTED_MODULE_1__["LinearMarcoComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.css":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.css ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMarcoLinearMarcoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyLW1hcmNvL2xpbmVhci1tYXJjby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: LinearMarcoComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearMarcoLinearMarcoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearMarcoComponent", function () {
      return LinearMarcoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearMarcoComponent = /*#__PURE__*/function () {
      function LinearMarcoComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearMarcoComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearMarcoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this17 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this17.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this17.ufNome) {
                _this17.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this18 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              if (estado.uf === _this18.ufNome) {
                _this18.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 2, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 2) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'MARÇO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearMarcoComponent;
    }();

    LinearMarcoComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearMarcoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear-marco',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear-marco.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear-marco.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear-marco/linear-marco.component.css"))["default"]]
    })], LinearMarcoComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/index.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/index.ts ***!
    \********************************************************************************************/

  /*! exports provided: LinearComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _linear_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./linear.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearComponent", function () {
      return _linear_component__WEBPACK_IMPORTED_MODULE_1__["LinearComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearLinearComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9icmFzaWwvY29tcG9uZW50cy9ncmFmaWNvZXZvbHVjYW9lc3RhZG8vZ3JhZmljb3MvbGluZWFyL2xpbmVhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: LinearComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoGraficosLinearLinearComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinearComponent", function () {
      return LinearComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LinearComponent = /*#__PURE__*/function () {
      function LinearComponent(brasiCovidService, route) {
        _classCallCheck(this, LinearComponent);

        this.brasiCovidService = brasiCovidService;
        this.route = route; //dados grafico

        this.dados = {};
        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.labels = [];
        this.lineChartPlugins = [];
      }

      _createClass(LinearComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ufNome = this.route.snapshot.paramMap.get('uf');
          this.carregaDadosGrafico();
        }
      }, {
        key: "carragardados",
        value: function carragardados(dataDia, index) {
          var _this19 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            if (data.data.length < 1) {
              _this19.carragardadosSeFalhar(dataDia, index);
            }

            data.data.forEach(function (estado) {
              if (estado.uf === _this19.ufNome) {
                _this19.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carragardadosSeFalhar",
        value: function carragardadosSeFalhar(dataDia, index) {
          var _this20 = this;

          this.brasiCovidService.casosPorData(dataDia).subscribe(function (data) {
            data.data.forEach(function (estado) {
              console.log(estado);
              console.log(_this20.ufNome);

              if (estado.uf === _this20.ufNome) {
                console.log(index + 'Index ' + estado.cases);
                _this20.data[index] = estado.cases;
              }
            });
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregaDadosGrafico",
        value: function carregaDadosGrafico() {
          var now = new Date();
          var daysOfYear = [];

          for (var d = new Date(2020, 5, 1); d <= now; d.setDate(d.getDate() + 1)) {
            if (d.getMonth() === 5) {
              this.labels.push(d.getDate().toString());
              this.carragardados(Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(d), 'yMMdd', 'en'), d.getDate());
            } else {
              break;
            }

            daysOfYear.push(new Date(d));
          }

          this.dados.data = this.data;
          this.dados.label = 'JUNHO DE 2020';
          this.lineChartData = [this.dados];
          this.lineChartLabels = this.labels;
          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartColors = [{
            borderColor: 'black',
            backgroundColor: 'rgba(150,200,0,0.28)'
          }];
          this.lineChartLegend = true;
          this.lineChartPlugins = [];
          this.lineChartType = 'line';
        }
      }]);

      return LinearComponent;
    }();

    LinearComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    LinearComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-linear',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./linear.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./linear.component.css */
      "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/linear/linear.component.css"))["default"]]
    })], LinearComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/brasil/components/graficoevolucaoestado/index.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/dashboard/brasil/components/graficoevolucaoestado/index.ts ***!
    \****************************************************************************/

  /*! exports provided: GraficoevolucaoestadoComponent, LinearAbrilComponent, LinearFevereiroComponent, LinearMaioComponent, LinearMarcoComponent, LinearJunhoComponent, LinearJulhoComponent, LinearComponent */

  /***/
  function srcAppDashboardBrasilComponentsGraficoevolucaoestadoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _graficoevolucaoestado_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./graficoevolucaoestado.component */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficoevolucaoestado.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GraficoevolucaoestadoComponent", function () {
      return _graficoevolucaoestado_component__WEBPACK_IMPORTED_MODULE_1__["GraficoevolucaoestadoComponent"];
    });
    /* harmony import */


    var _graficos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./graficos */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/graficos/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearAbrilComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearAbrilComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearFevereiroComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearFevereiroComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMaioComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearMaioComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMarcoComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearMarcoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJunhoComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearJunhoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJulhoComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearJulhoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearComponent", function () {
      return _graficos__WEBPACK_IMPORTED_MODULE_2__["LinearComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/components/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/brasil/components/index.ts ***!
    \******************************************************/

  /*! exports provided: BrasilComponent, BrasildashComponent, BrasilDatasComponent, BrasilEstadoComponent, BrasilEstadosComponent, GraficoevolucaoestadoComponent, LinearAbrilComponent, LinearFevereiroComponent, LinearMaioComponent, LinearMarcoComponent, LinearJunhoComponent, LinearJulhoComponent, LinearComponent */

  /***/
  function srcAppDashboardBrasilComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasildash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasildash */
    "./src/app/dashboard/brasil/components/brasildash/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasildashComponent", function () {
      return _brasildash__WEBPACK_IMPORTED_MODULE_1__["BrasildashComponent"];
    });
    /* harmony import */


    var _brasil_datas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./brasil-datas */
    "./src/app/dashboard/brasil/components/brasil-datas/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilDatasComponent", function () {
      return _brasil_datas__WEBPACK_IMPORTED_MODULE_2__["BrasilDatasComponent"];
    });
    /* harmony import */


    var _brasil_estado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./brasil-estado */
    "./src/app/dashboard/brasil/components/brasil-estado/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadoComponent", function () {
      return _brasil_estado__WEBPACK_IMPORTED_MODULE_3__["BrasilEstadoComponent"];
    });
    /* harmony import */


    var _brasil_estados__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./brasil-estados */
    "./src/app/dashboard/brasil/components/brasil-estados/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilEstadosComponent", function () {
      return _brasil_estados__WEBPACK_IMPORTED_MODULE_4__["BrasilEstadosComponent"];
    });
    /* harmony import */


    var _brasil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./brasil.component */
    "./src/app/dashboard/brasil/components/brasil.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilComponent", function () {
      return _brasil_component__WEBPACK_IMPORTED_MODULE_5__["BrasilComponent"];
    });
    /* harmony import */


    var _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./graficoevolucaoestado */
    "./src/app/dashboard/brasil/components/graficoevolucaoestado/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GraficoevolucaoestadoComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["GraficoevolucaoestadoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearAbrilComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearAbrilComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearFevereiroComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearFevereiroComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMaioComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearMaioComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearMarcoComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearMarcoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJunhoComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearJunhoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearJulhoComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearJulhoComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LinearComponent", function () {
      return _graficoevolucaoestado__WEBPACK_IMPORTED_MODULE_6__["LinearComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/brasil/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/dashboard/brasil/index.ts ***!
    \*******************************************/

  /*! exports provided: BrasilModule, routesBrasil, BrasilRoutingModule */

  /***/
  function srcAppDashboardBrasilIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _brasil_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./brasil.module */
    "./src/app/dashboard/brasil/brasil.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilModule", function () {
      return _brasil_module__WEBPACK_IMPORTED_MODULE_1__["BrasilModule"];
    });
    /* harmony import */


    var _brasil_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./brasil-routing.module */
    "./src/app/dashboard/brasil/brasil-routing.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routesBrasil", function () {
      return _brasil_routing_module__WEBPACK_IMPORTED_MODULE_2__["routesBrasil"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilRoutingModule", function () {
      return _brasil_routing_module__WEBPACK_IMPORTED_MODULE_2__["BrasilRoutingModule"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/components/global.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/dashboard/global/components/global.component.ts ***!
    \*****************************************************************/

  /*! exports provided: IndexGlobalComponent */

  /***/
  function srcAppDashboardGlobalComponentsGlobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexGlobalComponent", function () {
      return IndexGlobalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndexGlobalComponent = function IndexGlobalComponent() {
      _classCallCheck(this, IndexGlobalComponent);
    };

    IndexGlobalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "<router-outlet></router-outlet>"
    })], IndexGlobalComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/global/global.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/dashboard/global/components/global/global.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardGlobalComponentsGlobalGlobalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  height: 100%;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\ndiv .container {\n  max-width: 315px;\n}\ndiv .cardContainer {\n  width: 100%;\n  max-width: 350px;\n  text-align: center;\n  background: #000000;\n}\n.header-image {\n  background-image: url('global.png');\n  background-size: cover;\n  height: 35px;\n  width: 35px;\n}\n.car-global {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dsb2JhbC9jb21wb25lbnRzL2dsb2JhbC9nbG9iYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUNBQXlEO0VBQ3pELHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ2xvYmFsL2NvbXBvbmVudHMvZ2xvYmFsL2dsb2JhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmRpdiAuY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzMTVweDtcbn1cbmRpdiAuY2FyZENvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4uaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvZ2xvYmFsLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4uY2FyLWdsb2JhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/global/global.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/dashboard/global/components/global/global.component.ts ***!
    \************************************************************************/

  /*! exports provided: GlobalComponent */

  /***/
  function srcAppDashboardGlobalComponentsGlobalGlobalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalComponent", function () {
      return GlobalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/services */
    "./src/app/shared/services/index.ts");

    var GlobalComponent = /*#__PURE__*/function () {
      function GlobalComponent(covidService) {
        _classCallCheck(this, GlobalComponent);

        this.covidService = covidService;
        this.global = {};
      }

      _createClass(GlobalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregaDadosGlobal();
        }
      }, {
        key: "carregaDadosGlobal",
        value: function carregaDadosGlobal() {
          var _this21 = this;

          this.covidService.mundo().subscribe(function (data) {
            _this21.global = data;
            return _this21.global;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return GlobalComponent;
    }();

    GlobalComponent.ctorParameters = function () {
      return [{
        type: _shared_services__WEBPACK_IMPORTED_MODULE_2__["CovidService"]
      }];
    };

    GlobalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./global.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/global/global.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./global.component.css */
      "./src/app/dashboard/global/components/global/global.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../style.global.css */
      "./src/app/dashboard/global/style.global.css"))["default"]]
    })], GlobalComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/global/index.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/global/components/global/index.ts ***!
    \*************************************************************/

  /*! exports provided: GlobalComponent */

  /***/
  function srcAppDashboardGlobalComponentsGlobalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global.component */
    "./src/app/dashboard/global/components/global/global.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalComponent", function () {
      return _global_component__WEBPACK_IMPORTED_MODULE_1__["GlobalComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/components/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/dashboard/global/components/index.ts ***!
    \******************************************************/

  /*! exports provided: IndexGlobalComponent, GlobalComponent, PaisesComponent, PaisComponent */

  /***/
  function srcAppDashboardGlobalComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global.component */
    "./src/app/dashboard/global/components/global.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IndexGlobalComponent", function () {
      return _global_component__WEBPACK_IMPORTED_MODULE_1__["IndexGlobalComponent"];
    });
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global */
    "./src/app/dashboard/global/components/global/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalComponent", function () {
      return _global__WEBPACK_IMPORTED_MODULE_2__["GlobalComponent"];
    });
    /* harmony import */


    var _paises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paises */
    "./src/app/dashboard/global/components/paises/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaisesComponent", function () {
      return _paises__WEBPACK_IMPORTED_MODULE_3__["PaisesComponent"];
    });
    /* harmony import */


    var _pais__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pais */
    "./src/app/dashboard/global/components/pais/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaisComponent", function () {
      return _pais__WEBPACK_IMPORTED_MODULE_4__["PaisComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/components/pais/index.ts":
  /*!***********************************************************!*\
    !*** ./src/app/dashboard/global/components/pais/index.ts ***!
    \***********************************************************/

  /*! exports provided: PaisComponent */

  /***/
  function srcAppDashboardGlobalComponentsPaisIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pais_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pais.component */
    "./src/app/dashboard/global/components/pais/pais.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaisComponent", function () {
      return _pais_component__WEBPACK_IMPORTED_MODULE_1__["PaisComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/components/pais/pais.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/dashboard/global/components/pais/pais.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardGlobalComponentsPaisPaisComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\np {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.card-pais-confirmado {\n  color: rgb(0, 89, 253);\n}\n\n.card-pais-dia {\n  color: rgb(99, 121, 0);\n}\n\n.card-pais-recuperados {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-morte {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-ativo {\n  color: rgb(81, 253, 46);\n}\n\n.card-pais-critico {\n  color: rgb(253, 44, 44);\n}\n\n.card-pais-aguardando-teste {\n  color: rgb(192, 196, 4);\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dsb2JhbC9jb21wb25lbnRzL3BhaXMvcGFpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9nbG9iYWwvY29tcG9uZW50cy9wYWlzL3BhaXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYgLmNhcmRzIHtcbiAgd2lkdGg6IDQzMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiA5OCU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2FyZC1wYWlzLWNvbmZpcm1hZG8ge1xuICBjb2xvcjogcmdiKDAsIDg5LCAyNTMpO1xufVxuLmNhcmQtcGFpcy1kaWEge1xuICBjb2xvcjogcmdiKDk5LCAxMjEsIDApO1xufVxuLmNhcmQtcGFpcy1yZWN1cGVyYWRvcyB7XG4gIGNvbG9yOiByZ2IoODEsIDI1MywgNDYpO1xufVxuLmNhcmQtcGFpcy1tb3J0ZSB7XG4gIGNvbG9yOiByZ2IoMjUzLCA0NCwgNDQpO1xufVxuXG4uY2FyZC1wYWlzLWF0aXZvIHtcbiAgY29sb3I6IHJnYig4MSwgMjUzLCA0Nik7XG59XG4uY2FyZC1wYWlzLWNyaXRpY28ge1xuICBjb2xvcjogcmdiKDI1MywgNDQsIDQ0KTtcbn1cbi5jYXJkLXBhaXMtYWd1YXJkYW5kby10ZXN0ZSB7XG4gIGNvbG9yOiByZ2IoMTkyLCAxOTYsIDQpO1xufVxuXG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/pais/pais.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dashboard/global/components/pais/pais.component.ts ***!
    \********************************************************************/

  /*! exports provided: PaisComponent */

  /***/
  function srcAppDashboardGlobalComponentsPaisPaisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaisComponent", function () {
      return PaisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");

    var PaisComponent = /*#__PURE__*/function () {
      function PaisComponent(route, covidService) {
        _classCallCheck(this, PaisComponent);

        this.route = route;
        this.covidService = covidService;
        this.pais = {};
      }

      _createClass(PaisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paisNome = this.route.snapshot.paramMap.get('pais');
          this.carregaDadosPais();
        }
      }, {
        key: "carregaDadosPais",
        value: function carregaDadosPais() {
          var _this22 = this;

          this.covidService.pais(this.paisNome).subscribe(function (data) {
            _this22.pais = data;
            return data;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return PaisComponent;
    }();

    PaisComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_3__["CovidService"]
      }];
    };

    PaisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pais',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pais.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/pais/pais.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pais.component.css */
      "./src/app/dashboard/global/components/pais/pais.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../style.global.css */
      "./src/app/dashboard/global/style.global.css"))["default"]]
    })], PaisComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/paises/index.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dashboard/global/components/paises/index.ts ***!
    \*************************************************************/

  /*! exports provided: PaisesComponent */

  /***/
  function srcAppDashboardGlobalComponentsPaisesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _paises_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./paises.component */
    "./src/app/dashboard/global/components/paises/paises.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaisesComponent", function () {
      return _paises_component__WEBPACK_IMPORTED_MODULE_1__["PaisesComponent"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/components/paises/paises.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/dashboard/global/components/paises/paises.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardGlobalComponentsPaisesPaisesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\ndiv .cards {\n  width: 100%;\n  max-width: 430px;\n}\n\nmat-card {\n  width: 98%;\n}\n\na {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dsb2JhbC9jb21wb25lbnRzL3BhaXNlcy9wYWlzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZ2xvYmFsL2NvbXBvbmVudHMvcGFpc2VzL3BhaXNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdiAuY2FyZHMge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MzBweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogOTglO1xufVxuXG5hIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/global/components/paises/paises.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/dashboard/global/components/paises/paises.component.ts ***!
    \************************************************************************/

  /*! exports provided: PaisesComponent */

  /***/
  function srcAppDashboardGlobalComponentsPaisesPaisesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaisesComponent", function () {
      return PaisesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    var PaisesComponent = /*#__PURE__*/function () {
      function PaisesComponent(snakerBar, covidService) {
        _classCallCheck(this, PaisesComponent);

        this.snakerBar = snakerBar;
        this.covidService = covidService;
      }

      _createClass(PaisesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carregaTodosOsPaises();
        }
      }, {
        key: "carregaTodosOsPaises",
        value: function carregaTodosOsPaises() {
          var _this23 = this;

          this.covidService.paises().subscribe(function (data) {
            _this23.paisesAll = data;
            _this23.paisesFiltrados = _this23.paisesAll;
            return data;
          }, function (err) {
            var msg;

            _this23.snakerBar.open(msg, 'info', {
              duration: 5000
            });
          });
        }
      }, {
        key: "pesquisa",
        value: function pesquisa(_pesquisa) {
          this.paisesFiltrados = this.paisesAll.filter(function (item) {
            return item.country.trim().toLowerCase().includes(_pesquisa.trim().toLowerCase());
          });
        }
      }]);

      return PaisesComponent;
    }();

    PaisesComponent.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_services__WEBPACK_IMPORTED_MODULE_2__["CovidService"]
      }];
    };

    PaisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paises',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paises.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/global/components/paises/paises.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paises.component.css */
      "./src/app/dashboard/global/components/paises/paises.component.css"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../style.global.css */
      "./src/app/dashboard/global/style.global.css"))["default"]]
    })], PaisesComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/global/global-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/dashboard/global/global-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: routes, GlobalRoutingModule */

  /***/
  function srcAppDashboardGlobalGlobalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalRoutingModule", function () {
      return GlobalRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components */
    "./src/app/dashboard/global/components/index.ts");

    var routes = [{
      path: 'dashboard',
      component: _components__WEBPACK_IMPORTED_MODULE_3__["IndexGlobalComponent"],
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["GlobalComponent"]
      }, {
        path: 'paises',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["PaisesComponent"]
      }, {
        path: 'paises/:pais',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["PaisComponent"]
      }]
    }];

    var GlobalRoutingModule = function GlobalRoutingModule() {
      _classCallCheck(this, GlobalRoutingModule);
    };

    GlobalRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GlobalRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/global/global.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/global/global.module.ts ***!
    \***************************************************/

  /*! exports provided: GlobalModule */

  /***/
  function srcAppDashboardGlobalGlobalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalModule", function () {
      return GlobalModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/app/dashboard/global/components/index.ts");

    var GlobalModule = function GlobalModule() {
      _classCallCheck(this, GlobalModule);
    };

    GlobalModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_7__["GlobalComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["IndexGlobalComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PaisesComponent"], _components__WEBPACK_IMPORTED_MODULE_7__["PaisComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
    })], GlobalModule);
    /***/
  },

  /***/
  "./src/app/dashboard/global/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/dashboard/global/index.ts ***!
    \*******************************************/

  /*! exports provided: GlobalModule, routes, GlobalRoutingModule */

  /***/
  function srcAppDashboardGlobalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global.module */
    "./src/app/dashboard/global/global.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalModule", function () {
      return _global_module__WEBPACK_IMPORTED_MODULE_1__["GlobalModule"];
    });
    /* harmony import */


    var _global_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global-routing.module */
    "./src/app/dashboard/global/global-routing.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return _global_routing_module__WEBPACK_IMPORTED_MODULE_2__["routes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalRoutingModule", function () {
      return _global_routing_module__WEBPACK_IMPORTED_MODULE_2__["GlobalRoutingModule"];
    });
    /***/

  },

  /***/
  "./src/app/dashboard/global/style.global.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/global/style.global.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardGlobalStyleGlobalCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div .body {\n  height: 100%;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv .container {\n  width: 100%;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2dsb2JhbC9zdHlsZS5nbG9iYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2dsb2JhbC9zdHlsZS5nbG9iYWwuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IC5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5kaXYgLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/index.ts":
  /*!************************************!*\
    !*** ./src/app/dashboard/index.ts ***!
    \************************************/

  /*! exports provided: GlobalModule, routes, GlobalRoutingModule, BrasilModule, routesBrasil, BrasilRoutingModule */

  /***/
  function srcAppDashboardIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./src/app/dashboard/global/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalModule", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["GlobalModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["routes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GlobalRoutingModule", function () {
      return _global__WEBPACK_IMPORTED_MODULE_1__["GlobalRoutingModule"];
    });
    /* harmony import */


    var _brasil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./brasil */
    "./src/app/dashboard/brasil/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilModule", function () {
      return _brasil__WEBPACK_IMPORTED_MODULE_2__["BrasilModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routesBrasil", function () {
      return _brasil__WEBPACK_IMPORTED_MODULE_2__["routesBrasil"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilRoutingModule", function () {
      return _brasil__WEBPACK_IMPORTED_MODULE_2__["BrasilRoutingModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/components/footer/footer.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/shared/components/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/components/footer/index.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shared/components/header/header.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-header {\n  background: #fff;\n  padding: 0 30px;\n}\n\n.conteudo-header {\n  height: 64px;\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.covid-img {\n  margin-right: 20px;\n  padding-right: 20px;\n  border-right: 1px solid #eee;\n  height: 45px;\n  width: 55px;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n}\n\na {\n  font-weight: bold;\n  color: rgb(235, 119, 119);\n}\n\nbutton {\n  font-weight: bold;\n  color: rgb(235, 119, 119);\n}\n\naside {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n  padding-left: 20px;\n  border-left: 1px solid #eee;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi5jb250ZXVkby1oZWFkZXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb3ZpZC1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDU1cHg7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyMzUsIDExOSwgMTE5KTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMjM1LCAxMTksIDExOSk7XG59XG5cbmFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/shared/components/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/header/index.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/components/header/index.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedComponentsHeaderIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header.component */
    "./src/app/shared/components/header/header.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shared/components/index.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/components/index.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent, HeaderComponent */

  /***/
  function srcAppSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer */
    "./src/app/shared/components/footer/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });
    /* harmony import */


    var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header */
    "./src/app/shared/components/header/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return _header__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"];
    });
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/services/brasil-covid.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/brasil-covid.service.ts ***!
    \*********************************************************/

  /*! exports provided: BrasilCovidService */

  /***/
  function srcAppSharedServicesBrasilCovidServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrasilCovidService", function () {
      return BrasilCovidService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var BrasilCovidService = /*#__PURE__*/function () {
      function BrasilCovidService(http) {
        _classCallCheck(this, BrasilCovidService);

        this.http = http;
        this.PATHBRASILDATA = '/brazil/';
        this.PATHBRASILESTADO = '/brazil/uf/';
      }

      _createClass(BrasilCovidService, [{
        key: "estadosAll",
        value: function estadosAll() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlBrasil);
        }
      }, {
        key: "estado",
        value: function estado(_estado) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlBrasil + this.PATHBRASILESTADO + _estado);
        }
      }, {
        key: "casosPorData",
        value: function casosPorData(data) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrlBrasil + this.PATHBRASILDATA + data);
        }
      }]);

      return BrasilCovidService;
    }();

    BrasilCovidService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BrasilCovidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BrasilCovidService);
    /***/
  },

  /***/
  "./src/app/shared/services/covid.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/covid.service.ts ***!
    \**************************************************/

  /*! exports provided: CovidService */

  /***/
  function srcAppSharedServicesCovidServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidService", function () {
      return CovidService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var CovidService = /*#__PURE__*/function () {
      function CovidService(http) {
        _classCallCheck(this, CovidService);

        this.http = http;
        this.PATHALL = '/all';
        this.PATHPAISES = '/countries/';
      }

      _createClass(CovidService, [{
        key: "mundo",
        value: function mundo() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + this.PATHALL);
        }
      }, {
        key: "pais",
        value: function pais(_pais) {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + this.PATHPAISES + _pais);
        }
      }, {
        key: "paises",
        value: function paises() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + this.PATHPAISES);
        }
      }]);

      return CovidService;
    }();

    CovidService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CovidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CovidService);
    /***/
  },

  /***/
  "./src/app/shared/services/index.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/services/index.ts ***!
    \******************************************/

  /*! exports provided: CovidService, BrasilCovidService */

  /***/
  function srcAppSharedServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _covid_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./covid.service */
    "./src/app/shared/services/covid.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CovidService", function () {
      return _covid_service__WEBPACK_IMPORTED_MODULE_1__["CovidService"];
    });
    /* harmony import */


    var _brasil_covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./brasil-covid.service */
    "./src/app/shared/services/brasil-covid.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BrasilCovidService", function () {
      return _brasil_covid_service__WEBPACK_IMPORTED_MODULE_2__["BrasilCovidService"];
    });
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services */
    "./src/app/shared/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components */
    "./src/app/shared/components/index.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]],
      exports: [_components__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]],
      providers: [_services__WEBPACK_IMPORTED_MODULE_3__["CovidService"], _services__WEBPACK_IMPORTED_MODULE_3__["BrasilCovidService"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: 'https://coronavirus-19-api.herokuapp.com',
      baseUrlBrasil: 'https://covid19-brazil-api.now.sh/api/report/v1',
      baseUrlMunicipiosBrasil: 'https://brasil.io/api/dataset/covid19'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/mardonio/Documentos/Dev-Pessoal/Programação/Angular/COVID-19/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map