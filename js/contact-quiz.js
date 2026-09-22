(function () {
    "use strict";

    var CONTACT_ENDPOINT = "/api/contact";
    var WHATSAPP_NUMBER = "573193490741";

    var QUESTION_GROUPS = ["tamano", "necesidad", "presupuesto", "tiempo", "canal"];
    var QUESTION_LABELS = {
        tamano: "Tamaño de empresa",
        necesidad: "Qué necesita",
        presupuesto: "Presupuesto",
        tiempo: "Cuándo lo necesita",
        canal: "Canal preferido"
    };
    var TOTAL_STEPS = QUESTION_GROUPS.length + 1; // + paso final de datos de contacto

    var root = document.getElementById("gs-qw");
    if (!root) return;

    var state = { step: 1, answers: {} };

    var panels = {
        intro: root.querySelector('[data-qw-panel="intro"]'),
        quiz: root.querySelector('[data-qw-panel="quiz"]'),
        success: root.querySelector('[data-qw-panel="success"]'),
        error: root.querySelector('[data-qw-panel="error"]')
    };

    var questionEls = {};
    for (var i = 0; i < TOTAL_STEPS; i++) {
        questionEls[i + 1] = root.querySelector('[data-qw-question="' + (i + 1) + '"]');
    }

    var progressFill = document.getElementById("gs-qw-progress-fill");
    var stepCurrentEl = document.getElementById("gs-qw-step-current");
    var stepTotalEl = document.getElementById("gs-qw-step-total");
    var backBtn = document.getElementById("gs-qw-back");
    var startBtn = document.getElementById("gs-qw-start");
    var submitBtn = document.getElementById("gs-qw-submit");
    var nameInput = document.getElementById("gs-qw-name");
    var contactInput = document.getElementById("gs-qw-contact");

    if (stepTotalEl) stepTotalEl.textContent = String(TOTAL_STEPS);

    function showPanel(name) {
        Object.keys(panels).forEach(function (key) {
            if (panels[key]) panels[key].hidden = key !== name;
        });
    }

    function showStep(step) {
        state.step = step;
        Object.keys(questionEls).forEach(function (key) {
            if (questionEls[key]) questionEls[key].hidden = Number(key) !== step;
        });
        if (progressFill) progressFill.style.transform = "scaleX(" + (step / TOTAL_STEPS) + ")";
        if (stepCurrentEl) stepCurrentEl.textContent = String(step);
        if (backBtn) backBtn.hidden = step === 1;
        if (step === TOTAL_STEPS && nameInput) nameInput.focus();
    }

    function selectOption(group, btn) {
        state.answers[group] = {
            value: btn.getAttribute("data-qw-value"),
            label: btn.querySelector(".gs-qw-option-text").textContent.trim()
        };
        var siblings = btn.parentElement.querySelectorAll(".gs-qw-option");
        for (var i = 0; i < siblings.length; i++) siblings[i].classList.remove("gs-qw-selected");
        btn.classList.add("gs-qw-selected");

        window.setTimeout(function () {
            if (state.step < TOTAL_STEPS) showStep(state.step + 1);
        }, 260);
    }

    root.addEventListener("click", function (e) {
        var optBtn = e.target.closest(".gs-qw-option");
        if (optBtn) {
            var group = optBtn.parentElement.getAttribute("data-qw-group");
            selectOption(group, optBtn);
        }
    });

    if (startBtn) {
        startBtn.addEventListener("click", function () {
            showPanel("quiz");
            showStep(1);
            if (typeof gtag === "function") {
                gtag("event", "contact_quiz_start", { event_category: "contacto" });
            }
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", function () {
            if (state.step > 1) showStep(state.step - 1);
        });
    }

    function buildWhatsappMessage() {
        var lines = ["Hola, quiero cotizar mi página web. Mis respuestas:"];
        lines.push("Nombre: " + (nameInput ? nameInput.value.trim() : ""));
        QUESTION_GROUPS.forEach(function (group) {
            var a = state.answers[group];
            if (a) lines.push(QUESTION_LABELS[group] + ": " + a.label);
        });
        lines.push("Mi contacto: " + (contactInput ? contactInput.value.trim() : ""));
        return lines.join("\n");
    }

    function buildWhatsappLink() {
        return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(buildWhatsappMessage());
    }

    function markInvalid(input) {
        input.classList.add("gs-qw-invalid");
        input.focus();
        input.addEventListener("input", function clearInvalid() {
            input.classList.remove("gs-qw-invalid");
            input.removeEventListener("input", clearInvalid);
        });
    }

    function validateFinalStep() {
        var name = nameInput ? nameInput.value.trim() : "";
        var contact = contactInput ? contactInput.value.trim() : "";
        if (!name) { markInvalid(nameInput); return false; }
        if (contact.length < 5) { markInvalid(contactInput); return false; }
        return true;
    }

    function resetSubmitBtn() {
        if (!submitBtn) return;
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar mis respuestas";
    }

    function finishWithSuccess() {
        var waLink = document.getElementById("gs-qw-whatsapp-link");
        if (waLink) waLink.href = buildWhatsappLink();
        showPanel("success");
        resetSubmitBtn();
        if (typeof gtag === "function") {
            gtag("event", "contact_quiz_submit", { event_category: "contacto", event_label: "formulario_ia" });
        }
    }

    function finishWithError() {
        var waLink = document.getElementById("gs-qw-whatsapp-fallback");
        if (waLink) waLink.href = buildWhatsappLink();
        showPanel("error");
        resetSubmitBtn();
    }

    function submitAnswers() {
        if (!validateFinalStep()) return;

        var name = nameInput.value.trim();
        var contact = contactInput.value.trim();

        submitBtn.disabled = true;
        submitBtn.textContent = "Enviando...";

        var answers = {};
        QUESTION_GROUPS.forEach(function (group) {
            var a = state.answers[group];
            answers[QUESTION_LABELS[group]] = a ? a.label : "";
        });

        var payload = { name: name, contact: contact, answers: answers };

        fetch(CONTACT_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
                if (data && data.success) finishWithSuccess();
                else finishWithError();
            })
            .catch(function () { finishWithError(); });
    }

    if (submitBtn) submitBtn.addEventListener("click", submitAnswers);
})();
