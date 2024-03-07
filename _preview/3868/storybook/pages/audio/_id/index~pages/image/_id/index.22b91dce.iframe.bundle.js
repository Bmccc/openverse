(window.webpackJsonp=window.webpackJsonp||[]).push([[5,17,21,22,23,26],{"./src/components/VHideButton.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),ui=__webpack_require__("./src/stores/ui.ts"),emits=__webpack_require__("./src/types/emits.ts"),components_VHideButtonvue_type_script_lang_js_=Object(runtime.b)({emits:{click:Object(emits.a)()},setup:function setup(){var uiStore=Object(ui.a)();return{isMd:Object(runtime.a)((function(){return uiStore.isBreakpoint("md")}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VHideButtonvue_type_script_lang_js_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",[_vm.isMd?_c("VButton",{staticClass:"label-bold",attrs:{variant:"transparent-gray",size:"small","has-icon-end":""},on:{click:function click($event){return _vm.$emit("click")}}},[_c("span",{staticClass:"hidden md:block"},[_vm._v(_vm._s(_vm.$t("sensitiveContent.singleResult.hide")))]),_vm._v(" "),_c("VIcon",{attrs:{name:"eye-closed"}})],1):_c("VIconButton",{attrs:{variant:"transparent-gray","icon-props":{name:"eye-closed"},size:"small",label:_vm.$t("sensitiveContent.singleResult.hide").toString()},on:{click:function click($event){return _vm.$emit("click")}}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VIconButton:__webpack_require__("./src/components/VIconButton/VIconButton.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VHideButton",description:"",tags:{},events:[{name:"click"}]}},"./src/components/VMediaInfo/VMediaDetails.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.number.constructor.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),utils_metadata=__webpack_require__("./src/utils/metadata.ts"),VContentReportPopover=__webpack_require__("./src/components/VContentReport/VContentReportPopover.vue"),VMetadata=__webpack_require__("./src/components/VMediaInfo/VMetadata.vue"),VMediaTags=__webpack_require__("./src/components/VMediaInfo/VMediaTags.vue"),VMediaInfo_VMediaDetailsvue_type_script_lang_ts_=Object(vue.defineComponent)({components:{VMediaTags:VMediaTags.default,VMetadata:VMetadata.default,VContentReportPopover:VContentReportPopover.default},props:{media:{type:Object,required:!0},imageWidth:{type:Number},imageHeight:{type:Number},imageType:{type:String}},setup:function setup(props){var i18n=Object(use_i18n.a)();return{metadata:Object(vue.computed)((function(){return props.media?Object(utils_metadata.a)(props.media,i18n,{width:props.imageWidth,height:props.imageHeight,type:props.imageType}):null}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaDetailsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"flex flex-col gap-y-6"},[_c("header",{staticClass:"flex flex-row items-center justify-between"},[_c("h2",{staticClass:"heading-6 md:heading-5"},[_vm._v("\n      "+_vm._s(_vm.$t("mediaDetails.".concat(_vm.media.frontendMediaType,"Info")))+"\n    ")]),_vm._v(" "),_c("VContentReportPopover",{attrs:{media:_vm.media}})],1),_vm._v(" "),_c("div",{staticClass:"flex flex-col items-start gap-6 md:flex-row"},[_vm._t("thumbnail"),_vm._v(" "),_c("div",{staticClass:"flex w-full flex-grow flex-col gap-6"},[_vm.media.description?_c("p",[_vm._v(_vm._s(_vm.media.description))]):_vm._e(),_vm._v(" "),_c("VMediaTags",{attrs:{tags:_vm.media.tags}}),_vm._v(" "),_vm.metadata?_c("VMetadata",{attrs:{metadata:_vm.metadata}}):_vm._e()],1)],2)])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VContentReportPopover:__webpack_require__("./src/components/VContentReport/VContentReportPopover.vue").default,VMediaTags:__webpack_require__("./src/components/VMediaInfo/VMediaTags.vue").default,VMetadata:__webpack_require__("./src/components/VMediaInfo/VMetadata.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VMediaDetails",description:"",tags:{},props:[{name:"media",type:{name:"AudioDetail | ImageDetail"},required:!0},{name:"imageWidth",type:{name:"number"}},{name:"imageHeight",type:{name:"number"}},{name:"imageType",type:{name:"string"}}],slots:[{name:"thumbnail"}]}},"./src/components/VMediaInfo/VMediaTags.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.function.name.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),VMediaTag=__webpack_require__("./src/components/VMediaTag/VMediaTag.vue"),VTag=__webpack_require__("./src/components/VTag/VTag.vue"),VMediaInfo_VMediaTagsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VMediaTags",components:{VMediaTag:VMediaTag.default,VTag:VTag.default},props:{tags:{type:Array,required:!0}},setup:function setup(){var app=Object(runtime.h)().app,featureFlagStore=Object(feature_flag.c)();return{additionalSearchViews:Object(vue.computed)((function(){return featureFlagStore.isOn("additional_search_views")})),localizedTagPath:function localizedTagPath(tag){return app.localePath({path:"tag/".concat(tag.name)})}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaTagsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.tags.length&&_vm.additionalSearchViews?_c("ul",{staticClass:"flex flex-wrap gap-3"},_vm._l(_vm.tags,(function(tag,index){return _c("VTag",{key:index,attrs:{href:_vm.localizedTagPath(tag),title:tag.name}})})),1):_c("ul",{staticClass:"flex flex-wrap gap-2"},_vm._l(_vm.tags,(function(tag,index){return _c("VMediaTag",{key:index,attrs:{tag:"li"}},[_vm._v(_vm._s(tag.name))])})),1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VTag:__webpack_require__("./src/components/VTag/VTag.vue").default,VMediaTag:__webpack_require__("./src/components/VMediaTag/VMediaTag.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaTags",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Tag[]"},required:!0}]}},"./src/components/VMediaInfo/VRelatedMedia.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js")),dist_runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),related_media=__webpack_require__("./src/stores/media/related-media.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VMediaCollection=__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue"),VRelatedMediavue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VRelatedMedia",components:{VMediaCollection:VMediaCollection.default},props:{mediaType:{type:String,required:!0},relatedTo:{type:String,required:!0}},setup:function setup(props){var relatedMediaStore=Object(related_media.a)(),route=Object(dist_runtime.k)(),results=Object(vue.computed)((function(){var _a,media=null!==(_a=relatedMediaStore.media)&&void 0!==_a?_a:[];return{type:props.mediaType,items:media}}));Object(vue.watch)(route,function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(newRoute){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(newRoute.params.id===relatedMediaStore.mainMediaId){_context.next=3;break}return _context.next=3,relatedMediaStore.fetchMedia(props.mediaType,newRoute.params.id);case 3:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),{immediate:!0});var isFetching=Object(vue.computed)((function(){return relatedMediaStore.fetchState.isFetching})),showRelated=Object(vue.computed)((function(){return results.value.items.length>0||isFetching.value})),searchTerm=Object(vue.computed)((function(){var q=Array.isArray(route.value.query.q)?route.value.query.q[0]:route.value.query.q;return null!=q?q:""})),i18n=Object(use_i18n.a)(),collectionLabel=Object(vue.computed)((function(){var key="audio"===props.mediaType?"audioDetails.relatedAudios":"imageDetails.relatedImages";return i18n.t(key).toString()}));return{results:results,showRelated:showRelated,isFetching:isFetching,searchTerm:searchTerm,collectionLabel:collectionLabel}}}),VMediaInfo_VRelatedMediavue_type_script_lang_ts_=VRelatedMediavue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VRelatedMediavue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.showRelated?_c("VMediaCollection",{attrs:{results:_vm.results,"is-fetching":_vm.isFetching,"collection-label":_vm.collectionLabel,kind:"related","related-to":_vm.relatedTo,"search-term":_vm.searchTerm,"aria-label":_vm.collectionLabel},scopedSlots:_vm._u([{key:"header",fn:function fn(){return[_c("h2",{staticClass:"heading-6 mb-6",class:"image"===_vm.results.type?"md:heading-5":"lg:heading-6",attrs:{id:"related-heading"}},[_vm._v("\n      "+_vm._s(_vm.collectionLabel)+"\n    ")])]},proxy:!0}],null,!1,1311287796)}):_vm._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMediaCollection:__webpack_require__("./src/components/VSearchResultsGrid/VMediaCollection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedMedia",exportName:"default",description:"",tags:{},props:[{name:"mediaType",type:{name:"SupportedMediaType"},required:!0},{name:"relatedTo",type:{name:"string"},required:!0}]}},"./src/components/VSingleResultControls.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),use_sensitive_media=__webpack_require__("./src/composables/use-sensitive-media.ts"),search=__webpack_require__("./src/stores/search.ts"),VBackToSearchResultsLink=__webpack_require__("./src/components/VBackToSearchResultsLink.vue"),VHideButton=__webpack_require__("./src/components/VHideButton.vue"),components_VSingleResultControlsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VSingleResultControls",components:{VBackToSearchResultsLink:VBackToSearchResultsLink.default,VHideButton:VHideButton.default},props:{media:{type:Object,required:!0}},setup:function setup(props){var searchStore=Object(search.b)(),backToSearchPath=Object(vue.computed)((function(){return searchStore.backToSearchPath})),_useSensitiveMedia=Object(use_sensitive_media.a)(props.media);return{hide:_useSensitiveMedia.hide,canBeHidden:_useSensitiveMedia.canBeHidden,backToSearchPath:backToSearchPath}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VSingleResultControlsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.canBeHidden||_vm.backToSearchPath,expression:"canBeHidden || backToSearchPath"}],staticClass:"flex w-full justify-between px-4 pb-4 md:px-8"},[_vm.backToSearchPath?_c("VBackToSearchResultsLink",{attrs:{id:_vm.$route.params.id,href:_vm.backToSearchPath}}):_vm._e(),_vm._v(" "),_vm.canBeHidden?_c("VHideButton",{staticClass:"ml-auto",on:{click:_vm.hide}}):_vm._e()],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VBackToSearchResultsLink:__webpack_require__("./src/components/VBackToSearchResultsLink.vue").default,VHideButton:__webpack_require__("./src/components/VHideButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSingleResultControls",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"AudioDetail | ImageDetail"},required:!0}]}},"./src/composables/use-single-result-page-meta.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return use_single_result_page_meta_useSingleResultPageMeta}));var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),use_single_result_page_meta_useSingleResultPageMeta=function useSingleResultPageMeta(media){var _a,i18n=Object(use_i18n.a)(),titles=function titles(){return media.value?{genericTitle:"".concat(i18n.t("mediaDetails.reuse.".concat(media.value.frontendMediaType))),sensitiveTitle:"".concat(i18n.t("sensitiveContent.title.".concat(media.value.frontendMediaType)))}:{genericTitle:"",sensitiveTitle:""}},isSensitive=Object(vue.computed)((function(){var _a,_b;return null!==(_b=null===(_a=media.value)||void 0===_a?void 0:_a.isSensitive)&&void 0!==_b&&_b})),getMediaTitle=function getMediaTitle(){var _a;return media.value?isSensitive.value?titles().sensitiveTitle:null!==(_a=media.value.title)&&void 0!==_a?_a:titles().genericTitle:""},getPageTitle=function getPageTitle(){return"".concat(getMediaTitle()," | Openverse")},pageTitle=Object(vue.ref)(getPageTitle()),detailPageMeta=function createDetailPageMeta(_ref){var title=_ref.title,thumbnail=_ref.thumbnail,isSensitive=_ref.isSensitive,head={},meta=[{hid:"robots",name:"robots",content:"noindex"}];return title&&meta.push({hid:"og:title",property:"og:title",content:title}),thumbnail&&!isSensitive&&meta.push({hid:"og:image",property:"og:image",content:thumbnail}),head.meta=meta,head}({title:getMediaTitle(),thumbnail:null===(_a=media.value)||void 0===_a?void 0:_a.thumbnail,isSensitive:isSensitive.value});return Object(runtime.m)(media,(function(){pageTitle.value=getPageTitle()})),{pageTitle:pageTitle,detailPageMeta:detailPageMeta}}}}]);