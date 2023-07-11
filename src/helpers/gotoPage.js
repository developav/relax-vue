/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import eventBus from 'eventBus';

export default function gotoPage(pageName, pageParams) {
  eventBus.$emit('gotoPage', pageName, pageParams);
}
