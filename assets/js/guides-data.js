/**
 * ToolHub - Guides & DIY Academy Database
 * Contains full, unique, rich content for each guide in the academy.
 */

(function () {
    'use strict';

    window.ToolHubGuidesDB = {
        'tile-saw': {
            id: 'tile-saw',
            category: 'BATHROOM & TILE REMODELING',
            title: 'How to Cut & Install Large-Format Porcelain Tile with a 10" Wet Saw',
            readTime: '8 Min Read',
            date: 'September 2026',
            author: {
                name: 'Jack Callahan',
                role: 'Master Mason & ToolHub Equipment Advisor',
                bio: 'Over 22 years in high-end stone masonry, commercial paving, and heavy saw equipment operations across commercial and custom residential builds.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/0e/fc/27/0efc273b5b97375b89a51712b13a1b01.jpg',
            toolsRequired: [
                'DeWalt D24000S 10-Inch Wet Tile Saw with Scissor Stand',
                'Continuous Rim XP4 Diamond Porcelain Blade',
                'ANSI Z87.1 Certified Eye Protection & N95 / Respirator Mask',
                'Heavy-Duty GFCI 12-Gauge Contractor Extension Cord',
                'Dual-Action Suction Cup Tile Grippers for 24"x48" Slabs',
                'Rubber Grout Float & Microfiber Sponge Wash Kit'
            ],
            bundleRate: '$85/day',
            bundleLink: 'equipment-details.html?id=dewalt-tile-saw',
            featuredTool: {
                name: 'DeWalt 10" Wet Tile Saw with Stand',
                image: 'https://i.pinimg.com/1200x/e1/8a/d6/e18ad632c8e0e45a943ee5f063cf4510.jpg',
                dailyRate: 75,
                stock: 'In Stock',
                link: 'equipment-details.html?id=dewalt-tile-saw'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    Large-format tiles—typically defined as any slab with at least one edge exceeding 15 inches—bring clean lines and minimal grout seams to modern walk-in showers, open-concept kitchens, and exterior patios. However, their dense vitreous composition and internal tension make them notoriously difficult to cut without chipping, binding, or catastrophic cracking.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    Adjusting Dual Water-Jet Delivery & Blade Alignment
                </h3>
                <p>
                    A continuous stream of cool water is crucial when cutting dense porcelain. Water does more than capture hazardous crystalline silica dust; it lubricates the contact patch and cools the sintered diamond matrix rim of the blade. If the blade heats up unevenly, thermal stress causes the porcelain body to fracture along unseen micro-fissures.
                </p>
                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">PRO CONTRACTOR TIP:</strong>
                    Position the primary water nozzle directly at the blade entrance point on the tile top, and angle the secondary nozzle directly into the kerf behind the cut. Ensure the water tray has at least 3 gallons of fresh water to prevent abrasive slurry recirculation.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    The "Back-Score" Technique for Flawless Clean Edges
                </h3>
                <p>
                    When pushing a large 24-inch or 36-inch tile straight into the spinning blade, the final half-inch of the cut is unsupported. As the blade exits, hydraulic and rotational forces snap off the rear corner—leaving an unsightly blowout.
                </p>
                <p>
                    To prevent corner blowout every single time, use the back-scoring method:
                </p>
                <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>Mark your cut line with an ultra-fine graphite pencil or grease marker.</li>
                    <li>Align the back corner of the tile under the blade and gently plunge down or feed 1/2 inch into the tile.</li>
                    <li>Turn off the motor, retract the cart, flip or slide the tile back, and make the full cut from the front edge.</li>
                    <li>The blade cleanly enters the pre-cut relief channel at the back without blowing out the porcelain glaze.</li>
                </ol>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
                    Managing Table Extension & Cantilever Support
                </h3>
                <p>
                    Porcelain slabs exceeding 24 inches cantilever off standard wet saw carts, causing deflection and curved cuts. When renting your saw from ToolHub, ensure the side and rear water collection trays and extension arms are locked tightly in plane with the rolling aluminum cart. Never force the feed rate: let the diamond grit grind the stone at its natural pace.
                </p>
            `
        },

        'pressure-washer': {
            id: 'pressure-washer',
            category: 'OUTDOOR CLEANING & WASHING',
            title: 'Pressure Washer PSI Guide: What Pressure to Use for Siding vs Concrete',
            readTime: '5 Min Read',
            date: 'August 2026',
            author: {
                name: 'Marcus Thorne',
                role: 'Senior Surface Cleaning Technician',
                bio: 'Industrial exterior cleaning lead with over 15 years specializing in heritage brick restoration, stamped concrete, and soft-wash siding care.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/f0/22/9a/f0229aa9f20967de8527a18b38f631b5.jpg',
            toolsRequired: [
                'Simpson MegaShot 3200 PSI Gas Pressure Washer (Honda GC190)',
                '15-Inch Rotary Surface Cleaner Attachment',
                'Color-Coded Quick-Connect Nozzles (0°, 15°, 25°, 40°, Soap)',
                '50-Foot MorFlex Non-Marring Steel-Braided Hose',
                'Heavy-Duty Chemical Siphon Hose & Biodegradable Deck Cleaner',
                'Neoprene Safety Boots & Full Face Splash Shield'
            ],
            bundleRate: '$65/day',
            bundleLink: 'equipment-details.html?id=simpson-washer',
            featuredTool: {
                name: 'Simpson MegaShot 3200 PSI Washer',
                image: 'https://i.pinimg.com/736x/82/bb/30/82bb30f022deab8d59e8ddfe61d0a4d2.jpg',
                dailyRate: 65,
                stock: 'In Stock',
                link: 'equipment-details.html?id=simpson-washer'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    A commercial 3,200 PSI gas pressure washer has enough kinetic power to strip 20-year-old motor oil off driveway concrete—and enough velocity to permanently etch softwood decking or blast water behind vinyl home siding. Choosing the exact nozzle degree and distance is the difference between a pristine exterior and thousands of dollars in property damage.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    Concrete Driveways, Sidewalks & Pavers (2,800 – 3,500 PSI)
                </h3>
                <p>
                    Poured concrete and aggregate surfaces have dense compressive strength that tolerates maximum mechanical pressure. For driveways, using a single standard spray wand creates visible "zebra striping." Instead, attach ToolHub's 15-inch rotating dual-nozzle surface cleaner to float evenly across the slab, cleaning a 15-inch path in a single sweep while trapping spray under the deck skirt.
                </p>

                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">NOZZLE COLOR CHEAT SHEET:</strong>
                    <ul class="space-y-1">
                        <li><span class="font-bold text-red-500">Red 0°:</span> Pinpoint cutting laser. DO NOT use on wood or siding; only for baked metal and rock.</li>
                        <li><span class="font-bold text-amber-500">Yellow 15°:</span> Heavy stripping for concrete, masonry paint prep, and grease.</li>
                        <li><span class="font-bold text-emerald-500">Green 25°:</span> All-around general cleaning for driveways, brick walls, and patio pavers.</li>
                        <li><span class="font-bold text-sky-400">White 40°:</span> Gentle wide wash safe for stucco, aluminum trim, and composite decking.</li>
                    </ul>
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    Vinyl Siding, Cedar Shingles & Wood Decks (1,200 – 1,600 PSI)
                </h3>
                <p>
                    Never hit vinyl siding with more than 1,500 PSI or hold the wand closer than 18 inches. Directing high-pressure spray upwards can force water into the weep holes behind siding panels, soaking fiberglass insulation and causing hidden mold growth. Always spray downward or horizontally using the white 40° nozzle or black low-pressure soap tip.
                </p>
            `
        },

        'chainsaw-safety': {
            id: 'chainsaw-safety',
            category: 'FORESTRY & ARBORIST SAFETY',
            title: 'Chainsaw Kickback Safety: How to Properly Hold & Prime a Gas Saw',
            readTime: '7 Min Read',
            date: 'September 2026',
            author: {
                name: 'Samantha Wright',
                role: 'Certified Arborist & Safety Director',
                bio: 'ISA-certified arborist with 18 years in technical tree climbing, emergency storm recovery, and timber harvesting training programs.',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/a2/5d/bb/a25dbb444e394a705324e8a50ac4ac8c.jpg',
            toolsRequired: [
                'Husqvarna 450 Rancher 20" 50.2cc Gas Chainsaw',
                'Kevlar Ballistic Chain-Stopping Leg Chaps (OSHA 1910.266 Compliant)',
                'Forestry Safety Helmet with Mesh Face Shield & 25dB Earmuffs',
                'Leather Arborist Gloves with Vibration-Dampening Palms',
                'Pre-Mixed 50:1 Synthetic 2-Cycle Fuel & Bar Lubricant',
                'Scrench Tool for Quick Bar & Chain Tensioning'
            ],
            bundleRate: '$65/day',
            bundleLink: 'equipment-details.html?id=husqvarna-chainsaw',
            featuredTool: {
                name: 'Husqvarna 450 Rancher 20" Chainsaw',
                image: 'https://i.pinimg.com/1200x/7a/ef/4e/7aef4e2438063a26643ef6fc491d9172.jpg',
                dailyRate: 55,
                stock: 'In Stock',
                link: 'equipment-details.html?id=husqvarna-chainsaw'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    A gas chainsaw spinning at 9,000 RPM is the most productive tool for storm damage clearance—and the most unforgiving if you encounter kickback. Kickback occurs in under one-tenth of a second when the upper quadrant of the guide bar tip makes accidental contact with wood or hidden metal.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    Understanding the "Kickback Danger Zone"
                </h3>
                <p>
                    The top tip of the guide bar is designated as the Kickback Zone. When the teeth at this quadrant contact timber, the chain instantly arrests, transferring all kinetic rotational energy backward and upward directly toward the operator's head and chest.
                </p>
                <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 my-4 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <strong class="font-bold text-amber-500 block mb-1">THE "THUMB-WRAP" GOLD RULE:</strong>
                    Always wrap your left thumb completely underneath the front handlebar—never hold it alongside your fingers. If kickback occurs, an opposed thumb physically prevents the saw from jumping out of your grip, instantly activating the inertia-activated front hand brake guard.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    Proper 5-Step Ground-Starting Procedure
                </h3>
                <p>
                    Never "drop-start" a chainsaw by holding the rear handle in one hand and pulling the starter cord with the other. This creates wild tip swing. Instead:
                </p>
                <ol class="list-decimal pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>Push the front hand guard forward to engage the chain brake.</li>
                    <li>Place the saw flat on level ground, free from twigs and gravel.</li>
                    <li>Step the toe of your right boot through the rear handle loop to pin the saw firmly to the earth.</li>
                    <li>Grip the front handlebar with your locked left arm.</li>
                    <li>Pull the recoil starter cord briskly straight upward until the engine pops, then switch choke to half and start.</li>
                </ol>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
                    Checking Bar Lubrication & Chain Sag
                </h3>
                <p>
                    Before every session, check chain sag: pull the chain downward at the center of the bar. The drive links should not leave the bar groove, but the chain must move smoothly by hand when the brake is disengaged. Aim the bar tip at a clean piece of cardboard and rev the engine—a fine mist of bar oil should spray out within 3 seconds, confirming oil port flow.
                </p>
            `
        },

        'mini-excavator': {
            id: 'mini-excavator',
            category: 'EARTHMOVING & HEAVY FLEET',
            title: 'Can You Rent a Mini Excavator Without a Commercial License?',
            readTime: '6 Min Read',
            date: 'August 2026',
            author: {
                name: 'Elena Vance',
                role: 'Fleet Operations & Regulatory Compliance Lead',
                bio: 'Former DOT safety auditor and heavy machinery logistics coordinator managing ToolHub’s regional commercial machinery distribution.',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/85/bf/4d/85bf4d72eb5444d1d1001e5537aa95aa.jpg',
            toolsRequired: [
                'Caterpillar 302.7 CR Compact Hydraulic Mini Excavator',
                '18-Inch Toothed Trenching Bucket & Hydraulic Thumb Clamp',
                'Dual-Axle Heavy Towing Trailer with Electric Brake Controller',
                'ANSI Class 3 High-Visibility Safety Vest & Hard Hat',
                '811 Call-Before-You-Dig Approved Utility Clearance Permit'
            ],
            bundleRate: '$275/day',
            bundleLink: 'equipment-details.html?id=cat-excavator',
            featuredTool: {
                name: 'Caterpillar 302.7 CR Mini Excavator',
                image: 'assets/images/cat-excavator.jpg',
                dailyRate: 275,
                stock: 'Available at Depot',
                link: 'equipment-details.html?id=cat-excavator'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    The short answer is <strong>yes</strong>: in most jurisdictions across North America, private homeowners and independent contractors do NOT need a Commercial Driver's License (CDL) or special operator certificate to rent and operate a compact mini excavator under 10,000 lbs on private residential property. However, operating safely and legally requires adherence to strict towing laws, underground utility locates, and jobsite safety rules.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    The 811 Call-Before-You-Dig Legal Mandate
                </h3>
                <p>
                    Regardless of your licensing status, digging into an unmarked high-voltage power line, fiber-optic conduit, or natural gas main carries catastrophic civil and criminal liability. State and federal law mandates calling 811 (or filing a digital ticket online) at least 48 to 72 business hours prior to breaking ground.
                </p>
                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">MANDATORY TOLERANCE ZONE:</strong>
                    Utility companies will mark conduits with colored spray paint and flags. Within 18 to 24 inches of any marked line (the "tolerance zone"), machine digging is strictly prohibited—you must carefully expose utilities by hand shoveling or hydro-excavation.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    Towing Weight vs. Depot Yard Jobsite Delivery
                </h3>
                <p>
                    While you do not need a CDL to operate the mini excavator on your lot, you DO need an appropriately rated vehicle to tow it. A 6,000 lb excavator plus a 2,500 lb dual-axle trailer exceeds 8,500 lbs total gross trailer weight (GTW). Standard half-ton pickups (F-150, Silverado 1500) must be equipped with a Class IV receiver hitch, electronic trailer brake controller, and 7-pin round wiring harness.
                </p>
                <p>
                    If your personal vehicle lacks the certified towing capacity, ToolHub offers direct flatbed jobsite delivery and pickup, unloading the machinery directly onto your driveway.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
                    Mastering ISO vs. SAE Joystick Controls
                </h3>
                <p>
                    Modern excavators like Caterpillar allow instant switching between ISO pattern (excavator standard) and SAE pattern (backhoe standard) via a rotary valve under the operator seat. Always take 15 minutes in an open, flat area to practice feathering the proportional hydraulics, tracks, and bucket curl before trenching near structures.
                </p>
            `
        },

        'paint-sprayer': {
            id: 'paint-sprayer',
            category: 'PAINTING & SURFACE FINISHING',
            title: 'Airless Paint Sprayer Masterclass: Tip Sizing, Pressure & Thinning',
            readTime: '6 Min Read',
            date: 'August 2026',
            author: {
                name: 'Jack Callahan',
                role: 'Commercial Paint Finishing Specialist',
                bio: 'Veteran architectural coatings specialist with experience applying elastomeric, epoxy, and interior latex coatings on luxury residential and commercial projects.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/bc/96/f8/bc96f8d8cf437803cbb9cebfaa6fdd7d.jpg',
            toolsRequired: [
                'Graco Magnum X7 Cart Airless Paint Sprayer',
                'Reverse-A-Clean RAC IV 515 (Walls) & 311 (Cabinets) SwitchTips',
                '50-Foot DuraFlex High-Pressure Paint Hose',
                'Pump Armor Storage & Anti-Corrosion Cleaning Fluid',
                'Fine-Mesh 5-Gallon Paint Strainer Bags',
                'Dual-Cartridge Organic Vapor Paint Respirator Mask'
            ],
            bundleRate: '$58/day',
            bundleLink: 'equipment-details.html?id=graco-sprayer',
            featuredTool: {
                name: 'Graco Magnum X7 Airless Sprayer',
                image: 'https://i.pinimg.com/1200x/bc/96/f8/bc96f8d8cf437803cbb9cebfaa6fdd7d.jpg',
                dailyRate: 58,
                stock: 'In Stock',
                link: 'equipment-details.html?id=graco-sprayer'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    An airless paint sprayer pumps coatings at hydraulic pressures up to 3,000 PSI, forcing paint through a micro-orifice to atomize it into an ultra-fine fan. When calibrated correctly, you can coat a 2,000 sq ft home exterior or finish 30 cabinet doors in a single afternoon with zero roller stipple or brush marks.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    Decoding the 3-Digit Tip Sizing Code
                </h3>
                <p>
                    Spray tips are stamped with a 3-digit number (such as <strong>515</strong> or <strong>311</strong>). Understanding this code is fundamental to avoiding excessive overspray or dry fall:
                </p>
                <ul class="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li><strong>First Digit (Fan Width):</strong> Multiply by 2 to get fan width at 12 inches from surface. A <strong>5</strong> gives a 10-inch spray fan (ideal for broad exterior walls). A <strong>3</strong> gives a 6-inch fan (ideal for trim, shutters, and doors).</li>
                    <li><strong>Last Two Digits (Orifice Size):</strong> Represents diameter in thousandths of an inch. A <strong>15</strong> is .015" (medium viscosity interior/exterior latex). An <strong>11</strong> is .011" (thin stains, lacquers, and sealers). A <strong>19</strong> or <strong>21</strong> is needed for thick elastomerics and heavy exterior primers.</li>
                </ul>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    The 50% Overlap Technique & Trigger Discipline
                </h3>
                <p>
                    Always keep the spray gun exactly 12 inches from the wall, perpendicular to the surface. Sweeping your arm in an arc results in thick paint in the center and razor-thin fog at the edges. Maintain a steady parallel stroke and overlap each pass by exactly 50%.
                </p>
                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">TRIGGER SEQUENCE RULE:</strong>
                    Start moving your arm BEFORE pulling the trigger, and release the trigger BEFORE your arm stops moving. Squeezing the trigger on a stationary gun creates an instant heavy paint puddle that will sag and drip.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">3</span>
                    End-of-Day Flushing & Pump Armor Protection
                </h3>
                <p>
                    Never let latex paint sit in an airless pump overnight. ToolHub units include a PowerFlush garden hose adapter: flush with clean water until the discharge runs crystal clear, then draw 4 oz of Graco Pump Armor through the fluid section to lubricate the piston seals and prevent flash rusting.
                </p>
            `
        },

        'scaffolding-ladder': {
            id: 'scaffolding-ladder',
            category: 'ACCESS & ELEVATED WORKING',
            title: 'Scaffolding vs Extension Ladders: Safety Rules for 2-Story Renovations',
            readTime: '8 Min Read',
            date: 'September 2026',
            author: {
                name: 'Samantha Wright',
                role: 'OSHA Elevated Access Inspector',
                bio: 'Certified workplace safety inspector and height-access compliance educator with 16 years inspecting commercial construction scaffolding and aerial equipment.',
                avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/e7/68/0e/e7680e5a31a6e68621e1fbb1d7e63040.jpg',
            toolsRequired: [
                'Werner 24ft Type IA 300-lb Fiberglass Extension Ladder',
                '6ft Baker Style Rolling Scaffold Tower with Locking Casters',
                'Full Perimeter Safety Guardrail Kit with Toeboards',
                'Roof Gutter Standoff & Wall Stabilizer Bracket',
                'ANSI Certified Fall Arrest Harness & Lanyard'
            ],
            bundleRate: '$65/day',
            bundleLink: 'equipment-details.html?id=werner-ladder',
            featuredTool: {
                name: 'Werner 24ft Extension Ladder',
                image: 'https://i.pinimg.com/1200x/18/63/23/186323f26e8fc3d68101db25ac6c6d19.jpg',
                dailyRate: 32,
                stock: 'In Stock',
                link: 'equipment-details.html?id=werner-ladder'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    Falls from height remain the leading cause of severe jobsite injuries. Choosing between an extension ladder and a mobile rolling scaffold tower depends on three critical factors: duration of work, need for two hands, and lateral reach requirements.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    When to Choose Scaffolding Over an Extension Ladder
                </h3>
                <p>
                    If a task requires working in one spot for more than 15 minutes (such as hanging drywall, taping joints, installing drop ceilings, or detailed trim carpentry), ladders cause severe leg fatigue and encourage dangerous "over-reaching."
                </p>
                <p>
                    A 6ft or 12ft Baker scaffolding tower provides a wide 73" x 29" flat steel-banded deck. It allows workers to keep power tools, paint buckets, and fasteners right beside them, moving both hands freely within the perimeter guardrails.
                </p>

                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">THE 4:1 LADDER ANGLE RULE:</strong>
                    When erecting an extension ladder, set the base 1 foot out from the wall for every 4 feet of vertical working height to the top support point. The top of the ladder must extend at least 3 feet above the roofline for safe stepping transition.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    The 3-Point Contact Rule on Extension Ladders
                </h3>
                <p>
                    When climbing an extension ladder, maintain three points of contact at all times (two hands and one foot, or two feet and one hand). Never carry heavy tools or paint buckets up the rungs—use a tool belt, or pull supplies up with a handline once secure. Always ensure the dual-action swivel safety shoes are dug firmly into soil or locked flat on firm pavement.
                </p>
            `
        },

        'rototiller-prep': {
            id: 'rototiller-prep',
            category: 'LAWN & LANDSCAPING PREP',
            title: 'Rear-Tine Tiller vs Front-Tine Cultivator: Breaking Hardpack Clay Soil',
            readTime: '5 Min Read',
            date: 'September 2026',
            author: {
                name: 'David Chen',
                role: 'Master Groundskeeper & Soil Cultivation Specialist',
                bio: 'Commercial turf manager and landscaping contractor specializing in soil amendment, seedbed preparation, and sod installation.',
                avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85'
            },
            heroImage: 'https://i.pinimg.com/1200x/41/b0/d7/41b0d74cf69f8c03143bef0b559acf19.jpg',
            toolsRequired: [
                'Honda Commercial GX160 Mid-Tine Gas Garden Rototiller',
                'Forged Steel Bolo Tine Set with Depth Drag Stake',
                'Soil pH, Moisture & Compaction Digital Test Probe',
                'Heavy-Duty Aluminum Loading Ramps for Truck Beds',
                'Steel-Toe Landscaping Boots & Safety Glasses'
            ],
            bundleRate: '$62/day',
            bundleLink: 'equipment-details.html?id=honda-tiller',
            featuredTool: {
                name: 'Honda Mid-Tine Gas Rototiller',
                image: 'https://i.pinimg.com/1200x/0e/aa/80/0eaa80aef6e0bfbd5e5b3654fc799290.jpg',
                dailyRate: 62,
                stock: 'In Stock',
                link: 'equipment-details.html?id=honda-tiller'
            },
            contentHtml: `
                <p class="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">
                    Whether you are establishing a new vegetable garden or re-grading a lawn following heavy construction, breaking virgin hardpack clay requires the right mechanical tilling action. Choosing the wrong machine can lead to transmission strain, bouncing handles, and uneven seedbeds.
                </p>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">1</span>
                    Front-Tine vs Mid-Tine vs Rear-Tine: When to Use Each
                </h3>
                <p>
                    <strong>Front-tine cultivators</strong> use the rotating tines to pull the machine forward. They are lightweight and maneuverable, perfect for weeding established raised beds and blending compost into pre-loosened garden soil. However, on hard-baked unworked ground, front tines will "walk" across the hard crust rather than digging down.
                </p>
                <p>
                    <strong>Mid-tine & rear-tine rototillers</strong> place heavy commercial engines (like Honda's GX160) directly over the tine shaft. This downward center of gravity drives heavy bolo tines up to 8 inches deep into hard clay, sod, and rooted soil without bucking.
                </p>

                <div class="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border-l-4 border-amber-500 my-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <strong class="font-bold text-slate-900 dark:text-white block mb-1">THE "SOIL MOISTURE" SQUEEZE TEST:</strong>
                    Never till bone-dry or soaking-wet soil. Squeeze a fistful of soil into a ball: if it drips water, it is too wet and tilling will create rock-hard clay bricks. If it crumbles into powder, it is too dry. It should hold its shape, then break apart gently when poked with a thumb.
                </div>

                <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white pt-4 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black">2</span>
                    The Multi-Pass Cross-Hatch Tilling Method
                </h3>
                <p>
                    Do not attempt to till 8 inches deep on your first pass. Set the rear drag stake to 2 to 3 inches deep and make your first pass across the plot in parallel north-south rows.
                </p>
                <p>
                    Lower the drag stake to full 6-8 inch depth and make your second pass perpendicular (east-west). This cross-hatch pattern breaks up clumps, eliminates compaction layers, and leaves an aerated, silky seedbed ready for organic compost and turf seed.
                </p>
            `
        }
    };
})();
