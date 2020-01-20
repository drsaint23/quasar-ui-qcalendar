(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[53],{"074e":function(e,n,t){"use strict";t.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <div class="q-gutter-sm">\n      <q-checkbox v-model="mobile" label="Use Touch (set if on mobile)" />\n    </div>\n    <q-separator></q-separator>\n    <div class="row" style="overflow: hidden;">\n      <q-calendar\n        v-model="selectedDate1"\n        view="month"\n        locale="en-us"\n        :mini-mode="true"\n        short-weekday-label\n        animated\n        :selected-start-end-dates="startEndDates"\n        :day-class="classDay"\n        @mousedown:day="onMouseDownDay"\n        @mouseup:day="onMouseUpDay"\n        @mousemove:day="onMouseMoveDay"\n      />\n      <q-separator vertical />\n      <q-calendar\n        v-model="selectedDate2"\n        view="month"\n        locale="en-us"\n        :mini-mode="true"\n        short-weekday-label\n        animated\n        :selected-start-end-dates="startEndDates"\n        :day-class="classDay"\n        @mousedown:day="onMouseDownDay"\n        @mouseup:day="onMouseUpDay"\n        @mousemove:day="onMouseMoveDay"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nconst CURRENT_MONTH = new Date()\n\nfunction getCurrentMonth (month) {\n  const newDay = new Date(CURRENT_MONTH)\n  newDay.setMonth(month)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate1: \'\',\n      selectedDate2: \'\',\n      anchorTimestamp: \'\',\n      otherTimestamp: \'\',\n      mouseDown: false,\n      mobile: false\n    }\n  },\n\n  beforeMount () {\n    this.selectedDate1 = getCurrentMonth(CURRENT_MONTH.getMonth())\n    this.selectedDate2 = getCurrentMonth(CURRENT_MONTH.getMonth() + 1)\n  },\n\n  computed: {\n    startEndDates () {\n      const dates = []\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        if (this.anchorDayIdentifier <= this.otherDayIdentifier) {\n          dates.push(this.anchorTimestamp.date, this.otherTimestamp.date)\n        } else {\n          dates.push(this.otherTimestamp.date, this.anchorTimestamp.date)\n        }\n      }\n      return dates\n    },\n    anchorDayIdentifier () {\n      if (this.anchorTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.anchorTimestamp)\n      }\n      return false\n    },\n    otherDayIdentifier () {\n      if (this.otherTimestamp !== \'\') {\n        return QCalendar.getDayIdentifier(this.otherTimestamp)\n      }\n      return false\n    },\n    lowIdentifier () {\n      // returns lowest of the two values\n      return Math.min(this.anchorDayIdentifier, this.otherDayIdentifier)\n    },\n    highIdentifier () {\n      // returns highest of the two values\n      return Math.max(this.anchorDayIdentifier, this.otherDayIdentifier)\n    }\n  },\n\n  methods: {\n    classDay (timestamp) {\n      if (this.anchorDayIdentifier !== false && this.otherDayIdentifier !== false) {\n        return this.getBetween(timestamp)\n      }\n    },\n\n    getBetween (timestamp) {\n      const nowIdentifier = QCalendar.getDayIdentifier(timestamp)\n      return {\n        \'q-selected-day-first\': this.lowIdentifier === nowIdentifier,\n        \'q-selected-day\': this.lowIdentifier <= nowIdentifier && this.highIdentifier >= nowIdentifier,\n        \'q-selected-day-last\': this.highIdentifier === nowIdentifier\n      }\n    },\n\n    onMouseDownDay (e) {\n      if (this.mobile === true &&\n        this.anchorTimestamp !== null &&\n        this.otherTimestamp !== null &&\n        this.anchorTimestamp.date === this.otherTimestamp.date) {\n        this.otherTimestamp = e\n        this.mouseDown = false\n        return\n      }\n      // mouse is down, start selection and capture current\n      this.mouseDown = true\n      this.anchorTimestamp = e\n      this.otherTimestamp = e\n    },\n\n    onMouseUpDay (e) {\n      // mouse is up, capture last and cancel selection\n      this.otherTimestamp = e\n      this.mouseDown = false\n    },\n\n    onMouseMoveDay (e) {\n      if (this.mouseDown === true) {\n        this.otherTimestamp = e\n      }\n    }\n  }\n}\n<\/script>\n'}}]);