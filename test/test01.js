function tiers(index) {
	for ( i = 0; i < index; i++) {
        tier = '';
        for (j = 1; j < index - i; j++) {
          tier = tier + ' ';
        }
        for ( j = 0; j < i + 1; j++) {
          tier = tier + '*';
        }
        console.log(tier);
      }
	return "";
}

module.exports = tiers;
