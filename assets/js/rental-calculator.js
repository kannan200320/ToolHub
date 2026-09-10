/**
 * ToolHub - Dynamic Rental & Security Deposit Calculator
 * Computes multi-day rental rates, damage waivers, deposit escrow, accessories, and delivery fees in real time.
 */

(function () {
    'use strict';

    window.RentalCalculator = {
        baseDailyRate: 45,
        baseWeeklyRate: 220,
        baseDeposit: 150,
        taxRate: 0.08,

        init: function (config = {}) {
            this.baseDailyRate = config.dailyRate || this.baseDailyRate;
            this.baseWeeklyRate = config.weeklyRate || this.baseWeeklyRate;
            this.baseDeposit = config.deposit || this.baseDeposit;

            this.pickupInput = document.getElementById('rental-pickup-date');
            this.returnInput = document.getElementById('rental-return-date');
            this.waiverCheckbox = document.getElementById('rental-waiver-toggle');
            this.deliveryRadios = document.querySelectorAll('input[name="rental-fulfillment"]');
            this.accessoryCheckboxes = document.querySelectorAll('.rental-addon-checkbox');

            // Summary display elements
            this.daysDisplay = document.getElementById('calc-total-days');
            this.dailyRateDisplay = document.getElementById('calc-daily-rate');
            this.rentalCostDisplay = document.getElementById('calc-rental-cost');
            this.waiverCostDisplay = document.getElementById('calc-waiver-cost');
            this.deliveryCostDisplay = document.getElementById('calc-delivery-cost');
            this.accessoriesCostDisplay = document.getElementById('calc-accessories-cost');
            this.taxDisplay = document.getElementById('calc-tax-cost');
            this.depositDisplay = document.getElementById('calc-deposit-cost');
            this.grandTotalDisplay = document.getElementById('calc-grand-total');

            this.setupDefaults();
            this.bindEvents();
            this.calculate();
        },

        setupDefaults: function () {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const threeDays = new Date(today);
            threeDays.setDate(today.getDate() + 3);

            const formatDate = (date) => date.toISOString().split('T')[0];

            if (this.pickupInput && !this.pickupInput.value) {
                this.pickupInput.value = formatDate(tomorrow);
                this.pickupInput.min = formatDate(today);
            }
            if (this.returnInput && !this.returnInput.value) {
                this.returnInput.value = formatDate(threeDays);
                this.returnInput.min = formatDate(tomorrow);
            }
        },

        bindEvents: function () {
            if (this.pickupInput) {
                this.pickupInput.addEventListener('change', () => {
                    if (this.returnInput) {
                        this.returnInput.min = this.pickupInput.value;
                        if (new Date(this.returnInput.value) <= new Date(this.pickupInput.value)) {
                            const newReturn = new Date(this.pickupInput.value);
                            newReturn.setDate(newReturn.getDate() + 1);
                            this.returnInput.value = newReturn.toISOString().split('T')[0];
                        }
                    }
                    this.calculate();
                });
            }

            if (this.returnInput) {
                this.returnInput.addEventListener('change', () => this.calculate());
            }

            if (this.waiverCheckbox) {
                this.waiverCheckbox.addEventListener('change', () => this.calculate());
            }

            this.deliveryRadios.forEach(r => {
                r.addEventListener('change', () => this.calculate());
            });

            this.accessoryCheckboxes.forEach(c => {
                c.addEventListener('change', () => this.calculate());
            });

            const addonsContainer = document.getElementById('equipment-addons-container');
            if (addonsContainer) {
                addonsContainer.addEventListener('change', () => this.calculate());
            }

            // Quick Book Button
            const bookBtn = document.getElementById('calc-submit-booking-btn');
            if (bookBtn) {
                bookBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleBookingSubmit();
                });
            }
        },

        calculate: function () {
            if (!this.pickupInput || !this.returnInput) return;

            const pDate = new Date(this.pickupInput.value);
            const rDate = new Date(this.returnInput.value);

            let diffTime = rDate.getTime() - pDate.getTime();
            let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (isNaN(days) || days < 1) days = 1;

            // Tiered pricing calculation
            let rentalCost = 0;
            if (days >= 7) {
                const weeks = Math.floor(days / 7);
                const extraDays = days % 7;
                rentalCost = (weeks * this.baseWeeklyRate) + (extraDays * (this.baseDailyRate * 0.85));
            } else if (days >= 3) {
                // 3-6 days gets 10% daily discount
                rentalCost = days * (this.baseDailyRate * 0.90);
            } else {
                rentalCost = days * this.baseDailyRate;
            }

            // Damage waiver: $8 per day if checked
            const hasWaiver = this.waiverCheckbox ? this.waiverCheckbox.checked : false;
            const waiverCost = hasWaiver ? (days * 8) : 0;

            // Delivery cost
            let deliveryCost = 0;
            const selectedDelivery = document.querySelector('input[name="rental-fulfillment"]:checked');
            if (selectedDelivery && selectedDelivery.value === 'delivery') {
                deliveryCost = 35;
            }

            // Accessories add-ons
            let accessoriesCost = 0;
            const currentAddons = document.querySelectorAll('.rental-addon-checkbox');
            currentAddons.forEach(cb => {
                if (cb.checked) {
                    accessoriesCost += parseFloat(cb.getAttribute('data-price') || 0);
                }
            });

            const taxableSubtotal = rentalCost + waiverCost + deliveryCost + accessoriesCost;
            const taxAmount = taxableSubtotal * this.taxRate;
            const depositAmount = this.baseDeposit;
            const grandTotal = taxableSubtotal + taxAmount + depositAmount;

            // Update DOM displays
            if (this.daysDisplay) this.daysDisplay.textContent = `${days} Day${days > 1 ? 's' : ''}`;
            if (this.dailyRateDisplay) this.dailyRateDisplay.textContent = `$${this.baseDailyRate}/day`;
            if (this.rentalCostDisplay) this.rentalCostDisplay.textContent = `$${rentalCost.toFixed(2)}`;
            if (this.waiverCostDisplay) this.waiverCostDisplay.textContent = `$${waiverCost.toFixed(2)}`;
            if (this.deliveryCostDisplay) this.deliveryCostDisplay.textContent = `$${deliveryCost.toFixed(2)}`;
            if (this.accessoriesCostDisplay) this.accessoriesCostDisplay.textContent = `$${accessoriesCost.toFixed(2)}`;
            if (this.taxDisplay) this.taxDisplay.textContent = `$${taxAmount.toFixed(2)}`;
            if (this.depositDisplay) this.depositDisplay.textContent = `$${depositAmount.toFixed(2)}`;
            if (this.grandTotalDisplay) this.grandTotalDisplay.textContent = `$${grandTotal.toFixed(2)}`;

            return {
                days,
                rentalCost,
                waiverCost,
                deliveryCost,
                accessoriesCost,
                taxAmount,
                depositAmount,
                grandTotal
            };
        },

        handleBookingSubmit: function () {
            const data = this.calculate();
            const toolName = document.getElementById('equipment-title')?.textContent || 'Heavy Duty Equipment';
            const toolImage = document.getElementById('main-preview-image')?.getAttribute('src') || 
                'assets/images/cat-excavator.jpg';

            const urlParams = new URLSearchParams(window.location.search);
            const toolId = urlParams.get('id') || 'dewalt-drill';
            const db = window.ToolHubEquipmentDB || {};
            const tool = db[toolId] || {};

            const cartItem = {
                id: tool.cartId || ('TL-' + Math.floor(100 + Math.random() * 900)),
                slug: toolId,
                name: (tool.shortTitle || tool.title || toolName).trim(),
                category: tool.category || 'Machinery Fleet',
                image: tool.mainImage || toolImage,
                dailyRate: this.baseDailyRate,
                deposit: this.baseDeposit,
                days: data.days || 2
            };

            if (window.ToolHub) {
                window.ToolHub.addToCart(cartItem);
            } else {
                let currentCart = [];
                try {
                    currentCart = JSON.parse(localStorage.getItem('toolhub_cart') || '[]');
                } catch (e) {}
                currentCart.push(cartItem);
                localStorage.setItem('toolhub_cart', JSON.stringify(currentCart));
            }

            // Redirect directly to the dedicated cart page
            window.location.href = 'cart.html';
        }
    };
})();
