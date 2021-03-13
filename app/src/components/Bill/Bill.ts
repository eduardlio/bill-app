import { ref, defineComponent, watch, computed } from 'vue'
export default defineComponent({
	setup() {

		const amount = ref(0)
		const splitType = ref("even")
		const headCount = ref(1)
		const ratios = ref([])

		watch(headCount, (val) => {
			if(ratios.value.length > val) {
				ratios.value = ratios.value.slice(0, val)
			} else {
				const tmp = new Array(val - ratios.value.length).fill(0)
				ratios.value = [...ratios.value, ...tmp]
			}
		})
		const evenSplit = computed(() => {
			return (amount.value/headCount.value).toFixed(2)
		})
		const isEvenSplit = computed(() => {
			return splitType.value === 'even'
		})
		const ratiosAreValid = computed(() => {
			const sum = ratios.value.reduce((total: number, num: number) => total+num, 0);
			return sum === 100
		})
		const ratioTotal = computed(() => {
			return ratios.value.reduce((total: number, num: number) => total+num, 0);
		})

		watch(ratios, (val) => {
			console.log(ratios.value)
		})

		return {
			amount,
			splitType,
			headCount,
			ratios,
			ratioTotal,
			ratiosAreValid,
			isEvenSplit,
			evenSplit,
		}
	},
})