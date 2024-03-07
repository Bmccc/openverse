(window.webpackJsonp=window.webpackJsonp||[]).push([[203,13,14],{"./src/components/VSearchResultsGrid/VAudioList.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),search=__webpack_require__("./src/stores/search.ts"),ui=__webpack_require__("./src/stores/ui.ts"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VAudioResult=__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue"),VSearchResultsGrid_VAudioListvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioList",components:{VAudioResult:VAudioResult.default,VSnackbar:VSnackbar.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:{results:{type:Array,default:function _default(){return[]}},kind:{type:String,required:!0},fetchState:{type:Object,required:!0},collectionLabel:{type:String,required:!0}},setup:function setup(props){var isSnackbarVisible=Object(use_audio_snackbar.a)().isVisible,uiStore=Object(ui.a)(),audioTrackSize=Object(vue.computed)((function(){return"related"===props.kind?uiStore.isBreakpoint("sm")?"m":"s":uiStore.isBreakpoint("sm")?uiStore.isBreakpoint("xl")?"l":"m":"s"})),searchStore=Object(search.b)();return{audioTrackSize:audioTrackSize,searchTerm:Object(vue.computed)((function(){return searchStore.searchTerm})),isSnackbarVisible:isSnackbarVisible}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioListvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",[_vm.results&&0===_vm.results.length&&!_vm.fetchState.isFinished?_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}):_vm._e(),_vm._v(" "),_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.isSnackbarVisible}},[_c("i18n",{attrs:{path:"audioResults.snackbar.text",tag:"p"},scopedSlots:_vm._u([_vm._l(["spacebar","left","right"],(function(keyboardKey){return{key:keyboardKey,fn:function fn(){return[_c("kbd",{key:keyboardKey,staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("audioResults.snackbar.".concat(keyboardKey))))])]},proxy:!0}}))],null,!0)})],1),_vm._v(" "),_c("ol",{staticClass:"-mx-2 flex flex-col md:-mx-4",class:"related"===_vm.kind?"gap-4":"gap-2 md:gap-1",attrs:{"aria-label":_vm.collectionLabel}},_vm._l(_vm.results,(function(audio){return _c("VAudioResult",{key:audio.id,attrs:{"search-term":_vm.searchTerm,audio:audio,layout:"row",size:_vm.audioTrackSize,kind:_vm.kind}})})),1),_vm._v(" "),"related"!==_vm.kind?_c("footer",{staticClass:"mt-4"},[_c("VLoadMore")],1):_vm._e()],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VAudioResult:__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioList",description:"This component shows a loading skeleton if the results are not yet loaded,\nand then shows the list of audio, with the Load more button if needed.",tags:{},exportName:"default",props:[{name:"results",type:{name:"AudioDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"kind",description:"If used for Related audio, do not show the Load more button.",type:{name:"ResultKind"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0},{name:"collectionLabel",description:"The label used for the list of audio for accessibility.",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VAudioResult.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vue=(__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.join.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js")),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),use_sensitive_media=__webpack_require__("./src/composables/use-sensitive-media.ts"),media=__webpack_require__("./src/constants/media.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VAudioResultvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioResult",components:{VAudioTrack:VAudioTrack.default},inheritAttrs:!1,props:{layout:{type:String,required:!0},size:{type:String},audio:{type:Object,required:!0},searchTerm:{type:String,required:!0},kind:{type:String,required:!0},relatedTo:{type:String,default:null}},setup:function setup(props){var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent,audio=Object(vue.toRefs)(props).audio,shouldBlur=Object(use_sensitive_media.a)(audio).isHidden;return{sendSelectSearchResultEvent:function sendSelectSearchResultEvent(audio,_ref){var _a,_b;_ref.inWaveform||(Object(use_audio_snackbar.a)().hide(),sendCustomEvent("SELECT_SEARCH_RESULT",{id:audio.id,kind:props.kind,mediaType:media.b,query:props.searchTerm,provider:audio.provider,relatedTo:props.relatedTo,sensitivities:null!==(_b=null===(_a=audio.sensitivity)||void 0===_a?void 0:_a.join(","))&&void 0!==_b?_b:"",isBlurred:shouldBlur.value}))},sendInteractionEvent:function sendInteractionEvent(data){var component="related"===props.kind?"VRelatedAudio":"box"===props.layout?"VAllResultsGrid":"AudioSearch";sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:component}))}}}}),VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_=VAudioResultvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("li",[_c("VAudioTrack",_vm._g(_vm._b({attrs:{audio:_vm.audio,layout:_vm.layout,size:_vm.size,"search-term":_vm.searchTerm},on:{interacted:_vm.sendInteractionEvent,mousedown:function mousedown($event){return _vm.sendSelectSearchResultEvent(_vm.audio,$event)}}},"VAudioTrack",_vm.$attrs,!1),_vm.$listeners))],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioResult",exportName:"default",description:"",tags:{},props:[{name:"layout",type:{name:'Extract<AudioLayout, "box" | "row">'},required:!0},{name:"size",type:{name:"AudioSize"}},{name:"audio",type:{name:"AudioDetail"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"kind",type:{name:"ResultKind"},required:!0},{name:"relatedTo",type:{name:"string | null"},defaultValue:{func:!1,value:"null"}}]}},"./src/pages/search/audio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VAudioList=__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue"),search_audiovue_type_script_lang_ts_=Object(vue.defineComponent)({name:"AudioSearch",components:{VAudioList:VAudioList.default},props:{results:{type:Array,required:!0},fetchState:{type:Object,required:!0}},setup:function setup(){var i18n=Object(use_i18n.a)();return{collectionLabel:Object(vue.computed)((function(){var query=Object(search.b)().searchTerm;return i18n.t("browsePage.aria.results",{query:query}).toString()}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_babel-core@7.0.0-bridge.0_css-loader@5.2.7_vue-template-compiler@2.7.15_webpack@4.46.0/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VAudioList",{attrs:{results:this.results,kind:"search","fetch-state":this.fetchState,"collection-label":this.collectionLabel}})}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioList:__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{},props:[{name:"results",type:{name:"AudioDetail[]"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0}]}}}]);