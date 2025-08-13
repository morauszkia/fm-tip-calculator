import { reactive, computed } from "vue";

export const store = reactive({
  bill: undefined,
  people: undefined,
  tip: undefined,
  customTip: false,
  formIsTouched: computed(() => store.bill || store.people || store.tip),
  totalTip: computed(() => store.bill * (store.tip / 100)),
  tipPerPerson: computed(() => store.totalTip / store.people),
  totalPerPerson: computed(() => (store.bill + store.totalTip) / store.people),
  reset: () => {
    store.bill = undefined;
    store.people = undefined;
    store.tip = undefined;
    store.customTip = false;
  },
});
