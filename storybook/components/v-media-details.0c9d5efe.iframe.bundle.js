(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22],{"./src/components/VMediaInfo/VMediaDetails.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.number.constructor.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),utils_metadata=__webpack_require__("./src/utils/metadata.ts"),VContentReportPopover=__webpack_require__("./src/components/VContentReport/VContentReportPopover.vue"),VMetadata=__webpack_require__("./src/components/VMediaInfo/VMetadata.vue"),VMediaTags=__webpack_require__("./src/components/VMediaInfo/VMediaTags.vue"),VMediaInfo_VMediaDetailsvue_type_script_lang_ts_=Object(vue.defineComponent)({components:{VMediaTags:VMediaTags.default,VMetadata:VMetadata.default,VContentReportPopover:VContentReportPopover.default},props:{media:{type:Object,required:!0},imageWidth:{type:Number},imageHeight:{type:Number},imageType:{type:String}},setup:function setup(props){var i18n=Object(use_i18n.a)();return{metadata:Object(vue.computed)((function(){return props.media?Object(utils_metadata.a)(props.media,i18n,{width:props.imageWidth,height:props.imageHeight,type:props.imageType}):null}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaDetailsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"flex flex-col gap-y-6"},[_c("header",{staticClass:"flex flex-row items-center justify-between"},[_c("h2",{staticClass:"heading-6 md:heading-5"},[_vm._v("\n      "+_vm._s(_vm.$t("mediaDetails.".concat(_vm.media.frontendMediaType,"Info")))+"\n    ")]),_vm._v(" "),_c("VContentReportPopover",{attrs:{media:_vm.media}})],1),_vm._v(" "),_c("div",{staticClass:"flex flex-col items-start gap-6 md:flex-row"},[_vm._t("thumbnail"),_vm._v(" "),_c("div",{staticClass:"flex w-full flex-grow flex-col gap-6"},[_vm.media.description?_c("p",[_vm._v(_vm._s(_vm.media.description))]):_vm._e(),_vm._v(" "),_c("VMediaTags",{attrs:{tags:_vm.media.tags}}),_vm._v(" "),_vm.metadata?_c("VMetadata",{attrs:{metadata:_vm.metadata}}):_vm._e()],1)],2)])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VContentReportPopover:__webpack_require__("./src/components/VContentReport/VContentReportPopover.vue").default,VMediaTags:__webpack_require__("./src/components/VMediaInfo/VMediaTags.vue").default,VMetadata:__webpack_require__("./src/components/VMediaInfo/VMetadata.vue").default}),__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"VMediaDetails",description:"",tags:{},props:[{name:"media",type:{name:"AudioDetail | ImageDetail"},required:!0},{name:"imageWidth",type:{name:"number"}},{name:"imageHeight",type:{name:"number"}},{name:"imageType",type:{name:"string"}}],slots:[{name:"thumbnail"}]}},"./src/components/VMediaInfo/VMediaTags.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.function.name.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_@nuxt+vue-app@2.17.2_nuxt@2.17.2_vue@2.7.15/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),VMediaTag=__webpack_require__("./src/components/VMediaTag/VMediaTag.vue"),VTag=__webpack_require__("./src/components/VTag/VTag.vue"),VMediaInfo_VMediaTagsvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VMediaTags",components:{VMediaTag:VMediaTag.default,VTag:VTag.default},props:{tags:{type:Array,required:!0}},setup:function setup(){var app=Object(runtime.h)().app,featureFlagStore=Object(feature_flag.c)();return{additionalSearchViews:Object(vue.computed)((function(){return featureFlagStore.isOn("additional_search_views")})),localizedTagPath:function localizedTagPath(tag){return app.localePath({path:"tag/".concat(tag.name)})}}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMediaInfo_VMediaTagsvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.tags.length&&_vm.additionalSearchViews?_c("ul",{staticClass:"flex flex-wrap gap-3"},_vm._l(_vm.tags,(function(tag,index){return _c("VTag",{key:index,attrs:{href:_vm.localizedTagPath(tag),title:tag.name}})})),1):_c("ul",{staticClass:"flex flex-wrap gap-2"},_vm._l(_vm.tags,(function(tag,index){return _c("VMediaTag",{key:index,attrs:{tag:"li"}},[_vm._v(_vm._s(tag.name))])})),1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VTag:__webpack_require__("./src/components/VTag/VTag.vue").default,VMediaTag:__webpack_require__("./src/components/VMediaTag/VMediaTag.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaTags",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"Tag[]"},required:!0}]}}}]);