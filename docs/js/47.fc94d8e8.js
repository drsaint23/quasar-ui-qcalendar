(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[47],{4882:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%; overflow: auto; \">\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"month\"\n      :disabled-days=\"disabledDays\"\n      :day-style=\"modifiedStyle\"\n      locale=\"en-us\"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: '2019-04-01',\n      disabledDays: [\n        '2019-04-02',\n        '2019-04-03',\n        '2019-04-04',\n        '2019-04-05'\n      ]\n    }\n  },\n  methods: {\n    modifiedStyle (scope) {\n      if (scope.disabled === true) {\n        return {\n          backgroundColor: '#ffcb9c!important'\n        }\n      }\n      return {}\n    }\n  }\n}\n<\/script>\n"}}]);