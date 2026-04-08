// JS (Babel)
const { useEffect, useMemo, useRef, useState } = React;

function FusionStudioApp() {
  const translations = {
    ro: {
      appName: "Fusion Studio",
      tagline: "Growth lab + client portal + media studio + content workspace",
      mobileFirst: "Mobile-first",
      bilingual: "RO/EN",
      darkMode: "Dark mode",
      savedLocal: "Salvat local",
      heroTitle: "Aplicație premium unificată pentru creștere, lucru cu clienții și conținut.",
      heroText:
        "Am combinat cele 5 concepte într-o singură aplicație: analiză de growth, portal guest editabil, mini studio media, planificare de conținut și centru de export.",
      openWorkspace: "Deschide workspace-ul",
      exportCenter: "Export center",
      resetDemo: "Resetează demo",
      overview: "Overview",
      growth: "Growth Lab",
      portal: "Client Portal",
      media: "Media Studio",
      content: "Content Studio",
      legend: "Legendă aplicație",
      legendText: "Sursele combinate în această versiune finală:",
      source1: "Growth Experience Studio",
      source2: "ClientFlow — Portal Guest Editabil",
      source3: "ClientFlow SaaS Extended",
      source4: "PhotoAuto Studio Premium",
      source5: "ALPis — Content Studio",
      statsTitle: "Live snapshot",
      stat1: "Funnel score",
      stat2: "LTV/CAC",
      stat3: "Retention",
      stat4: "Next move",
      nextMoveA: "CTA clarity",
      nextMoveB: "Retention push",
      overviewTitle: "Control complet într-o singură interfață",
      overviewText:
        "Această versiune funcționează ca microsite, produs demo și workspace real. Totul rulează local, poate fi prezentat în portofoliu și este optimizat pentru telefon.",
      quickActions: "Acțiuni rapide",
      copyState: "Copiază starea",
      growthTitle: "Growth Experience Lab",
      growthText:
        "Modifică funnel-ul, calculele, quiz-ul și experimentul A/B pentru a primi insight-uri instant și recomandări clare.",
      awareness: "Awareness",
      lead: "Lead",
      conversion: "Conversion",
      retention: "Retention",
      visitors: "Vizitatori / lună",
      conversionRate: "Rată conversie %",
      marketingSpend: "Spend marketing",
      revenuePerClient: "Venit lunar / client",
      avgRetentionMonths: "Retenție medie luni",
      estimatedLeads: "Lead-uri estimate",
      cac: "CAC",
      ltv: "LTV",
      ratio: "Raport LTV/CAC",
      quizTitle: "Quiz strategic",
      primaryGoal: "Obiectiv principal",
      immediateConv: "Conversie imediată",
      brandCampaigns: "Brand și campanii",
      retentionEngagement: "Retenție și engagement",
      salesCycle: "Ciclu de vânzare",
      short: "Scurt",
      medium: "Mediu",
      long: "Lung",
      experienceType: "Tip experiență",
      landingPage: "Landing page",
      interactiveMicrosite: "Microsite interactiv",
      productOnboarding: "Produs / onboarding",
      quizResult: "Direcție recomandată",
      abTitle: "A/B experiment lab",
      testing: "Ce testezi",
      headline: "Headline",
      cta: "CTA",
      form: "Form",
      onboardingStep: "Onboarding step",
      kpi: "KPI principal",
      ctr: "CTR",
      cvr: "CVR",
      activation: "Activation",
      expBrief: "Brief experiment",
      onboardingTitle: "Onboarding simulator",
      onboarding1: "Promisiune clară",
      onboarding2: "Prima acțiune utilă",
      onboarding3: "Feedback de succes",
      onboarding4: "Feedback contextual",
      feedbackTitle: "Feedback loop",
      survey: "Survey",
      support: "Support",
      analytics: "Analytics",
      interviews: "Interviuri",
      impact: "Impact",
      effort: "Effort",
      note: "Observație",
      addFeedback: "Adaugă feedback",
      quickWins: "Quick wins",
      strategicBets: "Strategic bets",
      niceToHave: "Nice to have",
      deprioritize: "Deprioritize",
      portalTitle: "Client portal fără cont",
      portalText:
        "Workspace guest editabil cu autosave, task-uri, fișiere, actualizări și export imediat în mai multe formate.",
      projectTitle: "Titlu proiect",
      projectDescription: "Descriere proiect",
      totalProgress: "Progres total",
      activeTasks: "Task-uri active",
      sharedFiles: "Fișiere partajate",
      updates: "Actualizări",
      addTask: "Adaugă task",
      addFile: "Adaugă fișier",
      addUpdate: "Adaugă actualizare",
      exportJson: "Export JSON",
      exportTxt: "Export TXT",
      exportHtml: "Export HTML",
      copyJson: "Copiază JSON",
      mediaTitle: "Media Studio",
      mediaText:
        "Mini studio local pentru asset planning, upload, canvas presets, layere și export de compoziții.",
      uploadImages: "Încarcă imagini",
      canvasSize: "Dimensiune canvas",
      addTextLayer: "Adaugă text",
      addShapeLayer: "Adaugă formă",
      layers: "Layere",
      remove: "Șterge",
      duplicate: "Duplică",
      contentTitle: "Content Studio",
      contentText:
        "Planifică idei, campanii și deliverables într-un board simplu, rapid și ușor de prezentat pe mobil.",
      newIdea: "Idee nouă",
      addIdea: "Adaugă idee",
      stage: "Stadiu",
      idea: "Idee",
      draft: "Draft",
      review: "Review",
      published: "Published",
      priority: "Prioritate",
      low: "Low",
      normal: "Normal",
      high: "High",
      delete: "Șterge",
      empty: "Nu există date încă.",
      footer: "Versiune finală unificată • RO/EN • Mobile-first • Dark mode • Local-first"
    },
    en: {
      appName: "Fusion Studio",
      tagline: "Growth lab + client portal + media studio + content workspace",
      mobileFirst: "Mobile-first",
      bilingual: "RO/EN",
      darkMode: "Dark mode",
      savedLocal: "Saved locally",
      heroTitle: "Premium unified app for growth, client work, and content.",
      heroText:
        "I combined the 5 concepts into one application: growth analysis, editable guest portal, mini media studio, content planning, and export center.",
      openWorkspace: "Open workspace",
      exportCenter: "Export center",
      resetDemo: "Reset demo",
      overview: "Overview",
      growth: "Growth Lab",
      portal: "Client Portal",
      media: "Media Studio",
      content: "Content Studio",
      legend: "App legend",
      legendText: "The sources combined in this final version:",
      source1: "Growth Experience Studio",
      source2: "ClientFlow — Editable Guest Portal",
      source3: "ClientFlow SaaS Extended",
      source4: "PhotoAuto Studio Premium",
      source5: "ALPis — Content Studio",
      statsTitle: "Live snapshot",
      stat1: "Funnel score",
      stat2: "LTV/CAC",
      stat3: "Retention",
      stat4: "Next move",
      nextMoveA: "CTA clarity",
      nextMoveB: "Retention push",
      overviewTitle: "Complete control in one interface",
      overviewText:
        "This version works as a microsite, product demo, and real workspace. Everything runs locally, is portfolio-ready, and optimized for mobile.",
      quickActions: "Quick actions",
      copyState: "Copy state",
      growthTitle: "Growth Experience Lab",
      growthText:
        "Adjust the funnel, calculations, quiz, and A/B experiment to get instant insights and clear recommendations.",
      awareness: "Awareness",
      lead: "Lead",
      conversion: "Conversion",
      retention: "Retention",
      visitors: "Visitors / month",
      conversionRate: "Conversion rate %",
      marketingSpend: "Marketing spend",
      revenuePerClient: "Monthly revenue / client",
      avgRetentionMonths: "Average retention months",
      estimatedLeads: "Estimated leads",
      cac: "CAC",
      ltv: "LTV",
      ratio: "LTV/CAC ratio",
      quizTitle: "Strategy quiz",
      primaryGoal: "Primary goal",
      immediateConv: "Immediate conversion",
      brandCampaigns: "Brand & campaigns",
      retentionEngagement: "Retention & engagement",
      salesCycle: "Sales cycle",
      short: "Short",
      medium: "Medium",
      long: "Long",
      experienceType: "Experience type",
      landingPage: "Landing page",
      interactiveMicrosite: "Interactive microsite",
      productOnboarding: "Product / onboarding",
      quizResult: "Recommended direction",
      abTitle: "A/B experiment lab",
      testing: "What are you testing",
      headline: "Headline",
      cta: "CTA",
      form: "Form",
      onboardingStep: "Onboarding step",
      kpi: "Primary KPI",
      ctr: "CTR",
      cvr: "CVR",
      activation: "Activation",
      expBrief: "Experiment brief",
      onboardingTitle: "Onboarding simulator",
      onboarding1: "Clear promise",
      onboarding2: "First useful action",
      onboarding3: "Success feedback",
      onboarding4: "Contextual feedback",
      feedbackTitle: "Feedback loop",
      survey: "Survey",
      support: "Support",
      analytics: "Analytics",
      interviews: "Interviews",
      impact: "Impact",
      effort: "Effort",
      note: "Note",
      addFeedback: "Add feedback",
      quickWins: "Quick wins",
      strategicBets: "Strategic bets",
      niceToHave: "Nice to have",
      deprioritize: "Deprioritize",
      portalTitle: "No-login client portal",
      portalText:
        "Editable guest workspace with autosave, tasks, files, updates, and immediate multi-format export.",
      projectTitle: "Project title",
      projectDescription: "Project description",
      totalProgress: "Total progress",
      activeTasks: "Active tasks",
      sharedFiles: "Shared files",
      updates: "Updates",
      addTask: "Add task",
      addFile: "Add file",
      addUpdate: "Add update",
      exportJson: "Export JSON",
      exportTxt: "Export TXT",
      exportHtml: "Export HTML",
      copyJson: "Copy JSON",
      mediaTitle: "Media Studio",
      mediaText:
        "Local mini studio for asset planning, uploads, canvas presets, layers, and composition export.",
      uploadImages: "Upload images",
      canvasSize: "Canvas size",
      addTextLayer: "Add text",
      addShapeLayer: "Add shape",
      layers: "Layers",
      remove: "Delete",
      duplicate: "Duplicate",
      contentTitle: "Content Studio",
      contentText:
        "Plan ideas, campaigns, and deliverables in a simple board that is fast and mobile-friendly.",
      newIdea: "New idea",
      addIdea: "Add idea",
      stage: "Stage",
      idea: "Idea",
      draft: "Draft",
      review: "Review",
      published: "Published",
      priority: "Priority",
      low: "Low",
      normal: "Normal",
      high: "High",
      delete: "Delete",
      empty: "No data yet.",
      footer: "Final unified version • RO/EN • Mobile-first • Dark mode • Local-first"
    }
  };

  const defaultState = {
    lang: "ro",
    theme: "dark",
    activeTab: "overview",
    funnel: { awareness: 70, lead: 55, conversion: 42, retention: 61 },
    calc: {
      visitors: 12000,
      conversionRate: 4.2,
      marketingSpend: 1800,
      revenuePerClient: 120,
      avgRetentionMonths: 8
    },
    quiz: { goal: "conversion", cycle: "medium", experience: "microsite" },
    ab: {
      test: "cta",
      kpi: "cvr",
      context: "Traffic from paid campaigns on a mobile-first landing experience."
    },
    onboardingStep: 0,
    feedbackDraft: { source: "survey", impact: 4, effort: 2, note: "" },
    feedbackItems: [
      { id: 1, source: "analytics", impact: 5, effort: 2, note: "Improve CTA clarity on mobile hero." },
      { id: 2, source: "support", impact: 4, effort: 4, note: "Reduce confusion in onboarding step 2." }
    ],
    portal: {
      title: "Website redesign & growth sprint",
      description: "Premium delivery workspace with guest editing, growth planning, and export-ready project data.",
      totalProgress: 80,
      activeTasks: 12,
      sharedFiles: 4,
      tasks: [
        { id: 1, text: "Finalize hero messaging", done: false },
        { id: 2, text: "Review mobile CTA variants", done: true },
        { id: 3, text: "Prepare launch content pack", done: false }
      ],
      files: [
        { id: 1, name: "homepage-wireframe.fig" },
        { id: 2, name: "brand-assets.zip" }
      ],
      updates: [
        { id: 1, text: "Kickoff approved. Proceeding to mobile UI polish." },
        { id: 2, text: "Growth calculator aligned with current assumptions." }
      ]
    },
    media: {
      size: "1080x1080",
      uploads: [],
      layers: [
        { id: 1, type: "text", name: "Headline", content: "Launch smarter", visible: true },
        { id: 2, type: "shape", name: "Accent shape", content: "Rounded glow card", visible: true }
      ],
      selectedLayerId: 1
    },
    content: {
      draft: { title: "", stage: "idea", priority: "normal" },
      ideas: [
        { id: 1, title: "Launch week teaser", stage: "draft", priority: "high" },
        { id: 2, title: "Client portal walkthrough", stage: "review", priority: "normal" },
        { id: 3, title: "Retention checklist reel", stage: "idea", priority: "high" }
      ]
    }
  };

  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem("fusion-studio-codepen-state");
      return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
    } catch {
      return defaultState;
    }
  });

  const t = translations[state.lang];
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("fusion-studio-codepen-state", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    document.body.className = state.theme === "dark" ? "" : "light";
  }, [state.theme]);

  const calcMetrics = useMemo(() => {
    const leads = Math.round((state.calc.visitors * state.calc.conversionRate) / 100);
    const cac = leads > 0 ? state.calc.marketingSpend / leads : 0;
    const ltv = state.calc.revenuePerClient * state.calc.avgRetentionMonths;
    const ratio = cac > 0 ? ltv / cac : 0;
    const funnelScore = Math.round(
      (state.funnel.awareness + state.funnel.lead + state.funnel.conversion + state.funnel.retention) / 4
    );
    return { leads, cac, ltv, ratio, funnelScore };
  }, [state.calc, state.funnel]);

  const quizDirection = useMemo(() => {
    const { goal, experience, cycle } = state.quiz;
    if (goal === "conversion" && experience === "landing") {
      return state.lang === "ro"
        ? "Landing page orientat pe claritate, proof și CTA scurt."
        : "Clarity-first landing page with proof and a short CTA.";
    }
    if (goal === "retention") {
      return state.lang === "ro"
        ? "Flux de onboarding + buclă de feedback + retenție măsurabilă."
        : "Onboarding flow + feedback loop + measurable retention.";
    }
    if (cycle === "long") {
      return state.lang === "ro"
        ? "Microsite narativ cu context, studii de caz și CTA progresiv."
        : "Narrative microsite with context, case studies, and progressive CTA.";
    }
    return state.lang === "ro"
      ? "Microsite interactiv cu quiz, calculator și experimente A/B."
      : "Interactive microsite with quiz, calculator, and A/B experiments.";
  }, [state.quiz, state.lang]);

  const abBrief = useMemo(() => {
    const testMap = {
      headline: t.headline,
      cta: t.cta,
      form: t.form,
      onboarding: t.onboardingStep
    };
    const kpiMap = {
      ctr: t.ctr,
      cvr: t.cvr,
      activation: t.activation,
      retention: t.retention
    };
    return state.lang === "ro"
      ? `Testează ${testMap[state.ab.test]} cu focus pe ${kpiMap[state.ab.kpi]}. Ipoteză: varianta clarity-first va performa mai bine când utilizatorii ajung rapid pe mobil și au nevoie de valoare explicită.`
      : `Test ${testMap[state.ab.test]} with focus on ${kpiMap[state.ab.kpi]}. Hypothesis: the clarity-first variant will perform better when users arrive quickly on mobile and need explicit value fast.`;
  }, [state.ab, state.lang, t]);

  const feedbackBuckets = useMemo(() => {
    const buckets = { quickWins: [], strategicBets: [], niceToHave: [], deprioritize: [] };
    state.feedbackItems.forEach((item) => {
      if (item.impact >= 4 && item.effort <= 2) buckets.quickWins.push(item);
      else if (item.impact >= 4 && item.effort >= 3) buckets.strategicBets.push(item);
      else if (item.impact <= 3 && item.effort <= 3) buckets.niceToHave.push(item);
      else buckets.deprioritize.push(item);
    });
    return buckets;
  }, [state.feedbackItems]);

  const selectedLayer =
    state.media.layers.find((item) => item.id === state.media.selectedLayerId) || null;

  const projectJson = JSON.stringify(state, null, 2);

  const tabs = [
    { key: "overview", label: t.overview },
    { key: "growth", label: t.growth },
    { key: "portal", label: t.portal },
    { key: "media", label: t.media },
    { key: "content", label: t.content },
    { key: "legend", label: t.legend }
  ];

  function updateNested(section, patch) {
    setState((prev) => ({ ...prev, [section]: { ...prev[section], ...patch } }));
  }

  function exportFile(name, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportPortalTxt() {
    const txt = [
      state.portal.title,
      state.portal.description,
      "",
      "Tasks:",
      ...state.portal.tasks.map((task) => `- ${task.done ? "[x]" : "[ ]"} ${task.text}`),
      "",
      "Files:",
      ...state.portal.files.map((file) => `- ${file.name}`),
      "",
      "Updates:",
      ...state.portal.updates.map((item) => `- ${item.text}`)
    ].join("\n");
    exportFile("fusion-portal.txt", txt, "text/plain");
  }

  function exportPortalHtml() {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${state.portal.title}</title></head><body><h1>${state.portal.title}</h1><p>${state.portal.description}</p><h2>Tasks</h2><ul>${state.portal.tasks
      .map((task) => `<li>${task.done ? "✓" : "•"} ${task.text}</li>`)
      .join("")}</ul><h2>Files</h2><ul>${state.portal.files
      .map((file) => `<li>${file.name}</li>`)
      .join("")}</ul><h2>Updates</h2><ul>${state.portal.updates
      .map((item) => `<li>${item.text}</li>`)
      .join("")}</ul></body></html>`;
    exportFile("fusion-portal.html", html, "text/html");
  }

  function copyText(content) {
    navigator.clipboard?.writeText(content);
  }

  function addFeedbackItem() {
    if (!state.feedbackDraft.note.trim()) return;
    setState((prev) => ({
      ...prev,
      feedbackItems: [...prev.feedbackItems, { id: Date.now(), ...prev.feedbackDraft }],
      feedbackDraft: { ...prev.feedbackDraft, note: "" }
    }));
  }

  function addTask() {
    setState((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        tasks: [...prev.portal.tasks, { id: Date.now(), text: "New task", done: false }]
      }
    }));
  }

  function addFile() {
    setState((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        files: [...prev.portal.files, { id: Date.now(), name: "new-file.ext" }]
      }
    }));
  }

  function addUpdate() {
    setState((prev) => ({
      ...prev,
      portal: {
        ...prev.portal,
        updates: [...prev.portal.updates, { id: Date.now(), text: "New update" }]
      }
    }));
  }

  function addLayer(type) {
    const layer =
      type === "text"
        ? { id: Date.now(), type: "text", name: "Text layer", content: "New text", visible: true }
        : { id: Date.now(), type: "shape", name: "Shape layer", content: "Rounded rectangle", visible: true };

    setState((prev) => ({
      ...prev,
      media: {
        ...prev.media,
        layers: [layer, ...prev.media.layers],
        selectedLayerId: layer.id
      }
    }));
  }

  function duplicateLayer(id) {
    const layer = state.media.layers.find((item) => item.id === id);
    if (!layer) return;
    const copy = { ...layer, id: Date.now(), name: `${layer.name} copy` };
    setState((prev) => ({
      ...prev,
      media: { ...prev.media, layers: [copy, ...prev.media.layers] }
    }));
  }

  function removeLayer(id) {
    setState((prev) => {
      const nextLayers = prev.media.layers.filter((item) => item.id !== id);
      return {
        ...prev,
        media: {
          ...prev.media,
          layers: nextLayers,
          selectedLayerId: nextLayers[0] ? nextLayers[0].id : null
        }
      };
    });
  }

  function handleUploads(event) {
    const files = Array.from(event.target.files || []).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`
    }));

    setState((prev) => ({
      ...prev,
      media: {
        ...prev.media,
        uploads: [...files, ...prev.media.uploads]
      }
    }));
  }

  function addIdea() {
    if (!state.content.draft.title.trim()) return;
    setState((prev) => ({
      ...prev,
      content: {
        ...prev.content,
        ideas: [{ id: Date.now(), ...prev.content.draft }, ...prev.content.ideas],
        draft: { title: "", stage: "idea", priority: "normal" }
      }
    }));
  }

  return (
    <div className="app-shell">
      <div className="container">
        <div className="card sticky-bar">
          <div className="topbar">
            <div className="brand">
              <div className="brand-badge">FS</div>
              <div>
                <h1>{t.appName}</h1>
                <p>{t.tagline}</p>
              </div>
            </div>

            <div className="top-actions">
              <span className="pill">{t.mobileFirst}</span>
              <span className="pill">{t.bilingual}</span>
              <span className="pill">{t.darkMode}</span>
              <span className="pill">{t.savedLocal}</span>
              <button
                className="button-alt"
                onClick={() => setState((prev) => ({ ...prev, lang: prev.lang === "ro" ? "en" : "ro" }))}
              >
                {state.lang.toUpperCase()}
              </button>
              <button
                className="button-alt"
                onClick={() => setState((prev) => ({ ...prev, theme: prev.theme === "dark" ? "light" : "dark" }))}
              >
                {state.theme === "dark" ? "☾" : "☀"}
              </button>
            </div>
          </div>
        </div>

        <section className="hero-grid">
          <div className="card hero">
            <div className="hero-pills">
              <span className="hero-pill">{t.mobileFirst}</span>
              <span className="hero-pill">{t.bilingual}</span>
              <span className="hero-pill">{t.darkMode}</span>
            </div>
            <h2>{t.heroTitle}</h2>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <button className="button-alt" onClick={() => setState((prev) => ({ ...prev, activeTab: "overview" }))}>
                {t.openWorkspace}
              </button>
              <button className="button-alt" onClick={() => setState((prev) => ({ ...prev, activeTab: "legend" }))}>
                {t.exportCenter}
              </button>
              <button className="button-alt" onClick={() => setState(defaultState)}>
                {t.resetDemo}
              </button>
            </div>
          </div>

          <div className="card stats-panel">
            <div className="stats-title">{t.statsTitle}</div>
            <div className="stats-grid">
              <div className="soft-card">
                <div className="metric-label">{t.stat1}</div>
                <div className="metric-value">{calcMetrics.funnelScore}</div>
              </div>
              <div className="soft-card">
                <div className="metric-label">{t.stat2}</div>
                <div className="metric-value">{calcMetrics.ratio.toFixed(1)}x</div>
              </div>
              <div className="soft-card">
                <div className="metric-label">{t.stat3}</div>
                <div className="metric-value">{state.funnel.retention}%</div>
              </div>
              <div className="soft-card">
                <div className="metric-label">{t.stat4}</div>
                <div className="metric-value" style={{ fontSize: 18 }}>
                  {calcMetrics.funnelScore >= 65 ? t.nextMoveA : t.nextMoveB}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab ${state.activeTab === tab.key ? "active" : ""}`}
              onClick={() => setState((prev) => ({ ...prev, activeTab: tab.key }))}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {state.activeTab === "overview" && (
          <section className="overview-grid">
            <div className="card section-card">
              <h3>{t.overviewTitle}</h3>
              <p className="section-text">{t.overviewText}</p>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <div className="soft-card">
                  <strong>{t.growth}</strong>
                  <p className="section-text">Funnel, calculator, quiz, A/B, onboarding, feedback.</p>
                </div>
                <div className="soft-card">
                  <strong>{t.portal}</strong>
                  <p className="section-text">Guest workspace, tasks, files, updates, exports.</p>
                </div>
                <div className="soft-card">
                  <strong>{t.media}</strong>
                  <p className="section-text">Uploads, presets, layers, composition planning.</p>
                </div>
                <div className="soft-card">
                  <strong>{t.content}</strong>
                  <p className="section-text">Ideas, stage tracking, delivery board, priorities.</p>
                </div>
              </div>
            </div>

            <div className="card section-card">
              <h3>{t.quickActions}</h3>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <button className="button" onClick={() => setState((prev) => ({ ...prev, activeTab: "growth" }))}>{t.growth}</button>
                <button className="button" onClick={() => setState((prev) => ({ ...prev, activeTab: "portal" }))}>{t.portal}</button>
                <button className="button" onClick={() => setState((prev) => ({ ...prev, activeTab: "media" }))}>{t.media}</button>
                <button className="button" onClick={() => setState((prev) => ({ ...prev, activeTab: "content" }))}>{t.content}</button>
                <button className="button-alt" onClick={() => copyText(projectJson)}>{t.copyState}</button>
                <button className="button-alt" onClick={() => exportFile("fusion-studio.json", projectJson, "application/json")}>{t.exportJson}</button>
              </div>
            </div>
          </section>
        )}

        {state.activeTab === "growth" && (
          <section className="growth-grid">
            <div className="card section-card">
              <h3>{t.growthTitle}</h3>
              <p className="section-text">{t.growthText}</p>
              <div className="stack" style={{ marginTop: 16 }}>
                {[
                  ["awareness", t.awareness],
                  ["lead", t.lead],
                  ["conversion", t.conversion],
                  ["retention", t.retention]
                ].map(([key, label]) => (
                  <div className="soft-card" key={key}>
                    <div className="range-wrap">
                      <div className="range-top">
                        <span>{label}</span>
                        <span>{state.funnel[key]}%</span>
                      </div>
                      <input
                        className="range"
                        type="range"
                        min="0"
                        max="100"
                        value={state.funnel[key]}
                        onChange={(e) =>
                          setState((prev) => ({
                            ...prev,
                            funnel: { ...prev.funnel, [key]: Number(e.target.value) }
                          }))
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card section-card">
              <h3>Calculator</h3>
              <div className="grid-2" style={{ marginTop: 16 }}>
                {[
                  ["visitors", t.visitors],
                  ["conversionRate", t.conversionRate],
                  ["marketingSpend", t.marketingSpend],
                  ["revenuePerClient", t.revenuePerClient],
                  ["avgRetentionMonths", t.avgRetentionMonths]
                ].map(([key, label]) => (
                  <label className="label" key={key}>
                    <span>{label}</span>
                    <input
                      className="input"
                      type="number"
                      value={state.calc[key]}
                      onChange={(e) => updateNested("calc", { [key]: Number(e.target.value) })}
                    />
                  </label>
                ))}
              </div>
              <div className="kpi-grid" style={{ marginTop: 16 }}>
                <div className="soft-card">
                  <div className="metric-label">{t.estimatedLeads}</div>
                  <div className="metric-value">{calcMetrics.leads}</div>
                </div>
                <div className="soft-card">
                  <div className="metric-label">{t.cac}</div>
                  <div className="metric-value">€{calcMetrics.cac.toFixed(0)}</div>
                </div>
                <div className="soft-card">
                  <div className="metric-label">{t.ltv}</div>
                  <div className="metric-value">€{calcMetrics.ltv.toFixed(0)}</div>
                </div>
                <div className="soft-card">
                  <div className="metric-label">{t.ratio}</div>
                  <div className="metric-value">{calcMetrics.ratio.toFixed(1)}x</div>
                </div>
              </div>
            </div>

            <div className="card section-card">
              <h3>{t.quizTitle}</h3>
              <div className="grid-3" style={{ marginTop: 16 }}>
                <label className="label">
                  <span>{t.primaryGoal}</span>
                  <select className="select" value={state.quiz.goal} onChange={(e) => updateNested("quiz", { goal: e.target.value })}>
                    <option value="conversion">{t.immediateConv}</option>
                    <option value="brand">{t.brandCampaigns}</option>
                    <option value="retention">{t.retentionEngagement}</option>
                  </select>
                </label>
                <label className="label">
                  <span>{t.salesCycle}</span>
                  <select className="select" value={state.quiz.cycle} onChange={(e) => updateNested("quiz", { cycle: e.target.value })}>
                    <option value="short">{t.short}</option>
                    <option value="medium">{t.medium}</option>
                    <option value="long">{t.long}</option>
                  </select>
                </label>
                <label className="label">
                  <span>{t.experienceType}</span>
                  <select className="select" value={state.quiz.experience} onChange={(e) => updateNested("quiz", { experience: e.target.value })}>
                    <option value="landing">{t.landingPage}</option>
                    <option value="microsite">{t.interactiveMicrosite}</option>
                    <option value="product">{t.productOnboarding}</option>
                  </select>
                </label>
              </div>
              <div className="soft-card" style={{ marginTop: 16 }}>
                <div className="metric-label">{t.quizResult}</div>
                <div style={{ marginTop: 8, fontWeight: 700 }}>{quizDirection}</div>
              </div>
            </div>

            <div className="card section-card">
              <h3>{t.abTitle}</h3>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <label className="label">
                  <span>{t.testing}</span>
                  <select className="select" value={state.ab.test} onChange={(e) => updateNested("ab", { test: e.target.value })}>
                    <option value="headline">{t.headline}</option>
                    <option value="cta">{t.cta}</option>
                    <option value="form">{t.form}</option>
                    <option value="onboarding">{t.onboardingStep}</option>
                  </select>
                </label>
                <label className="label">
                  <span>{t.kpi}</span>
                  <select className="select" value={state.ab.kpi} onChange={(e) => updateNested("ab", { kpi: e.target.value })}>
                    <option value="ctr">{t.ctr}</option>
                    <option value="cvr">{t.cvr}</option>
                    <option value="activation">{t.activation}</option>
                    <option value="retention">{t.retention}</option>
                  </select>
                </label>
              </div>
              <textarea className="textarea" style={{ marginTop: 14 }} value={state.ab.context} onChange={(e) => updateNested("ab", { context: e.target.value })} />
              <div className="soft-card" style={{ marginTop: 16 }}>
                <div className="metric-label">{t.expBrief}</div>
                <div style={{ marginTop: 8, lineHeight: 1.6 }}>{abBrief}</div>
              </div>
            </div>

            <div className="card section-card">
              <h3>{t.onboardingTitle}</h3>
              <div className="grid-2" style={{ marginTop: 16 }}>
                {[t.onboarding1, t.onboarding2, t.onboarding3, t.onboarding4].map((step, index) => (
                  <button
                    key={step}
                    className="soft-card"
                    style={{
                      textAlign: "left",
                      outline: state.onboardingStep === index ? "2px solid #8b5cf6" : "none",
                      cursor: "pointer"
                    }}
                    onClick={() => setState((prev) => ({ ...prev, onboardingStep: index }))}
                  >
                    <div className="metric-label">0{index + 1}</div>
                    <div style={{ marginTop: 8, fontWeight: 700 }}>{step}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="card section-card">
              <h3>{t.feedbackTitle}</h3>
              <div className="grid-4" style={{ marginTop: 16 }}>
                <select
                  className="select"
                  value={state.feedbackDraft.source}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      feedbackDraft: { ...prev.feedbackDraft, source: e.target.value }
                    }))
                  }
                >
                  <option value="survey">{t.survey}</option>
                  <option value="support">{t.support}</option>
                  <option value="analytics">{t.analytics}</option>
                  <option value="interviews">{t.interviews}</option>
                </select>
                <input
                  className="input"
                  type="number"
                  min="1"
                  max="5"
                  value={state.feedbackDraft.impact}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      feedbackDraft: { ...prev.feedbackDraft, impact: Number(e.target.value) }
                    }))
                  }
                />
                <input
                  className="input"
                  type="number"
                  min="1"
                  max="5"
                  value={state.feedbackDraft.effort}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      feedbackDraft: { ...prev.feedbackDraft, effort: Number(e.target.value) }
                    }))
                  }
                />
                <button className="button" onClick={addFeedbackItem}>{t.addFeedback}</button>
              </div>

              <textarea
                className="textarea"
                style={{ marginTop: 14 }}
                value={state.feedbackDraft.note}
                placeholder={t.note}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    feedbackDraft: { ...prev.feedbackDraft, note: e.target.value }
                  }))
                }
              />

              <div className="grid-2" style={{ marginTop: 16 }}>
                {[
                  ["quickWins", t.quickWins],
                  ["strategicBets", t.strategicBets],
                  ["niceToHave", t.niceToHave],
                  ["deprioritize", t.deprioritize]
                ].map(([key, label]) => (
                  <div className="soft-card" key={key}>
                    <strong>{label}</strong>
                    <div className="stack" style={{ marginTop: 10 }}>
                      {(feedbackBuckets[key] || []).length ? (
                        feedbackBuckets[key].map((item) => (
                          <div className="soft-card" key={item.id}>
                            <div className="metric-label">{item.source}</div>
                            <div style={{ marginTop: 6 }}>{item.note}</div>
                          </div>
                        ))
                      ) : (
                        <div className="empty">{t.empty}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {state.activeTab === "portal" && (
          <section className="portal-grid">
            <div className="card section-card">
              <h3>{t.portalTitle}</h3>
              <p className="section-text">{t.portalText}</p>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <label className="label">
                  <span>{t.projectTitle}</span>
                  <input className="input" value={state.portal.title} onChange={(e) => updateNested("portal", { title: e.target.value })} />
                </label>
                <label className="label">
                  <span>{t.totalProgress} (%)</span>
                  <input className="input" type="number" value={state.portal.totalProgress} onChange={(e) => updateNested("portal", { totalProgress: Number(e.target.value) })} />
                </label>
                <label className="label" style={{ gridColumn: "1 / -1" }}>
                  <span>{t.projectDescription}</span>
                  <textarea className="textarea" value={state.portal.description} onChange={(e) => updateNested("portal", { description: e.target.value })} />
                </label>
                <label className="label">
                  <span>{t.activeTasks}</span>
                  <input className="input" type="number" value={state.portal.activeTasks} onChange={(e) => updateNested("portal", { activeTasks: Number(e.target.value) })} />
                </label>
                <label className="label">
                  <span>{t.sharedFiles}</span>
                  <input className="input" type="number" value={state.portal.sharedFiles} onChange={(e) => updateNested("portal", { sharedFiles: Number(e.target.value) })} />
                </label>
              </div>
            </div>

            <div className="card section-card">
              <div className="grid-3">
                <div className="soft-card">
                  <div className="metric-label">{t.totalProgress}</div>
                  <div className="metric-value">{state.portal.totalProgress}%</div>
                </div>
                <div className="soft-card">
                  <div className="metric-label">{t.activeTasks}</div>
                  <div className="metric-value">{state.portal.tasks.length}</div>
                </div>
                <div className="soft-card">
                  <div className="metric-label">{t.sharedFiles}</div>
                  <div className="metric-value">{state.portal.files.length}</div>
                </div>
              </div>
              <div className="inline-actions" style={{ marginTop: 16 }}>
                <button className="button" onClick={() => exportFile("fusion-studio.json", projectJson, "application/json")}>{t.exportJson}</button>
                <button className="button-alt" onClick={exportPortalTxt}>{t.exportTxt}</button>
                <button className="button-alt" onClick={exportPortalHtml}>{t.exportHtml}</button>
                <button className="button-alt" onClick={() => copyText(projectJson)}>{t.copyJson}</button>
              </div>
            </div>

            <div className="card section-card">
              <div className="topbar" style={{ marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{t.activeTasks}</h3>
                <button className="button" onClick={addTask}>{t.addTask}</button>
              </div>
              <div className="stack">
                {state.portal.tasks.map((task) => (
                  <div className="soft-card task-row" key={task.id}>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            tasks: prev.portal.tasks.map((item) =>
                              item.id === task.id ? { ...item, done: !item.done } : item
                            )
                          }
                        }))
                      }
                    />
                    <input
                      className="input flex-1"
                      value={task.text}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            tasks: prev.portal.tasks.map((item) =>
                              item.id === task.id ? { ...item, text: e.target.value } : item
                            )
                          }
                        }))
                      }
                    />
                    <button
                      className="button-alt"
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            tasks: prev.portal.tasks.filter((item) => item.id !== task.id)
                          }
                        }))
                      }
                    >
                      {t.delete}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="card section-card">
              <div className="topbar" style={{ marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{t.sharedFiles}</h3>
                <button className="button" onClick={addFile}>{t.addFile}</button>
              </div>
              <div className="stack">
                {state.portal.files.map((file) => (
                  <div className="soft-card file-row" key={file.id}>
                    <input
                      className="input flex-1"
                      value={file.name}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            files: prev.portal.files.map((item) =>
                              item.id === file.id ? { ...item, name: e.target.value } : item
                            )
                          }
                        }))
                      }
                    />
                    <button
                      className="button-alt"
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            files: prev.portal.files.filter((item) => item.id !== file.id)
                          }
                        }))
                      }
                    >
                      {t.delete}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="card section-card">
              <div className="topbar" style={{ marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, margin: 0 }}>{t.updates}</h3>
                <button className="button" onClick={addUpdate}>{t.addUpdate}</button>
              </div>
              <div className="stack">
                {state.portal.updates.map((item) => (
                  <div className="soft-card update-row" key={item.id}>
                    <textarea
                      className="textarea flex-1"
                      value={item.text}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            updates: prev.portal.updates.map((u) =>
                              u.id === item.id ? { ...u, text: e.target.value } : u
                            )
                          }
                        }))
                      }
                    />
                    <button
                      className="button-alt"
                      onClick={() =>
                        setState((prev) => ({
                          ...prev,
                          portal: {
                            ...prev.portal,
                            updates: prev.portal.updates.filter((u) => u.id !== item.id)
                          }
                        }))
                      }
                    >
                      {t.delete}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {state.activeTab === "media" && (
          <section className="media-grid">
            <div className="card section-card">
              <h3>{t.mediaTitle}</h3>
              <p className="section-text">{t.mediaText}</p>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <button className="button" onClick={() => fileInputRef.current && fileInputRef.current.click()}>{t.uploadImages}</button>
                <input ref={fileInputRef} type="file" multiple style={{ display: "none" }} onChange={handleUploads} />
                <label className="label">
                  <span>{t.canvasSize}</span>
                  <select className="select" value={state.media.size} onChange={(e) => updateNested("media", { size: e.target.value })}>
                    <option value="1080x1080">1080 × 1080</option>
                    <option value="1080x1350">1080 × 1350</option>
                    <option value="1920x1080">1920 × 1080</option>
                    <option value="1200x628">1200 × 628</option>
                  </select>
                </label>
                <button className="button-alt" onClick={() => addLayer("text")}>{t.addTextLayer}</button>
                <button className="button-alt" onClick={() => addLayer("shape")}>{t.addShapeLayer}</button>
              </div>

              <div className="canvas-preview" style={{ marginTop: 16 }}>
                <div className="range-top">
                  <span>{t.canvasSize}</span>
                  <span>{state.media.size}</span>
                </div>
                <div className="canvas-stage" style={{ marginTop: 12 }}>
                  <div>
                    <div className="mini">Fusion Studio</div>
                    <h4>{selectedLayer && selectedLayer.type === "text" ? selectedLayer.content : "Premium mobile campaign"}</h4>
                    <div className="canvas-pill">{state.media.layers.length} layers • {state.media.uploads.length} uploads</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="stack">
              <div className="card section-card">
                <h3 style={{ fontSize: 20 }}>Uploads</h3>
                <div className="grid-2" style={{ marginTop: 12 }}>
                  {state.media.uploads.length ? (
                    state.media.uploads.map((upload) => (
                      <div className="soft-card" key={upload.id}>
                        <div style={{ fontWeight: 700 }}>{upload.name}</div>
                        <div className="metric-label" style={{ marginTop: 6 }}>{upload.size}</div>
                      </div>
                    ))
                  ) : (
                    <div className="empty">{t.empty}</div>
                  )}
                </div>
              </div>

              <div className="card section-card">
                <h3 style={{ fontSize: 20 }}>{t.layers}</h3>
                <div className="stack" style={{ marginTop: 12 }}>
                  {state.media.layers.map((layer) => (
                    <div
                      className="soft-card layer-row"
                      key={layer.id}
                      style={{ outline: state.media.selectedLayerId === layer.id ? "2px solid #8b5cf6" : "none" }}
                    >
                      <div className="flex-1">
                        <div className="inline-actions" style={{ marginBottom: 10 }}>
                          <button className="button-alt" onClick={() => updateNested("media", { selectedLayerId: layer.id })}>
                            {layer.name}
                          </button>
                          <span className="pill">{layer.type}</span>
                          <button className="button-alt" onClick={() => duplicateLayer(layer.id)}>{t.duplicate}</button>
                          <button className="button-alt" onClick={() => removeLayer(layer.id)}>{t.remove}</button>
                        </div>
                        <textarea
                          className="textarea"
                          value={layer.content}
                          onChange={(e) =>
                            setState((prev) => ({
                              ...prev,
                              media: {
                                ...prev.media,
                                layers: prev.media.layers.map((item) =>
                                  item.id === layer.id ? { ...item, content: e.target.value } : item
                                )
                              }
                            }))
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {state.activeTab === "content" && (
          <section className="content-grid">
            <div className="card section-card">
              <h3>{t.contentTitle}</h3>
              <p className="section-text">{t.contentText}</p>
              <div className="stack" style={{ marginTop: 16 }}>
                <label className="label">
                  <span>{t.newIdea}</span>
                  <input
                    className="input"
                    value={state.content.draft.title}
                    onChange={(e) =>
                      setState((prev) => ({
                        ...prev,
                        content: {
                          ...prev.content,
                          draft: { ...prev.content.draft, title: e.target.value }
                        }
                      }))
                    }
                  />
                </label>
                <div className="grid-2">
                  <label className="label">
                    <span>{t.stage}</span>
                    <select
                      className="select"
                      value={state.content.draft.stage}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          content: {
                            ...prev.content,
                            draft: { ...prev.content.draft, stage: e.target.value }
                          }
                        }))
                      }
                    >
                      <option value="idea">{t.idea}</option>
                      <option value="draft">{t.draft}</option>
                      <option value="review">{t.review}</option>
                      <option value="published">{t.published}</option>
                    </select>
                  </label>
                  <label className="label">
                    <span>{t.priority}</span>
                    <select
                      className="select"
                      value={state.content.draft.priority}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          content: {
                            ...prev.content,
                            draft: { ...prev.content.draft, priority: e.target.value }
                          }
                        }))
                      }
                    >
                      <option value="low">{t.low}</option>
                      <option value="normal">{t.normal}</option>
                      <option value="high">{t.high}</option>
                    </select>
                  </label>
                </div>
                <button className="button" onClick={addIdea}>{t.addIdea}</button>
              </div>
            </div>

            <div className="card section-card">
              <div className="columns-4">
                {["idea", "draft", "review", "published"].map((stage) => (
                  <div className="soft-card board-col" key={stage}>
                    <h4>{t[stage]}</h4>
                    <div className="stack">
                      {state.content.ideas.filter((item) => item.stage === stage).length ? (
                        state.content.ideas
                          .filter((item) => item.stage === stage)
                          .map((item) => (
                            <div className="idea-card" key={item.id}>
                              <div style={{ fontWeight: 700 }}>{item.title}</div>
                              <div className="meta">
                                <span>{item.priority}</span>
                                <button
                                  className="button-alt"
                                  style={{ padding: "6px 10px", fontSize: 12 }}
                                  onClick={() =>
                                    setState((prev) => ({
                                      ...prev,
                                      content: {
                                        ...prev.content,
                                        ideas: prev.content.ideas.filter((idea) => idea.id !== item.id)
                                      }
                                    }))
                                  }
                                >
                                  {t.delete}
                                </button>
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="empty">{t.empty}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {state.activeTab === "legend" && (
          <section className="legend-grid">
            <div className="card section-card">
              <h3>{t.legend}</h3>
              <p className="section-text">{t.legendText}</p>
              <div className="stack" style={{ marginTop: 16 }}>
                {[
                  [t.source1, "https://es-d-2371997820260410-019d699d-2acf-7cb7-a7a3-d2fd4f9ce559.codepen.dev/#modules"],
                  [t.source2, "https://es-d-5697283320260328-019d248d-5848-7531-8d9d-23699aa47d61.codepen.dev/"],
                  [t.source3, "https://es-d-1647531020260404-019d4e21-afd1-7808-abf5-d9c88b726df2.codepen.dev/"],
                  [t.source4, "https://es-d-5697283320260328-019d0c67-c913-7756-bbca-4e6b932229a1.codepen.dev/"],
                  [t.source5, "https://es-d-4875001020260401-019d38a5-0907-75f2-b1ab-22d6a511a9b2.codepen.dev/"]
                ].map(([label, href]) => (
                  <a className="soft-card legend-link" key={href} href={href} target="_blank" rel="noreferrer">
                    <div style={{ fontWeight: 700 }}>{label}</div>
                    <div className="url">{href}</div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="footer">{t.footer}</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FusionStudioApp />);
