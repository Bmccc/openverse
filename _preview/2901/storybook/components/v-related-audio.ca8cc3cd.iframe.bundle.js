(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8,9,10],{"./src/components/VAudioDetails/VRelatedAudio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var asyncToGenerator=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),vue=(__webpack_require__("../node_modules/.pnpm/regenerator-runtime@0.13.11/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js")),dist_runtime=__webpack_require__("../node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_2fbzhtyog7bmybvhyeifufnl3a/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),related_media=__webpack_require__("./src/stores/media/related-media.ts"),emits=__webpack_require__("./src/types/emits.ts"),VAudioCollection=__webpack_require__("./src/components/VSearchResultsGrid/VAudioCollection.vue"),VRelatedAudiovue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VRelatedAudio",components:{VAudioCollection:VAudioCollection.default},emits:{interacted:Object(emits.a)()},setup:function setup(){var relatedMediaStore=Object(related_media.a)(),route=Object(dist_runtime.k)(),media=Object(vue.computed)((function(){var _a;return null!==(_a=relatedMediaStore.media)&&void 0!==_a?_a:[]}));Object(vue.watch)(route,function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(newRoute){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(newRoute.params.id===relatedMediaStore.mainMediaId){_context.next=3;break}return _context.next=3,relatedMediaStore.fetchMedia("audio",newRoute.params.id);case 3:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),{immediate:!0});var showRelated=Object(vue.computed)((function(){return media.value.length>0||relatedMediaStore.fetchState.isFetching})),fetchState=Object(vue.computed)((function(){return relatedMediaStore.fetchState}));return{media:media,showRelated:showRelated,fetchState:fetchState}}}),VAudioDetails_VRelatedAudiovue_type_script_lang_ts_=VRelatedAudiovue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAudioDetails_VRelatedAudiovue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _vm.showRelated?_c("section",[_c("h2",{staticClass:"heading-6 lg:heading-6 mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("audioDetails.relatedAudios"))+"\n  ")]),_vm._v(" "),_c("VAudioCollection",{staticClass:"mb-12",attrs:{results:_vm.media,"fetch-state":_vm.fetchState,"is-related":!0,"collection-label":_vm.$t("audioDetails.relatedAudios").toString()}})],1):_vm._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioCollection:__webpack_require__("./src/components/VSearchResultsGrid/VAudioCollection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedAudio",exportName:"default",description:"",tags:{},events:[{name:"interacted"}]}},"./src/components/VSearchResultsGrid/VAudioCollection.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),VAudioList=__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VSearchResultsGrid_VAudioCollectionvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioCollection",components:{VSnackbar:VSnackbar.default,VAudioList:VAudioList.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:{results:{type:Array,default:function _default(){return[]}},isRelated:{type:Boolean,required:!0},fetchState:{type:Object,required:!0},collectionLabel:{type:String,required:!0}},setup:function setup(){return{isSnackbarVisible:Object(use_audio_snackbar.a)().isVisible}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioCollectionvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",[0!==_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}),_vm._v(" "),_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.isSnackbarVisible}},[_c("i18n",{attrs:{path:"audioResults.snackbar.text",tag:"p"},scopedSlots:_vm._u([_vm._l(["spacebar","left","right"],(function(keyboardKey){return{key:keyboardKey,fn:function fn(){return[_c("kbd",{key:keyboardKey,staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("audioResults.snackbar.".concat(keyboardKey))))])]},proxy:!0}}))],null,!0)})],1),_vm._v(" "),_c("VAudioList",{attrs:{"collection-label":_vm.collectionLabel,"is-related":_vm.isRelated,results:_vm.results}}),_vm._v(" "),_vm.isRelated?_vm._e():_c("footer",[_c("VLoadMore")],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VAudioList:__webpack_require__("./src/components/VSearchResultsGrid/VAudioList.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioCollection",description:"This component shows a loading skeleton if the results are not yet loaded,\nand then shows the list of audio, with the Load more button if needed.",tags:{},exportName:"default",props:[{name:"results",type:{name:"AudioDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isRelated",description:"If used for Related audio, do not show the Load more button.",type:{name:"boolean"},required:!0},{name:"fetchState",type:{name:"FetchState<NuxtError> | FetchState"},required:!0},{name:"collectionLabel",description:"The label used for the list of audio for accessibility.",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VAudioList.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),search=__webpack_require__("./src/stores/search.ts"),ui=__webpack_require__("./src/stores/ui.ts"),VAudioResult=__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue"),VSearchResultsGrid_VAudioListvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioList",components:{VAudioResult:VAudioResult.default},props:{results:{type:Array,default:function _default(){return[]}},isRelated:{type:Boolean,required:!0},collectionLabel:{type:String,required:!0}},setup:function setup(props){var uiStore=Object(ui.a)(),audioTrackSize=Object(vue.computed)((function(){return props.isRelated?uiStore.isBreakpoint("md")?"l":"s":uiStore.isDesktopLayout?uiStore.isFilterVisible?"l":"m":"s"})),searchStore=Object(search.b)();return{audioTrackSize:audioTrackSize,searchTerm:Object(vue.computed)((function(){return searchStore.searchTerm}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioListvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("ol",{staticClass:"-mx-2 flex flex-col md:-mx-4",class:_vm.isRelated?"gap-4":"gap-2 md:gap-1",attrs:{"aria-label":_vm.collectionLabel}},_vm._l(_vm.results,(function(audio){return _c("VAudioResult",{key:audio.id,attrs:{"search-term":_vm.searchTerm,audio:audio,layout:"row",size:_vm.audioTrackSize,"is-related":_vm.isRelated}})})),1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioResult:__webpack_require__("./src/components/VSearchResultsGrid/VAudioResult.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioList",description:"The list of audio for the search results and the related audio.",tags:{},exportName:"default",props:[{name:"results",type:{name:"AudioDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isRelated",type:{name:"boolean"},required:!0},{name:"collectionLabel",description:"The label used for the list of audio for accessibility.",type:{name:"string"},required:!0}]}},"./src/components/VSearchResultsGrid/VAudioResult.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");var defineProperty=__webpack_require__("../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.14/node_modules/vue/dist/vue.js"),use_analytics=__webpack_require__("./src/composables/use-analytics.ts"),use_audio_snackbar=__webpack_require__("./src/composables/use-audio-snackbar.ts"),media=__webpack_require__("./src/constants/media.ts"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var VAudioResultvue_type_script_lang_ts_=Object(vue.defineComponent)({name:"VAudioResult",components:{VAudioTrack:VAudioTrack.default},inheritAttrs:!1,props:{layout:{type:String,required:!0},size:{type:String},audio:{type:Object,required:!0},searchTerm:{type:String,required:!0},isRelated:{type:Boolean,required:!0}},setup:function setup(props){var sendCustomEvent=Object(use_analytics.a)().sendCustomEvent;return{sendSelectSearchResultEvent:function sendSelectSearchResultEvent(audio,_ref){_ref.inWaveform||(Object(use_audio_snackbar.a)().hide(),sendCustomEvent("SELECT_SEARCH_RESULT",{id:audio.id,mediaType:media.b,query:props.searchTerm,provider:audio.provider,relatedTo:null}))},sendInteractionEvent:function sendInteractionEvent(data){var component=props.isRelated?"VRelatedAudio":"box"===props.layout?"VAllResultsGrid":"AudioSearch";sendCustomEvent("AUDIO_INTERACTION",_objectSpread(_objectSpread({},data),{},{component:component}))}}}}),VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_=VAudioResultvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.10.0_uhs2gfg5l6piymj36axgkhxosy/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VSearchResultsGrid_VAudioResultvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("li",[_c("VAudioTrack",_vm._g(_vm._b({attrs:{audio:_vm.audio,layout:_vm.layout,size:_vm.size,"search-term":_vm.searchTerm},on:{interacted:_vm.sendInteractionEvent,mousedown:function mousedown($event){return _vm.sendSelectSearchResultEvent(_vm.audio,$event)}}},"VAudioTrack",_vm.$attrs,!1),_vm.$listeners))],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioResult",exportName:"default",description:"",tags:{},props:[{name:"layout",type:{name:'Extract<AudioLayout, "box" | "row">'},required:!0},{name:"size",type:{name:"AudioSize"}},{name:"audio",type:{name:"AudioDetail"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"isRelated",type:{name:"boolean"},required:!0}]}}}]);