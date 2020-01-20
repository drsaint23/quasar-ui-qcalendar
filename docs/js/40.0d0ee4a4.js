(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"75de":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div style="overflow: hidden; max-width: 800px; width: 100%;">\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="day"\n      locale="en-us"\n      v-touch-swipe.mouse.left.right="handleSwipe"\n      animated\n      transition-prev="slide-right"\n      transition-next="slide-left"\n      style="height: 400px;"\n    />\n  </div>\n</template>\n\n<script>\n// import { stopAndPrevent } from \'quasar/src/utils/event\'\n\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      dragging: false, // used for drag-and-drop\n      ignoreNextSwipe: false // used for drag-and-drop\n    }\n  },\n\n  methods: {\n    calendarNext () {\n      this.$refs.calendar.next()\n    },\n    calendarPrev () {\n      this.$refs.calendar.prev()\n    },\n    handleSwipe ({ evt, ...info }) {\n      if (this.dragging === false) {\n        if (info.duration >= 30 && this.ignoreNextSwipe === false) {\n          if (info.direction === \'right\') {\n            this.calendarPrev()\n          } else if (info.direction === \'left\') {\n            this.calendarNext()\n          }\n        } else {\n          this.ignoreNextSwipe = false\n        }\n      }\n      // stopAndPrevent(evt)\n      evt.cancelable !== false && evt.preventDefault()\n      evt.stopPropagation()\n    }\n  }\n}\n<\/script>\n'}}]);