(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{9579:function(e,n,a){"use strict";a.r(n),n["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-calendar\n      v-model="selectedDate"\n      view="scheduler"\n      :resources="resources"\n      locale="en-us"\n      style="height: 500px;"\n    >\n      <template #scheduler-day-header="{ day }">\n        <div class="row justify-center items-center">\n          <q-btn class="fit">Day: {{ day.day }}</q-btn>\n        </div>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      resources: [\n        { label: \'John\' },\n        { label: \'Mary\' },\n        { label: \'Susan\' },\n        { label: \'Olivia\' },\n        { label: \'Board Room\' },\n        { label: \'Room-1\' },\n        { label: \'Room-2\' }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);