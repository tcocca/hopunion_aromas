import DS from 'ember-data';

var Hop = DS.Model.extend({
  name: DS.attr('string'),
  aroma: DS.attr('string'),
  primary_aroma: DS.attr('string'),
  secondary_aroma: DS.attr('string'),
  tertiary_aroma: DS.attr('string')
});

Hop.reopenClass({
  FIXTURES: [
    {
      "additional_info": "Named in honor of the area where Charles Carpenter established the first hop farm in 1869.",
      "alpha_acids": "5.7 - 6.3%",
      "aroma": "Floral, earthy, citrus and grapefruit tones",
      "beta_acids": "5.0 - 6.5%",
      "caryophyllene": "9 - 12% of total oil",
      "co_humulone": "30 - 35%",
      "country": "US",
      "farnesene": "",
      "humulene": "16 - 20% of total oil",
      "id": 1,
      "myrcene": "50 - 55% of total oil",
      "name": "Ahtanum\u2122",
      "pedigree": "Open pollination. Developed by Select Botanicals",
      "perception": "Used for its aromatic properties and moderate bittering qualities",
      "primary_aroma": "Floral",
      "product_id": "Brand YCR 1 cv.",
      "secondary_aroma": "Citrus",
      "storage": "Fair to Good",
      "styles": [
        "Pale Ale"
      ],
      "substitute_hops": [
        "Cascade"
      ],
      "substitute_ids": [
        7
      ],
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "0.8 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Limited acreage and availability.",
      "alpha_acids": "8.0 - 11.0%",
      "aroma": "Floral, tropical, and citrus (lemon, orange and grapefruit) characteristics",
      "beta_acids": "6.0 - 7.0%",
      "caryophyllene": "2 - 4% of total oil",
      "co_humulone": "21 - 24%",
      "country": "US",
      "farnesene": "2 - 4% of total oil",
      "humulene": "9 - 11% of total oil",
      "id": 2,
      "myrcene": "68 - 70% of total oil",
      "name": "Amarillo\u00ae",
      "pedigree": "Privately grown and registered",
      "perception": "Viewed as a Cascade type",
      "primary_aroma": "Floral",
      "product_id": "VGXP01",
      "secondary_aroma": "Tropical-Fruit",
      "storage": "Good",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Cascade",
        "Centennial",
        "Simcoe\u00ae"
      ],
      "substitute_ids": [
        7,
        9,
        40
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.5 - 1.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Contains higher alpha acid levels than Nugget and Galena. Released in 1999.",
      "alpha_acids": "15.44 - 18.84%",
      "aroma": "No specific aroma characteristics",
      "beta_acids": "6.13 - 8.01%",
      "caryophyllene": "~8.4% of total oil",
      "co_humulone": "36 - 41%",
      "country": "US",
      "farnesene": "~1.2% of total oil",
      "humulene": "~7.5% of total oil",
      "id": 3,
      "myrcene": "~68.2% of total oil",
      "name": "Bitter Gold",
      "pedigree": "Lineage includes Bullion, Comet, Brewer's Gold, Fuggle",
      "perception": "A 'super-alpha variety' with excellent bittering potential",
      "product_id": null,
      "storage": "~56.5% after six months",
      "styles": [
        "All Styles"
      ],
      "substitute_hops": [
        "Galena",
        "Nugget"
      ],
      "substitute_ids": [
        21,
        34
      ],
      "toal_oil": "0.81 - 3.92 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Developed by the Hopsteiner Breeding Company and released in 2006.",
      "alpha_acids": "14.0 - 17.0%",
      "aroma": "Pleasant fruity and floral aroma characteristics",
      "beta_acids": "3.0 - 5.0%",
      "caryophyllene": "10 - 12% of total oil",
      "co_humulone": "29 - 34%",
      "country": "US",
      "farnesene": "",
      "humulene": "18 - 20% of total oil",
      "id": 4,
      "myrcene": "25 - 50% of total oil",
      "name": "Bravo",
      "pedigree": "Second generation super high alpha variety",
      "perception": "Excellent bittering hop with good resistance to powdery mildew",
      "primary_aroma": "Fruity",
      "product_id": "Hopsteiner 0146",
      "secondary_aroma": "Floral",
      "storage": "60 - 70% alpha remaining after 6 months",
      "styles": [
        "American-style Pale Ale"
      ],
      "substitute_hops": [
        "Columbus",
        "Magnum",
        "Nugget"
      ],
      "substitute_ids": [
        15,
        27,
        34
      ],
      "toal_oil": "1.6 - 2.4 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Limited acreage in the United States; developed by Professor Salmon in 1934.",
      "alpha_acids": "8.0 - 10.0%",
      "aroma": "Spicy, fruity characteristics, black currant",
      "beta_acids": "3.5 - 4.5%",
      "caryophyllene": "7.0 - 7.5% of total oil",
      "co_humulone": "40 - 48%",
      "country": "US",
      "farnesene": "",
      "humulene": "29 - 31% of total oil",
      "id": 5,
      "myrcene": "37 - 40% of total oil",
      "name": "Brewer\u2019s Gold",
      "pedigree": "An English variety and sibling of Bullion",
      "perception": "Mainly used as a bittering hop",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "Poor",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Chinook",
        "Galena",
        "Nugget"
      ],
      "substitute_ids": [
        11,
        21,
        34
      ],
      "toal_oil": "2.0 - 2.4 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "A major hop variety since the mid-1940s, however, product ceased in 1985 due to super alpha hops with better storage stability.",
      "alpha_acids": "6.7 - 12.9%",
      "aroma": "Strong and zesty blackcurrant characteristics",
      "beta_acids": "3.7 - 9.1%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "~39%",
      "country": "US",
      "farnesene": "",
      "humulene": "23 - 30% of total oil",
      "id": 6,
      "myrcene": "45 - 55% of total oil",
      "name": "Bullion",
      "pedigree": "Wild Manitoba BB1 x OR (open pollinated)",
      "perception": "Commonly used in darker beers",
      "primary_aroma": "Fruity",
      "product_id": null,
      "storage": "Poor",
      "styles": [
        "Stout"
      ],
      "substitute_hops": [
        "Brewer\u2019s Gold",
        "Chinook",
        "Columbus",
        "Galena",
        "Northern Brewer"
      ],
      "substitute_ids": [
        5,
        11,
        15,
        21,
        33
      ],
      "toal_oil": "1.1 - 2.7 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "First commercial hop from the USDA-ARS breeding program; bred in 1956 and realeased in 1972",
      "alpha_acids": "4.5 - 7.0%",
      "aroma": "Medium intense floral, citrus and grapefruit tones",
      "beta_acids": "4.5 - 7.0%",
      "caryophyllene": "3 - 6% of total oil",
      "co_humulone": "33 - 40%",
      "country": "US",
      "farnesene": "4 - 8% of total oil",
      "humulene": "10 - 16% of total oil",
      "id": 7,
      "myrcene": "45 - 60% of total oil",
      "name": "Cascade",
      "pedigree": "Open pollination of a Fuggle seedling, derived from Fuggle and Serebrianka",
      "perception": "An aroma variety with well-balanced bittering potential, good for dry hopping",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "storage": "48 - 52% alpha remaining after 6 months",
      "styles": [
        "American-style Pale Ale"
      ],
      "substitute_hops": [
        "Ahtanum\u2122",
        "Amarillo\u00ae",
        "Centennial"
      ],
      "substitute_ids": [
        1,
        2,
        9
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "0.8 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released by Washington State University in 2013.",
      "alpha_acids": "7.7 - 9.1%",
      "aroma": "Mild herbal aroma with strong melon, lemon, lime and slightly spicy notes.",
      "beta_acids": "6.4 - 7.1%",
      "caryophyllene": "11.5 - 13.0% of total oil",
      "co_humulone": "22 - 24%",
      "country": "US",
      "farnesene": "",
      "humulene": "26 - 29% of total oil",
      "id": 8,
      "myrcene": "39 - 42% of total oil",
      "name": "Cashmere",
      "pedigree": "Daughter of Cascade and containing Northern Brewer germplasm through the male parent",
      "perception": "Contains a higher alpha acid content than Cascade and twice as much humulene. Provides smooth bitterness with mild aroma.",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "storage": "~75%",
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.2 - 1.4 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Bred in 1974 and released in 1990.",
      "alpha_acids": "9.5 - 11.5%",
      "aroma": "Medium intensity floral and citrus (lemon) tones",
      "beta_acids": "3.5 - 4.5%",
      "caryophyllene": "4 - 8% of total oil",
      "co_humulone": "28 - 30%",
      "country": "US",
      "farnesene": "",
      "humulene": "10 - 18% of total oil",
      "id": 9,
      "myrcene": "45 - 60% of total oil",
      "name": "Centennial",
      "pedigree": "Derived from 3/4 Brewer's Gold and contributions of Fuggle, East Kent Golding and others",
      "perception": "Very balanced, sometimes called a super Cascade",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "storage": "60 - 65% alpha remaining after 6 months",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Cascade",
        "Chinook",
        "Columbus"
      ],
      "substitute_ids": [
        7,
        11,
        15
      ],
      "toal_oil": "1.5 - 2.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed by the John I Haas, Inc. breeding company and released in 1994",
      "alpha_acids": "12.0 - 14.5%",
      "aroma": "Mild floral and citrus characteristics",
      "beta_acids": "8.5 - 9.8%",
      "caryophyllene": "9 - 12% of total oil",
      "co_humulone": "33 - 35%",
      "country": "US",
      "farnesene": "",
      "humulene": "12 - 15% of total oil",
      "id": 10,
      "myrcene": "45 - 55% of total oil",
      "name": "Chelan",
      "pedigree": "Daughter of Galena",
      "perception": "Similar to Galena but with higher alpha acids",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "storage": "~80% alpha remaining after 6 months",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Galena",
        "Nugget"
      ],
      "substitute_ids": [
        21,
        34
      ],
      "toal_oil": "1.5 - 1.9 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Increasingly popular among craft brewers; released in 1985.",
      "alpha_acids": "12.0 - 14.0%",
      "aroma": "Distinct, medium intensity spice and pine characteristics with subtle notes of grapefruit",
      "beta_acids": "3.0 - 4.0%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "29 - 34%",
      "country": "US",
      "farnesene": "",
      "humulene": "20 - 25% of total oil",
      "id": 11,
      "myrcene": "35 - 40% of total oil",
      "name": "Chinook",
      "pedigree": "Cross between Petham Golding and a high alpha USDA male",
      "perception": "A high alpha hop with acceptable aroma",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Pine",
      "storage": "65 - 70% of alpha remaining after 6 months",
      "styles": [
        "American-style Pale Ale"
      ],
      "substitute_hops": [
        "Columbus",
        "Northern Brewer",
        "Nugget"
      ],
      "substitute_ids": [
        15,
        33,
        34
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.5 - 2.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed by the Hop Breeding Company and released in 2007.",
      "alpha_acids": "11.0 - 13.0%",
      "aroma": "Strong citrus and tropical tones of grapefruit, melon, lime, gooseberry, passion fruit and lychee",
      "beta_acids": "3.5 - 4.5%",
      "caryophyllene": "6 - 8% of total oil",
      "co_humulone": "22 - 24%",
      "country": "US",
      "farnesene": "",
      "humulene": "11 - 13% of total oil",
      "id": 12,
      "myrcene": "60 - 65% of total oil",
      "name": "Citra\u00ae",
      "pedigree": "Comprised of Hallertau Mittelfr\u00fch, US Tettnang, Brewer's Gold and East Kent Golding",
      "perception": "One of the most popular new varieties, known for its intense flavor and aroma characteristics",
      "primary_aroma": "Citrus",
      "product_id": "Brand YCR 394 cv.",
      "secondary_aroma": "Fruity",
      "storage": "~75% alpha remaining after 6 months",
      "styles": [
        "IPA"
      ],
      "tertiary_aroma": "Tropical-Fruit",
      "toal_oil": "2.2 - 2.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Often used in the reproduction of historical styles.",
      "alpha_acids": "5.5 - 8.5%",
      "aroma": "Strong floral and spicy characteristics",
      "beta_acids": "4.5 - 5.5%",
      "caryophyllene": "6 - 7% of total oil",
      "co_humulone": "36 - 42%",
      "country": "US",
      "farnesene": "",
      "humulene": "15 - 18% of total oil",
      "id": 13,
      "myrcene": "45 - 55% of total oil",
      "name": "Cluster",
      "pedigree": "Unknown- suggested hybridization of imported varieties and indigenous male hops",
      "perception": "Excellent general purpose variety with balanced bittering and aroma potential",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "~84% alpha remaining after 6 months",
      "styles": [
        "Stout"
      ],
      "substitute_hops": [
        "Galena"
      ],
      "substitute_ids": [
        21
      ],
      "toal_oil": "0.4 - 0.8 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "",
      "alpha_acids": "6.8 - 11.5%",
      "aroma": "Subtle earth and mild fruit tones",
      "beta_acids": "2.9 - 5.6%",
      "caryophyllene": "~7.3% of total oil",
      "co_humulone": "~40%",
      "country": "US",
      "farnesene": "~4.1% of total oil",
      "humulene": "~16.7% of total oil",
      "id": 14,
      "myrcene": "~54.6% of total oil",
      "name": "Columbia",
      "pedigree": "A descendant of Fuggle and sister selection of Willamette",
      "perception": "Aroma characteristics are similar to Fuggle",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "storage": "Very Good",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Fuggle"
      ],
      "substitute_ids": [
        20
      ],
      "toal_oil": "0.5 - 1.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Part of \"CTZ\" with Tomahawk\u00ae and Zeus.",
      "alpha_acids": "14.0 - 16.0%",
      "aroma": "Pungent, black pepper, licorice characteristics with subtle citrus overtones",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "30 - 35%",
      "country": "US",
      "farnesene": "",
      "humulene": "12 - 18% of total oil",
      "id": 15,
      "myrcene": "40 - 50% of total oil",
      "name": "Columbus",
      "pedigree": "A descendant of Nugget",
      "perception": "Excellent for dry hopping",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "storage": "~52% alpha remaining after 6 months",
      "styles": [
        "Pale Ale"
      ],
      "substitute_hops": [
        "Chinook",
        "Galena",
        "Millennium",
        "Nugget"
      ],
      "substitute_ids": [
        11,
        21,
        28,
        34
      ],
      "toal_oil": "1.5 - 2.0 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released by the USDA in 1974 to meet the need for a higher alpha-acid producing hop",
      "alpha_acids": "9.0 - 11.0%",
      "aroma": "A pungent, wild American aroma with citrus (grapefruit) flavors",
      "beta_acids": "4.0 - 6.1%",
      "caryophyllene": "5 - 7% of total oil",
      "co_humulone": "40 - 45%",
      "country": "US",
      "farnesene": "",
      "humulene": "1 - 2% of total oil",
      "id": 16,
      "myrcene": "40 - 65% of total oil",
      "name": "Comet",
      "pedigree": "Cross between English Sunshine and a native North American male",
      "perception": "Contains a \"wild American\" aroma that can be objectionable to some brewers",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "Very good",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Galena",
        "Summit\u2122"
      ],
      "substitute_ids": [
        21,
        43
      ],
      "toal_oil": "1.4 - 3.3 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released from the USDA breeding program in 1993",
      "alpha_acids": "3.5 - 5.5%",
      "aroma": "Mild, spicy and floral",
      "beta_acids": "4.5 - 6.7%",
      "caryophyllene": "4 - 8% of total oil",
      "co_humulone": "20 - 26%",
      "country": "US",
      "farnesene": "",
      "humulene": "18 - 24% of total oil",
      "id": 17,
      "myrcene": "40 - 65% of total oil",
      "name": "Crystal",
      "pedigree": "Triploid variety from German Hallertau mf., Cascade, Brewer's Gold and Early Green",
      "perception": "The most pungent of the triploid Hallertau hops",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "~50% alpha remaining after 6 months",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Hallertau",
        "Liberty",
        "Mt. Hood",
        "French Strisselpalt",
        "German Hersbruker"
      ],
      "substitute_ids": [
        24,
        26,
        30,
        72,
        78
      ],
      "toal_oil": "0.8 - 2.1 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed by the Hop Breeding Company",
      "alpha_acids": "14.4 - 15.6%",
      "aroma": "A pronounced aroma profile with citrus, tropical fruit, floral and herbal characteristics. Specific descriptors include lemon, lime, papaya, apple, and green pepper.",
      "beta_acids": "4.6 - 5.1%",
      "co_humulone": "31.7 - 38%",
      "country": "US",
      "id": 18,
      "name": "Equinox\u2122",
      "perception": "The diversified and pronounced aroma characteristics combined with extremely high oil content and a tight cone structure make this hop variety very unique.",
      "primary_aroma": "Citrus",
      "product_id": "HBC 366 cv.",
      "secondary_aroma": "Tropical-Fruit",
      "tertiary_aroma": "Herbal",
      "toal_oil": "2.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released by the Idaho Agricultural Experiment State, the Oregon Agricultural Experiment Station, and the USDA-ARS in 1982.",
      "alpha_acids": "7.3 - 14.9%",
      "aroma": "Forward fruit flavors",
      "beta_acids": "3.0 - 5.3%",
      "caryophyllene": "7 - 13% of total oil",
      "co_humulone": "~40%",
      "country": "US",
      "farnesene": "",
      "humulene": "0 - 1% of total oil",
      "id": 19,
      "myrcene": "55 - 65% of total oil",
      "name": "Eroica",
      "pedigree": "Open pollinated cross on Brewer's Gold",
      "perception": "A suitable hop variety for dark beers and American-style Ales",
      "primary_aroma": "Fruity",
      "product_id": null,
      "storage": "~77% alpha remaining after 6 months",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Brewer\u2019s Gold",
        "Galena",
        "Glacier",
        "Bullion"
      ],
      "substitute_ids": [
        5,
        21,
        22,
        6
      ],
      "toal_oil": "~0.9 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Selected in 1861 by Richard Fuggle.",
      "alpha_acids": "4.0 - 5.5%",
      "aroma": "Mild wood and fruit characteristics",
      "beta_acids": "1.5 - 2.0%",
      "caryophyllene": "6 - 10% of total oil",
      "co_humulone": "25 - 32%",
      "country": "US",
      "farnesene": "4 - 5% of total oil",
      "humulene": "20 - 26% of total oil",
      "id": 20,
      "myrcene": "40 - 50% of total oil",
      "name": "Fuggle",
      "pedigree": "A chance seedling",
      "perception": "A traditional English-type variety",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "storage": "60 - 65% alpha remaining after 6 months",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Willamette",
        "UK Fuggle",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        50,
        61,
        99
      ],
      "toal_oil": "0.7 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed in the USDA breeding program in Idaho in 1968 and released in 1978.",
      "alpha_acids": "12.0 - 14.0%",
      "aroma": "Spicy, blackcurrant and citrus (grapefruit) tones",
      "beta_acids": "7.0 - 9.0%",
      "caryophyllene": "4 - 6% of total oil",
      "co_humulone": "37 - 42%",
      "country": "US",
      "farnesene": "",
      "humulene": "10 - 13% of total oil",
      "id": 21,
      "myrcene": "55 - 60% of total oil",
      "name": "Galena",
      "pedigree": "Open pollination of Brewer's Gold",
      "perception": "Excellent high alpha variety with balanced bittering and aroma characteristics; mainly used for bittering, but finding favor as a dual purpose variety.",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Stone-Fruit",
      "storage": "~79% alpha remaining after 6 months",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Brewer\u2019s Gold",
        "Columbus",
        "Nugget"
      ],
      "substitute_ids": [
        5,
        15,
        34
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "0.9 - 1.2 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released as a public variety in 2000 by Dr. Stephen Kenny of Washington State University.",
      "alpha_acids": "~5.5%",
      "aroma": "Pleasant hop aroma",
      "beta_acids": "~8.2%",
      "caryophyllene": "6.5 - 10.0% of total oil",
      "co_humulone": "11 - 13%",
      "country": "US",
      "farnesene": "",
      "humulene": "24 - 36% of total oil",
      "id": 22,
      "myrcene": "33 - 62% of total oil",
      "name": "Glacier",
      "pedigree": "Offspring of Elsasser",
      "perception": "Excellent dual purpose variety with well balanced bittering properties and a pleasant aroma profile",
      "product_id": null,
      "storage": "72% alpha remaining after 6 months",
      "styles": [
        "American-style Pale Ale"
      ],
      "substitute_hops": [
        "Fuggle",
        "Willamette",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        20,
        50,
        99
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.7 - 1.6 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Golding hops consist of a group of traditional English aroma varieties which have been cultivated since 1790.",
      "alpha_acids": "4.0 - 6.0%",
      "aroma": "Mild and delicate with sweet floral characteristics",
      "beta_acids": "2.0 - 3.0%",
      "caryophyllene": "13 - 16% of total oil",
      "co_humulone": "20 - 25%",
      "country": "US",
      "farnesene": "",
      "humulene": "35 - 45% of total oil",
      "id": 23,
      "myrcene": "25 - 35% of total oil",
      "name": "Golding",
      "pedigree": "East Kent Golding",
      "perception": "Popular among ale breweries in the United States",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "storage": "~66% alpha remaining after 6 months",
      "styles": [
        "Bitter"
      ],
      "substitute_hops": [
        "Fuggle",
        "Willamette",
        "UK East Kent Golding",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        20,
        50,
        59,
        99
      ],
      "toal_oil": "0.4 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Limited acreage in the United States.",
      "alpha_acids": "3.5 - 5.5%",
      "aroma": "Mild and pleasant, yet spicy, with herbal and floral characteristics",
      "beta_acids": "3.5 - 5.5%",
      "caryophyllene": "10 - 12% of total oil",
      "co_humulone": "18 - 25%",
      "country": "US",
      "farnesene": "",
      "humulene": "30 - 38% of total oil",
      "id": 24,
      "myrcene": "35 - 44% of total oil",
      "name": "Hallertau",
      "pedigree": "Traditional land-race variety",
      "perception": "A classic noble variety",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "18 - 25% alpha remaining after 6 months",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Liberty",
        "Mt. Hood",
        "German Hallertau Mittelfr\u00fch",
        "German Magnum",
        "German Merkur",
        "German Taurus",
        "German Traditon"
      ],
      "substitute_ids": [
        26,
        30,
        76,
        80,
        82,
        92,
        94
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.6 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed in Oregon in 1970 and released in 1997.",
      "alpha_acids": "11.0 - 13.0%",
      "aroma": "Pleasant and spicy, with floral characteristics",
      "beta_acids": "6.5 - 8.5%",
      "caryophyllene": "7 - 9% of total oil",
      "co_humulone": "16 - 19%",
      "country": "US",
      "farnesene": "2 - 4% of total oil",
      "humulene": "11 - 13% of total oil",
      "id": 25,
      "myrcene": "55 -65% of total oil",
      "name": "Horizon",
      "pedigree": "Half sister of Nugget; lineage includes Brewer's Gold and Early Green",
      "perception": "A dual purpose hop with low co-humulone and high myrcene",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "Average to Good",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Magnum"
      ],
      "substitute_ids": [
        27
      ],
      "toal_oil": "1.5 - 2.0 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed in 1983 at Oregon State University and released in 1991",
      "alpha_acids": "3.0 - 5.0%",
      "aroma": "Mild and spicy with subtle lemon and citrus characteristics",
      "beta_acids": "3.0 - 4.0%",
      "caryophyllene": "9 - 12% of total oil",
      "co_humulone": "24 - 30%",
      "country": "US",
      "farnesene": "",
      "humulene": "35 - 40% of total oil",
      "id": 26,
      "myrcene": "20 - 40% of total oil",
      "name": "Liberty",
      "pedigree": "Cross between the tetraploid female hop cultivar Hallertau Mittelfr\u00fch and a downy mildew resistant male. A half sister to Ultra, Mt. Hood and Crystal",
      "perception": "Closely resembles Hallertau mf.",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "storage": "35 - 40% alpha remaining after 6 months",
      "styles": [
        "Bock"
      ],
      "substitute_hops": [
        "Hallertau",
        "Mt. Hood",
        "German Traditon"
      ],
      "substitute_ids": [
        24,
        30,
        94
      ],
      "toal_oil": "0.6 - 1.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred in 1980 at the German Hop Research Institute in Hull, Germany",
      "alpha_acids": "10.0 - 14.0%",
      "aroma": "No distinct aroma characteristics",
      "beta_acids": "4.5 - 7.0%",
      "caryophyllene": "8 - 12% of total oil",
      "co_humulone": "24 - 30%",
      "country": "US",
      "farnesene": "",
      "humulene": "35 - 40% of total oil",
      "id": 27,
      "myrcene": "30 - 35% of total oil",
      "name": "Magnum",
      "pedigree": "A cross between Galena and a German male",
      "perception": "Generally accepted as a clean bittering hop for ales and lagers",
      "product_id": null,
      "storage": "Very Good",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Columbus",
        "Horizon",
        "Nugget",
        "German Magnum"
      ],
      "substitute_ids": [
        15,
        25,
        34,
        80
      ],
      "toal_oil": "1.9 - 3.0 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released in 2000",
      "alpha_acids": "14.5 - 16.5%",
      "aroma": "Mild and resinous with floral and herbal tones",
      "beta_acids": "4.3 - 5.3%",
      "caryophyllene": "9 - 12% of total oil",
      "co_humulone": "28 - 32%",
      "country": "US",
      "farnesene": "",
      "humulene": "23 - 27% of total oil",
      "id": 28,
      "myrcene": "30 - 40% of total oil",
      "name": "Millennium",
      "pedigree": "Descendant of Nugget",
      "perception": "Closely resembles Columbus and Nugget",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "~76% alpha remaining after 6 months",
      "styles": [
        "Stout"
      ],
      "substitute_hops": [
        "Columbus",
        "Nugget",
        "Summit\u2122"
      ],
      "substitute_ids": [
        15,
        34,
        43
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "1.8 - 2.2 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released in 2012 by the Hop Breeding Company LLC",
      "alpha_acids": "11.5 - 13.5%",
      "aroma": "A complex array of tropical fruit, citrus, berry, herbal, earthy and pine characteristics",
      "beta_acids": "3.2 - 3.9%",
      "caryophyllene": "5.2 - 7.8% of total oil",
      "co_humulone": "24 - 26%",
      "country": "US",
      "farnesene": "0% of total oil",
      "humulene": "13 - 16% of total oil",
      "id": 29,
      "myrcene": "47 - 53% of total oil",
      "name": "Mosaic\u2122",
      "pedigree": "Daughter of Simcoe\u00ae",
      "perception": "An excellent aroma variety",
      "primary_aroma": "Citrus",
      "product_id": "HBC 369 cv",
      "secondary_aroma": "Grassy",
      "storage": "~75% alpha remaining after 6 months",
      "styles": [
        "IPA"
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "1.0 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released in 1989 from the USDA breeding program in Oregon.",
      "alpha_acids": "4.0 - 8.0%",
      "aroma": "Mild, herbal and somewhat pungent or spicy",
      "beta_acids": "5.0 - 7.5%",
      "caryophyllene": "13 - 16% of total oil",
      "co_humulone": "22 - 27%",
      "country": "US",
      "farnesene": "",
      "humulene": "30 - 38% of total oil",
      "id": 30,
      "myrcene": "30 - 40% of total oil",
      "name": "Mt. Hood",
      "pedigree": "Triploid seedling of German Hallertau Mittelfr\u00fch and a half sister to Ultra, Liberty and Crystal",
      "perception": "An aroma hop varieties with similarities to the German Hallertau and Hersbrucker varieties",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "~55% alpha remaining after 6 months",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "French Strisselpalt",
        "German Hallertau Mittelfr\u00fch",
        "German Hersbruker"
      ],
      "substitute_ids": [
        72,
        76,
        78
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "1.6 - 3.4 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at Oregon State University",
      "alpha_acids": "5.0 - 8.1%",
      "aroma": "Excellent floral and noble aromas, with citrus and licorice overtones",
      "beta_acids": "5.0 - 7.0%",
      "caryophyllene": "~9.5% of total oil",
      "co_humulone": "21 - 24%",
      "country": "US",
      "farnesene": "",
      "humulene": "~30% of total oil",
      "id": 31,
      "myrcene": "~29% of total oil",
      "name": "Mt. Rainier",
      "pedigree": "Complex parentage including Hallertau, Galena and Fuggle",
      "perception": "Similar to Hallertau but with more bittering strength",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Brewer\u2019s Gold",
        "Fuggle",
        "Hallertau"
      ],
      "substitute_ids": [
        5,
        20,
        24
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "0.2 - 0.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed through the USDA program at Oregon State University and released in 2002",
      "alpha_acids": "13.5 - 17.0%",
      "aroma": "Mild",
      "beta_acids": "7.2 - 9.1%",
      "caryophyllene": "4.5 - 7% of total oil",
      "co_humulone": "36 - 38%",
      "country": "US",
      "farnesene": "",
      "humulene": "9 - 14% of total oil",
      "id": 32,
      "myrcene": "47 - 54% of total oil",
      "name": "Newport",
      "pedigree": "Descendant of Magnum and a USDA male 58111",
      "perception": "Viewed as an excllent bittering hop",
      "product_id": null,
      "storage": "~60% alpha remaining after 6 months",
      "styles": [
        "Barley Wine"
      ],
      "substitute_hops": [
        "Brewer\u2019s Gold",
        "Fuggle",
        "Galena",
        "Magnum",
        "Nugget"
      ],
      "substitute_ids": [
        5,
        20,
        21,
        27,
        34
      ],
      "toal_oil": "1.6 - 3.4 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Bred in England in 1934",
      "alpha_acids": "8.0 - 10.0%",
      "aroma": "Medium intensity, pine and mint characteristics",
      "beta_acids": "3.0 - 5.0%",
      "caryophyllene": "5 - 10% of total oil",
      "co_humulone": "20 - 30%",
      "country": "US",
      "farnesene": "",
      "humulene": "20 - 30% of total oil",
      "id": 33,
      "myrcene": "50 - 60% of total oil",
      "name": "Northern Brewer",
      "pedigree": "Cross between a Canterbury Golding female and male OB21",
      "perception": "A true dual purpose hop variety",
      "primary_aroma": "Pine",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "70 - 85% alpha remaining after 6 months",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Chinook",
        "Galena",
        "German Northern Brewer"
      ],
      "substitute_ids": [
        11,
        21,
        83
      ],
      "toal_oil": "1.5 - 2.0 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released from the USDA breeding program in Oregon in 1983",
      "alpha_acids": "12.0 - 14.5%",
      "aroma": "Mild and pleasant with spicy, herbal tones",
      "beta_acids": "4.0 - 6.0%",
      "caryophyllene": "7 - 9% of total oil",
      "co_humulone": "22 - 26%",
      "country": "US",
      "farnesene": "",
      "humulene": "16 - 19% of total oil",
      "id": 34,
      "myrcene": "48 - 55% of total oil",
      "name": "Nugget",
      "pedigree": "Lineage includes Brewer's Gold, Canterbury Golding and Early Green",
      "perception": "Gaining acceptance as a dual purpose variety",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "storage": "~76% alpha remaining after 6 months",
      "styles": [
        "Barley Wine"
      ],
      "substitute_hops": [
        "Columbus",
        "Galena",
        "Magnum"
      ],
      "substitute_ids": [
        15,
        21,
        27
      ],
      "toal_oil": "1.8 - 2.2 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released for commercial production in 1983",
      "alpha_acids": "10.6 -  13.8%",
      "aroma": "Citrus characteristics with subtle spicy notes",
      "beta_acids": "3.8 - 6.1%",
      "caryophyllene": "~12.0% of total oil",
      "co_humulone": "~31%",
      "country": "US",
      "farnesene": "~0.9% of total oil",
      "humulene": "~12.2% of total oil",
      "id": 35,
      "myrcene": "~40.8% of total oil",
      "name": "Olympic",
      "pedigree": "Lineage includes Brewer's Gold, Fuggle and East Kent Golding",
      "perception": "Typically used as a bittering hop, but containing some citrus and spice characteristics.",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "Fair to Good",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Chinook"
      ],
      "substitute_ids": [
        11
      ],
      "toal_oil": "0.86 - 2.55 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Cultivar bred by Yakima Chief Ranches.",
      "alpha_acids": "5.5 - 9.5%",
      "aroma": "Apricot, grass and clean floral charcteristics",
      "beta_acids": "6.0 - 8.0%",
      "caryophyllene": "16 - 18% of total oil",
      "co_humulone": "24 - 29%",
      "country": "US",
      "farnesene": "0% of total oil",
      "humulene": "19 - 22% of total oil",
      "id": 36,
      "myrcene": "9 - 10% of total oil",
      "name": "Palisade\u00ae",
      "pedigree": "Tettnang parentage",
      "perception": "Used for its aromatic properties and moderate bittering qualities",
      "primary_aroma": "Stone-Fruit",
      "product_id": "Brand YCR 4 cv.",
      "secondary_aroma": "Grassy",
      "storage": "Good",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Willamette"
      ],
      "substitute_ids": [
        50
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "1.4 - 1.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Center in Hull, Germany.",
      "alpha_acids": "7.0 - 9.5%",
      "aroma": "Slightly spicy with herbal and floral characteristics",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "10 - 12% of total oil",
      "co_humulone": "27 - 32%",
      "country": "US",
      "farnesene": "",
      "humulene": "28 - 33% of total oil",
      "id": 37,
      "myrcene": "45 - 55% of total oil",
      "name": "Perle",
      "pedigree": "Bred from English Northern Brewer",
      "perception": "Often used as a dual purpose hop in a variety of applications",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "storage": "80 - 85% alpha remaining after 6 months",
      "styles": [
        "Stout"
      ],
      "substitute_hops": [
        "Northern Brewer",
        "German Northern Brewer",
        "German Perle"
      ],
      "substitute_ids": [
        33,
        83,
        85
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.7 - 0.9 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "High ambient temperatures can have an adverse effect on yields.",
      "alpha_acids": "3.0 - 4.5%",
      "aroma": "Mild spice and earth tones",
      "beta_acids": "3.0 - 4.5%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "24 - 28%",
      "country": "US",
      "farnesene": "9 - 13% of total oil",
      "humulene": "35 - 40% of total oil",
      "id": 38,
      "myrcene": "25 - 30% of total oil",
      "name": "Saaz",
      "pedigree": "US equivalent of the longstanding Czech variety",
      "perception": "Features a classic noble aroma, famously used in Pilsners",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "45 - 55% alpha remaining after 6 months",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Sterling",
        "Czech Saaz",
        "Polish Lublin"
      ],
      "substitute_ids": [
        42,
        53,
        95
      ],
      "toal_oil": "0.5 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released in 1997",
      "alpha_acids": "5.0 - 7.0%",
      "aroma": "Slightly spicy with herbal and floral characteristics",
      "beta_acids": "6.0 - 8.5%",
      "caryophyllene": "7 - 8% of total oil",
      "co_humulone": "20 - 24%",
      "country": "US",
      "farnesene": "13 - 16% of total oil",
      "humulene": "23 - 26% of total oil",
      "id": 39,
      "myrcene": "27 - 36% of total oil",
      "name": "Santiam",
      "pedigree": "Bred from Tettnang, Hallertau and a cultivar derived from Cascade",
      "perception": "An American aroma hop with noble hop characteristics",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "storage": "Average",
      "styles": [
        "Bock"
      ],
      "substitute_hops": [
        "German Spalt",
        "German Tettnang",
        "German Select"
      ],
      "substitute_ids": [
        90,
        93,
        88
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "1.3 - 1.7 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed by Yakima Chief Ranches and released in 2000",
      "alpha_acids": "12.0 - 14.0%",
      "aroma": "Unique passionfruit, pine, earth and citrus characteristics",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "5 - 8% of total oil",
      "co_humulone": "15 - 20%",
      "country": "US",
      "farnesene": "",
      "humulene": "10 - 15% of total oil",
      "id": 40,
      "myrcene": "60 - 65% of total oil",
      "name": "Simcoe\u00ae",
      "pedigree": "Open pollination",
      "perception": "Known as a bittering hop with a good aroma",
      "primary_aroma": "Pine",
      "product_id": "Brand YCR 14 cv.",
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "Good",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Magnum",
        "Summit\u2122"
      ],
      "substitute_ids": [
        27,
        43
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "2.0 - 2.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed in 1984 for Supporo Brewers Ltd.",
      "alpha_acids": "10.0 - 16.0%",
      "aroma": "Unique lemon and dill characteristics",
      "beta_acids": "6.0 - 7.0%",
      "caryophyllene": "6 - 7 % of total oil",
      "co_humulone": "~23%",
      "country": "US",
      "farnesene": "0 - 2 % of total oil",
      "humulene": "19 - 23% of total oil",
      "id": 41,
      "myrcene": "54 - 61% of total oil",
      "name": "Sorachi Ace",
      "pedigree": "Cross between Brewer's Gold, Saazer - OP and Beikei No. 2 male",
      "perception": "An extremely unique high alpha aroma variety with great bittering characteristics",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Grassy",
      "styles": [
        "Pale Ale"
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "2.0 - 2.8 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released in 1998",
      "alpha_acids": "6.0 - 9.0%",
      "aroma": "Herbal and spicy, with a hint of floral, citrus (lemon/pineapple) characteristics",
      "beta_acids": "4.0 - 6.0%",
      "caryophyllene": "5 - 7% of total oil",
      "co_humulone": "22 - 28%",
      "country": "US",
      "farnesene": "11 - 17% of total oil",
      "humulene": "19 - 23% of total oil",
      "id": 42,
      "myrcene": "44 - 48% of total oil",
      "name": "Sterling",
      "pedigree": "Lineage includes Saaz, Cascade, Brewer's Gold, Early Green and German open pollination",
      "perception": "Finding favor as a Saaz replacement",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "60 - 75% alpha remaining after 6 months",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Czech Saaz",
        "Polish Lublin"
      ],
      "substitute_ids": [
        53,
        95
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "1.3 - 1.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the American Dwarf Hop Association in the United States and released in 2003",
      "alpha_acids": "16.0 - 19.0%",
      "aroma": "Distinct spice, earthy, onion, garlic and citrus (pink grapefruit, orange and tangerine) tones",
      "beta_acids": "3.3 - 6.0%",
      "caryophyllene": "10 - 15% of total oil",
      "co_humulone": "26 - 33%",
      "country": "US",
      "farnesene": "",
      "humulene": "15 - 25% of total oil",
      "id": 43,
      "myrcene": "30 - 50% of total oil",
      "name": "Summit\u2122",
      "pedigree": "Cross pollination of Lexus and an unspecified male; derived from numerous plants including Zeus, Nugget and male USDA varieties",
      "perception": "A great late addition hop",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "storage": "85% alpha remaining after 6 months",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Columbus",
        "Millennium",
        "Simcoe\u00ae",
        "Warrior\u00ae"
      ],
      "substitute_ids": [
        15,
        28,
        40,
        49
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.5 - 2.5 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released by Washington State University in 2013",
      "alpha_acids": "7.2 - 8.2%",
      "aroma": "Predominate citrus and lemon notes with cedar, pine, floral, pepper and subtle green melon notes.",
      "beta_acids": "8.5 - 9.5%",
      "caryophyllene": "2.9 - 3.5% of total oil",
      "co_humulone": "15 - 17%",
      "country": "US",
      "farnesene": "",
      "humulene": "9 - 11% of total oil",
      "id": 44,
      "myrcene": "67 - 72% of total oil",
      "name": "Tahoma",
      "pedigree": "Daughter of Glacier",
      "perception": "Contains higher alpha acid content than Glacier, but similar low cohumulone",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Cedar",
      "storage": "~75%",
      "tertiary_aroma": "Pine",
      "toal_oil": "1.0 - 2.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Similar to Fuggle",
      "alpha_acids": "4.0 - 5.0%",
      "aroma": "Noble aroma that is pleasant and spicy",
      "beta_acids": "3.0 - 4.5%",
      "caryophyllene": "6 - 7% of total oil",
      "co_humulone": "20 - 25%",
      "country": "US",
      "farnesene": "5 - 8% of total oil",
      "humulene": "18 - 23% of total oil",
      "id": 45,
      "myrcene": "36 - 45% of total oil",
      "name": "Tettnang",
      "pedigree": "A traditional German land-race variety",
      "perception": "A true noble aroma variety",
      "primary_aroma": "Spicy",
      "product_id": null,
      "storage": "55 - 60% alpha remaining after 6 months",
      "styles": [
        "American-style Ale"
      ],
      "substitute_hops": [
        "Fuggle",
        "Santiam",
        "German Spalter Select",
        "German Spalt"
      ],
      "substitute_ids": [
        20,
        39,
        91,
        90
      ],
      "toal_oil": "0.4 - 0.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released in 2013 by USDA-ARS.",
      "alpha_acids": "10.25 - 11.2%",
      "aroma": "Pleasant and balanced with notes of melon, orange citrus, resin, spice and pepper.",
      "beta_acids": "3.3 - 4.2%",
      "caryophyllene": "3.5 - 5.1% of total oil",
      "co_humulone": "21 - 25%",
      "country": "US",
      "farnesene": "0.3 - 0.6% of total oil",
      "humulene": "7.7 - 10.4% of total oil",
      "id": 46,
      "myrcene": "39.3 - 55% of total oil",
      "name": "TriplePearl",
      "pedigree": "An open pollinated cross between a tetraploid Perle female and unknown diploid male. Lineage includes Northern Brewer and Hallertau.",
      "perception": "Expected to be utilized as an aroma variety, similar to Perle, but with more pronounced aroma characteristics.",
      "product_id": null,
      "storage": "N/A",
      "styles": [
        "Pale Ale"
      ],
      "substitute_hops": [
        "Perle"
      ],
      "substitute_ids": [
        37
      ],
      "toal_oil": "1.1 - 1.79 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released in 1995",
      "alpha_acids": "2.0 - 3.5%",
      "aroma": "Mild and pleasant  with spicy, floral tones",
      "beta_acids": "3.0 - 4.5%",
      "caryophyllene": "10 - 15% of total oil",
      "co_humulone": "23 - 38%",
      "country": "US",
      "farnesene": "",
      "humulene": "35 - 50% of total oil",
      "id": 47,
      "myrcene": "15 - 25% of total oil",
      "name": "Ultra",
      "pedigree": "Triploid seedling of Hallertau mf and half sister to Mt. Hood, Liberty and Crystal",
      "perception": "Displays a similar aroma profile to Hallertau mf",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "storage": "Good",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Hallertau"
      ],
      "substitute_ids": [
        24
      ],
      "toal_oil": "1.3 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released for cultivation in 1997",
      "alpha_acids": "5.0 - 6.0%",
      "aroma": "Herbal and floral tones",
      "beta_acids": "5.0 - 7.0%",
      "caryophyllene": "12 - 14% of total oil",
      "co_humulone": "14 - 16%",
      "country": "US",
      "farnesene": "",
      "humulene": "45 - 50% of total oil",
      "id": 48,
      "myrcene": "20 - 25% of total oil",
      "name": "Vanguard",
      "pedigree": "Cross between USDA accessions 21285 (a Hallertau mf daughter) and 64037M",
      "perception": "Similar aroma to Hallertau mf.",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "storage": "75 - 80% alpha remaining after 6 months",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Hallertau",
        "Liberty",
        "Mt. Hood",
        "German Hersbruker"
      ],
      "substitute_ids": [
        24,
        26,
        30,
        78
      ],
      "toal_oil": "0.8 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed by Yakima Chief Ranches",
      "alpha_acids": "15.0 - 17.0%",
      "aroma": "Mild and resinous with subtle citrus, pine and herbal characteristics",
      "beta_acids": "4.5 - 5.5%",
      "caryophyllene": "8 - 10% of total oil",
      "co_humulone": "24 - 26%",
      "country": "US",
      "farnesene": "",
      "humulene": "15 - 20% of total oil",
      "id": 49,
      "myrcene": "40 - 50% of total oil",
      "name": "Warrior\u00ae",
      "pedigree": "A proprietary variety",
      "perception": "Used for its mild, clean bittering properties",
      "primary_aroma": "Herbal",
      "product_id": "Brand YCR 5 cv.",
      "secondary_aroma": "Citrus",
      "storage": "76% alpha remaining after 6 months",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Columbus",
        "Magnum",
        "Nugget"
      ],
      "substitute_ids": [
        15,
        27,
        34
      ],
      "tertiary_aroma": "Pine",
      "toal_oil": "1.0 - 2.0 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "The most widely grown aroma hop in the US; released from the USDA breeding program in 1976",
      "alpha_acids": "4.0 - 6.0%",
      "aroma": "Mild and pleasant, with slightly spicy and floral tones",
      "beta_acids": "3.0 - 4.5%",
      "caryophyllene": "6 - 8% of total oil",
      "co_humulone": "30 - 35%",
      "country": "US",
      "farnesene": "5 - 6% of total oil",
      "humulene": "20 - 27% of total oil",
      "id": 50,
      "myrcene": "30 - 40% of total oil",
      "name": "Willamette",
      "pedigree": "Triploid seedling of the English Fuggle variety",
      "perception": "A quality aroma hop with low alpha content",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "storage": "60 - 65% alpha remaining after 6 months",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Fuggle",
        "Glacier",
        "Tettnang",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        20,
        22,
        45,
        99
      ],
      "toal_oil": "1.0 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released by Washington State University in 2013",
      "alpha_acids": "8.8 - 10.5%",
      "aroma": "Mild and pleasant",
      "beta_acids": "4.3 - 5.0%",
      "caryophyllene": "6.4 - 8.0% of total oil",
      "co_humulone": "21 - 23%",
      "country": "US",
      "farnesene": "9 - 10% of total oil",
      "humulene": "21 - 25% of total oil",
      "id": 51,
      "myrcene": "45 - 50% of total oil",
      "name": "Yakima Gold",
      "pedigree": "Cross between Early Cluster and a native Slovenian male",
      "perception": "An excellent general purpose variety with smooth bitterness and a pleasant aroma",
      "product_id": null,
      "storage": "~85%",
      "toal_oil": "1.9 - 2.3 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released in 1996.",
      "alpha_acids": "7.0 - 11.0%",
      "aroma": "Pleasant, mild aroma",
      "beta_acids": "3.5 -6.0%",
      "caryophyllene": "7 - 13% of total oil",
      "co_humulone": "18 - 23%",
      "country": "CZ",
      "farnesene": "1.5 - 3% of total oil",
      "humulene": "25 - 35% of total oil",
      "id": 52,
      "myrcene": "35 - 50% of total oil",
      "name": "Czech Premiant",
      "pedigree": "Derived from Saaz",
      "perception": "Known for its strong growth",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "tertiary_aroma": "Fruity",
      "toal_oil": "0.9 - 1.3 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred by Hop Products Australia in 1997 at Bushy Park Breeding Garden",
      "alpha_acids": "2.0 - 5.0%",
      "aroma": "Very mild, with pleasant earthy, herbal and floral overtones",
      "beta_acids": "7.0 - 8.0%",
      "caryophyllene": "~6% of total oil",
      "co_humulone": "23 - 28%",
      "country": "CZ",
      "farnesene": "~15% of total oil",
      "humulene": "~19% of total oil",
      "id": 53,
      "myrcene": "~42% of total oil",
      "name": "Czech Saaz",
      "pedigree": "A Czech landrace variety",
      "perception": "The classic \"noble\" aroma hop with long and strong traditions, associated with the renowned pilsner lager",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Saaz",
        "Sterling",
        "Polish Lublin"
      ],
      "substitute_ids": [
        38,
        42,
        95
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "0.4 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Derived from the Czech word meaning \"beer brewer\".",
      "alpha_acids": "5.0 - 9.0%",
      "aroma": "Fruity flavor profile including hints of peach, grapefruit and passion fruit",
      "beta_acids": "8.0 - 11.0%",
      "caryophyllene": "10 - 14% of total oil",
      "co_humulone": "22 - 28%",
      "country": "CZ",
      "farnesene": "0.5% of total oil",
      "humulene": "30 - 40% of total oil",
      "id": 54,
      "myrcene": "25 - 40% of total oil",
      "name": "Czech Sladek",
      "pedigree": "Parentage includes Northern Brewer and Saaz",
      "perception": "Balanced bittering",
      "primary_aroma": "Stone-Fruit",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Lager"
      ],
      "tertiary_aroma": "Tropical-Fruit",
      "toal_oil": "0.8 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at Wye to complement the variety Target",
      "alpha_acids": "13.0 - 16.0%",
      "aroma": "Pleasant, resinous hop aroma with hints of citrus (orange) and herbal flavors",
      "beta_acids": "4.0 - 6.0%",
      "caryophyllene": "6 - 8% of total oil",
      "co_humulone": "37 - 45%",
      "country": "UK",
      "farnesene": "~2% of total oil",
      "humulene": "23 - 26% of total oil",
      "id": 55,
      "myrcene": "~45% of total oil",
      "name": "UK Admiral",
      "pedigree": "Cross of Challenger and Northdown",
      "perception": "A high alpha hop with balanced bitterness and an acceptable aroma profile; a versatile replacement for both high alpha and dual purpose varieties",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "UK Northdown",
        "UK Target",
        "UK Challenger"
      ],
      "substitute_ids": [
        62,
        69,
        58
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "1.0 - 1.7 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released in 2004 by Horticulture Research International at Wye College in the UK",
      "alpha_acids": "7.0 - 10.0%",
      "aroma": "Mild floral and spicy characteristics with slightly grassy overtones",
      "beta_acids": "3.0 - 4.0%",
      "caryophyllene": "15 - 19% of total oil",
      "co_humulone": "~26%",
      "country": "UK",
      "farnesene": "~5% of total oil",
      "humulene": "~20% of total oil",
      "id": 56,
      "myrcene": "~33% of total oil",
      "name": "UK Boadicea",
      "pedigree": "Open pollination of a second generation female from a wild Japanese source",
      "perception": "Excellent for finishing and dry hopping",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "tertiary_aroma": "Grassy",
      "toal_oil": "1.4 - 2.0 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed at Wye College by Professor Salmon",
      "alpha_acids": "6.0 - 8.0%",
      "aroma": "Strong spice, blackcurrant, loganberry and lemon characteristics",
      "beta_acids": "2.3 - 3.5%",
      "caryophyllene": "~15.7% of total oil",
      "co_humulone": "34%",
      "country": "UK",
      "farnesene": "",
      "humulene": "~25% of total oil",
      "id": 57,
      "myrcene": "~36% of total oil",
      "name": "UK Bramling Cross",
      "pedigree": "Cross between Bramling (a traditional Golding variety) and a Manitoban (Canadian) wild hop",
      "perception": "Often used in traditional cask conditioned beers due to its distinct characteristics",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "All Styles"
      ],
      "substitute_hops": [
        "UK East Kent Golding",
        "UK Progress"
      ],
      "substitute_ids": [
        59,
        66
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "0.7 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at Wye College and released in 1972 for commercial planting Photo Credit Barth-Haas Group",
      "alpha_acids": "6.5 - 9.0%",
      "aroma": "Cedar, green tea and sweet floral characteristics (as a late addition, it can provide crisp, fruity flavors)",
      "beta_acids": "3.2 - 4.2%",
      "caryophyllene": "~9.5% of total oil",
      "co_humulone": "20 - 25%",
      "country": "UK",
      "farnesene": "",
      "humulene": "~25% of total oil",
      "id": 58,
      "myrcene": "~30% of total oil",
      "name": "UK Challenger",
      "pedigree": "Granddaughter of Northern Brewer, lineage also includes Northdown and Target",
      "perception": "A versatile hop, widely used for both early and late kettle additions",
      "primary_aroma": "Cedar",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Northern Brewer",
        "German Perle"
      ],
      "substitute_ids": [
        33,
        85
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "1.0 - 1.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Synonymous with English Goldings Photo Credit Barth-Haas Group",
      "alpha_acids": "4.0 - 6.0%",
      "aroma": "Smooth and delicate with floral, lavender, spice, honey, earth, lemon and thyme overtones",
      "beta_acids": "1.9 - 3.0%",
      "caryophyllene": "~14.8% of total oil",
      "co_humulone": "25 - 30%",
      "country": "UK",
      "farnesene": "",
      "humulene": "~36% of total oil",
      "id": 59,
      "myrcene": "~25% of total oil",
      "name": "UK East Kent Golding",
      "pedigree": "Developed by conal selection from 1790 on, starting from Canterbury Whitebline",
      "perception": "A traditional English hop that has been used in kettle and dry hopping",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Golding",
        "UK Progress"
      ],
      "substitute_ids": [
        23,
        66
      ],
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "0.4 - 0.8 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "First commercial dwarf hop designed for aroma consideration in England; released in 1996",
      "alpha_acids": "6.5 - 10.0%",
      "aroma": "Slightly spicy, but smooth, with tangerine, orange marmalade, magnolia and floral flavors",
      "beta_acids": "3.0 - 4.5%",
      "caryophyllene": "~6% of total oil",
      "co_humulone": "32 - 35%",
      "country": "UK",
      "farnesene": "1 - 3% of total oil",
      "humulene": "~20% of total oil",
      "id": 60,
      "myrcene": "30 - 38% of total oil",
      "name": "UK First Gold",
      "pedigree": "Cross pollination of the Whitbread Golding variety and a dwarf male",
      "perception": "A versatile variety perfect for modern beer styles",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Crystal",
        "UK East Kent Golding"
      ],
      "substitute_ids": [
        17,
        59
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "0.7 - 1.7 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Once a predominant hop in England, now reserved for aroma in conjunction with high alpha types",
      "alpha_acids": "3.5 - 6.5%",
      "aroma": "Delicate and pleasant mint, grass and floral tones",
      "beta_acids": "2.0 - 4.0%",
      "caryophyllene": "~13.4% of total oil",
      "co_humulone": "27 - 33%",
      "country": "UK",
      "farnesene": "6 - 8% of total oil",
      "humulene": "30 - 38% of total oil",
      "id": 61,
      "myrcene": "25 - 30% of total oil",
      "name": "UK Fuggle",
      "pedigree": "A chance seedling raised in England",
      "perception": "The most revered and famous English hop, known for its full bodied flavor in traditional ales",
      "primary_aroma": "Grassy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Fuggle",
        "Willamette",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        20,
        50,
        99
      ],
      "toal_oil": "0.7 - 1.1 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released by Wye College in 1970; an \"aunt\" to both UK Challenger and UK Target",
      "alpha_acids": "7.0 - 10.0%",
      "aroma": "Pleasant spice, cedar and pine characteristics with hints of floral and berry flavors",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "~15% of total oil",
      "co_humulone": "~31%",
      "country": "UK",
      "farnesene": "~1% of total oil",
      "humulene": "~37% of total oil",
      "id": 62,
      "myrcene": "~25% of total oil",
      "name": "UK Northdown",
      "pedigree": "Seedling of Northern Brewer and a downy resistant German male",
      "perception": "An excellent dual purpose hop that works well on its own, or in conjunction with an aroma variety",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Cedar",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Northern Brewer",
        "UK Challenger"
      ],
      "substitute_ids": [
        33,
        58
      ],
      "tertiary_aroma": "Pine",
      "toal_oil": "1.2 - 2.2 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed at Wye College and released in 1996",
      "alpha_acids": "8.0 - 12.0%",
      "aroma": "Crisp and mellow tones of pine, chocolate, molasses and spice characteristics",
      "beta_acids": "3.8 - 5.4%",
      "caryophyllene": "~11% of total oil",
      "co_humulone": "~30%",
      "country": "UK",
      "farnesene": "~1.5% of total oil",
      "humulene": "~30% of total oil",
      "id": 63,
      "myrcene": "~24% of total oil",
      "name": "UK Phoenix",
      "pedigree": "Seedling of Yeoman",
      "perception": "Performs well as a replacement for high alpha or dual purpose hops early in the boil; late hop additions for aroma tend to be mellow",
      "primary_aroma": "Pine",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "UK Northdown",
        "UK Challenger"
      ],
      "substitute_ids": [
        62,
        58
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "1.2 - 2.5 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Bred at the Horticultural Research Institute in Wye, England and released in 2000",
      "alpha_acids": "9.0 - 13.0%",
      "aroma": "Distinct fruit and spice characteristics with pleasant lemon, grapefruit, pear and berry flavors",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "~7% of total oil",
      "co_humulone": "~35%",
      "country": "UK",
      "farnesene": "",
      "humulene": "21 - 25% of total oil",
      "id": 64,
      "myrcene": "30 - 35% of total oil",
      "name": "UK Pilgrim",
      "pedigree": "Half-sibling of First Gold and Herald",
      "perception": "Often compared to UK Target, Pilgrim performs well as a replacement for high alpha or dual purpose hops",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "UK Target",
        "UK Challenger"
      ],
      "substitute_ids": [
        69,
        58
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "1.0 - 1.8 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released in 1996 from Wye College",
      "alpha_acids": "8.0 - 10.5%",
      "aroma": "Distinctly hoppy with pleasant citrus (lemon and grapefruit) tones and hints of herbal, cedar flavors",
      "beta_acids": "3.5 - 4.0%",
      "caryophyllene": "6 - 9% of total oil",
      "co_humulone": "~36%",
      "country": "UK",
      "farnesene": "",
      "humulene": "18 - 25% of total oil",
      "id": 65,
      "myrcene": "~35% of total oil",
      "name": "UK Pioneer",
      "pedigree": "Sister to English Herald and distant relative of Yeoman",
      "perception": "Combines a pleasant aroma with a moderately high alpha acid content",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "UK East Kent Golding"
      ],
      "substitute_ids": [
        59
      ],
      "tertiary_aroma": "Cedar",
      "toal_oil": "0.8 - 1.8 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed at Wye College in 1951 and released for commercial production in 1964",
      "alpha_acids": "6.0 - 7.5%",
      "aroma": "Moderately strong spicy, grassy, floral, mint, earth and honey tones",
      "beta_acids": "2.0 - 3.3%",
      "caryophyllene": "~14% of total oil",
      "co_humulone": "~33%",
      "country": "UK",
      "farnesene": "",
      "humulene": "36 - 42% of total oil",
      "id": 66,
      "myrcene": "~29% of total oil",
      "name": "UK Progress",
      "pedigree": "Seedling of WGV crossed with O.B.79 (a trial male which was the grandfather of Target)",
      "perception": "Originally introduced as a replacement for Fuggle, Progress shows excellent potential at both the start and end of the boil",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Grassy",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Fuggle",
        "UK East Kent Golding"
      ],
      "substitute_ids": [
        20,
        59
      ],
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "0.8 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred in 1995 at Horticulture Research International, Wye College and released in 2006",
      "alpha_acids": "4.5 - 6.5%",
      "aroma": "Pleasant but intense fruity flavors with mild floral, grassy, herbal and mint characteristics",
      "beta_acids": "2.1 - 3.1%",
      "caryophyllene": "6 - 10 % of total oil",
      "co_humulone": "26 - 30%",
      "country": "UK",
      "farnesene": "3 - 5% of total oil",
      "humulene": "21 - 26% of total oil",
      "id": 67,
      "myrcene": "25 - 30% of total oil",
      "name": "UK Sovereign",
      "pedigree": "Open pollination, granddaughter of Pioneer",
      "perception": "Works well with Goldings and as a single hop",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Grassy",
      "styles": [
        "Pale Ale"
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.6 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "alpha_acids": "4.3 - 5.8%",
      "aroma": "Delicate (similar to Fuggle)",
      "beta_acids": "2.4 - 3.2%",
      "co_humulone": "29 - 32%",
      "country": "UK",
      "humulene": "~23% of total oil",
      "id": 68,
      "myrcene": "~42% of total oil",
      "name": "UK Sussex",
      "pedigree": "A \"chance find\"",
      "perception": "Good, yet delicate, flavor retention",
      "product_id": null,
      "styles": [
        "Ale"
      ],
      "toal_oil": "0.4 - 0.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "A result of the Wye College breeding program, released in 1972 Photo Credit Barth-Haas Group",
      "alpha_acids": "8.5 - 13.5%",
      "aroma": "An intense English hop aroma with distinct spicy, floral, sage and citrus characteristics",
      "beta_acids": "4.0 - 5.7%",
      "caryophyllene": "~10% of total oil",
      "co_humulone": "~37%",
      "country": "UK",
      "farnesene": "",
      "humulene": "~17% of total oil",
      "id": 69,
      "myrcene": "~45% of total oil",
      "name": "UK Target",
      "pedigree": "Second generation selection from Northern Brewer and a male Eastwell Golding seedling",
      "perception": "An excellent bittering hop that tends to be too harsh for aroma purposes late in the boil",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Fuggle",
        "Willamette"
      ],
      "substitute_ids": [
        20,
        50
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "1.2 - 1.8 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Selected as a seedling in 1911 on a farm at Beltring in Kent and named after the Whitbread Beer Company, which purchased the farm",
      "alpha_acids": "5.0 - 7.5%",
      "aroma": "Fresh earthy, botanical and floral flavors",
      "beta_acids": "2.5 - 3.5%",
      "caryophyllene": "~13% of total oil",
      "co_humulone": "~37%",
      "country": "UK",
      "farnesene": "1 - 2% of total oil",
      "humulene": "38 - 42% of total oil",
      "id": 70,
      "myrcene": "24 - 27% of total oil",
      "name": "UK WGV",
      "pedigree": "Open pollination of Bates Brewer",
      "perception": "Similar to Goldings, but not as delicate and containing a more robust, hoppy flavor",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Pale Ale"
      ],
      "substitute_hops": [
        "UK East Kent Golding",
        "UK Progress"
      ],
      "substitute_ids": [
        59,
        66
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.8 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "The first variety from the Comptoir Agricole breeding program",
      "alpha_acids": "7.9 - 8.3%",
      "aroma": "Very fine spice and herbal notes with subtle citrus characteristics",
      "beta_acids": "3.8 - 4.5%",
      "caryophyllene": "~7.4% of total oil",
      "co_humulone": "~42 %",
      "country": "FR",
      "farnesene": "2 - 4% of total oil",
      "humulene": "~21% of total oil",
      "id": 71,
      "myrcene": "~40% of total oil",
      "name": "French Aramis",
      "pedigree": "Derived from Strisselspalt",
      "perception": "Closely resembling Strisselspalt, but with higher oil and alpha content",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Centennial",
        "Chinook",
        "Hallertau",
        "Tettnang"
      ],
      "substitute_ids": [
        9,
        11,
        24,
        45
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.2 - 1.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "From the Alsace area of France, near Strasbourg",
      "alpha_acids": "1.8 - 2.5%",
      "aroma": "Very fine spicy, herbal, floral, lemon and other fruit tones",
      "beta_acids": "3.0 - 6.0%",
      "caryophyllene": "8 - 10% of total oil",
      "co_humulone": "20 - 23%",
      "country": "FR",
      "farnesene": "",
      "humulene": "12 - 21% of total oil",
      "id": 72,
      "myrcene": "35 - 52% of total oil",
      "name": "French Strisselpalt",
      "pedigree": "Traditional landrace variety",
      "perception": "Globally accepted as a good aroma hop with similar characteristics to Hersbrucker",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Crystal",
        "Liberty",
        "Mt. Hood",
        "German Hersbruker"
      ],
      "substitute_ids": [
        17,
        26,
        30,
        78
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "0.6 - 0.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed in 2006",
      "alpha_acids": "8.0 - 9.0%",
      "aroma": "Strong floral, fruit and citrus characteristics",
      "beta_acids": "4.0 - 4.7%",
      "caryophyllene": "~6.1 % of total oil",
      "co_humulone": "20 - 23%",
      "country": "FR",
      "farnesene": "",
      "humulene": "~13.5% of total oil",
      "id": 73,
      "myrcene": "~60% of total oil",
      "name": "French Triskel",
      "pedigree": "A cross between Strisselspalt and the male plant of the English hop variety of Yeoman",
      "perception": "Contains many of the same characteristics as Strisselspalt, but with a more pronounced flavor profile",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Ahtanum\u2122",
        "Centennial",
        "Chinook",
        "Simcoe\u00ae"
      ],
      "substitute_ids": [
        1,
        9,
        11,
        40
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "1.5 - 2.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Originally bred in the UK by professor E.S. Salmon and released in 1934",
      "alpha_acids": "5.0 - 9.0%",
      "aroma": "Black currant, fruit and spice characteristics",
      "beta_acids": "2.5 - 3.5%",
      "caryophyllene": "~7.3% of total oil",
      "co_humulone": "40 - 48%",
      "country": "DE",
      "farnesene": "",
      "humulene": "~30% of total oil",
      "id": 74,
      "myrcene": "~38.5% of total oil",
      "name": "German Brewer\u2019s Gold",
      "pedigree": "Open pollination of a wild Manitoba hop",
      "perception": "Has a high resin content and gives a well-balanced bitterness which is ideally complimented by late hop additions in lager beers",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Galena",
        "Northern Brewer",
        "UK Northdown"
      ],
      "substitute_ids": [
        21,
        33,
        62
      ],
      "toal_oil": "1.8 - 2.2 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released in 2012",
      "alpha_acids": "9.0 - 12.0%",
      "aroma": "Floral and fruity with passion fruit, grapefruit, pineapple, grape and lemongrass overtones",
      "beta_acids": "4.5 - 5.5%",
      "caryophyllene": "0 - 2 % of total oil",
      "co_humulone": "22 - 26%",
      "country": "DE",
      "farnesene": "",
      "humulene": "0 - 3% of total oil",
      "id": 75,
      "myrcene": "50 - 75 % of total oil",
      "name": "German Hallertau Blanc",
      "pedigree": "Daughter of Cascade",
      "perception": "One of several new German varieties with bold flavor profiles, perfect for American-style Ales",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "American-style Ale"
      ],
      "tertiary_aroma": "Grassy",
      "toal_oil": "1.2 - 1.5 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "At one time, the major Hallertau landrace variety with a highly acclaimed aroma profile",
      "alpha_acids": "3.0 - 5.5%",
      "aroma": "Mild, yet spicy, with floral and citrus tones",
      "beta_acids": "3.0 - 5.0%",
      "caryophyllene": "~14.6% of total oil",
      "co_humulone": "18 - 28%",
      "country": "DE",
      "farnesene": "",
      "humulene": "~55.1% of total oil",
      "id": 76,
      "myrcene": "~15.5% of total oil",
      "name": "German Hallertau Mittelfr\u00fch",
      "pedigree": "Traditional Hallertau variety",
      "perception": "The classic German aroma hop associated with Bavarian-style lager beers and distinguished by an intense, pleasantly harmonic bitterness",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Liberty",
        "Vanguard",
        "German Traditon"
      ],
      "substitute_ids": [
        26,
        48,
        94
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "0.7 - 1.3 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Center in Hull, Germany and released in 2005",
      "alpha_acids": "12.0 - 17.0%",
      "aroma": "Spicy, floral and hop notes with hints of pine, black pepper and melon",
      "beta_acids": "4.0 - 5.5%",
      "caryophyllene": "7 - 12% of total oil",
      "co_humulone": "32 - 38%",
      "country": "DE",
      "farnesene": "",
      "humulene": "30 - 45% of total oil",
      "id": 77,
      "myrcene": "30 - 50% of total oil",
      "name": "German Herkules",
      "pedigree": "Cross between Hallertau Taurus and a powdery mildew resistant Hull male breeding line",
      "perception": "Imparts robust, hoppy tang flavors",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "German-style Ales"
      ],
      "tertiary_aroma": "Pine",
      "toal_oil": "1.6 - 2.4 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Has developed into the variety with the largest acreage - grown throughout the Hallertau, Spalt and Hersbruck areas",
      "alpha_acids": "2.0 - 5.0%",
      "aroma": "Mild, herbal and floral characteristics, with fruity overtones",
      "beta_acids": "2.5 - 6.0%",
      "caryophyllene": "~13.6% of total oil",
      "co_humulone": "18 - 25%",
      "country": "DE",
      "farnesene": "",
      "humulene": "~32.4% of total oil",
      "id": 78,
      "myrcene": "~12.7% of total oil",
      "name": "German Hersbruker",
      "pedigree": "Traditional land-race variety selected in the Hersbruck area",
      "perception": "A delicate aroma hop used mainly in lager type beers",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Mt. Hood",
        "French Strisselpalt"
      ],
      "substitute_ids": [
        30,
        72
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "0.7 - 1.3 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Institute in Hull and released in 2012",
      "alpha_acids": "6.9 - 7.5%",
      "aroma": "Distinct fruit characteristics including honeydew melon and strawberry flavors",
      "beta_acids": "7.3 - 7.9%",
      "caryophyllene": "5 - 10% of total oil",
      "co_humulone": "25 - 30%",
      "country": "DE",
      "farnesene": "",
      "humulene": "10 - 20% of total oil",
      "id": 79,
      "myrcene": "~36% of total oil",
      "name": "German Hull Melon",
      "pedigree": "Daughter of Cascade",
      "perception": "An excellent consideration for varieties not necessarily associated with typical hop flavors",
      "primary_aroma": "Tropical-Fruit",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "toal_oil": "~0.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred in 1980 at the Hop Research Center in Hull, Germany",
      "alpha_acids": "11.0 - 16.0%",
      "aroma": "A delicate aroma with inclinations towards floral and fruit flavorings and a prevalent hoppy tang",
      "beta_acids": "5.0 - 7.0%",
      "caryophyllene": "8 - 13% of total oil",
      "co_humulone": "21 - 29%",
      "country": "DE",
      "farnesene": "",
      "humulene": "30 - 45% of total oil",
      "id": 80,
      "myrcene": "30 - 45% of total oil",
      "name": "German Magnum",
      "pedigree": "Daughter of US Galena",
      "perception": "A high alpha variety with good yields and disease resistance",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Columbus",
        "Nugget"
      ],
      "substitute_ids": [
        15,
        34
      ],
      "toal_oil": "1.6 - 2.6 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Bred at the Hop Research Institute in Hull and released in 2012",
      "alpha_acids": "7.0 - 10.0%",
      "aroma": "Distinct tangerine and citrus flavors",
      "beta_acids": "5.0 - 6.5%",
      "caryophyllene": "1 - 5% of total oil",
      "co_humulone": "31 - 35%",
      "country": "DE",
      "farnesene": "",
      "humulene": "5 - 15% of total oil",
      "id": 81,
      "myrcene": "~71% of total oil",
      "name": "German Mandarina Bavaria",
      "pedigree": "Daughter of Cascade",
      "perception": "Displays a pleasant fruitiness in finished beers",
      "primary_aroma": "Tropical-Fruit",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "tertiary_aroma": "Citrus",
      "toal_oil": "~2.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "The first mildew-resistant variety from the Hop Research Center in Hull, Germany",
      "alpha_acids": "12.0 - 15.0%",
      "aroma": "Strong earthy, floral and citrus impressions",
      "beta_acids": "3.5 - 7.0%",
      "caryophyllene": "9 - 15% of total oil",
      "co_humulone": "16 - 20%",
      "country": "DE",
      "farnesene": "",
      "humulene": "35 - 50% of total oil",
      "id": 82,
      "myrcene": "25 - 35% of total oil",
      "name": "German Merkur",
      "pedigree": "Cross between Hallertau Magnum and 81/8/13",
      "perception": "High alpha variety with high bitter value, good aroma, strong storage stability and low co-humulone",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Magnum",
        "German Taurus",
        "German Traditon"
      ],
      "substitute_ids": [
        27,
        92,
        94
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "2.2 - 2.8 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Bred in England and later grown in Belgium, Spain, Germany and the United States",
      "alpha_acids": "7.0 - 10.0%",
      "aroma": "Medium intense herbal and floral tones",
      "beta_acids": "3.5 - 5.0%",
      "caryophyllene": "10 - 20% of total oil",
      "co_humulone": "27 - 33%",
      "country": "DE",
      "farnesene": "",
      "humulene": "35 - 50% of total oil",
      "id": 83,
      "myrcene": "25 - 45% of total oil",
      "name": "German Northern Brewer",
      "pedigree": "A cross between an American wild hop and an English male",
      "perception": "A true dual purpose hop",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Bitter"
      ],
      "substitute_hops": [
        "Chinook",
        "Columbus",
        "Galena",
        "Magnum",
        "Northern Brewer",
        "German Brewer\u2019s Gold"
      ],
      "substitute_ids": [
        11,
        15,
        21,
        27,
        33,
        74
      ],
      "toal_oil": "1.6 - 2.1 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Registered in 2001 and marketed since 2004",
      "alpha_acids": "5.0 - 8.0%",
      "aroma": "Even dispersal of all aroma characteristics - fruity, floral, herbal and hoppy tones all appear",
      "beta_acids": "3.5 - 5.5%",
      "caryophyllene": "8 - 15% of total oil",
      "co_humulone": "13.0 - 17.0%",
      "country": "DE",
      "farnesene": "",
      "humulene": "30 - 50% of total oil",
      "id": 84,
      "myrcene": "20 - 45% of total oil",
      "name": "German Opal",
      "perception": "Good aroma type with average to high bitter value",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Tettnang",
        "UK East Kent Golding",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        45,
        59,
        99
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.8 - 1.3 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Registered in 1978 Photo Credit Barth-Haas Group",
      "alpha_acids": "6.0 - 10.0%",
      "aroma": "Delicate floral, fruit, spice and mint tones",
      "beta_acids": "2.5 - 5.0%",
      "caryophyllene": "10 - 20% of total oil",
      "co_humulone": "28 - 32%",
      "country": "DE",
      "farnesene": "",
      "humulene": "35 - 55% of total oil",
      "id": 85,
      "myrcene": "20 - 35% of total oil",
      "name": "German Perle",
      "pedigree": "Bred from English Northern Brewer",
      "perception": "A highly acceptable aroma variety with balanced bittering characteristics",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Northern Brewer",
        "Perle"
      ],
      "substitute_ids": [
        33,
        37
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "0.8 - 1.3 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Institute in Hull and released in 2012",
      "alpha_acids": "18.0 - 23.0%",
      "aroma": "Intense floral and pleasant mint tones",
      "beta_acids": "4.5 - 6.0%",
      "caryophyllene": "8 - 13% of total oil",
      "co_humulone": "22 - 28%",
      "country": "DE",
      "farnesene": "",
      "humulene": "20 - 35% of total oil",
      "id": 86,
      "myrcene": "~50% of total oil",
      "name": "German Polaris",
      "pedigree": "Hull breeding line",
      "perception": "A variety with bold taste and differentiating flavor",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "toal_oil": "4.0 - 5.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released in 2002 from the Hop Research Center in Hull, Germany ",
      "alpha_acids": "2.0 - 4.5%",
      "aroma": "Distinct spicy, fruit and citrus (tangerine) tones",
      "beta_acids": "4.0 - 7.0%",
      "caryophyllene": "9 - 14% of total oil",
      "co_humulone": "12 - 17%",
      "country": "DE",
      "farnesene": "",
      "humulene": "20 - 30% of total oil",
      "id": 87,
      "myrcene": "25 - 40% of total oil",
      "name": "German Saphir",
      "perception": "Good aroma variety with a distinct hoppy tang",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Hallertau"
      ],
      "substitute_ids": [
        24
      ],
      "tertiary_aroma": "Citrus",
      "toal_oil": "0.8 - 1.4 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Center in Hull, Germany and released in 2001 Photo Credit Barth-Haas Group",
      "alpha_acids": "3.0 - 6.5%",
      "aroma": "Floral and fruit characteristics",
      "beta_acids": "2.5 - 5.0%",
      "caryophyllene": "4 - 10% of total oil",
      "co_humulone": "21 - 27%",
      "country": "DE",
      "farnesene": "15 - 22% of total oil",
      "humulene": "10 - 22% of total oil",
      "id": 88,
      "myrcene": "20 - 40% of total oil",
      "name": "German Select",
      "pedigree": "Bred from Hallertau mf. and Spalt",
      "perception": "Bred to be like the Spalt/Tettnang/Saaz group",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Saaz",
        "Tettnang",
        "German Hersbruker",
        "German Spalt",
        "German Tettnang"
      ],
      "substitute_ids": [
        38,
        45,
        78,
        90,
        93
      ],
      "toal_oil": "0.6 - 0.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Formerly known as Emerald",
      "alpha_acids": "4.0 - 6.0%",
      "aroma": "Predominantly fruity with strong floral and hop tones",
      "beta_acids": "3.5 - 5.5%",
      "caryophyllene": "9 - 14% of total oil",
      "co_humulone": "13 - 18%",
      "country": "DE",
      "farnesene": "",
      "humulene": "30 - 50% of total oil",
      "id": 89,
      "myrcene": "20 - 40% of total oil",
      "name": "German Smaragd (Emerald)",
      "pedigree": "Daughter of Hallertau Gold",
      "perception": "A fine aroma variety with high bittering value",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Ale"
      ],
      "toal_oil": "0.7 - 1.7 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Only grown in the Spalt area, limited acreage Photo Credit Barth-Haas Group",
      "alpha_acids": "2.5 - 5.5%",
      "aroma": "Mild and herbal, with spicy, floral and fruit tones",
      "beta_acids": "3.0 - 5.0%",
      "caryophyllene": "8 - 13% of total oil",
      "co_humulone": "22 - 29%",
      "country": "DE",
      "farnesene": "12 - 18% of total oil",
      "humulene": "20 - 30% of total oil",
      "id": 90,
      "myrcene": "20 - 35% of total oil",
      "name": "German Spalt",
      "pedigree": "Traditional German land-race variety selected and grown in the area of the same name",
      "perception": "Traditional noble aroma hop with average bitter value and pleasant aroma",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Bock"
      ],
      "substitute_hops": [
        "Saaz",
        "Tettnang",
        "German Spalter Select"
      ],
      "substitute_ids": [
        38,
        45,
        91
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "0.5 - 0.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed by the Hull Hop Research Center.",
      "alpha_acids": "3.0 - 6.5%",
      "aroma": "Earthy, citrusy aroma",
      "beta_acids": "2.5 - 5.0%",
      "caryophyllene": "6 - 8% of total oil",
      "co_humulone": "20 - 28%",
      "country": "DE",
      "farnesene": "10 - 15% of total oil",
      "humulene": "15 - 20% of total oil",
      "id": 91,
      "myrcene": "20 - 40% of total oil",
      "name": "German Spalter Select",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "toal_oil": "0.6 - 0.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Institute in Hull, Germany Photo Credit Barth-Haas Group",
      "alpha_acids": "12.0 - 17.0%",
      "aroma": "Strong noble characteristics",
      "beta_acids": "4.0 - 6.0%",
      "caryophyllene": "6 - 11% of total oil",
      "co_humulone": "20 - 25%",
      "country": "DE",
      "farnesene": "",
      "humulene": "23 - 33% of total oil",
      "id": 92,
      "myrcene": "30 - 50% of total oil",
      "name": "German Taurus",
      "pedigree": "Cross between 82/39/37 and 85/54/15M",
      "perception": "A high alpha variety with noble, aromatic, bittering qualities",
      "product_id": null,
      "styles": [
        "German-style Ales"
      ],
      "substitute_hops": [
        "Citra\u00ae",
        "Magnum",
        "German Traditon"
      ],
      "substitute_ids": [
        12,
        27,
        94
      ],
      "toal_oil": "0.9 - 1.4 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Largely confined to the Tettnang area and belonging to the Saaz variety group",
      "alpha_acids": "3.0 - 6.0%",
      "aroma": "Mild and pleasant with balanced earthy, herbal and floral aroma impressions",
      "beta_acids": "3.0 - 5.0%",
      "caryophyllene": "6 - 11% of total oil",
      "co_humulone": "22 - 29%",
      "country": "DE",
      "farnesene": "16 - 24% of total oil",
      "humulene": "20 - 30% of total oil",
      "id": 93,
      "myrcene": "20 - 35% of total oil",
      "name": "German Tettnang",
      "pedigree": "Traditional German landrace variety",
      "perception": "Traditional noble aroma hop",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Saaz",
        "German Hersbruker",
        "German Spalter Select",
        "German Spalt",
        "German Select"
      ],
      "substitute_ids": [
        38,
        78,
        91,
        90,
        88
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "0.5 - 0.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred at the Hop Research Institute in Hull, Germany and registered in 1993",
      "alpha_acids": "5.0 - 7.0%",
      "aroma": "Medium intense floral and herbal (grassy) tones",
      "beta_acids": "4.0 - 5.0%",
      "caryophyllene": "10 - 15% of total oil",
      "co_humulone": "26 - 29%",
      "country": "DE",
      "farnesene": "",
      "humulene": "35 - 50% of total oil",
      "id": 94,
      "myrcene": "17 - 32% of total oil",
      "name": "German Traditon",
      "pedigree": "A cross between Hallertau Gold and 75/15/106M originating in Germany",
      "perception": "Imparts beer with a harmonic bitterness",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Bock"
      ],
      "substitute_hops": [
        "Liberty",
        "German Hallertau Mittelfr\u00fch"
      ],
      "substitute_ids": [
        26,
        76
      ],
      "tertiary_aroma": "Grassy",
      "toal_oil": "1.0 - 1.4 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Grown in the Lublin area of Poland.",
      "alpha_acids": "3.0 - 4.5%",
      "aroma": "Mild aroma typical of classic noble hops",
      "beta_acids": "2.5 - 3.5%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "25 - 30%",
      "country": "PL",
      "farnesene": "10 - 12% of total oil",
      "humulene": "35 - 40% of total oil",
      "id": 95,
      "myrcene": "25 - 35% of total oil",
      "name": "Polish Lublin",
      "pedigree": "Bred from a Saaz selection",
      "primary_aroma": "Spicy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Lager"
      ],
      "toal_oil": "0.7 - 1.2 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Also known as Super Styrian",
      "alpha_acids": "7.0 - 9.5%",
      "aroma": "Intense and pleasant displaying floral, pine and hoppy characteristics",
      "beta_acids": "2.7 - 4.4%",
      "caryophyllene": "6 - 9% of total oil",
      "co_humulone": "22 - 26%",
      "country": "SI",
      "farnesene": "5 - 10% of total oil",
      "humulene": "20 - 25% of total oil",
      "id": 96,
      "myrcene": "20 - 25% of total oil",
      "name": "Styrian Aurora",
      "pedigree": "Diploid cross between Northern Brewer and a TG seedling of unknown origin",
      "perception": "Aroma is similar to Styrian Golding, but much lighter with hoppy aroma",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Styrian Bobek",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        97,
        99
      ],
      "toal_oil": "0.9 - 1.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Seedling selected by Dr. Tone Wagner in Zalec, Yugoslavia in the mid-1970s",
      "alpha_acids": "3.5 - 7.0%",
      "aroma": "Intense and pleasant with floral, pine and hop overtones",
      "beta_acids": "4.0 - 6.1%",
      "caryophyllene": "4 - 6% of total oil",
      "co_humulone": "27 - 31%",
      "country": "SI",
      "farnesene": "4 - 7% of total oil",
      "humulene": "13 - 19% of total oil",
      "id": 97,
      "myrcene": "30 - 45% of total oil",
      "name": "Styrian Bobek",
      "pedigree": "Northern Brewer and a TG seedling of unknown origin",
      "perception": "A world-renowned couplet with moderate bitterness",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "English-style Ale"
      ],
      "toal_oil": "0.7 - 4.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "alpha_acids": "3.0 - 6.0%",
      "aroma": "Pleasant and hoppy, similar to traditional European varieties",
      "beta_acids": "2.0 - 3.3%",
      "caryophyllene": "8 - 9% of total oil",
      "co_humulone": "26 - 29%",
      "country": "SI",
      "farnesene": "3 - 7% of total oil",
      "humulene": "18 - 23% of total oil",
      "id": 98,
      "myrcene": "26 - 35% of total oil",
      "name": "Styrian Celeia",
      "pedigree": "Triploid hybrid between Styrian Golding and 105/58 hybrid between Aurora (Super Styrian) and a Slovenian wild hop",
      "perception": "A quality aroma variety with excellent bitterness and aroma characteristics",
      "primary_aroma": "Floral",
      "product_id": null,
      "styles": [
        "English-style Ale"
      ],
      "substitute_hops": [
        "Saaz",
        "Styrian Bobek",
        "Styrian Savinjski Golding"
      ],
      "substitute_ids": [
        38,
        97,
        99
      ],
      "toal_oil": "0.6 - 3.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Also referred to as Styrian Golding or Savinja Golding, this variety is nearly identical to Fuggle",
      "alpha_acids": "2.8 - 5.5%",
      "aroma": "Very mild, noble hop flavor",
      "beta_acids": "2.0 - 3.0%",
      "caryophyllene": "9 - 11% of total oil",
      "co_humulone": "25 - 30%",
      "country": "SI",
      "farnesene": "2 - 5% of total oil",
      "humulene": "34 - 38% of total oil",
      "id": 99,
      "myrcene": "27 - 33% of total oil",
      "name": "Styrian Savinjski Golding",
      "pedigree": "Conal selection of Fuggle, from Yugoslavia",
      "perception": "A world-renowned aroma hop with widespread usage in both ale and lager brewing",
      "primary_aroma": "Tobacco/Earthy",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Belgian-style Ales"
      ],
      "substitute_hops": [
        "Fuggle",
        "UK Fuggle",
        "Styrian Bobek"
      ],
      "substitute_ids": [
        20,
        61,
        97
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "0.3 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Australia's newest aroma hop cultivar",
      "alpha_acids": "14.0 - 16.0%",
      "aroma": "Spicy, hoppy and floral with hints of anise",
      "beta_acids": "4.0 - 7.5%",
      "caryophyllene": "12 - 18% of total oil",
      "co_humulone": "~36%",
      "country": "AU",
      "farnesene": "0 - 1% of total oil",
      "humulene": "16 - 22% of total oil",
      "id": 100,
      "myrcene": "40 - 50% of total oil",
      "name": "Australian Ella",
      "pedigree": "Descendent of a Spalt derived male and half sister to Galaxy",
      "perception": "Reminiscent of, yet distinctly different from, noble European varieties - one of the most versatile hops available",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "Lager"
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "~2.9 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed and grown exclusively in Australia",
      "alpha_acids": "11.0 - 16.0%",
      "aroma": "Distinct citrus, peach and passion fruit flavors",
      "beta_acids": "5.0 - 6.9%",
      "caryophyllene": "7 - 9% of total oil",
      "co_humulone": "32 - 42%",
      "country": "AU",
      "farnesene": "2 - 4% of total oil",
      "humulene": "1 - 2% of total oil",
      "id": 101,
      "myrcene": "33 - 69% of total oil",
      "name": "Australian Galaxy",
      "pedigree": "Australian high-alpha female and Perle male",
      "perception": "Typically used as a late addition - the aroma and flavor characteristics become more pronounced the later the addition",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Fruity",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Citra\u00ae"
      ],
      "substitute_ids": [
        12
      ],
      "tertiary_aroma": "Stone-Fruit",
      "toal_oil": "3.0 - 5.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred by Hop Products Australia in 1986; formerly known as Southern Hallertau",
      "alpha_acids": "4.9 - 7.3%",
      "aroma": "Very mild and pleasant with delicate floral and herbal tones",
      "beta_acids": "5.0 - 7.0%",
      "caryophyllene": "10 - 15% of total oil",
      "co_humulone": "20 - 23%",
      "country": "AU",
      "farnesene": "",
      "humulene": "35 - 55% of total oil",
      "id": 102,
      "myrcene": "1 - 13% of total oil",
      "name": "Australian Helga",
      "pedigree": "Open pollination of a female Hallertau mf",
      "perception": "Brewing characteristics closely resemble that of its parent, Hallertau mf.",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Hallertau"
      ],
      "substitute_ids": [
        24
      ],
      "tertiary_aroma": "Herbal",
      "toal_oil": "0.6 - 1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred in 1953 and commercially grown since the 1960s- one of Australia's most known and utilized hop varieties",
      "alpha_acids": "8.6 - 10.5%",
      "aroma": "Pronounced and pleasant, a distinct Australian aroma with cedar, oak and herbal tones",
      "beta_acids": "4.4 - 7.0%",
      "caryophyllene": "9 - 14% of total oil",
      "co_humulone": "26 - 34%",
      "country": "AU",
      "farnesene": "",
      "humulene": "2 - 4% of total oil",
      "id": 103,
      "myrcene": "24 - 41% of total oil",
      "name": "Australian Pride of Ringwood",
      "pedigree": "Open pollination of female 12-50-5 (an open pollination of Pride of Kent)",
      "perception": "Predominantly used for early kettle additions",
      "primary_aroma": "Cedar",
      "product_id": null,
      "secondary_aroma": "Herbal",
      "styles": [
        "Pale Ale"
      ],
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "1.6 - 1.8 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Bred by Hop Products Australia at Tasmanian Bushy Park Breeding Garden in 1997",
      "alpha_acids": "5.6 - 6.4%",
      "aroma": "Balanced citrus, melon and light apricot tones",
      "beta_acids": "4.8 - 6.1%",
      "caryophyllene": "8 - 11% of total oil",
      "co_humulone": "20 - 25%",
      "country": "AU",
      "farnesene": "",
      "humulene": "28 - 50% of total oil",
      "id": 104,
      "myrcene": "29 - 38% of total oil",
      "name": "Australian Summer",
      "pedigree": "Open pollination of a tetraploid Czech Saaz",
      "perception": "Dry hopping displays distinct stone fruit (apricot) and melon characteristics",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Tropical-Fruit",
      "styles": [
        "Ale"
      ],
      "tertiary_aroma": "Stone-Fruit",
      "toal_oil": "1.4 - 2.0 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Bred by Hop Products Australia at the Rostrevor Breeding Garden Victoria in 1987 ",
      "alpha_acids": "12.5 - 16.3%",
      "aroma": "Mild and pleasant subtle resin and fruit tones",
      "beta_acids": "6.0 - 8.0%",
      "caryophyllene": "5 - 9% of total oil",
      "co_humulone": "26 - 29%",
      "country": "AU",
      "farnesene": "",
      "humulene": "1 - 2% of total oil",
      "id": 105,
      "myrcene": "34 - 42% of total oil",
      "name": "Australian Super Pride",
      "pedigree": "Female tetraploid Pride of Ringwood and male YK-81-18 (derived from an open cross of Yeoman)",
      "perception": "Similar to Pride of Ringwood, but with higher levels of alpha acids",
      "primary_aroma": "Cedar",
      "product_id": null,
      "secondary_aroma": "Tobacco/Earthy",
      "styles": [
        "Lager"
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "3.4 - 4.0 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Bred by Hop Products Australia in 1997 at Bushy Park Breeding Garden",
      "alpha_acids": "5.6 - 7.3%",
      "aroma": "Complex and subtle, floral and herbal characteristics",
      "beta_acids": "3.0 - 4.6%",
      "caryophyllene": "5 - 8% of total oil",
      "co_humulone": "20 - 25%",
      "country": "AU",
      "farnesene": "22 - 28% of total oil",
      "humulene": "18 - 27% of total oil",
      "id": 106,
      "myrcene": "26 - 36% of total oil",
      "name": "Australian Sylva",
      "pedigree": "Open pollination of Czech Saaz",
      "perception": "Brewing characteristics closely resemble that of its parent, Czech Saaz",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Czech Saaz"
      ],
      "substitute_ids": [
        53
      ],
      "toal_oil": "1.0 - 1.4 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Bred by Hop Products Australia at the Rostrevor Breeding Garden Victoria in 1985 ",
      "alpha_acids": "13.7 - 17.7%",
      "aroma": "Resinous, grassy tones with light tropical flavors",
      "beta_acids": "6.4 - 7.9%",
      "caryophyllene": "7 - 13% of total oil",
      "co_humulone": "48 - 51%",
      "country": "AU",
      "farnesene": "",
      "humulene": "8 - 13% of total oil",
      "id": 107,
      "myrcene": "34 - 56% of total oil",
      "name": "Australian Topaz",
      "pedigree": "Female tetraploid J78 and male 29-70-54",
      "perception": "Dry hopping produces resinous characteristics while tropical tones are found in higher gravity beers",
      "primary_aroma": "Grassy",
      "product_id": null,
      "secondary_aroma": "Tropical-Fruit",
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "1.7 - 2.2 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed at the New Zealand Horticultural Research Centre. Released in 1976 and formerly known as Super Alpha.",
      "alpha_acids": "10 - 12%",
      "aroma": "Fresh citrus peel, pine and lemongrass flavors.",
      "beta_acids": "7 - 8.5%",
      "caryophyllene": "~10.1% of total oil",
      "co_humulone": "33 - 36%",
      "country": "NZ",
      "farnesene": "",
      "humulene": "~33.2% of total oil",
      "id": 108,
      "myrcene": "~29.2% of total oil",
      "name": "New Zealand Dr. Rudi",
      "pedigree": "Derived from New Zealand Smoothcone",
      "perception": "Delivers a crisp, bitter edge with fine aroma characteristics; often used to balance regional ales and lagers. Works well in single hopped beers and with multiple aroma varieties.",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "Ale"
      ],
      "toal_oil": "1.3 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Contains high levels of oil that complement and balance the very traditional resinous hop character",
      "alpha_acids": "11.0 - 14.0%",
      "aroma": "Subtle spiciness",
      "beta_acids": "6.5 - 7.0%",
      "caryophyllene": "~9.2% of total oil",
      "co_humulone": "41 - 43%",
      "country": "NZ",
      "farnesene": "~0.3% of total oil",
      "humulene": "~28.2% of total oil",
      "id": 109,
      "myrcene": "~38.3 % of total oil",
      "name": "New Zealand Green Bullet",
      "pedigree": "Open cross pollination of the New Zealand \"Smoothcone\" variety",
      "perception": "Typically used in lagers, but carries the Styrian characteristic of subtle spiciness that is perfect for a stout. Works well when included with finishing varieties such as Fuggle and Willamette",
      "primary_aroma": "Spicy",
      "product_id": null,
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Fuggle",
        "Willamette"
      ],
      "substitute_ids": [
        20,
        50
      ],
      "toal_oil": "~1.1 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Offers unique aroma and flavor from first kettle additions through late gifting",
      "alpha_acids": "6.5 - 8.5%",
      "aroma": "Lively lemon and lime tones with background hints of tropical fruit",
      "beta_acids": "5.0 - 5.5%",
      "caryophyllene": "~2% of total oil",
      "co_humulone": "~29%",
      "country": "NZ",
      "farnesene": "~12.2% of total oil",
      "humulene": "~3.6% of total oil",
      "id": 110,
      "myrcene": "~47.7% of total oil",
      "name": "New Zealand Motueka",
      "pedigree": "Cross between 2/3 New Zealand breeding selection with 1/3 Saazer parentage",
      "perception": "An excellent variety for single hop bills with multiple applications",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Tropical-Fruit",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Saaz",
        "Sterling"
      ],
      "substitute_ids": [
        38,
        42
      ],
      "tertiary_aroma": "Fruity",
      "toal_oil": "~0.8 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "",
      "alpha_acids": "12.0 - 13.0%",
      "aroma": "Distinct cool climate and white wine \"fruitiness\" with fresh crushed gooseberry and grape infused flavors",
      "beta_acids": "6.0 - 8.0%",
      "caryophyllene": "~10.7% of total oil",
      "co_humulone": "~24%",
      "country": "NZ",
      "farnesene": "",
      "humulene": "~36.4% of total oil",
      "id": 111,
      "myrcene": "~22.2% of total oil",
      "name": "New Zealand Nelson Sauvin",
      "pedigree": "Cross between New Zealand \"Smoothcone\" and a selected New Zealand male",
      "perception": "An excellent dual purpose hop that can be used to produce a punch or subtle bittering qualities",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Tropical-Fruit",
      "styles": [
        "American-style Pale Ale"
      ],
      "toal_oil": "~1.1 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed through the New Zealand Hort Research and released in 1987",
      "alpha_acids": "13.5 - 15.0%",
      "aroma": "No distinct characteristics. Some brewers have noted delicate blackberry and floral or oak tones",
      "beta_acids": "7.0 - 9.0%",
      "caryophyllene": "~11% of total oil",
      "co_humulone": "37 - 40%",
      "country": "NZ",
      "farnesene": "~0.3% of total oil",
      "humulene": "~29.9% of total oil",
      "id": 112,
      "myrcene": "~33.3% of total oil",
      "name": "New Zealand Pacific Gem",
      "pedigree": "New Zealand \"Smoothcone\" and Californian Late Cluster x Fuggle",
      "perception": "Unlike other high alpha hops, Pacific Gem does not carry a punchy aroma",
      "product_id": null,
      "styles": [
        "Lager"
      ],
      "substitute_hops": [
        "Galena"
      ],
      "substitute_ids": [
        21
      ],
      "tertiary_aroma": "Floral",
      "toal_oil": "~1.2 mL / 100g",
      "usage": "Bittering"
    },
    {
      "additional_info": "Released in 2004 from the New Zealand Hop Research Program by Hort Research Centre Riwaka",
      "alpha_acids": "12.0 - 14.0%",
      "aroma": "Bold herbal aromas with hints of fresh citrus and crushed black pepper",
      "beta_acids": "7.0 - 8.0%",
      "caryophyllene": "~10.2% of total oil",
      "co_humulone": "~24%",
      "country": "NZ",
      "farnesene": "",
      "humulene": "~32.9% of total oil",
      "id": 113,
      "myrcene": "~33.3% of total oil",
      "name": "New Zealand Pacific Jade",
      "pedigree": "Cross of New Zealand First Choice (relative of Late Cluster) and an Old Line Saazer male",
      "perception": "Delivers soft bitterness with desirable aroma; well suited for \"up-front\" additions in dryer lager styles",
      "primary_aroma": "Herbal",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Lager"
      ],
      "tertiary_aroma": "Spicy",
      "toal_oil": "~1.4 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Late additions bring characteristics of orange marmalade, while early additions yield soft, yet solid bittering qualities",
      "alpha_acids": "5.0 - 6.0%",
      "aroma": "Classic Hallertau character with some citrus and floral notes",
      "beta_acids": "~6.0%",
      "caryophyllene": "~16.7% of total oil",
      "co_humulone": "~25%",
      "country": "NZ",
      "farnesene": "",
      "humulene": "~50.9% of total oil",
      "id": 114,
      "myrcene": "~12.5% of total oil",
      "name": "New Zealand Pacifica",
      "pedigree": "Open pollination of Hallertau Mittelfr\u00fch",
      "perception": "A blend of old-world and new-world tastes for application in a variety of beer styles",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Floral",
      "styles": [
        "IPA"
      ],
      "substitute_hops": [
        "Hallertau"
      ],
      "substitute_ids": [
        24
      ],
      "toal_oil": "~1.0 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Released from the New Zealand Hop breeding program",
      "alpha_acids": "10.0 - 11.0%",
      "aroma": "Fresh orchard fruits, specifically apricot with some resinous pine needle characteristics are noted",
      "beta_acids": "5.0 - 6.0%",
      "caryophyllene": "~5.2% of total oil",
      "co_humulone": "~24%",
      "country": "NZ",
      "farnesene": "~4.5% of total oil",
      "humulene": "~16.3% of total oil",
      "id": 115,
      "myrcene": "~56% of total oil",
      "name": "New Zealand Rakau",
      "perception": "Well suited for new world styles where brash fruity character and big, but well constructed bitterness is desired",
      "primary_aroma": "Stone-Fruit",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "Ale"
      ],
      "substitute_hops": [
        "Amarillo\u00ae",
        "Summit\u2122"
      ],
      "substitute_ids": [
        2,
        43
      ],
      "toal_oil": "~2.2 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released by New Zealand's HortResearch hop breeding program at Riwaka in 1994 ",
      "alpha_acids": "11.0 - 14.0%",
      "aroma": "A delicate balance of citrus and spice, including a heady mix of lemon peel and pine needles",
      "beta_acids": "5.0 - 6.0%",
      "caryophyllene": "~6.7% of total oil",
      "co_humulone": "25 - 28%",
      "country": "NZ",
      "farnesene": "~7.3% of total oil",
      "humulene": "~20.8% of total oil",
      "id": 116,
      "myrcene": "~31.8% of total oil",
      "name": "New Zealand Southern Cross",
      "pedigree": "Cross between New Zealand \"Smoothcone\" and a 1950s research variety bred from a crossing of an early North American type Cali with English Fuggle",
      "perception": "Typically used in mainstream lagers, but finding favor in a variety of craft styles",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "styles": [
        "Lager"
      ],
      "tertiary_aroma": "Pine",
      "toal_oil": "~1.2 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "alpha_acids": "13.0 - 14.2%",
      "beta_acids": "7.5 - 8.5%",
      "caryophyllene": "3.4 - 6% of total oil",
      "co_humulone": "40 - 45%",
      "country": "NZ",
      "farnesene": "4 - 4.6% of total oil",
      "humulene": "7.7 - 11% of total oil",
      "id": 117,
      "myrcene": "50 - 63% of total oil",
      "name": "New Zealand Sticklebract",
      "primary_aroma": "Pine",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Pale Ale"
      ],
      "substitute_hops": [
        "German Northern Brewer"
      ],
      "substitute_ids": [
        83
      ],
      "toal_oil": "0.8 - 1.7 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released in 2012 from the New Zealand Plant and Food Research Hop Breeding program in Riwaka",
      "alpha_acids": "16.0 - 19.0%",
      "aroma": "Intense tangelo and citrus fruit with subtle pine characteristics",
      "beta_acids": "7.0 - 9.0%",
      "caryophyllene": "~2.6% of total oil",
      "co_humulone": "22 - 24%",
      "country": "NZ",
      "farnesene": "~5% of total oil",
      "humulene": "~9.5% of total oil",
      "id": 118,
      "myrcene": "~60% of total oil",
      "name": "New Zealand Waimea",
      "pedigree": "Granddaughter of New Zealand Pacific Jade",
      "perception": "Can be used across a wide variety of beer styles and applications",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Pine",
      "styles": [
        "IPA"
      ],
      "toal_oil": "~2.1 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Released by Hort's Riwaka Research Center in 1988",
      "alpha_acids": "6.5 - 8.5%",
      "aroma": "Restrained floral notes and freshly zested lime",
      "beta_acids": "~8.5%",
      "caryophyllene": "~8.2% of total oil",
      "co_humulone": "28 - 30%",
      "country": "NZ",
      "farnesene": "~6.7% of total oil",
      "humulene": "~16.8% of total oil",
      "id": 119,
      "myrcene": "~35.5% of total oil",
      "name": "New Zealand Wakatu",
      "pedigree": "Bred from 2/3 Hallertau Mittelfr\u00fch, open pollinated by 1/3 New Zealand derived male",
      "perception": "Complimented for its rounded flavor, moderate co-humulone, outstanding oil profile and rewarding finish",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Lager"
      ],
      "toal_oil": "~1.0 mL / 100g",
      "usage": "Dual Purpose"
    },
    {
      "additional_info": "Developed by Hopunion in 2011.",
      "alpha_acids": "9.0 - 10.5%",
      "aroma": "Strong fruit and citrus characteristics, with layers of spicy and earthy overtones",
      "beta_acids": "4.7 - 5.1%",
      "country": "",
      "id": 120,
      "name": "Falconer's Flight\u00ae 7C\u2019s",
      "pedigree": "A pellet blend comprised of seven \"C\" hops and additional experimental varieties",
      "perception": "A great addition/alternative to any IPA or Pale Ale style beer",
      "primary_aroma": "Fruity",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "styles": [
        "Pale Ale"
      ],
      "tertiary_aroma": "Tobacco/Earthy",
      "toal_oil": "~1.72 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Developed by Hopunion LLC in 2010",
      "alpha_acids": "9.5 - 12.0%",
      "aroma": "Distinct tropical, floral, lemon and grapefruit characteristics",
      "beta_acids": "4.0 - 5.0%",
      "co_humulone": "20 - 25%",
      "country": "",
      "id": 121,
      "name": "Falconer\u2019s Flight\u00ae",
      "pedigree": "A pellet blend containing a variety of the Pacific Northwest's most intriguing aroma hop varieties and additional experimental hops",
      "perception": "An excellent complement  to many IPA and Pale Ale oriented hop varieties",
      "primary_aroma": "Tropical-Fruit",
      "product_id": null,
      "secondary_aroma": "Citrus",
      "tertiary_aroma": "Floral",
      "toal_oil": "~1.6 mL / 100g",
      "usage": "Aroma"
    },
    {
      "additional_info": "Designed to complement existing IPA and Pale Ale hop varieties.",
      "alpha_acids": "10.0 - 12.5%",
      "aroma": "Distinct tropical (pineapple) and citrus tones, with slight pine characteristics",
      "beta_acids": "4.7 - 6.2%",
      "co_humulone": "28 - 31%",
      "country": "",
      "id": 122,
      "name": "Zythos\u00ae",
      "pedigree": "A proprietary pellet blend",
      "perception": "An excellent blend for any hop forward beer",
      "product_id": null,
      "styles": [
        "American-style Ale"
      ],
      "toal_oil": "0.7 - 1.2 mL / 100g"
    },
    {
      "alpha_acids": "11.2 - 13.1%",
      "aroma": "Typically described as peppery, floral and fruity",
      "beta_acids": "5.1 - 6.1%",
      "co_humulone": "19.8 - 23.8%",
      "country": "",
      "id": 123,
      "name": "Exp - HBC 291",
      "primary_aroma": "Floral",
      "product_id": null,
      "secondary_aroma": "Spicy",
      "tertiary_aroma": "Fruity",
      "toal_oil": "2.3 mL / 100g"
    },
    {
      "aroma": "Mild citrus, tropical fruit and melon notes",
      "country": "",
      "id": 124,
      "name": "Exp - HBC 342",
      "perception": "High alpha variety with a pleasant aroma",
      "primary_aroma": "Citrus",
      "product_id": null,
      "secondary_aroma": "Tropical-Fruit",
      "styles": [
        "Pale Ale"
      ],
      "tertiary_aroma": "Fruity"
    }
  ]
});

export default Hop;
