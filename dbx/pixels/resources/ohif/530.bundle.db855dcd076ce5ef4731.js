"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[530],{58530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var s=n(11374),a=n.n(s),r=n(41766),i=n(80619),l=n(14283),o=n(74334),c=n(21683),u=n(77089),d=n(15575);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},p.apply(this,arguments)}const{formatDate:m}=l.utils;function S(e){const{children:t,dataSource:n,displaySets:s,viewportLabel:a,viewportOptions:S,servicesManager:I,extensionManager:g}=e,[y]=(0,d.r)(),{displaySetService:f,cornerstoneViewportService:h,measurementService:D}=I.services,v=S.viewportId;if(s.length>1)throw new Error("SR viewport should only have a single display set");const b=s[0],[E,w]=(0,c.ih)(),[k,x]=(0,r.useState)(0),[M,U]=(0,r.useState)(1),[P,N]=(0,r.useState)(null),[T,C]=(0,r.useState)(null),[O,R]=(0,r.useState)(null),{viewports:A,activeViewportId:L}=E;let F,j;if(g.registeredExtensionIds.includes("@ohif/extension-measurement-tracking")){const e=g.getModuleEntry("@ohif/extension-measurement-tracking.contextModule.TrackedMeasurementsContext"),t=(0,r.useContext)(e.context);F=t?.[0],j=t?.[1]}j||(F=null,j=(e,{displaySetInstanceUID:t})=>{D.clearMeasurements();const{SeriesInstanceUIDs:n}=(0,u.A)({servicesManager:I,extensionManager:g,appConfig:y},t),s=f.getDisplaySetsForSeries(n[0]);s.length&&w.setDisplaySetsForViewports([{viewportId:L,displaySetInstanceUIDs:[s[0].displaySetInstanceUID]}])});const V=(0,r.useCallback)((e=>{const{measurements:t}=b;(0,o.m1)(O,t.map((e=>e.TrackingUniqueIdentifier)),e)}),[O,k,b]),q=e=>{R(e.detail.element)},B=(0,r.useCallback)((e=>{const{StudyInstanceUID:t,displaySetInstanceUID:n,sopClassUids:s}=b;t&&n&&(s&&s.length>1&&console.warn("More than one SOPClassUID in the same series is not yet supported."),async function(e,t,n){const{measurements:s}=e,a=s[t],{displaySetInstanceUID:r}=a,i=n.getDisplaySetByUID(r),l=i.images[0],o={PatientID:l.PatientID,PatientName:l.PatientName,PatientSex:l.PatientSex,PatientAge:l.PatientAge,SliceThickness:l.SliceThickness,StudyDate:l.StudyDate,SeriesDescription:l.SeriesDescription,SeriesInstanceUID:l.SeriesInstanceUID,SeriesNumber:l.SeriesNumber,ManufacturerModelName:l.ManufacturerModelName,SpacingBetweenSlices:l.SpacingBetweenSlices};return{referencedDisplaySetMetadata:o,referencedDisplaySet:i}}(b,e,f).then((({referencedDisplaySet:t,referencedDisplaySetMetadata:n})=>{if(x(e),N(t),C(n),t.displaySetInstanceUID===P?.displaySetInstanceUID){const{measurements:t}=b,n=h.getCornerstoneViewport(v),s=n.getImageIds().indexOf(t[e].imageId);-1!==s&&n.setImageIdIndex(s)}})))}),[n,b,P,v]),_=(0,r.useCallback)((()=>{if(!P)return null;const{component:t}=g.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{measurements:n}=b,s=n[k];if(!s)return null;const a=P.images.findIndex((e=>e.imageId===s.imageId));return r.createElement(t,p({},e,{displaySets:[P],viewportOptions:{...S,toolGroupId:"SRToolGroup",viewportType:"stack",positionIds:null},onElementEnabled:q,initialImageIndex:a,isJumpToMeasurementDisabled:!0}))}),[P,v,k]),$=(0,r.useCallback)((e=>{let t=k;"right"===e?(t++,t>=M&&(t=0)):(t--,t<0&&(t=M-1)),V(t),B(t)}),[k,M,B,V]);(0,r.useEffect)((()=>{const e=f.subscribe(f.EVENTS.DISPLAY_SETS_REMOVED,(({displaySetInstanceUIDs:e})=>{const t=A.get(L);e.includes(t.displaySetInstanceUID)&&w.setDisplaySetsForViewport({viewportId:L,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,r.useEffect)((()=>{b.isLoaded||b.load();const e=b.measurements.length;U(e)}),[b]),(0,r.useEffect)((()=>{O&&b.isLoaded&&V(k)}),[k,O,V,b]);let G=F?.context?.trackedSeries?.length>0;(0,r.useEffect)((()=>{G=F?.context?.trackedSeries?.length>0}),[F]),(0,r.useEffect)((()=>{B(k)}),[n,b]);let H=null;if(!P||!T)return null;t&&t.length&&(H=t.map(((e,t)=>e&&r.cloneElement(e,{viewportId:v,key:t}))));const{PatientID:Y,PatientName:J,PatientSex:z,PatientAge:K,SliceThickness:Q,ManufacturerModelName:W,StudyDate:X,SeriesDescription:Z,SpacingBetweenSlices:ee,SeriesNumber:te}=T;return r.createElement(r.Fragment,null,r.createElement(c.cS,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:$,getStatusComponent:()=>function({srDisplaySet:e,viewportId:t,isRehydratable:n,isLocked:s,sendTrackedMeasurementsEvent:a}){const l=()=>{a("HYDRATE_SR",{displaySetInstanceUID:e.displaySetInstanceUID,viewportId:t})},{t:o}=(0,i.Bd)("Common"),u=o("LOAD"),d=n&&!s?3:n&&s?2:1;let p=null,m=null;switch(d){case 1:m=()=>r.createElement(c.In,{name:"status-alert"}),p=()=>r.createElement("div",null,"This structured report is not compatible",r.createElement("br",null),"with this application.");break;case 2:m=()=>r.createElement(c.In,{name:"status-locked"}),p=()=>r.createElement("div",null,"This structured report is currently read-only",r.createElement("br",null),"because you are tracking measurements in",r.createElement("br",null),"another viewport.");break;case 3:m=()=>r.createElement(c.In,{className:"text-aqua-pale",name:"status-untracked"}),p=()=>r.createElement("div",null,`Click ${u} to restore measurements.`)}const S=()=>r.createElement("div",{className:"flex h-6 cursor-default text-sm leading-6 text-white"},r.createElement("div",{className:"bg-customgray-100 flex min-w-[45px] items-center rounded-l-xl rounded-r p-1"},r.createElement(m,null),r.createElement("span",{className:"ml-1"},"SR")),3===d&&r.createElement("div",{className:"bg-primary-main hover:bg-primary-light ml-1 cursor-pointer rounded px-1.5 hover:text-black",onMouseUp:l},u));return r.createElement(r.Fragment,null,p&&r.createElement(c.m_,{content:r.createElement(p,null),position:"bottom-left"},r.createElement(S,null)),!p&&r.createElement(S,null))}({srDisplaySet:b,viewportId:v,isTracked:!1,isRehydratable:b.isRehydratable,isLocked:G,sendTrackedMeasurementsEvent:j}),studyData:{label:a,useAltStyling:!0,studyDate:m(X),currentSeries:te,seriesDescription:Z||"",patientInformation:{patientName:J?l.Ay.utils.formatPN(J.Alphabetic):"",patientSex:z||"",patientAge:K||"",MRN:Y||"",thickness:Q?`${parseFloat(Q).toFixed(2)}mm`:"",spacing:void 0!==ee?`${ee.toFixed(2)}mm`:"",scanner:W||""}}}),r.createElement("div",{className:"relative flex h-full w-full flex-row overflow-hidden"},_(),H))}S.propTypes={displaySets:a().arrayOf(a().object),viewportId:a().string.isRequired,dataSource:a().object,children:a().node,viewportLabel:a().string,customProps:a().object,viewportOptions:a().object,viewportLabel:a().string,servicesManager:a().instanceOf(l.CS).isRequired,extensionManager:a().instanceOf(l.nH).isRequired},S.defaultProps={customProps:{}};const I=S}}]);
//# sourceMappingURL=530.bundle.db855dcd076ce5ef4731.js.map