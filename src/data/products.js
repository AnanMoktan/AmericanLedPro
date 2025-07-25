// src/data/products.js

export const products = [
  // FLOOD LIGHTS (5)
  {
    id: 1,
    name: "FLHL SERIES LED FLOOD LIGHT 100W 130lm/w 13000lm 5000k 100-277v IP65 5years warranty",
    price: 40,
    image:
      process.env.PUBLIC_URL +
      "/products/flood-light/100wfl/FLHL_LED-100-1-768x763.webp",
    category: "flood-light",
    description:
      "The American LED Pro flhl series 100W Flood Light is a durable, high-performance outdoor lighting solution designed for both commercial and residential use. With its IP65 weatherproof rating, 100–277V wide voltage compatibility, and breather function to prevent moisture buildup, it delivers reliable illumination in all conditions. Featuring a robust aluminum body, 4mm tempered glass, and a long-lasting LED chip, this flood light ensures energy efficiency, easy installation, and minimal maintenance—backed by a 5-year warranty for peace of mind",
    images: [
      process.env.PUBLIC_URL +
        "/products/flood-light/100wfl/FLHL_LED-100-1-768x763.webp",
      process.env.PUBLIC_URL +
        "/products/flood-light/100wfl/FLHL_LED-100-2-555x555-1.webp",
    ],
  },
  {
    id: 2,
    name: "FLHL SERIES LED FLOOD LIGHT 200W 130lm/w 26000lm 5000k 100-277v IP65 5years warranty",
    price: 58,
    image: process.env.PUBLIC_URL + "/products/flood-light/200wfl/200w1fv.webp",
    category: "flood-light",
    description:
      "The American LED Pro flhl series 200W Flood Light is a durable, high-performance outdoor lighting solution designed for both commercial and residential use. With its IP65 weatherproof rating, 100–277V wide voltage compatibility, and breather function to prevent moisture buildup, it delivers reliable illumination in all conditions. Featuring a robust aluminum body, 4mm tempered glass, and a long-lasting LED chip, this flood light ensures energy efficiency, easy installation, and minimal maintenance—backed by a 5-year warranty for peace of mind",
    images: [
      process.env.PUBLIC_URL + "/products/flood-light/200wfl/200w1fv.webp",
      process.env.PUBLIC_URL + "/products/flood-light/200wfl/200w1sv.webp",
      process.env.PUBLIC_URL + "/products/flood-light/200wfl/200w1bv.webp",
    ],
  },
  {
    id: 3,
    name: "FLHL SERIES LED FLOOD LIGHT 240W 130lm/w 31200lm 5000k 100-277v 5years warranty",
    price: 95,
    image:
      process.env.PUBLIC_URL + "/products/flood-light/240wfl/240wflnmfv.png",
    category: "flood-light",
    description:
      "The American LED Pro flhl series 240W Flood Light is a durable, high-performance outdoor lighting solution designed for both commercial and residential use. With its IP65 weatherproof rating, 100–277V wide voltage compatibility, and breather function to prevent moisture buildup, it delivers reliable illumination in all conditions. Featuring a robust aluminum body, 4mm tempered glass, and a long-lasting LED chip, this flood light ensures energy efficiency, easy installation, and minimal maintenance—backed by a 5-year warranty for peace of mind",
    images: [
      process.env.PUBLIC_URL + "/products/flood-light/240wfl/240wflnmfv.png",
      process.env.PUBLIC_URL + "/products/flood-light/240wfl/240wflnmsv.png",
      process.env.PUBLIC_URL + "/products/flood-light/240wfl/240wflnmbv.png",
    ],
  },
  {
    id: 4,
    name: "LED MODULE FLOOD LIGHT 240W 130lm/w 31200 5000K 100-277V IP65 5years warranty",
    price: 58,
    image:
      process.env.PUBLIC_URL + "/products/flood-light/240wmfl/240wmflfv.png",
    category: "flood-light",
    description:
      "Introducing the American Led Pro 240W LED Module Stadium Floodlight, engineered for powerful and reliable outdoor illumination. Operating on a wide voltage range of 100-277V with a crisp 5000K daylight color temperature, this floodlight is designed for large-scale applications such as stadiums, arenas, and industrial zones. Featuring a breather function for moisture control, IP65-rated weather resistance, and backed by a 5-year warranty, it ensures long-lasting performance even in harsh environments.",
    images: [
      process.env.PUBLIC_URL + "/products/flood-light/240wmfl/240wmflfv.png",
      process.env.PUBLIC_URL + "/products/flood-light/240wmfl/240wmflsv.png",
      process.env.PUBLIC_URL + "/products/flood-light/240wmfl/240wmflbv.png",
    ],
  },

  // LED PANEL (3)
  {
    id: 5,
    name: "2x4FT Edgelit LED variable CCT & Power Panel",
    price: 45,
    image:
      process.env.PUBLIC_URL +
      "/products/panel-light/2x4panel/2x4ledpanelfv.jpg",
    category: "led-panel",
    description:
      "Introducing the American LED Pro 2x4 LED Panel Light - the perfect lighting solution for any space! This panel light offers adjustable color temperature and power settings, allowing you to customize the lighting to your exact needs. With a range of 3000K to 6500K for color temperature and 30W to 72W for power, this light is versatile and energy-efficient.Upgrade your lighting with the American LED Pro 2x4 LED Panel Light today!",
    images: [
      process.env.PUBLIC_URL +
        "/products/panel-light/2x4panel/2x4ledpanelfv.jpg",
      process.env.PUBLIC_URL +
        "/products/panel-light/2x4panel/2x4ledpanelbv.png",
    ],
  },
  {
    id: 6,
    name: "2x2FT Edgelit LED variable CCT & Power Panel ",
    price: 45,
    image: process.env.PUBLIC_URL + "/products/panel-light/2x2panel/2x2cv.png",
    category: "led-panel",
    description:
      "Illuminate your space with the versatile American LED Pro 2x2 Adjustable LED Panel Light, designed for ultimate flexibility and efficiency. This premium panel offers five selectable color temperatures (3000K-6500K) and five adjustable power settings (20W-40W), allowing you to perfectly tailor the light to any environment. With a high CRI >80, 0-10V dimming capability, and a wide 100-277V input, this ETL-certified panel is suitable for damp locations and delivers superior, energy-efficient illumination for commercial and residential applications alike.",
    images: [
      process.env.PUBLIC_URL + "/products/panel-light/2x2panel/2x2cv.png",
      process.env.PUBLIC_URL +
        "/products/panel-light/2x2panel/2x2ledpanelbv.png ",
      process.env.PUBLIC_URL + "/products/panel-light/2x2panel/2x2info.png",
    ],
  },

  // SHOE BOX LIGHT (4)
  {
    id: 7,
    name: "LED SHOE BOX LIGHT -100w comes with slip fitter or c or u braket and color options bronze and black.",
    price: 95,
    image:
      process.env.PUBLIC_URL + "/products/shoebox-light/100wsbl/100wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate large outdoor areas with powerful and reliable lighting using the American LED Pro 100W LED Parking Lot Light Slip Fit. Designed for robust performance and easy installation, this fixture is perfect for parking lots, roadways, building perimeters, and general outdoor area lighting. Operating efficiently on a wide 100-277V input, it features a durable IP65 rating for exceptional protection against dust and water jets, ensuring longevity in all weather conditions. Equipped with a breather function to prevent internal condensation and backed by a substantial 5-year warranty, the American LED Pro 100W Parking Lot Light provides bright, consistent, and maintenance-friendly illumination for years to come.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/100wsbl/100wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/100wsbl/100wsblsv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/100wsbl/100wsblbv.png",
      process.env.PUBLIC_URL +
        "/products/shoebox-light/100wsbl/100wsblwsfv.png",
    ],
  },
  {
    id: 8,
    name: "LED SHOE BOX LIGHT-150w comes with  slip fitter or c or u braket and color options bronze and black.",
    price: 125,
    image:
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate large outdoor areas with powerful and reliable lighting using the American LED Pro 150W LED Parking Lot Light Slip Fit. Designed for robust performance and easy installation, this fixture is perfect for parking lots, roadways, building perimeters, and general outdoor area lighting. Operating efficiently on a wide 100-277V input, it features a durable IP65 rating for exceptional protection against dust and water jets, ensuring longevity in all weather conditions. Equipped with a breather function to prevent internal condensation and backed by a substantial 5-year warranty, the American LED Pro 150W Parking Lot Light provides bright, consistent, and maintenance-friendly illumination for years to come.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblsv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblbv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblwbv.png",
    ],
    pl: "https://buy.stripe.com/fZu6oGckF0N2bi1az87Re00",
  },
  {
    id: 9,
    name: "LED SHOE BOX LIGHT -200w comes with slip fitter or c or u bracket and color options bronze and black",
    price: 125,
    image:
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate large outdoor areas with powerful and reliable lighting using the American LED Pro 200W LED Parking Lot Light Slip Fit. Designed for robust performance and easy installation, this fixture is perfect for parking lots, roadways, building perimeters, and general outdoor area lighting. Operating efficiently on a wide 100-277V input, it features a durable IP65 rating for exceptional protection against dust and water jets, ensuring longevity in all weather conditions. Equipped with a breather function to prevent internal condensation and backed by a substantial 5-year warranty, the American LED Pro 150W Parking Lot Light provides bright, consistent, and maintenance-friendly illumination for years to come.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblsv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/150wsbl/150wsblbv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/200wsbl/200wsblwbv.png",
    ],
    pl: "https://buy.stripe.com/fZu6oGckF0N2bi1az87Re00",
  },
  {
    id: 10,
    name: "LED SHOE BOX LIGHT –300W comes with slip fitter or c or u bracket, with or without photo cell option and color options bronze and black",
    price: 205,
    image: "/products/shoebox-light/300wsbl/300wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate vast outdoor spaces with superior clarity and power using the American LED Pro 300W LED Shoebox Light. This high-performance fixture is engineered for demanding applications such as large parking lots, industrial parks, stadiums, and expansive area lighting where maximum brightness is crucial. Operating on a versatile AC120-277V input, it delivers a crisp, bright 5700K (Cool White) illumination, enhancing visibility and security. Designed with a durable brown finish for aesthetic integration, this 300W shoebox light provides robust, long-lasting performance, making it an ideal choice for powerful, efficient outdoor area lighting.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/300wsbl/300wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/300wsbl/300wsblsv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/300wsbl/300wsblbv.png",
    ],
    pl: "https://buy.stripe.com/fZu6oGckF0N2bi1az87Re00",
  },
  {
    id: 11,
    name: "LED SHOE BOX LIGHT – 450W comes with slip fitter or c or u bracket, with or without photo cell option and color options bronze and black",
    price: 395,
    image:
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate vast outdoor spaces with superior clarity and power using the American LED Pro 450W LED Shoebox Light. This high-performance fixture is engineered for demanding applications such as large parking lots, industrial parks, stadiums, and expansive area lighting where maximum brightness is crucial. Operating on a versatile AC120-277V input, it delivers a crisp, bright 5700K (Cool White) illumination, enhancing visibility and security. Designed with a durable brown finish for aesthetic integration, this 450W shoebox light provides robust, long-lasting performance, making it an ideal choice for powerful, efficient outdoor area lighting.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblbv.png",
    ],
    pl: "https://buy.stripe.com/fZu6oGckF0N2bi1az87Re00",
  },
  {
    id: 12,
    name: "LED SHOE BOX LIGHT – 500W comes with slip fitter or c or u bracket, with or without photo cell option and color options bronze and black",
    price: 395,
    image:
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblfv.png",
    category: "shoe-box-light",
    description:
      "Illuminate vast outdoor spaces with superior clarity and power using the American LED Pro 500W LED Shoebox Light. This high-performance fixture is engineered for demanding applications such as large parking lots, industrial parks, stadiums, and expansive area lighting where maximum brightness is crucial. Operating on a versatile AC120-277V input, it delivers a crisp, bright 5700K (Cool White) illumination, enhancing visibility and security. Designed with a durable brown finish for aesthetic integration, this 500W shoebox light provides robust, long-lasting performance, making it an ideal choice for powerful, efficient outdoor area lighting.",
    images: [
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblfv.png",
      process.env.PUBLIC_URL + "/products/shoebox-light/450wsbl/450wsblbv.png",
    ],
    pl: "https://buy.stripe.com/fZu6oGckF0N2bi1az87Re00",
  },

  // CANOPY LIGHTS (3)

  {
    id: 13,
    name: "LED LAMP CANOPY LIGHT – 140W",
    price: 12,
    image:
      process.env.PUBLIC_URL + "/products/canopy-light/140wcl/140wclfv.png",
    category: "canopy-light",
    description:
      "Illuminate your covered outdoor spaces efficiently and reliably with the American LED Pro 140W LED Canopy Light. Perfect for gas stations, parking areas, and entryways, this robust fixture provides crisp 5000K (Cool White) illumination for enhanced visibility and safety. Operating on a versatile 100-277V input, it is built to withstand outdoor conditions with an IP44 rating, protecting against splashes and debris. Backed by a strong 5-year warranty, the American LED Pro 140W Canopy Light offers a durable, high-performance lighting solution designed for long-lasting service in demanding environments.",
    images: [
      process.env.PUBLIC_URL + "/products/canopy-light/140wcl/140wclfv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/140wcl/140wclsv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/140wcl/140wclbv.png",
    ],
  },
  {
    id: 14,
    name: "LED LAMP CANOPY LIGHT – 150W",
    price: 12,
    image:
      process.env.PUBLIC_URL + "/products/canopy-light/150wcl/150wclfv.png",
    category: "canopy-light",
    description:
      "Provide bright, uniform illumination for covered outdoor areas with the American LED Pro 150W LED Canopy Light. Ideal for gas stations, carports, drive-thrus, and entryways, this robust fixture delivers powerful and efficient lighting across a wide AC100-277V input. With a crisp 5000-5500K (Cool White) color temperature, it enhances visibility and safety. This ETL Intertek certified light (conforming to UL STD 1598 and CSA STD C22.2 NO. 250.0) ensures reliable performance and peace of mind, making it a dependable choice for your canopy lighting needs.",
    images: [
      process.env.PUBLIC_URL + "/products/canopy-light/150wcl/150wclfv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/150wcl/150wclsv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/150wcl/150wclbv.png",
    ],
  },
  {
    id: 15,
    name: "LED LAMP CANOPY LIGHT – 240w",
    price: 12,
    image:
      process.env.PUBLIC_URL + "/products/canopy-light/240wcl/240wclfv.png",
    category: "canopy-light",
    description:
      "Deliver uncompromising brilliance to your commercial outdoor spaces with the American LED Pro 240W LED Canopy Light. Engineered for maximum illumination, this powerful fixture is an ideal solution for large gas stations, expansive parking garages, industrial canopies, and demanding drive-thru applications. It operates on a versatile 120-277Vac input and casts a super bright 6500K (Cool White) light with a high CRI >80 for exceptional clarity and visibility. Fully UL Listed and certified to meet stringent safety standards (UL 1598 & CSA C22.2 No. 250.0), this canopy light is also suitable for damp locations, ensuring reliable, high-performance lighting even in challenging environments",
    images: [
      process.env.PUBLIC_URL + "/products/canopy-light/240wcl/240wclfv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/240wcl/240wclsv.png",
      process.env.PUBLIC_URL + "/products/canopy-light/240wcl/240wclbv.png",
    ],
  },

  // DUSK TO DAWN LIGHT (3)
  {
    id: 16,
    name: "LED DUSK TO DAWN LIGHT / BARN LIGHT / LED YARD LIGHT – 30W, 4000 lumen, cct:5000k, life:45000H, input voltage: 100-277v",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/dusk-to-dawn-light/30wdtd/30wdtdfv.png",
    category: "dusk-to-dawn-light",
    description:
      "Light up your outdoor spaces with this energy-efficient 30W LED Dusk to Dawn Barn Light, delivering a powerful 4000 lumens of bright daylight at 5000K color temperature. Ideal for yards, barns, garages, and security lighting, it features a built-in photocell sensor for automatic on/off functionality from dusk to dawn. Designed for durability with a 45,000-hour lifespan and a wide input voltage range of 100-277V, this LED yard light offers reliable, long-lasting performance in all weather conditions.",
    images: [
      process.env.PUBLIC_URL +
        "/products/dusk-to-dawn-light/30wdtd/30wdtdfv.png",
      process.env.PUBLIC_URL +
        "/products/dusk-to-dawn-light/30wdtd/30wdtdsv.png",
      process.env.PUBLIC_URL +
        "/products/dusk-to-dawn-light/30wdtd/30wdtdbv.png",
    ],
  },

  // POLE LIGHTS (2)

  {
    id: 17,
    name: "10/15/20/25 FT 4 IN SQUARE AREA LIGHTNING POLE",
    price: 180,
    image: process.env.PUBLIC_URL + "/products/pole-light/pole2.png",
    category: "pole-light",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/pole-light/pole2.png",
      "/products/pole-light/pole.png",
    ],
  },
  {
    id: 18,
    name: "30 FT 5 IN SQUARE AREA LIGHTNING POLE",
    price: 200,
    image: process.env.PUBLIC_URL + "/products/pole-light/pole2.png",
    category: "pole-light",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/pole-light/pole2.png",
      "/products/pole-light/pole.png",
    ],
  },

  // UFO LIGHT (High Bay) (4)
  {
    id: 19,
    name: "LED LAMP HIGH BAY LIGHT – 100W 13000lm 125lm/w 5700k 100-277v or 277-480v 50000H 120 degree beam angle",
    price: 79,
    image: process.env.PUBLIC_URL + "/products/ufo-light/100wufo/100wufofv.png",
    category: "ufo-light",
    description:
      "LED 100W High Bay Light is an alternative light source with longer life and uniformed light distribution.Our DLC certificates are only for 4000k CCT led HIGH BAY LIGHT with 10538LM ,but the real brightness is much higher.",
    images: [
      process.env.PUBLIC_URL + "/products/ufo-light/100wufo/100wufofv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/100wufo/100wufosv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/100wufo/100wufobv.png",
    ],
  },
  {
    id: 20,
    name: "LED LAMP HIGH BAY LIGHT – 150W 18750lm 125lm/w 5700k 100-277v or 277-480v 50000H 120 degree beam angle",
    price: 98,
    image: process.env.PUBLIC_URL + "/products/ufo-light/150wufo/150wufofv.png",
    category: "ufo-light",
    description:
      "lED 150W High Bay Light is an alternative light source with longer life and uniformed light distribution.Our DLC certificates are only for 5700k CCT led HIGH BAY LIGHT with 16450LM ,but the real brightness is much higher",
    images: [
      process.env.PUBLIC_URL + "/products/ufo-light/150wufo/150wufofv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/150wufo/150wufosv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/150wufo/150wufobv.png",
    ],
  },
  {
    id: 21,
    name: "LED LAMP HIGH BAY LIGHT – 200W 5000k 25000lm 130lm/w 100-277v  50000H 120 degree beam angle",
    price: 120,
    image: process.env.PUBLIC_URL + "/products/ufo-light/200wufo/200wufofv.png",
    category: "ufo-light",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/ufo-light/200wufo/200wufofv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/200wufo/200wufosv.png",
    ],
  },
  {
    id: 22,
    name: "LED LAMP HIGH BAY LIGHT LENS – power 200/240/300w  4000k/5000k/5700k adjustable 30000lm  100-277v 50000H ",
    price: 120,
    image:
      process.env.PUBLIC_URL + "/products/ufo-light/240waufo/240waufofv.png",
    category: "ufo-light",
    description: " ",
    images: [
      process.env.PUBLIC_URL + "/products/ufo-light/240waufo/240waufofv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/240waufo/240waufosv.png",
      process.env.PUBLIC_URL + "/products/ufo-light/240waufo/240waufobv.png",
    ],
  },

  // WALL PACK LIGHT (4)
  {
    id: 23,
    name: "LED WALL PACK LIGHT – 60W/80w/100w/120w options",
    price: 55,
    image:
      process.env.PUBLIC_URL +
      "/products/wallpack-light/wallpacknormal/wpnfv.png",
    category: "wall-pack-light",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/wallpack-light/wallpacknormal/wpnfv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/wallpacknormal/wpnsv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/wallpacknormal/wpnsv2.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/wallpacknormal/wpnbv.png",
    ],
  },
  {
    id: 26,
    name: "LED full cut-off WALL PACK LIGHT – 120W",
    price: 70,
    image:
      process.env.PUBLIC_URL +
      "/products/wallpack-light/ledfullcutoffwallpack/wpfcofv.png",
    category: "wall-pack-light",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/wallpack-light/ledfullcutoffwallpack/wpfcofv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/ledfullcutoffwallpack/wpfcosv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/ledfullcutoffwallpack/wpfcobv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/ledfullcutoffwallpack/wpfcowm.png",
    ],
  },
  {
    id: 27,
    name: "half circle LED WALL PACK LIGHT – 120W adjustable power cct 5k ",
    price: 85,
    image:
      process.env.PUBLIC_URL +
      "/products/wallpack-light/halfcirclecutoffledwallpack/hccofv.png",
    category: "wall-pack-light",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/wallpack-light/halfcirclecutoffledwallpack/hccofv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/halfcirclecutoffledwallpack/hccosv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/halfcirclecutoffledwallpack/hccobv.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/halfcirclecutoffledwallpack/hccowmv.png",
    ],
  },
  {
    id: 28,
    name: "mini LED WALL PACK LIGHT – 20W/30w options ",
    price: 100,
    image:
      process.env.PUBLIC_URL +
      "/products/wallpack-light/miniledwallpack/mwp1.png",
    category: "wall-pack-light",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/wallpack-light/miniledwallpack/mwp1.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/miniledwallpack/mwp2.png",
      process.env.PUBLIC_URL +
        "/products/wallpack-light/miniledwallpack/mwp3.png",
    ],
  },

  // ACCESSORIES (9)

  {
    id: 30,
    name: "180 Degree Double Bullhorn Round Bracket",
    price: 38,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/180doublebullhornround/180dbhr1.webp",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/180doublebullhornround/180dbhr1.webp",
    ],
  },
  {
    id: 31,
    name: "180 Degree Double Bullhorn Square Bracket",
    price: 38,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/180doublebullhornsquare/180dbs.png",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/180doublebullhornsquare/180dbs.png",
    ],
  },
  {
    id: 32,
    name: "180 Degree Triple Bullhorn round Bracket",
    price: 50,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/180triplebullhornround/180tbr.webp",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/180triplebullhornround/180tbr.webp",
    ],
  },
  {
    id: 33,
    name: "120 Degree Triple Bullhorn round Brackets",
    price: 65,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/120triplebullhornround/120tbr.png",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/120triplebullhornround/120tbr.png",
    ],
  },
  {
    id: 34,
    name: "90 Degree Quad bullhorn Round Brackets",
    price: 30,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/90quadbullhornround/90qbr.avif",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/90quadbullhornround/90qbr.avif",
    ],
  },
  {
    id: 35,
    name: "180 Degree Quad inline bullhorn Square Brackets",
    price: 30,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/180quadinlinebullhornsquare/180qibs.webp",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/180quadinlinebullhornsquare/180qibs.webp",
    ],
  },
  {
    id: 36,
    name: "Single Straight Arms Brackets",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/singlestraightarm/ssa.png",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/singlestraightarm/ssa.png",
    ],
  },
  {
    id: 37,
    name: "90 degree double Straight Arms Brackets",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/90doublestraightarm/90dsa.webp",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/90doublestraightarm/90dsa.webp",
    ],
  },
  {
    id: 38,
    name: "180 degree double Straight Arms Brackets",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/180doublestraightarm/180degreedoubleRoundtenonmount.jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/180doublestraightarm/180degreedoubleRoundtenonmount.jpg",
    ],
  },
  {
    id: 39,
    name: "120 degree triple Straight Arms Brackets",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/120triplestraightarm/120tsa.jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/120triplestraightarm/120tsa.jpg",
    ],
  },
  {
    id: 40,
    name: "90 degree quad Straight Arms Brackets",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/90quadstraightarm/90qsa.png",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/90quadstraightarm/90qsa.png",
    ],
  },
  {
    id: 41,
    name: "90 Degree Wall Mount Brackets",
    price: 30,
    image: process.env.PUBLIC_URL + "/products/accessories/90wallmount.jpg",
    category: "accessories",
    description: "",
    images: [process.env.PUBLIC_URL + "/products/accessories/90wallmount.jpg"],
  },
  {
    id: 42,
    name: "90 Degree H‑type Wall Mount Brackets",
    price: 38,
    image: process.env.PUBLIC_URL + "/products/accessories/90htypemount.jpg",
    category: "accessories",
    description: "",
    images: [process.env.PUBLIC_URL + "/products/accessories/90htypemount.jpg"],
  },
  {
    id: 43,
    name: "90 Degree L-shape Mount Base 4inch",
    price: 38,
    image: process.env.PUBLIC_URL + "/products/accessories/90Lshapebase4.jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/accessories/90Lshapebase4.jpg",
    ],
  },
  {
    id: 44,
    name: "pole side mount (For Square Poles)",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/polesidemount(forsquarepole).jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/polesidemount(forsquarepole).jpg",
    ],
  },
  {
    id: 45,
    name: " Round pole side mount ",
    price: 28,
    image:
      process.env.PUBLIC_URL + "/products/accessories/roundpolesidemount.jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/accessories/roundpolesidemount.jpg",
    ],
  },
  {
    id: 46,
    name: "Slip Fitter Adaptor",
    price: 28,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/slipfitter side mount.jpg",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/slipfitter side mount.jpg",
    ],
  },
  {
    id: 47,
    name: "Square Tenon Adaptor  4/5/6 inch tenon options",
    price: 30,
    image: process.env.PUBLIC_URL + "/products/accessories/tenonsquare.webp",
    category: "accessories",
    description: "",
    images: [
      process.env.PUBLIC_URL + "/products/accessories/tenonsquare.webp",
      process.env.PUBLIC_URL + "/products/accessories/4-6INSQUARETENONTOPS.png",
    ],
  },
  {
    id: 48,
    name: "oversize Square Tenon Adaptor 4/5/6 inch tenon options",
    price: 35,
    image:
      process.env.PUBLIC_URL +
      "/products/accessories/Untitled-1_0446a5db-06c9-4dfa-a674-3913408a54a4_540x540.jpg",
    category: "accessories",
    description:
      "The **American LED Pro 100W Flood Light** is a durable, high-performance outdoor lighting solution designed for both commercial and residential use. With its IP65 weatherproof rating, 100–277V wide voltage compatibility, and breather function to prevent moisture buildup, it delivers reliable illumination in all conditions. Featuring a robust aluminum body, 4mm tempered glass, and a long-lasting LED chip, this flood light ensures energy efficiency, easy installation, and minimal maintenance—backed by a 5-year warranty for peace of mind.",
    images: [
      process.env.PUBLIC_URL +
        "/products/accessories/Untitled-1_0446a5db-06c9-4dfa-a674-3913408a54a4_540x540.jpg",
      process.env.PUBLIC_URL + "/products/accessories/oversizetenonsquare.webp",
    ],
  },
  {
    id: 47,
    name: "Round Tenon Adaptor 3/4/5 inch tenon options",
    price: 30,
    image: process.env.PUBLIC_URL + "/products/accessories/roundtenon.webp",
    category: "accessories",
    description: "",
    images: [process.env.PUBLIC_URL + "/products/accessories/roundtenon.webp"],
  },
];

export const categories = [
  { id: "flood-light", name: "Flood Lights" },
  { id: "led-panel", name: "LED Panels" },
  { id: "shoe-box-light", name: "Shoe Box Lights" },
  { id: "canopy-light", name: "Canopy Lights" },
  { id: "dusk-to-dawn-light", name: "Dusk To Dawn Lights" },
  { id: "pole-light", name: "Pole light" },
  { id: "ufo-light", name: "UFO / High Bay Lights" },
  { id: "wall-pack-light", name: "Wall Pack Lights" },
  { id: "accessories", name: "Accessories" },
];
