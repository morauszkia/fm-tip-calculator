import { reactive, computed } from "vue";

export const store = reactive({
  bill: undefined,
  people: undefined,
  tip: undefined,
  totalTip: computed(() => store.bill * (store.tip / 100)),
  tipPerPerson: computed(() => (store.totalTip / store.people).toFixed(2)),
  totalPerPerson: computed(() =>
    ((store.bill + store.totalTip) / store.people).toFixed(2)
  ),
});
