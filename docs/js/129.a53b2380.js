(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[129],{f4f7:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"max-width":"800px",width:"100%"}},[i("div",{staticClass:"q-gutter-sm"},[i("q-checkbox",{attrs:{label:"Use Touch (set if on mobile)"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),i("q-separator"),i("div",{staticStyle:{overflow:"hidden"}},[i("q-calendar",{ref:"calendar",attrs:{view:"month",locale:"en-us","selected-start-end-dates":e.startEndDates,"day-style":e.styleDay},on:{"mousedown:day":e.onMouseDownDay,"mouseup:day":e.onMouseUpDay,"mousemove:day":e.onMouseMoveDay},model:{value:e.selectedDate,callback:function(t){e.selectedDate=t},expression:"selectedDate"}})],1)],1)},a=[],s=i("384e"),o={data:function(){return{selectedDate:"",anchorTimestamp:null,otherTimestamp:null,mouseDown:!1,mobile:!1}},computed:{startEndDates:function(){var e=[];return!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier&&(this.anchorDayIdentifier<=this.otherDayIdentifier?e.push(this.anchorTimestamp.date,this.otherTimestamp.date):e.push(this.otherTimestamp.date,this.anchorTimestamp.date)),e},anchorDayIdentifier:function(){return null!==this.anchorTimestamp&&s["a"].getDayIdentifier(this.anchorTimestamp)},otherDayIdentifier:function(){return null!==this.otherTimestamp&&s["a"].getDayIdentifier(this.otherTimestamp)},lowIdentifier:function(){return Math.min(this.anchorDayIdentifier,this.otherDayIdentifier)},highIdentifier:function(){return Math.max(this.anchorDayIdentifier,this.otherDayIdentifier)}},methods:{styleDay:function(e){if(!1!==this.anchorDayIdentifier&&!1!==this.otherDayIdentifier&&!0===this.isBetween(e))return{color:"blue",background:"#CCCCFF"}},isBetween:function(e){var t=s["a"].getDayIdentifier(e);return this.lowIdentifier<=t&&this.highIdentifier>=t},onMouseDownDay:function(e){if(!0===this.mobile&&null!==this.anchorTimestamp&&null!==this.otherTimestamp&&this.anchorTimestamp.date===this.otherTimestamp.date)return this.otherTimestamp=e,void(this.mouseDown=!1);this.mouseDown=!0,this.anchorTimestamp=e,this.otherTimestamp=e},onMouseUpDay:function(e){this.otherTimestamp=e,this.mouseDown=!1},onMouseMoveDay:function(e){!0===this.mouseDown&&(this.otherTimestamp=e)}}},r=o,h=i("2877"),m=Object(h["a"])(r,n,a,!1,null,null,null);t["default"]=m.exports}}]);