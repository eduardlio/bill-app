<template lang="pug">
div
	h2 bill form
	div
		label(for="amount") amount
		input(v-model="amount" type="number" name="amount" id="amount")

	div
		p {{ splitType }}

		label(for="even") even split
		input(type="radio", name="split", id="even", value="even", v-model="splitType")

		label(for="ratio") ratio split
		input(type="radio", name="split", id="ratio", value="ratio", v-model="splitType")

	div
		label(for="people") People
		input(v-model="headCount" type="number" id="people" min="1" max="5")

	p(v-if="isEvenSplit") Per person: $ {{ evenSplit }}

	div.ratios(v-if="!isEvenSplit")
		p {{ratioTotal}}
		p(v-if="!ratiosAreValid") Ratios are not balanced!
		div.ratio(v-for="(ratio,index) in ratios" :key="index")
			label(:for="'ratio-'+index") {{ index }}
			input(:bind="ratios[index]" min="0" max="100" type="number")
			p amount = $ {{ parseFloat(ratio) * amount }}

</template>
<script>
import Bill from './Bill.ts'
export default Bill
</script>