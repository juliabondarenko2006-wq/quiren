/* ==========================================================================
   QUIREN — main.js
   Mobile nav, format switcher, scroll reveal, demo forms, toasts.
   Vanilla, no dependencies. There is no backend behind this template.
   ========================================================================== */

(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function toast(message) {
    var host = $('.toasts');
    if (!host) return;
    var node = document.createElement('div');
    node.className = 'toast';
    node.setAttribute('role', 'status');
    node.textContent = message;
    host.appendChild(node);
    setTimeout(function () {
      node.style.transition = 'opacity 220ms';
      node.style.opacity = '0';
      setTimeout(function () { node.remove(); }, 240);
    }, 2400);
  }

  function initNav() {
    var burger = $('.burger');
    var nav = $('.booknav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      var open = nav.dataset.open === 'true';
      nav.dataset.open = String(!open);
      burger.setAttribute('aria-expanded', String(!open));
    });
  }

  /* Format chips on the hero — switching one updates the buy button's label
     and the price shown beside it. Purely presentational; no cart here. */
  function initFormats() {
    var chips = $$('.formatchip[data-format]');
    if (!chips.length) return;
    var priceNode = $('[data-format-price]');
    var buyNode = $('[data-format-buy]');

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.toggle('formatchip--on', c === chip); });
        if (priceNode) priceNode.textContent = chip.dataset.price;
        if (buyNode) buyNode.textContent = 'Buy the ' + chip.dataset.format;
      });
    });
  }

  function initReveal() {
    var targets = $$('[data-reveal]');
    if (!targets.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.dataset.shown = 'true'; });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.dataset.shown = 'true';
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (t) { io.observe(t); });
  }

  function initForms() {
    $$('form[data-demo-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        toast(form.dataset.demoForm);
        form.reset();
      });
    });
    $$('[data-toast]').forEach(function (btn) {
      btn.addEventListener('click', function () { toast(btn.dataset.toast); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initFormats();
    initReveal();
    initForms();
  });

  window.Quiren = { toast: toast };
})();
