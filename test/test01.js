function tiers(index) {
	var print = "";
	for ( i = 0; i < index; i++) {
        tier = '';
        for (j = 1; j < index - i; j++) {
          tier = tier + ' ';
        }
        for ( j = 0; j < i + 1; j++) {
          tier = tier + '*';
        }
		print = print + tier + "\n";
        
      }
	  return print;
}
tiers(13);

module.exports = tiers;
