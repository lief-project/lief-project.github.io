(() => {
  "use strict";

  const workflow = document.querySelector("[data-workflow]");
  if (!workflow) return;

  const panels = Array.from(workflow.querySelectorAll("[data-workflow-panel]"));
  const steps = Array.from(workflow.querySelectorAll("[data-workflow-step-button]"));
  const toggle = workflow.querySelector("[data-workflow-toggle]");
  const toggleLabel = workflow.querySelector("[data-workflow-control-label]");
  const stageStatus = workflow.querySelector("[data-workflow-stage-status]");
  const announcement = workflow.querySelector("[data-workflow-announcement]");
  const stepRail = workflow.querySelector(".workflow-steps");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const cycleDuration = 1000;

  let activeStep = 0;
  let timer = 0;
  let inView = false;
  let pointerPaused = false;
  let focusPaused = false;
  let userPaused = reducedMotion.matches;

  const updateControl = () => {
    if (!toggle) return;
    toggle.hidden = reducedMotion.matches;
    const action = userPaused ? "Play" : "Pause";
    toggle.setAttribute("aria-label", `${action} workflow animation`);
    toggle.title = `${action} workflow animation`;
    if (toggleLabel) toggleLabel.textContent = action;
  };

  const activate = (index, announce = false) => {
    activeStep = (index + steps.length) % steps.length;
    workflow.dataset.workflowStep = String(activeStep);
    workflow.style.setProperty("--workflow-step", String(activeStep));
    workflow.style.setProperty("--workflow-position", `${activeStep * 25}%`);

    steps.forEach((step, stepIndex) => {
      if (stepIndex === activeStep) {
        step.setAttribute("aria-current", "step");
      } else {
        step.removeAttribute("aria-current");
      }
    });

    panels.forEach((panel, panelIndex) => {
      const selected = panelIndex === activeStep;
      panel.classList.toggle("is-active", selected);
      panel.setAttribute("aria-hidden", String(!selected));
    });

    const current = steps[activeStep];
    if (stageStatus && current) {
      stageStatus.textContent = current.dataset.workflowStatus || "processing";
    }
    if (stepRail && current && stepRail.scrollWidth > stepRail.clientWidth) {
      const item = current.parentElement;
      const left = item.offsetLeft - ((stepRail.clientWidth - item.offsetWidth) / 2);
      stepRail.scrollTo({
        left: Math.max(0, left),
        behavior: reducedMotion.matches ? "auto" : "smooth",
      });
    }
    if (announce && announcement && current) {
      const heading = current.querySelector("strong")?.textContent?.trim() || `Step ${activeStep + 1}`;
      announcement.textContent = `Workflow step ${activeStep + 1} of ${steps.length}: ${heading}`;
    }
  };

  const stopTimer = () => {
    window.clearTimeout(timer);
    timer = 0;
    workflow.dataset.workflowRunning = "false";
  };

  const shouldRun = () => (
    !reducedMotion.matches &&
    !userPaused &&
    !pointerPaused &&
    !focusPaused &&
    inView &&
    !document.hidden
  );

  const syncTimer = () => {
    stopTimer();
    updateControl();
    if (!shouldRun()) return;

    workflow.dataset.workflowRunning = "true";
    timer = window.setTimeout(() => {
      activate(activeStep + 1);
      syncTimer();
    }, cycleDuration);
  };

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      userPaused = true;
      activate(index, true);
      syncTimer();
    });
  });

  toggle?.addEventListener("click", () => {
    userPaused = !userPaused;
    if (!userPaused) pointerPaused = false;
    syncTimer();
  });

  workflow.addEventListener("pointerenter", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    pointerPaused = true;
    syncTimer();
  });

  workflow.addEventListener("pointerleave", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    pointerPaused = false;
    syncTimer();
  });

  workflow.addEventListener("focusin", (event) => {
    if (event.target.closest("[data-workflow-toggle]")) return;
    focusPaused = true;
    syncTimer();
  });

  workflow.addEventListener("focusout", () => {
    window.setTimeout(() => {
      focusPaused = workflow.contains(document.activeElement) &&
        !document.activeElement.closest("[data-workflow-toggle]");
      syncTimer();
    }, 0);
  });

  document.addEventListener("visibilitychange", syncTimer);
  reducedMotion.addEventListener?.("change", (event) => {
    userPaused = event.matches;
    syncTimer();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      inView = entries.some((entry) => entry.isIntersecting);
      syncTimer();
    }, { threshold: 0.28 });
    observer.observe(workflow);
  } else {
    inView = true;
  }

  workflow.dataset.workflowEnhanced = "true";
  activate(0);
  updateControl();
  syncTimer();
})();
