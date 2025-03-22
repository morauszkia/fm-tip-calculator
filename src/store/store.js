import { reactive, computed } from "vue";

export const store = reactive({
  bill: 0,
  people: 1,
  tip: 5,
  totalTip: computed(() => store.bill * (store.tip / 100)),
  tipPerPerson: computed(() => store.totalTip / store.people),
  totalPerPerson: computed(() => (store.bill + store.totalTip) / store.people),
});
