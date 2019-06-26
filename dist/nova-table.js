/*
* nova-table v0.1.0
* Copyright (c) 2019 erikwett <erik.wetterberg@gmail.com>
* Released under the MIT license.
*/

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["nova-table"]=e()}(this,function(){"use strict";var t={showTitles:!0,title:"",subtitle:"",footnote:"",qHyperCubeDef:{qDimensions:[],qMeasures:[],qInitialDataFetch:[{qWidth:10,qHeight:50}]}},e={targets:[]};return function(n){return{qae:{properties:t,data:e},component:{created:function(){console.log("created",n)},mounted:function(t){this.element=t,this.element.innerHTML="nova-table"},render:function(t){var e=t.layout,n=t.context,o=e.qHyperCube,i="<table><thead><tr>";i+=o.qDimensionInfo.map(function(t){return"<th>".concat(t.qFallbackTitle,"</th>")}).join(""),i+=o.qMeasureInfo.map(function(t){return"<th>".concat(t.qFallbackTitle,"</th>")}).join(""),i+="</tr></thead><tbody>",i+=o.qDataPages[0].qMatrix.map(function(t){return"<tr>".concat(t.map(function(t){return"<td>".concat(t.qText,"</td>")}).join(""),"</tr>")}),i+="</tbody></table>",this.element.innerHTML=i,console.log("render",this,e,n)},resize:function(){},willUnmount:function(){},destroy:function(){}}}}});
//# sourceMappingURL=nova-table.js.map
