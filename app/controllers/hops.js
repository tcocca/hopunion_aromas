import Ember from 'ember';

export default Ember.ArrayController.extend({
  aromas: [
    'Fruity',
    'Citrus',
    'Stone-Fruit',
    'Floral',
    'Spicy',
    'Tobacco/Earthy',
    'Cedar',
    'Herbal',
    'Tropical-Fruit',
    'Pine',
    'Grassy'
  ],

  filter: '',

  filteredContent: function(){
    var filter = this.get('filter');
    var hops = this.get('arrangedContent');
    if(filter == '') {
      return hops;
    }
    else {
      return hops.filter(function(hop) {
        return hop.get('primary_aroma') == filter || hop.get('secondary_aroma') == filter || hop.get('tertiary_aroma') == filter;
      });
    }
  }.property('arrangedContent', 'filter', 'filters'),
});
