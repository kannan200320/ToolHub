/**
 * ToolHub - Dashboard Core Script
 * Powers equipment availability calendar, rental order status management, and printable invoice generator.
 */

(function () {
    'use strict';

    window.DashboardApp = {
        init: function () {
            this.initAvailabilityCalendar();
            this.initInvoiceModal();
            this.initRentalActions();
            this.initSidebarToggle();
            this.initProfileSettings();
        },

        // Responsive Dashboard Sidebar Toggle
        initSidebarToggle: function () {
            const toggleBtn = document.getElementById('dashboard-sidebar-toggle');
            const sidebar = document.getElementById('dashboard-sidebar');
            const backdrop = document.getElementById('dashboard-sidebar-backdrop');
            const closeBtn = document.getElementById('dashboard-sidebar-close');

            if (!sidebar) return;

            let savedScrollY = 0;

            const openSidebar = () => {
                savedScrollY = window.scrollY || window.pageYOffset || 0;
                sidebar.classList.remove('-translate-x-full');
                if (backdrop) {
                    backdrop.classList.remove('hidden');
                    backdrop.style.opacity = '1';
                }
                document.body.style.position = 'fixed';
                document.body.style.top = `-${savedScrollY}px`;
                document.body.style.width = '100%';
                document.body.classList.add('overflow-hidden');
            };

            const closeSidebar = () => {
                sidebar.classList.add('-translate-x-full');
                if (backdrop) backdrop.classList.add('hidden');
                const currentTop = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.classList.remove('overflow-hidden');
                const restoreY = currentTop ? Math.abs(parseInt(currentTop, 10)) : savedScrollY;
                window.scrollTo(0, restoreY);
            };

            if (toggleBtn) {
                toggleBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (sidebar.classList.contains('-translate-x-full')) {
                        openSidebar();
                    } else {
                        closeSidebar();
                    }
                });
            }

            if (backdrop) backdrop.addEventListener('click', closeSidebar);
            if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

            // Close sidebar when clicking any navigation link on mobile
            sidebar.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth < 1024) {
                        closeSidebar();
                    }
                });
            });
        },

        // Equipment Availability Date Matrix
        initAvailabilityCalendar: function () {
            const calendarGrid = document.getElementById('availability-calendar-grid');
            const monthHeader = document.getElementById('calendar-current-month');
            if (!calendarGrid) return;

            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            if (monthHeader) {
                monthHeader.textContent = `${monthNames[month]} ${year}`;
            }

            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDayIndex = new Date(year, month, 1).getDay();

            calendarGrid.innerHTML = '';

            // Blank days before first day of month
            for (let i = 0; i < firstDayIndex; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.className = 'p-1.5 sm:p-3 bg-neutral-50 dark:bg-neutral-950/40 rounded-xl min-h-[64px] sm:min-h-[90px] border border-neutral-200 dark:border-neutral-800 opacity-40';
                calendarGrid.appendChild(emptyCell);
            }

            // Real Days
            for (let day = 1; day <= daysInMonth; day++) {
                const dayCell = document.createElement('div');
                const isToday = day === now.getDate();
                
                // Sample availability status
                let statusBadge = '';
                let statusBg = 'bg-white dark:bg-neutral-900';

                if (day % 7 === 2 || day % 7 === 5) {
                    // High demand / Booked
                    statusBadge = '<span class="text-[9px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 block mt-1 truncate text-center sm:text-left"><span class="hidden sm:inline">2 Units Left</span><span class="sm:hidden">2 Left</span></span>';
                } else if (day % 4 === 0) {
                    statusBadge = '<span class="text-[9px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 block mt-1 truncate text-center sm:text-left"><span class="hidden sm:inline">Limited</span><span class="sm:hidden">Ltd</span></span>';
                } else {
                    statusBadge = '<span class="text-[9px] sm:text-[10px] font-bold px-1 sm:px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 block mt-1 truncate text-center sm:text-left"><span class="hidden sm:inline">12 Available</span><span class="sm:hidden">12 Avail</span></span>';
                }

                dayCell.className = `p-1.5 sm:p-3 rounded-xl min-h-[64px] sm:min-h-[90px] border ${isToday ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-sm' : 'border-neutral-200 dark:border-neutral-800'} ${statusBg} transition hover:border-amber-400 cursor-pointer flex flex-col justify-between`;
                
                dayCell.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="text-xs sm:text-sm font-bold ${isToday ? 'text-amber-500 font-extrabold' : 'text-neutral-800 dark:text-neutral-200'}">${day}</span>
                        ${isToday ? '<span class="text-[8px] sm:text-[10px] bg-amber-500 text-neutral-950 font-black px-1 sm:px-1.5 py-0.2 rounded">Today</span>' : ''}
                    </div>
                    <div class="mt-1 sm:mt-2">
                        ${statusBadge}
                    </div>
                `;

                dayCell.addEventListener('click', () => {
                    if (window.ToolHub) {
                        window.ToolHub.showToast(`Selected date: ${monthNames[month]} ${day}, ${year}. 12 tools available for booking.`, 'info');
                    }
                });

                calendarGrid.appendChild(dayCell);
            }
        },

        // Printable Invoice Modal
        initInvoiceModal: function () {
            const viewBtns = document.querySelectorAll('[data-view-invoice]');
            const modal = document.getElementById('invoice-detail-modal');
            const backdrop = document.getElementById('invoice-modal-backdrop');
            const closeBtn = document.getElementById('close-invoice-modal-btn');
            const printBtn = document.getElementById('print-invoice-btn');

            if (!modal) return;

            const invoiceDb = {
                'INV-2026-8841': {
                    id: 'INV-2026-8841',
                    date: 'Date: Aug 30, 2026',
                    item: 'DeWalt D24000S 10-Inch Wet Tile Saw with Stand',
                    serial: 'Serial #TL-DEW-882 · Clean return confirmed',
                    duration: '2 Days',
                    rate: '$75.00',
                    itemAmount: '$150.00',
                    waiverDuration: '2 Days',
                    waiverRate: '$8.00',
                    waiverAmount: '$16.00',
                    depot: 'Depot: Central Downtown Logistics Hub<br>Check-in Tech: Inspector ID #504',
                    depositDesc: 'Returned clean. Pre-authorization hold of $150.00 voided on Aug 30, 2026.',
                    depositAmount: '$150.00 Refunded',
                    subtotal: '$166.00',
                    tax: '$13.28',
                    total: '$179.28'
                },
                'INV-2026-8712': {
                    id: 'INV-2026-8712',
                    date: 'Date: Aug 12, 2026',
                    item: 'Simpson MegaShot 3200 PSI 2.5 GPM Gas Pressure Washer',
                    serial: 'Serial #PW-SIM-410 · Clean return confirmed',
                    duration: '1 Day',
                    rate: '$55.00',
                    itemAmount: '$55.00',
                    waiverDuration: '1 Day',
                    waiverRate: '$10.00',
                    waiverAmount: '$10.00',
                    depot: 'Depot: Downtown Central Hub<br>Check-in Tech: Inspector ID #312',
                    depositDesc: 'Returned clean. Pre-authorization hold of $100.00 voided on Aug 12, 2026.',
                    depositAmount: '$100.00 Refunded',
                    subtotal: '$65.00',
                    tax: '$5.20',
                    total: '$70.20'
                },
                'INV-2026-8420': {
                    id: 'INV-2026-8420',
                    date: 'Date: Jul 22, 2026',
                    item: '6ft Baker Rolling Scaffold Tower with Guardrails',
                    serial: 'Serial #SC-BKR-119 · Inspected & signed off',
                    duration: '3 Days',
                    rate: '$40.00',
                    itemAmount: '$120.00',
                    waiverDuration: '3 Days',
                    waiverRate: '$5.00',
                    waiverAmount: '$15.00',
                    depot: 'Depot: North Bay Depot<br>Check-in Tech: Inspector ID #119',
                    depositDesc: 'Returned clean. Pre-authorization hold of $100.00 voided on Jul 22, 2026.',
                    depositAmount: '$100.00 Refunded',
                    subtotal: '$135.00',
                    tax: '$10.80',
                    total: '$145.80'
                },
                'INV-2026-8190': {
                    id: 'INV-2026-8190',
                    date: 'Date: Jun 16, 2026',
                    item: 'Bosch 1-9/16" SDS-Max Rotary Hammer with 4 Chisels',
                    serial: 'Serial #RH-BOS-771 · Complete bit set verified',
                    duration: '2 Days',
                    rate: '$52.00',
                    itemAmount: '$104.00',
                    waiverDuration: '2 Days',
                    waiverRate: '$7.40',
                    waiverAmount: '$14.80',
                    depot: 'Depot: Downtown Central Hub<br>Check-in Tech: Inspector ID #408',
                    depositDesc: 'Returned clean. Pre-authorization hold of $120.00 voided on Jun 16, 2026.',
                    depositAmount: '$120.00 Refunded',
                    subtotal: '$118.80',
                    tax: '$9.50',
                    total: '$128.30'
                },
                'INV-2026-7945': {
                    id: 'INV-2026-7945',
                    date: 'Date: May 28, 2026',
                    item: 'Honda EB10000 10kW Industrial Commercial Generator',
                    serial: 'Serial #GEN-HON-902 · Full tank returned & tested',
                    duration: '3 Days',
                    rate: '$72.00',
                    itemAmount: '$216.00',
                    waiverDuration: '3 Days',
                    waiverRate: '$9.00',
                    waiverAmount: '$27.00',
                    depot: 'Depot: Downtown Central Hub<br>Check-in Tech: Inspector ID #221',
                    depositDesc: 'Returned clean. Pre-authorization hold of $200.00 voided on May 28, 2026.',
                    depositAmount: '$200.00 Refunded',
                    subtotal: '$243.00',
                    tax: '$19.44',
                    total: '$262.44'
                }
            };

            const openModal = (invoiceId = 'INV-2026-8841') => {
                const data = invoiceDb[invoiceId] || invoiceDb['INV-2026-8841'];
                const idEl = document.getElementById('modal-invoice-id');
                const dateEl = document.getElementById('modal-invoice-date');
                const userEl = document.getElementById('modal-invoice-user');
                const emailEl = document.getElementById('modal-invoice-email');
                const depotEl = document.getElementById('modal-invoice-depot');
                const itemEl = document.getElementById('modal-item-name');
                const serialEl = document.getElementById('modal-item-serial');
                const itemDurEl = document.getElementById('modal-item-duration');
                const itemRateEl = document.getElementById('modal-item-rate');
                const itemAmtEl = document.getElementById('modal-item-amount');
                const wDurEl = document.getElementById('modal-waiver-duration');
                const wRateEl = document.getElementById('modal-waiver-rate');
                const wAmtEl = document.getElementById('modal-waiver-amount');
                const depDescEl = document.getElementById('modal-deposit-desc');
                const depAmtEl = document.getElementById('modal-deposit-amount');
                const subEl = document.getElementById('modal-subtotal');
                const taxEl = document.getElementById('modal-tax');
                const totEl = document.getElementById('modal-total');

                if (idEl) idEl.textContent = data.id;
                if (dateEl) dateEl.textContent = data.date;
                if (itemEl) itemEl.textContent = data.item;
                if (serialEl) serialEl.textContent = data.serial;
                if (itemDurEl) itemDurEl.textContent = data.duration;
                if (itemRateEl) itemRateEl.textContent = data.rate;
                if (itemAmtEl) itemAmtEl.textContent = data.itemAmount;
                if (wDurEl) wDurEl.textContent = data.waiverDuration;
                if (wRateEl) wRateEl.textContent = data.waiverRate;
                if (wAmtEl) wAmtEl.textContent = data.waiverAmount;
                if (depotEl) depotEl.innerHTML = data.depot;
                if (depDescEl) depDescEl.textContent = data.depositDesc;
                if (depAmtEl) depAmtEl.textContent = data.depositAmount;
                if (subEl) subEl.textContent = data.subtotal;
                if (taxEl) taxEl.textContent = data.tax;
                if (totEl) totEl.textContent = data.total;

                // Sync with current registered user if available
                const currentUser = (window.ToolHub && window.ToolHub.getUser) ? window.ToolHub.getUser() : null;
                if (currentUser) {
                    if (userEl && currentUser.name) userEl.textContent = currentUser.name;
                    if (emailEl && currentUser.email) {
                        emailEl.innerHTML = `124 Elm Street, Apt 4B<br>Chicago, IL 60614 · ${currentUser.email}`;
                    }
                }

                modal.classList.remove('hidden');
                modal.classList.add('flex');
                if (backdrop) backdrop.classList.remove('hidden');
            };

            const closeModal = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                if (backdrop) backdrop.classList.add('hidden');
            };

            viewBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const invoiceId = btn.getAttribute('data-invoice-id') || 'INV-2026-8841';
                    openModal(invoiceId);
                });
            });

            if (closeBtn) closeBtn.addEventListener('click', closeModal);
            if (backdrop) backdrop.addEventListener('click', closeModal);

            if (printBtn) {
                printBtn.addEventListener('click', () => {
                    window.print();
                });
            }
        },

        // Extend Rental / Return Actions
        initRentalActions: function () {
            const extendBtns = document.querySelectorAll('[data-action="extend-rental"]');
            const returnBtns = document.querySelectorAll('[data-action="initiate-return"]');

            extendBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const toolName = btn.getAttribute('data-tool-name') || 'Equipment';
                    if (window.ToolHub) {
                        window.ToolHub.showToast(`Extension request submitted for "${toolName}". Depot manager will confirm shortly.`, 'success');
                    }
                });
            });

            returnBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const toolName = btn.getAttribute('data-tool-name') || 'Equipment';
                    if (window.ToolHub) {
                        window.ToolHub.showToast(`Return inspection scheduled for "${toolName}". Security deposit will be refunded upon depot check-in.`, 'info');
                    }
                });
            });
        },

        // Profile Settings (Matching Image 2: Personal Details & Password Update)
        initProfileSettings: function () {
            const detailsForm = document.getElementById('profile-details-form');
            const passwordForm = document.getElementById('profile-password-form');
            const uploadBtn = document.getElementById('btn-upload-photo');
            const removeBtn = document.getElementById('btn-remove-photo');
            const photoInput = document.getElementById('profile-photo-input');
            const avatarImg = document.getElementById('profile-avatar-img');

            if (!detailsForm && !passwordForm) return;

            const currentUser = (window.ToolHub && window.ToolHub.getUser) ? window.ToolHub.getUser() : {
                name: 'kannanbala',
                email: 'navaneethakannan27@gmail.com',
                phone: '+1 (555) 964-2774',
                style: 'Vinyasa Flow',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
            };

            // Pre-fill inputs with registered user data
            const nameInput = document.getElementById('profile-name');
            const emailInput = document.getElementById('profile-email');
            const phoneInput = document.getElementById('profile-phone');
            const styleSelect = document.getElementById('profile-style');

            if (nameInput) nameInput.value = currentUser.name || '';
            if (emailInput) emailInput.value = currentUser.email || '';
            if (phoneInput) phoneInput.value = currentUser.phone || '+1 (555) 964-2774';
            if (styleSelect && currentUser.style) styleSelect.value = currentUser.style;
            if (avatarImg && currentUser.avatar) avatarImg.src = currentUser.avatar;

            // Upload Photo Trigger
            if (uploadBtn && photoInput) {
                uploadBtn.addEventListener('click', () => {
                    photoInput.click();
                });

                photoInput.addEventListener('change', (e) => {
                    const file = e.target.files && e.target.files[0];
                    if (!file) return;

                    if (file.size > 2 * 1024 * 1024) {
                        if (window.ToolHub) window.ToolHub.showToast('Photo size must be less than 2MB.', 'error');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = function (event) {
                        const dataUrl = event.target.result;
                        if (avatarImg) avatarImg.src = dataUrl;
                        currentUser.avatar = dataUrl;
                        if (window.ToolHub && window.ToolHub.saveUser) {
                            window.ToolHub.saveUser(currentUser);
                            window.ToolHub.showToast('Profile photo updated successfully!', 'success');
                        }
                    };
                    reader.readAsDataURL(file);
                });
            }

            // Remove Photo Trigger
            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    const defaultAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80';
                    if (avatarImg) avatarImg.src = defaultAvatar;
                    currentUser.avatar = defaultAvatar;
                    if (window.ToolHub && window.ToolHub.saveUser) {
                        window.ToolHub.saveUser(currentUser);
                        window.ToolHub.showToast('Profile photo reset to default.', 'info');
                    }
                });
            }

            // Save Changes (Personal Details Form)
            if (detailsForm) {
                detailsForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const newName = nameInput ? nameInput.value.trim() : '';
                    const newEmail = emailInput ? emailInput.value.trim() : '';
                    const newPhone = phoneInput ? phoneInput.value.trim() : '';
                    const newStyle = styleSelect ? styleSelect.value : '';

                    if (!newName || !newEmail) {
                        if (window.ToolHub) window.ToolHub.showToast('Full Name and Email Address are required.', 'error');
                        return;
                    }

                    const oldEmail = currentUser.email;
                    currentUser.name = newName;
                    currentUser.email = newEmail;
                    currentUser.phone = newPhone;
                    currentUser.style = newStyle;
                    currentUser.oldEmail = oldEmail;

                    if (window.ToolHub && window.ToolHub.saveUser) {
                        window.ToolHub.saveUser(currentUser);
                    }

                    if (window.ToolHub && window.ToolHub.showSuccessModal) {
                        window.ToolHub.showSuccessModal({
                            title: 'Profile Saved',
                            message: `Your personal details and member preferences have been updated successfully.`,
                            confirmText: 'Confirm'
                        });
                    } else if (window.ToolHub) {
                        window.ToolHub.showToast('Profile details updated successfully!', 'success');
                    }
                });
            }

            // Update Password Form
            if (passwordForm) {
                passwordForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const currentPass = document.getElementById('current-password');
                    const newPass = document.getElementById('new-password');
                    const confirmPass = document.getElementById('confirm-new-password');

                    const currVal = currentPass ? currentPass.value : '';
                    const newVal = newPass ? newPass.value : '';
                    const confVal = confirmPass ? confirmPass.value : '';

                    if (!newVal || newVal.length < 8) {
                        if (window.ToolHub) window.ToolHub.showToast('New password must be at least 8 characters.', 'error');
                        return;
                    }

                    if (newVal !== confVal) {
                        if (window.ToolHub) window.ToolHub.showToast('Confirm password does not match new password.', 'error');
                        return;
                    }

                    // Update in registered accounts
                    try {
                        const raw = localStorage.getItem('toolhub_registered_accounts');
                        if (raw) {
                            const accounts = JSON.parse(raw);
                            const idx = accounts.findIndex(a => a.email.toLowerCase() === currentUser.email.toLowerCase());
                            if (idx > -1) {
                                accounts[idx].password = newVal;
                                localStorage.setItem('toolhub_registered_accounts', JSON.stringify(accounts));
                            }
                        }
                    } catch (err) {}

                    if (currentPass) currentPass.value = '';
                    if (newPass) newPass.value = '';
                    if (confirmPass) confirmPass.value = '';

                    if (window.ToolHub && window.ToolHub.showSuccessModal) {
                        window.ToolHub.showSuccessModal({
                            title: 'Password Updated',
                            message: 'Your member account security password has been changed successfully. You can now use your new credentials to sign in.',
                            confirmText: 'Confirm'
                        });
                    } else if (window.ToolHub) {
                        window.ToolHub.showToast('Password updated successfully!', 'success');
                    }
                });
            }
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        window.DashboardApp.init();
    });
})();
