/**
 * ToolHub - Central Equipment & Machinery Database
 * Detailed specifications, high-definition images, and rental rates for all catalog tools.
 */

(function () {
    'use strict';

    window.ToolHubEquipmentDB = {
        'cat-excavator': {
            id: 'cat-excavator',
            cartId: 'TL-108',
            title: 'Caterpillar 302.7 CR Compact Hydraulic Mini Excavator',
            shortTitle: 'Caterpillar 302.7 CR Mini Excavator',
            category: 'Earthmoving Fleet',
            categorySlug: 'heavy-equipment',
            powerType: 'diesel',
            powerBadge: '24.7 HP Diesel',
            badge: 'CATERPILLAR OEM CERTIFIED · LATE MODEL FLEET',
            serial: 'Fleet Serial: #CAT-302-CR88 · Clean EPA Tier 4 Diesel',
            dailyRate: 275,
            weeklyRate: 980,
            deposit: 500,
            stockStatus: 'Available at Central Depot Yard',
            mainImage: 'assets/images/cat-excavator.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/01/ed/6c/01ed6cd51824eb73283a94d31475b023.jpg',
                'https://i.pinimg.com/1200x/12/19/30/1219308d42e1600c26aac603e6237918.jpg',
                
            ],
            description: 'The Cat 302.7 CR delivers high performance in a compact footprint to help you work in tight residential trenching, grading, and commercial foundations. Features true zero tail swing with compact radius, stick steer travel mode, automatic two-speed travel, and an enclosed pressurized cab with heating and air conditioning.',
            specs: [
                { label: 'Engine Power', value: '24.7 HP (Cat C1.1 Turbo)' },
                { label: 'Max Dig Depth', value: '8.4 ft (2,560 mm)' },
                { label: 'Operating Weight', value: '6,050 lbs (2,744 kg)' },
                { label: 'Tail Swing', value: 'True Zero Tail Swing' },
                { label: 'Fuel Capacity', value: '11.9 gal (Full Tank Inc.)' },
                { label: 'Trailer Included', value: 'Heavy-Duty Towable' }
            ],
            included: '18" Toothed Trenching Bucket, Hydraulic Thumb Clamp, & Towing Trailer',
            addons: [
                { name: 'Hydraulic Concrete Breaker Hammer', price: 45 },
                { name: 'Auger Drive Unit with 12" Bit', price: 30 }
            ]
        },

        'bobcat-t76': {
            id: 'bobcat-t76',
            cartId: 'TL-120',
            title: 'Bobcat T76 R-Series Compact Track Skid Steer Loader',
            shortTitle: 'Bobcat T76 Compact Track Loader',
            category: 'Loading & Earthmoving',
            categorySlug: 'heavy-equipment',
            powerType: 'diesel',
            powerBadge: '74 HP Turbo Diesel',
            badge: 'BOBCAT R-SERIES · HIGH-FLOW AUXILIARY HYDRAULICS',
            serial: 'Fleet Serial: #BOB-T76-R91 · Clean Tier 4 Diesel',
            dailyRate: 310,
            weeklyRate: 1150,
            deposit: 500,
            stockStatus: 'Available at Central Depot Yard',
            mainImage: 'https://i.pinimg.com/1200x/9e/3c/d3/9e3cd3e492785789c5fe1c628bb13e59.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/ed/ba/43/edba4338613061893f2640fc3388c597.jpg',
                'https://i.pinimg.com/1200x/c3/df/6e/c3df6e81e0c78cba2909a1fc7d71d66a.jpg',
            ],
            description: 'The Bobcat T76 compact track loader is engineered for demanding commercial earthmoving, site clearing, and heavy pallet handling. Features a cast-steel lift arm structure, high-flow auxiliary hydraulics (30.3 GPM), 5-Link torsion suspension undercarriage for a smooth ride over rough grade, and a deluxe pressurized cab with heat and A/C.',
            specs: [
                { label: 'Engine Power', value: '74 HP Bobcat 2.4L Turbo Diesel' },
                { label: 'Rated Operating Capacity', value: '2,900 lbs (35% Tipping: 8,285 lbs)' },
                { label: 'Operating Weight', value: '10,250 lbs (4,649 kg)' },
                { label: 'Auxiliary Flow', value: '30.3 GPM High Flow System' },
                { label: 'Lift Path', value: 'Vertical Lift (128.3 in Pin Height)' },
                { label: 'Travel Speed', value: '6.8 MPH Low / 10.7 MPH High' }
            ],
            included: '74" Severe Duty Construction Dirt Bucket, Hydraulic Bob-Tach Quick Coupler, & Delivery Tie-Down Chains',
            addons: [
                { name: '48" Hydraulic Pallet Forks Attachment', price: 35 },
                { name: 'Hydraulic Trenching Auger Attachment with 18" Bit', price: 50 }
            ]
        },

        'genie-s65': {
            id: 'genie-s65',
            cartId: 'TL-121',
            title: 'Genie S-65 TraX Rough Terrain Telescopic Boom Lift (71 ft Reach)',
            shortTitle: 'Genie S-65 TraX Telescopic Boom',
            category: 'Aerial Access Fleet',
            categorySlug: 'heavy-equipment',
            powerType: 'diesel',
            powerBadge: '4WD 4-Point Track Drive',
            badge: 'GENIE GENUINE OEM · 4-POINT INDEPENDENT TRAX SYSTEM',
            serial: 'Fleet Serial: #GEN-S65-TX44 · OSHA 1926 Certified',
            dailyRate: 385,
            weeklyRate: 1400,
            deposit: 600,
            stockStatus: 'Available at Central Depot Yard',
            mainImage: 'https://i.pinimg.com/1200x/e4/b4/12/e4b412ad893abe62e353bf6dcfd4f53c.jpg',
            gallery: [
                'https://i.pinimg.com/736x/55/f7/b0/55f7b0adedd70ea39b30130f4e437274.jpg',
                'https://i.pinimg.com/1200x/b2/cb/b5/b2cbb55900a716b351815c06dd932668.jpg',
                
            ],
            description: 'The Genie S-65 TraX rough terrain boom lift is engineered for high-elevation commercial roofing, exterior steel erection, and industrial painting across extreme mud, soft soil, and uneven construction grades. Its innovative 4-point rubber track drive provides unmatched ground contact pressure and zero tire blowout risks, with a full 71 ft working height and 56 ft horizontal reach.',
            specs: [
                { label: 'Working Height', value: '71 ft (21.8 m)' },
                { label: 'Horizontal Reach', value: '56 ft 2 in (17.1 m)' },
                { label: 'Platform Capacity', value: '500 lbs Unrestricted (2 Persons + Tools)' },
                { label: 'Drive System', value: '4-Point Independent Rubber TraX 4WD' },
                { label: 'Engine', value: 'Deutz 49 HP Turbo Clean Diesel' },
                { label: 'Turntable Rotation', value: '360° Continuous Rotation' }
            ],
            included: '8-ft Dual-Entry Steel Platform, Fall Arrest Safety Harness Kit, Operator Control Panel Cover, & Horn',
            addons: [
                { name: 'Onboard 120V AC Hydraulic Welder / Generator 3kW', price: 45 },
                { name: 'Aircraft Protection Bumper Foam Padding Kit', price: 25 }
            ]
        },

        'doosan-g70': {
            id: 'doosan-g70',
            cartId: 'TL-122',
            title: 'Doosan G70 Towable Prime Industrial Diesel Generator 70 kVA',
            shortTitle: 'Doosan G70 Towable Diesel Generator',
            category: 'Power Generation',
            categorySlug: 'heavy-equipment',
            powerType: 'diesel',
            powerBadge: '70 kVA / 56 kW Tier 4',
            badge: 'DOOSAN PORTABLE POWER · ULTRA-QUIET 65 dBA ENCLOSURE',
            serial: 'Fleet Serial: #DSN-G70-KW52 · Continuous Heavy Duty',
            dailyRate: 215,
            weeklyRate: 790,
            deposit: 350,
            stockStatus: 'Available at North Depot Yard',
            mainImage: 'assets/images/honda-generator.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/d6/c1/5a/d6c15a59108bd7c7e511a0f6a5bb7d85.jpg',
                'https://i.pinimg.com/1200x/fa/27/c3/fa27c34a8b7d838e655607b7ef1cc371.jpg',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'
            ],
            description: 'The Doosan G70 mobile diesel generator delivers rock-solid, prime three-phase and single-phase jobsite electrical power. Built inside a sound-attenuated acoustic enclosure generating just 65 dBA at 23 feet. Equipped with a digital engine controller, multi-voltage selector switch (120V/208V/240V/480V), and internal 108-gallon diesel fuel cell for 24+ hour continuous runtimes.',
            specs: [
                { label: 'Prime Power Output', value: '70 kVA / 56 kW (Continuous Duty)' },
                { label: 'Voltage Options', value: '120V / 208V / 240V / 480V Multi-Switch' },
                { label: 'Sound Level', value: '65 dBA @ 23 ft (Ultra-Quiet Soundproof)' },
                { label: 'Engine Model', value: 'Cummins QSB3.3 Tier 4 Final Turbo Diesel' },
                { label: 'Fuel Tank Capacity', value: '108 Gallons (24.2 Hour Run at 100% Load)' },
                { label: 'Trailer Chassis', value: 'DOT Approved Towable with Surge Brakes' }
            ],
            included: 'Integrated Heavy-Duty Tow Trailer with 2-5/16" Ball Hitch, Safety Chains, CAM-LOK Outlets, & Full Tank Initial Fuel',
            addons: [
                { name: '50-ft 100-Amp Heavy Industrial Spider Box Distribution Cable', price: 30 },
                { name: 'Jobsite Portable 50A Power Distribution Box (GFI Protected)', price: 25 }
            ]
        },

        'stihl-chainsaw': {
            id: 'stihl-chainsaw',
            cartId: 'TL-104',
            title: 'Stihl MS 250 18" Professional Gas Powered Chainsaw',
            shortTitle: 'Stihl MS 250 18" Gas Chainsaw',
            category: 'Lawn & Forestry',
            categorySlug: 'gardening',
            powerType: 'gas',
            powerBadge: 'Gas 45.4cc',
            badge: 'STIHL PRO SERIES · EXCELLENT POWER-TO-WEIGHT',
            serial: 'Fleet Serial: #ST-MS250-84 · 2-Stroke Mix Powered',
            dailyRate: 55,
            weeklyRate: 220,
            deposit: 150,
            stockStatus: 'In Stock (Ready for Dispatch)',
            mainImage: 'https://i.pinimg.com/1200x/7a/ef/4e/7aef4e2438063a26643ef6fc491d9172.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/a2/5d/bb/a25dbb444e394a705324e8a50ac4ac8c.jpg',
                'https://i.pinimg.com/1200x/be/59/1e/be591e90d1c77102d45b3b3f9c552821.jpg',
            ],
            description: 'Engineered for tree felling, firewood processing, and post-storm debris clearing, the Stihl MS 250 offers an outstanding power-to-weight ratio. Features side-access chain tensioner, winter/summer operating shutter, Master Control Lever, and QuickStop inertia chain brake.',
            specs: [
                { label: 'Displacement', value: '45.4 cc (2.77 cu. in.)' },
                { label: 'Bar Length', value: '18 in. Rollomatic E' },
                { label: 'Engine Power', value: '3.0 bhp (2.2 kW)' },
                { label: 'Powerhead Weight', value: '10.1 lbs (4.6 kg)' },
                { label: 'Fuel Tank', value: '15.9 oz (Full Tank Inc.)' },
                { label: 'Chain Pitch', value: '.325" RM3 Oilomatic' }
            ],
            included: 'Heavy-Duty Carry Case, Spare Sharp Chain, Bar Scabbard, & Scrench Tool',
            addons: [
                { name: 'Kevlar Safety Chaps & Mesh Face Shield Helmet', price: 15 },
                { name: 'Extra 1-Gal BioPlus Bar & Chain Lubricant', price: 10 }
            ]
        },

        'husqvarna-chainsaw': {
            id: 'husqvarna-chainsaw',
            cartId: 'TL-104',
            title: 'Husqvarna 450 Rancher 20" 50.2cc Gas Powered Chainsaw',
            shortTitle: 'Husqvarna 450 Rancher Chainsaw',
            category: 'Gardening & Forestry',
            categorySlug: 'gardening',
            powerType: 'gas',
            powerBadge: 'Gas 50.2cc X-Torq',
            badge: 'HUSQVARNA RANCHER · LOW VIBE & INERTIA BRAKE',
            serial: 'Fleet Serial: #HQ-450R-20 · Pro Storm & Tree Clearing',
            dailyRate: 55,
            weeklyRate: 220,
            deposit: 150,
            stockStatus: 'In Stock (Ready for Dispatch)',
            mainImage: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=85',
            gallery: [
                
                'https://i.pinimg.com/1200x/7a/ef/4e/7aef4e2438063a26643ef6fc491d9172.jpg',
                'https://i.pinimg.com/1200x/a2/5d/bb/a25dbb444e394a705324e8a50ac4ac8c.jpg'
            ],
            description: 'The definitive all-round saw for property owners requiring heavy-duty cutting power. Powered by a 50.2cc X-Torq engine that reduces fuel consumption by 20% and lowers emissions by up to 60%. Features Smart Start, choke/stop integrated control, LowVib anti-vibration dampers, and inertia-activated chain brake.',
            specs: [
                { label: 'Displacement', value: '50.2 cc (3.2 HP)' },
                { label: 'Bar Length', value: '20 in. Sprocket Nose' },
                { label: 'Max Chain Speed', value: '56.9 fts (17.34 m/s)' },
                { label: 'Weight (No Bar)', value: '11.2 lbs (5.1 kg)' },
                { label: 'Fuel Tank', value: '15.2 fl oz' },
                { label: 'Oil Pump', value: 'Automatic Adjustable Flow' }
            ],
            included: '20" Guide Bar, Heavy Sharp Chain, Scabbard Protector, Scrench Multi-Tool, & Case',
            addons: [
                { name: 'Kevlar Forestry Safety Chaps & Mesh Face Helmet', price: 15 },
                { name: 'Husqvarna Pre-Mixed 50:1 XP+ 2-Stroke Fuel (1 Gal)', price: 12 }
            ]
        },

        'dewalt-drill': {
            id: 'dewalt-drill',
            cartId: 'TL-101',
            title: 'DeWalt 20V Max XR Brushless Cordless Drill & Impact Combo Kit',
            shortTitle: 'DeWalt 20V Max Cordless Drill Kit',
            category: 'Power Tools & Saws',
            categorySlug: 'power-tools',
            powerType: 'battery',
            powerBadge: '20V Max XR',
            badge: 'DEWALT BRUSHLESS · DUAL TOOL CONTRACTOR KIT',
            serial: 'Fleet Serial: #DW-20V-992 · Certified Fast Charge',
            dailyRate: 35,
            weeklyRate: 140,
            deposit: 100,
            stockStatus: 'In Stock (Express Pickup Ready)',
            mainImage: 'https://i.pinimg.com/1200x/33/ee/f6/33eef62367df6b7598d428f9759e7070.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/fc/7c/9d/fc7c9db17636ecc489f4cfb237fdea04.jpg',
                'https://i.pinimg.com/736x/6b/4b/55/6b4b552028341cad2e418f06275b89fe.jpg',
                
            ],
            description: 'The jobsite workhorse combo kit. Features the DCD996 1/2" Hammerdrill with 3-speed all-metal transmission and 2,000 RPM, paired with the DCF887 1/4" Impact Driver delivering 1,825 in-lbs of torque. Brushless motors deliver up to 57% more runtime than standard brushed motors.',
            specs: [
                { label: 'Voltage', value: '20V Max Lithium-Ion' },
                { label: 'Max Speed', value: '2,000 RPM / 38,250 BPM' },
                { label: 'Impact Torque', value: '1,825 in-lbs (3-Speed)' },
                { label: 'Chuck Size', value: '1/2" Nitro-Carburized Metal' },
                { label: 'Batteries', value: '(2) 5.0Ah XR High Capacity' },
                { label: 'Total Weight', value: '3.6 lbs (Compact)' }
            ],
            included: '1/2" Hammerdrill, 1/4" Impact Driver, (2) 5.0Ah XR Batteries, Fast Charger, & Ballistic Tool Bag',
            addons: [
                { name: '29-Piece Heavy Duty Cobalt Drill Bit Index', price: 12 },
                { name: 'Extra 20V Max 6.0Ah XR Extended Battery', price: 14 }
            ]
        },

        'bosch-hammer': {
            id: 'bosch-hammer',
            cartId: 'TL-102',
            title: 'Bosch GBH 13.5 Amp SDS-Max Rotary Hammer Drill & Breaker',
            shortTitle: 'Bosch SDS-Max Rotary Hammer',
            category: 'Power Tools & Saws',
            categorySlug: 'power-tools',
            powerType: 'electric',
            powerBadge: '13.5A / 8.5 Ft-Lbs',
            badge: 'BOSCH INDUSTRIAL · VIBRATION CONTROL TECHNOLOGY',
            serial: 'Fleet Serial: #BSH-SDS-441 · Heavy Concrete Duty',
            dailyRate: 42,
            weeklyRate: 170,
            deposit: 120,
            stockStatus: 'In Stock (Central Depot Yard)',
            mainImage: 'https://i.pinimg.com/1200x/18/e4/ca/18e4ca90f593a5267a1862505c6cb42b.jpg',
            gallery: [
                'https://tools4trade.co.uk/cdn/shop/files/1fdd177e-0bec-4170-9582-f1b72c6b304b.jpg?v=1767680126',
                'https://tools4trade.co.uk/cdn/shop/files/17f7f9b8-cb5c-49bc-b64a-1bfdd1ff25fc.jpg?v=1767680126',               
            ],
            description: 'Engineered for rapid concrete drilling, rebar doweling, and structural chiseling. Generates 8.5 ft-lbs of impact energy with Active Vibration Control in both the hammer mechanism and handle. Dual-mode selector enables hammer drilling or dedicated chiseling with 12-position Vario-Lock rotation.',
            specs: [
                { label: 'Motor Power', value: '13.5 Amps Commercial' },
                { label: 'Impact Energy', value: '8.5 ft-lbs (11.5 Joules)' },
                { label: 'Chuck Style', value: 'SDS-Max Quick Lock' },
                { label: 'Max Concrete Bore', value: '1-9/16" (4" with Core Bit)' },
                { label: 'Impact Rate', value: '2,900 BPM' },
                { label: 'Weight', value: '15.2 lbs' }
            ],
            included: 'Auxiliary 360° Handle, Depth Gauge Rod, Bull-Point Chisel, 1" Flat Chisel, & Carrying Case',
            addons: [
                { name: '4-Inch Dry Diamond Core Bit & Shroud', price: 18 },
                { name: '50-ft 10-Gauge Heavy Weather Extension Cord', price: 8 }
            ]
        },

        'milwaukee-impact': {
            id: 'milwaukee-impact',
            cartId: 'TL-103',
            title: 'Milwaukee M18 FUEL 1/2" High-Torque Impact Wrench Kit',
            shortTitle: 'Milwaukee M18 High-Torque Wrench',
            category: 'Power Tools & Saws',
            categorySlug: 'power-tools',
            powerType: 'battery',
            powerBadge: '1400 Ft-Lbs Nut-Busting',
            badge: 'MILWAUKEE M18 FUEL · PNEUMATIC PERFORMANCE',
            serial: 'Fleet Serial: #MLW-M18HT-119 · Heavy Framing & Auto',
            dailyRate: 38,
            weeklyRate: 150,
            deposit: 100,
            stockStatus: 'In Stock (Express Pickup Ready)',
            mainImage: 'https://i.pinimg.com/736x/50/0f/43/500f43d5b4e88eff8ef80ab5b14855fd.jpg',
            gallery: [
                'https://i.pinimg.com/736x/0c/fc/99/0cfc99a55556b3de0fb35b2e1d1796c1.jpg',
                'https://i.pinimg.com/736x/a2/2a/e7/a22ae7fb5af5f2c330842e55df179abd.jpg',
                
            ],
            description: 'Replaces air lines and pneumatic hoses with 1,400 ft-lbs of nut-busting torque and 1,000 ft-lbs of fastening torque. 4-Mode DRIVE CONTROL includes Bolt Removal mode, slowing down to 750 RPM once the fastener breaks free to avoid dropped nuts on structural iron and trailer wheels.',
            specs: [
                { label: 'Nut-Busting Torque', value: '1,400 ft-lbs' },
                { label: 'Fastening Torque', value: '1,000 ft-lbs' },
                { label: 'Drive Size', value: '1/2" Friction Ring' },
                { label: 'Motor Type', value: 'POWERSTATE Brushless' },
                { label: 'Battery Packs', value: '(2) M18 5.0Ah REDLITHIUM' },
                { label: 'Length', value: '8.39 in. Compact Body' }
            ],
            included: 'M18 1/2" High Torque Wrench, (2) 5.0Ah XC Batteries, Multi-Voltage Rapid Charger, & Case',
            addons: [
                { name: '14-Piece Metric & SAE Deep Impact Socket Set', price: 12 },
                { name: 'M18 REDLITHIUM High Output 8.0Ah Battery', price: 16 }
            ]
        },

        'dewalt-tile-saw': {
            id: 'dewalt-tile-saw',
            cartId: 'TL-106',
            title: 'DeWalt 10" Wet Tile Saw with Integrated Stand & Water Tub',
            shortTitle: 'DeWalt 10" Wet Tile Saw with Stand',
            category: 'Floor & Tile',
            categorySlug: 'power-tools',
            powerType: 'electric',
            powerBadge: 'Electric 120V',
            badge: 'DEWALT PRECISION · 28" RIP CUT CAPACITY',
            serial: 'Fleet Serial: #DW-D24000-72 · Porcelain & Stone',
            dailyRate: 75,
            weeklyRate: 300,
            deposit: 150,
            stockStatus: '2 Left at Downtown Depot',
            mainImage: 'https://i.pinimg.com/1200x/e1/8a/d6/e18ad632c8e0e45a943ee5f063cf4510.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/0e/fc/27/0efc273b5b97375b89a51712b13a1b01.jpg',
                'https://i.pinimg.com/736x/92/e9/2b/92e92b14dffe647711709747378a074b.jpg',
                
                
            ],
            description: 'The contractor gold standard for ceramic, porcelain, slate, and paving stone tiles. Cantilevering rail/cart system provides 28-inch rip cut capacity and 18-inch diagonal cuts. Dual water nozzles position water right on the blade to eliminate overspray and extend diamond life.',
            specs: [
                { label: 'Blade Diameter', value: '10 in. Diamond Rim' },
                { label: 'Rip Capacity', value: '28 in. (Diagonal: 18 in.)' },
                { label: 'Max Cut Depth', value: '3-1/8 in. (Cuts Pavers)' },
                { label: 'Motor', value: '1.5 HP Commercial Electric' },
                { label: 'Water System', value: 'Dual Adjustable Spray Jets' },
                { label: 'Stand Included', value: 'Heavy Folding Scissor Stand' }
            ],
            included: '10" XP4 Porcelain Diamond Blade, Submersible Pump, Side/Rear Water Pans, & Rolling Stand',
            addons: [
                { name: 'Ultra-Fine Continuous Rim Glass & Mosaic Blade', price: 18 },
                { name: 'Professional Rubber Grout Float & Sponge Kit', price: 8 }
            ]
        },

        'simpson-washer': {
            id: 'simpson-washer',
            cartId: 'TL-105',
            title: 'Simpson MegaShot 3200 PSI Commercial Gas Pressure Washer',
            shortTitle: 'Simpson MegaShot 3200 PSI Washer',
            category: 'Pressure Washers',
            categorySlug: 'pressure-washers',
            powerType: 'gas',
            powerBadge: 'Gas 3200 PSI',
            badge: 'HONDA GC190 POWERED · 2.5 GPM FLOW',
            serial: 'Fleet Serial: #SMP-MS32-19 · Driveway & Siding Pro',
            dailyRate: 65,
            weeklyRate: 260,
            deposit: 100,
            stockStatus: 'In Stock (Central Depot Yard)',
            mainImage: 'https://i.pinimg.com/736x/82/bb/30/82bb30f022deab8d59e8ddfe61d0a4d2.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/f0/22/9a/f0229aa9f20967de8527a18b38f631b5.jpg',
                'https://i.pinimg.com/1200x/8c/a4/8e/8ca48ead77bac35809da8db06b693dc5.jpg',
            ],
            description: 'Equipped with a commercial Honda GC190 4-stroke engine and maintenance-free OEM Technologies axial cam brass head pump. Strips mildew, grime, oil stains, and loose paint from driveways, wooden decks, vinyl siding, and brick walkways effortlessly.',
            specs: [
                { label: 'Max Pressure', value: '3,200 PSI' },
                { label: 'Flow Rate', value: '2.5 Gallons Per Minute' },
                { label: 'Engine Model', value: 'Honda GC190 OHV 4-Stroke' },
                { label: 'Hose Spec', value: '25-ft MorFlex Non-Marring' },
                { label: 'Quick-Tips', value: '0°, 15°, 25°, 40°, & Soap' },
                { label: 'Wheel Base', value: '10" Pneumatic All-Terrain' }
            ],
            included: 'Ergonomic Spray Gun, 16" Steel Wand, 25-ft High Pressure Hose, 5 Nozzles, & Siphon Tube',
            addons: [
                { name: '15-Inch Rotary Flat Surface Cleaner (Driveways/Patios)', price: 18 },
                { name: '50-Foot MorFlex Heavy Extension Hose', price: 10 }
            ]
        },

        'baker-scaffold': {
            id: 'baker-scaffold',
            cartId: 'TL-107',
            title: '6ft Baker Style Rolling Scaffold Tower with Locking Casters',
            shortTitle: '6ft Baker Rolling Scaffold Tower',
            category: 'Ladders & Scaffolding',
            categorySlug: 'ladders',
            powerType: 'battery',
            powerBadge: 'Modular Steel',
            badge: '1,000 LB LOAD RATING · ANSI & OSHA CERTIFIED',
            serial: 'Fleet Serial: #BKR-SCF-60 · Interior Renovation',
            dailyRate: 45,
            weeklyRate: 180,
            deposit: 100,
            stockStatus: 'In Stock (Ready for Flatbed / Pickup)',
            mainImage: 'https://i.pinimg.com/736x/b1/53/d0/b153d03b9a22ecd0e24097ed380c9bb7.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/e7/68/0e/e7680e5a31a6e68621e1fbb1d7e63040.jpg',
                'https://i.pinimg.com/736x/b9/c8/9c/b9c89c4e153c7e7e454c5a6564afab65.jpg',
                
            ],
            description: 'The jobsite standard for interior painting, drywall finishing, drop ceilings, and electrical repairs. Adjustable platform height from 27" to 71" in 2-inch increments. Narrow 29-inch profile rolls through standard 30-inch doorways without taking down the staging.',
            specs: [
                { label: 'Working Height', value: '6 ft (Stackable to 12 ft)' },
                { label: 'Platform Dimensions', value: '73" L x 29" W (Fits Doorways)' },
                { label: 'Load Capacity', value: '1,000 lbs (Workers + Gear)' },
                { label: 'Locking Casters', value: '5" Double-Lock Heavy Urethane' },
                { label: 'Frame Construction', value: '1.5" 16-Gauge Powder Steel' },
                { label: 'Platform Deck', value: '1/2" Exterior Ply with Edge Band' }
            ],
            included: '2 Ladder End Frames, 2 Truss Braces, Steel-Banded Platform, (4) 5" Casters, & Lock Pins',
            addons: [
                { name: 'Full Perimeter Safety Guardrail Set with Toeboards', price: 16 },
                { name: '4-Piece Heavy Outrigger Stabilizer Extension Kit', price: 18 }
            ]
        },

        'werner-ladder': {
            id: 'werner-ladder',
            cartId: 'TL-109',
            title: 'Werner D6224-2 24ft Type IA Heavy Duty Fiberglass Extension Ladder',
            shortTitle: 'Werner 24ft Fiberglass Extension Ladder',
            category: 'Ladders & Scaffolding',
            categorySlug: 'ladders',
            powerType: 'battery',
            powerBadge: '300 lb Duty IA',
            badge: 'WERNER PROFESSIONAL · NON-CONDUCTIVE FIBERGLASS',
            serial: 'Fleet Serial: #WRN-EXT-24 · Roof & Exterior Access',
            dailyRate: 32,
            weeklyRate: 125,
            deposit: 75,
            stockStatus: 'In Stock (Drive-Thru Lane Ready)',
            mainImage: 'https://i.pinimg.com/1200x/18/63/23/186323f26e8fc3d68101db25ac6c6d19.jpg',
            gallery: [
                'https://i0.wp.com/toolguyd.com/blog/wp-content/uploads/2021/04/Louisville-Extension-Ladder.jpg?resize=600%2C600&ssl=1',
                'https://i.pinimg.com/736x/e2/b9/67/e2b9676a12764452775b492ee27dfa2f.jpg',
                
            ],
            description: 'Designed for two-story residential roof access, commercial maintenance, and exterior siding/gutter installations. Non-conductive fiberglass side rails provide crucial protection near electrical lines. Features 1-1/2" slip-resistant TRACTION-TRED D-rungs and dual-action swivel safety shoes.',
            specs: [
                { label: 'Total Length', value: '24 ft (Working Length: 21 ft)' },
                { label: 'Duty Rating', value: 'Type IA 300 lbs Extra Heavy' },
                { label: 'Max Safe Reach', value: '23 ft (2-Story Access)' },
                { label: 'Rail Material', value: 'Non-Conductive Fiberglass' },
                { label: 'Rung Type', value: '1-1/2" TRACTION-TRED D-Rung' },
                { label: 'Safety Feet', value: 'Dual-Action Swivel with Spur' }
            ],
            included: 'Complete 2-Section Ladder, Smooth Pulley Rope System, & Mar-Resistant End Caps',
            addons: [
                { name: 'Roof Gutter Standoff & Wall Stabilizer Bracket', price: 10 },
                { name: 'Adjustable Ladder Leveler Legs (Uneven Slopes)', price: 12 }
            ]
        },

        'little-giant-ladder': {
            id: 'little-giant-ladder',
            cartId: 'TL-111',
            title: 'Little Giant Velocity 22ft Multi-Position Articulated Ladder',
            shortTitle: 'Little Giant 22ft Articulated Ladder',
            category: 'Ladders & Scaffolding',
            categorySlug: 'ladders',
            powerType: 'battery',
            powerBadge: 'Type IA 300 Lb',
            badge: '5 CONFIGURATIONS IN 1 · AEROSPACE ALUMINUM',
            serial: 'Fleet Serial: #LG-VEL22-33 · Multi-Angle Versatile',
            dailyRate: 36,
            weeklyRate: 145,
            deposit: 80,
            stockStatus: 'In Stock (Express Pickup Ready)',
            mainImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ladder_fall_prevention_%289253630705%29.jpg/1200px-Ladder_fall_prevention_%289253630705%29.jpg',
            gallery: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ladder_fall_prevention_%289253630705%29.jpg/1200px-Ladder_fall_prevention_%289253630705%29.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Extension_ladder_leaning_against_a_garage.JPG/1200px-Extension_ladder_leaning_against_a_garage.JPG',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Residential_construction_workers_fall_prevention_%289253625315%29.jpg/1200px-Residential_construction_workers_fall_prevention_%289253625315%29.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rollger%C3%BCst_Alu_und_Mist.jpg/1200px-Rollger%C3%BCst_Alu_und_Mist.jpg'
            ],
            description: 'Converts effortlessly into 5 unique modes: A-Frame Stepladder, 22-ft Extension Ladder, Staircase Ladder for uneven steps, 90-Degree Flush Wall Ladder, and Scaffolding Trestles. Features patented Rock Lock adjusters and Tip & Glide wheels for easy rolling between work areas.',
            specs: [
                { label: 'Max Extension Reach', value: '22 ft' },
                { label: 'Stepladder Height', value: '5 ft to 9 ft' },
                { label: 'Duty Rating', value: 'Type IA 300 lbs Rated' },
                { label: 'Configurations', value: '33 Unique Setup Positions' },
                { label: 'Transport Wheels', value: 'Tip & Glide Roller Casters' },
                { label: 'Product Weight', value: '39 lbs (Aerospace Alloy)' }
            ],
            included: 'Velocity 22 Unit, Rock Lock Fasteners, Dual Palm Hinge System, & Transport Wheels',
            addons: [
                { name: 'Magnetic Work Platform with Tool Slots', price: 8 },
                { name: 'Scaffold Trestle Brackets Set (Converts to Bench)', price: 12 }
            ]
        },

        'werner-step-ladder': {
            id: 'werner-step-ladder',
            cartId: 'TL-112',
            title: 'Werner 10ft Type IA Fiberglass Heavy Duty Step Ladder',
            shortTitle: 'Werner 10ft Fiberglass Step Ladder',
            category: 'Ladders & Scaffolding',
            categorySlug: 'ladders',
            powerType: 'battery',
            powerBadge: 'Type IA 300 Lb',
            badge: 'WERNER PRO · 14-FT MAXIMUM SAFE REACH',
            serial: 'Fleet Serial: #WRN-STP10-55 · Electrical & Ceiling',
            dailyRate: 28,
            weeklyRate: 110,
            deposit: 75,
            stockStatus: 'In Stock (Central Depot Yard)',
            mainImage: 'https://i.pinimg.com/736x/54/fa/ef/54faefcaba670e721d5c139665da9eef.jpg',
            gallery: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Residential_construction_workers_fall_prevention_%289253625315%29.jpg/1200px-Residential_construction_workers_fall_prevention_%289253625315%29.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ladder_fall_prevention_%289253630705%29.jpg/1200px-Ladder_fall_prevention_%289253630705%29.jpg',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Extension_ladder_leaning_against_a_garage.JPG/1200px-Extension_ladder_leaning_against_a_garage.JPG',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Rollger%C3%BCst_Alu_und_Mist.jpg/1200px-Rollger%C3%BCst_Alu_und_Mist.jpg'
            ],
            description: 'Essential for high 10-12 ft ceilings, commercial lighting, recessed fixtures, and electrical wiring. Features non-conductive fiberglass stiles, HolsterTop with lock-in drill socket, EDGE molded rail braces, and slip-resistant Traction-Tred wide steps for confident standing.',
            specs: [
                { label: 'Ladder Height', value: '10 ft' },
                { label: 'Max Safe Reach', value: '14 ft' },
                { label: 'Duty Rating', value: '300 lbs Type IA Extra Heavy' },
                { label: 'Top Cap', value: 'HolsterTop with Tool Sockets' },
                { label: 'Rail Material', value: 'Non-Conductive Orange Fiberglass' },
                { label: 'Feet Pads', value: 'Slip-Resistant Heavy Rubber' }
            ],
            included: 'Complete 10-ft Step Ladder with Built-In Tool Tray & Pinch-Proof Spreaders',
            addons: [
                { name: 'Universal Paint Can Hook & Magnetic Screw Tray', price: 6 },
                { name: 'Heavy Duty Truck Bed Tie-Down Ratchet Straps', price: 5 }
            ]
        },

        'graco-sprayer': {
            id: 'graco-sprayer',
            cartId: 'TL-110',
            title: 'Graco Magnum X7 Cart Airless Paint & Stain Sprayer',
            shortTitle: 'Graco Magnum X7 Airless Paint Sprayer',
            category: 'Painting Equipment',
            categorySlug: 'painting',
            powerType: 'electric',
            powerBadge: 'Electric 120V',
            badge: 'GRACO MAGNUM · UP TO 100-FT HOSE CAPACITY',
            serial: 'Fleet Serial: #GRC-X7-488 · Direct 5-Gallon Hook',
            dailyRate: 58,
            weeklyRate: 230,
            deposit: 150,
            stockStatus: 'In Stock (Express Pickup Ready)',
            mainImage: 'https://i.pinimg.com/1200x/bc/96/f8/bc96f8d8cf437803cbb9cebfaa6fdd7d.jpg',
            gallery: [
                'https://www.paintaccess.com.au/cdn/shop/files/Group_1_384f3db9-034c-4af8-9370-b2c429e96e1e_1024x.png?v=1754604593',
                'https://www.paintaccess.com.au/cdn/shop/files/GracoUltra650XTElectricAirlessSprayerLo-Boy20B304-1_b2f913c3-2fa0-49a1-8d83-ee0542074152_1024x.png?v=1754604593',
                
            ],
            description: 'Sprays unthinned heavy exterior acrylics, interior latex, primers, stains, and deck sealers directly from 1 or 5-gallon paint buckets. Heavy chrome-plated cart rolls across lawns and gravel. Reverse-A-Clean RAC IV tip quickly clears nozzle clogs with a twist.',
            specs: [
                { label: 'Max Pressure', value: '3,000 PSI Stainless Steel' },
                { label: 'Flow Rate', value: '0.31 Gallons Per Minute' },
                { label: 'Motor Power', value: '5/8 HP Universal DC Motor' },
                { label: 'Hose Reach', value: 'Supports up to 100 ft of Hose' },
                { label: 'Max Tip Size', value: '.017" RAC IV SwitchTip' },
                { label: 'Cleanup System', value: 'PowerFlush Garden Hose Adapter' }
            ],
            included: 'SG2 Metal Spray Gun, 515 RAC IV Tip, 50-ft DuraFlex Hose, Pump Armor Fluid, & Manual',
            addons: [
                { name: 'Extra 50-ft DuraFlex Airless Hose (Total 100 ft Reach)', price: 15 },
                { name: '3-Foot Gun Extension Wand (Eaves & High Ceilings)', price: 12 }
            ]
        },

        'wagner-sprayer': {
            id: 'wagner-sprayer',
            cartId: 'TL-113',
            title: 'Wagner Control Pro 170 High-Efficiency Airless Paint Sprayer',
            shortTitle: 'Wagner Control Pro 170 HEA Sprayer',
            category: 'Painting Equipment',
            categorySlug: 'painting',
            powerType: 'electric',
            powerBadge: 'Electric 120V',
            badge: 'HEA TECHNOLOGY · 55% LESS OVERSPRAY',
            serial: 'Fleet Serial: #WAG-CP170-22 · Smooth Home Finish',
            dailyRate: 48,
            weeklyRate: 190,
            deposit: 120,
            stockStatus: 'In Stock (Ready for Dispatch)',
            mainImage: 'https://media.bunnings.com.au/api/public/content/5245b7db1753445d8efe308eaab3101f?v=26029255&t=w700dpr2',
            gallery: [
                'https://media.bunnings.com.au/api/public/content/7683e70687bd4779a617b57303c93576?v=fed5dbdd&t=w700dpr2',
                'https://media.bunnings.com.au/api/public/content/19506f9f5b394a578b093451114990ee?v=c6e44175&t=w700dpr2',
                
            ],
            description: 'Reduces overspray by up to 55% compared to traditional airless sprayers while delivering a softer, more forgiving spray fan with seamless blending. Ideal for homeowners and painters looking for factory-smooth wall, door, and fence finishes with minimal masking.',
            specs: [
                { label: 'Technology', value: 'High Efficiency Airless (HEA)' },
                { label: 'Operating Pressure', value: '1,500 PSI (Low Mist Fan)' },
                { label: 'Flow Rate', value: '0.33 Gallons Per Minute' },
                { label: 'Motor Power', value: '0.60 HP HEA Pump' },
                { label: 'Hose Included', value: '30 ft Flexible Hose' },
                { label: 'Annual Usage', value: 'Rated up to 300 Gal/Year' }
            ],
            included: 'Control Pro Hybrid Metal Spray Gun, 515 HEA Tip, Tip Guard, 30-ft Hose, & Flush Adapter',
            addons: [
                { name: 'Fine Finish 311 HEA Tip (Doors, Trim & Cabinetry)', price: 10 },
                { name: '30-Foot High-Flex Extension Hose (60-ft total)', price: 12 }
            ]
        },

        'paint-roller-station': {
            id: 'paint-roller-station',
            cartId: 'TL-114',
            title: 'Titan Continuous Pressure Roller & Paint Feed Station',
            shortTitle: 'Titan Continuous Pressure Roller',
            category: 'Painting Equipment',
            categorySlug: 'painting',
            powerType: 'electric',
            powerBadge: 'Electric 120V',
            badge: 'CONTINUOUS FEED · ZERO DRIPPING TRAYS',
            serial: 'Fleet Serial: #TTN-RLR-08 · Rapid Wall & Ceiling',
            dailyRate: 40,
            weeklyRate: 155,
            deposit: 90,
            stockStatus: 'In Stock (Central Depot Yard)',
            mainImage: 'https://i.pinimg.com/1200x/d8/b7/78/d8b7789e31471c9cf6958e7def26c845.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/c4/3a/5f/c43a5fdb459bb0be97ffe43ab48e252e.jpg',
                'https://i.pinimg.com/1200x/5e/fa/ee/5efaeef7434c8476a632ffb24bfdf50c.jpg',
               
            ],
            description: 'Eliminates messy paint trays completely. An electric pump feeds latex paint continuously through the perforated roller head with finger trigger control. Paint bedrooms and living rooms up to 4x faster with zero dipping, zero splatter, and perfectly even coverage.',
            specs: [
                { label: 'Roller Core', value: '9 in. Perforated Flow Core' },
                { label: 'Feed Control', value: 'Finger Trigger Push-Button' },
                { label: 'Telescoping Pole', value: '3 ft to 6 ft Extension' },
                { label: 'Feed Hose', value: '25 ft Lightweight Fluid Hose' },
                { label: 'Suction Hook', value: 'Direct from 1 or 5-Gal Pail' },
                { label: 'Power', value: '120V Low-Draw Electric' }
            ],
            included: '9" Pressure Roller Head, (2) 3/8" Nap Perforated Covers, Telescoping Pole, & 25-ft Hose',
            addons: [
                { name: '3/4" Heavy Nap Roller Cover (Stucco & Brick)', price: 8 },
                { name: '50-Foot Fluid Feed Extension Hose', price: 12 }
            ]
        },

        'honda-tiller': {
            id: 'honda-tiller',
            cartId: 'TL-115',
            title: 'Honda Mid-Tine Gas Garden Rototiller & Soil Cultivator',
            shortTitle: 'Honda Mid-Tine Gas Rototiller',
            category: 'Gardening & Forestry',
            categorySlug: 'gardening',
            powerType: 'gas',
            powerBadge: 'Gas Honda GX160',
            badge: 'HONDA COMMERCIAL GX160 · 21" TILLING WIDTH',
            serial: 'Fleet Serial: #HND-TL160-39 · Heavy Clay & Sod',
            dailyRate: 62,
            weeklyRate: 245,
            deposit: 150,
            stockStatus: 'In Stock (Central Depot Yard)',
            mainImage: 'https://i.pinimg.com/1200x/0e/aa/80/0eaa80aef6e0bfbd5e5b3654fc799290.jpg',
            gallery: [
                'https://i.pinimg.com/1200x/41/b0/d7/41b0d74cf69f8c03143bef0b559acf19.jpg',
                'https://i.pinimg.com/1200x/4b/ff/11/4bff117f06e0d3eaadfbef50b5cab801.jpg',
                

            ],
            description: 'Breaks up heavy clay, hardpan soil, and tough lawn sod for garden beds and landscape grading. Commercial Honda GX160 engine powers four forward-rotating heavy-duty Bolo tines. Balanced mid-tine design ensures straight tilling without jumping.',
            specs: [
                { label: 'Engine Model', value: 'Honda GX160 163cc 4-Stroke' },
                { label: 'Tilling Width', value: '21 in. (Adjustable to 14 in.)' },
                { label: 'Tilling Depth', value: '8 in. Deep Cultivation' },
                { label: 'Tine Design', value: '(4) Heavy Forged Bolo Tines' },
                { label: 'Transmission', value: 'All-Gear Commercial Drive' },
                { label: 'Transport Wheel', value: 'Retractable Front Wheel' }
            ],
            included: 'Complete Rototiller, Adjustable Depth Drag Stake, Tine Guards, & Transport Wheel',
            addons: [
                { name: 'Furrowing Wing Attachment for Garden Trenches', price: 14 },
                { name: 'Heavy Duty Aluminum Loading Ramps for Pickup Trucks', price: 15 }
            ]
        },

        'stihl-blower': {
            id: 'stihl-blower',
            cartId: 'TL-116',
            title: 'Stihl BR 600 Professional Heavy Backpack Leaf Blower',
            shortTitle: 'Stihl BR 600 Backpack Blower',
            category: 'Gardening & Forestry',
            categorySlug: 'gardening',
            powerType: 'gas',
            powerBadge: 'Gas 64.8cc',
            badge: 'STIHL 4-MIX · 677 CFM / 238 MPH VELOCITY',
            serial: 'Fleet Serial: #ST-BR600-91 · High Velocity Airflow',
            dailyRate: 45,
            weeklyRate: 180,
            deposit: 100,
            stockStatus: 'In Stock (Drive-Thru Ready)',
            mainImage: 'https://i.pinimg.com/1200x/92/74/97/92749747c10cc8a52e0e6d07fcdeb688.jpg',
            gallery: [
                'https://i.pinimg.com/736x/3a/df/f9/3adff999cc558a08c08dd2ddadad82d4.jpg',
                'https://i.pinimg.com/736x/18/c3/c0/18c3c0c9288232e6c0d8ac5cbe70d9e2.jpg',
                
            ],
            description: 'The preferred commercial backpack blower for large parking lots, acreages, jobsite cleanups, and wet autumn leaves. The Stihl 4-MIX engine delivers immense blowing power with low noise and high fuel efficiency. Contoured back padding and ergonomic harness reduce operator fatigue.',
            specs: [
                { label: 'Engine Power', value: '64.8 cc (4-MIX Engine)' },
                { label: 'Air Volume', value: '677 CFM at Nozzle' },
                { label: 'Air Velocity', value: '238 MPH Maximum' },
                { label: 'Blowing Force', value: '32 Newtons' },
                { label: 'Noise Rating', value: '75 dBA ANSI' },
                { label: 'Weight', value: '21.6 lbs (Anti-Vibe Harness)' }
            ],
            included: 'Backpack Blower, Flexible Tube, Straight Tube, Duckbill Jet Nozzle, & Full Fuel Tank',
            addons: [
                { name: 'Hearing Protection Earmuffs & Polycarbonate Goggles', price: 8 },
                { name: 'Stihl MotoMix 50:1 Pre-Mixed High-Grade Fuel (1 Gal)', price: 12 }
            ]
        }
    };
})();
