(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{"./src/pages/image/source/_.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),parse_collection_path=__webpack_require__("./src/utils/parse-collection-path.ts"),constants_media=__webpack_require__("./src/constants/media.ts"),collection=__webpack_require__("./src/middleware/collection.ts"),VCollectionPage=__webpack_require__("./src/components/VCollectionPage.vue"),source_vue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VImageSourcePage",components:{VCollectionPage:VCollectionPage.default},layout:"content-layout",middleware:collection.collectionMiddleware,setup:function setup(){var route=Object(dist_runtime.k)(),collectionParams=Object(parse_collection_path.a)(route.value.params.pathMatch);if(!collectionParams)throw new Error("Invalid collection path");Object(search.b)().setCollectionState(collectionParams,constants_media.d);var mediaStore=Object(media.a)();return Object(dist_runtime.i)(Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,mediaStore.fetchMedia();case 2:case"end":return _context.stop()}}),_callee)})))),{}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(source_vue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VCollectionPage",{attrs:{"media-type":"image"}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VCollectionPage:__webpack_require__("./src/components/VCollectionPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageSourcePage",exportName:"default",description:"",tags:{}}},"./src/utils/parse-collection-path.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return parseCollectionPath}));__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.string.trim.js");function parseCollectionPath(pathMatch){var pathMatchParts=pathMatch.split("/").map((function(part){return part.trim()})).filter((function(part){return""!==part}));return 1===pathMatchParts.length?{collection:"source",source:pathMatchParts[0]}:3===pathMatchParts.length&&"creator"===pathMatchParts[1]?{collection:"creator",creator:pathMatchParts[2],source:pathMatchParts[0]}:null}}}]);