<template>
	<div>
		<nuxt />
	</div>
</template>
<script>
import Vue 	from 'vue'
Vue.config.productionTip = false
export default {}
</script>
<style lang="scss">
@import "~assets/scss/mixins";
body{
	font-family: 'Montserrat', sans-serif;
}

$h2-font-size: type-scale(2);
$h2-line: $blh;
$h2-lines: 3;
$h2-line-height: $h2-line * $h2-lines;
$h2-margin-top: 2 * $h2-line;
$h2-margin-bottom: 1 * $h2-line;

h2{
	font-size: $h2-font-size;
	line-height: $h2-line-height;
	margin-top: $h2-margin-top;
	margin-bottom: $h2-margin-bottom;
	text-transform: uppercase;
	font-weight: 200;
}

input{
	@include padding(null 5px);
	line-height: $blh*2;
	font-size: type-scale(1);
	margin-bottom: $blh;
}
</style>
