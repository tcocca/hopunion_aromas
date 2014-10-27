import Ember from 'ember';

export function hopAroma(hop, aroma) {
  if (hop.get('primary_aroma') == aroma) {
    return "3";
  }
  else if (hop.get('secondary_aroma') == aroma) {
    return "2";
  }
  else if (hop.get('tertiary_aroma') == aroma) {
    return "1";
  }
  else {
    return "";
  }
};

export default Ember.Handlebars.makeBoundHelper(hopAroma);
