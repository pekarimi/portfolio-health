import React, { useEffect } from 'react';
import { ArrowLeft, Users, Stethoscope, PenTool, ShieldCheck, MessageSquare, Cpu, ClipboardCheck } from 'lucide-react';
import './iSonoHealthCaseStudy.css';
import './AtusaDesktopCaseStudy.css';

const steps = [
  {
    badge: 'Worklist',
    title: 'A reading queue built around time to read',
    text: 'Radiologists start from a worklist of studies waiting to be read. Priority, time-to-read countdowns and reading status sit in the first columns, so the most urgent case is always obvious.',
    decisions: [
      ['Configurable columns', 'Each reader chooses and orders the columns they need.'],
      ['Reading locks', 'A case locks when another reader opens it, so no study is read twice.'],
      ['Actions in one menu', 'Lock, export, share and archive are grouped in a single row menu.']
    ],
    image: '/images/atusa/worklist.jpg',
    alt: 'Radiologist worklist with priority, status and time-to-read columns',
    caption: 'Worklist with priority, status and time-to-read countdown'
  },
  {
    badge: 'Acquisition',
    title: 'Guided setup and a coverage check before the patient leaves',
    text: 'The operator answers a short guided setup (breast side, cup size, imaging mode, nipple position) and the scanner sweeps the whole breast. When the sweep ends, a clock-face coverage map shows whether every region was captured.',
    decisions: [
      ['Coverage at a glance', 'Gaps show on the clock face, not in a log, so they are caught in the room.'],
      ['Target scan from the gap', 'A missed region can be rescanned right away instead of becoming a callback.'],
      ['Fewer steps', 'Setup questions are grouped so operators click Next less often.']
    ],
    image: '/images/atusa/scan-coverage.jpg',
    alt: 'Scan coverage clock showing all 24 regions captured',
    caption: 'Post-scan coverage map: every region captured, no gaps'
  },
  {
    badge: 'Review',
    title: 'One acquisition, every plane',
    text: 'Coronal, sagittal, transverse and radial views are all slices of the same 3D volume. Panes stay linked, so scrolling or switching the breast side in one pane updates the others.',
    decisions: [
      ['Linked panes', 'Changing the breast side in one pane changes every pane, a rule taken from clinician feedback.'],
      ['Familiar image controls', 'Window and level follow the drag conventions readers already use on their workstations.'],
      ['Prior studies', 'A comparison view lists every earlier study for the same patient.']
    ],
    image: '/images/atusa/review-planes.jpg',
    alt: 'Multi-plane review with coronal view and three linked slice panes',
    caption: 'Multi-plane review with linked coronal, transverse, sagittal and radial panes'
  },
  {
    badge: 'AI findings',
    title: 'Making AI suggestions visibly different from human marks',
    text: 'AI detection and segmentation are drawn in violet; anything a person marked is drawn in teal. AI stays a suggestion: the reader decides what to keep, and AI layers can be shown or hidden at any time.',
    decisions: [
      ['Two colors, two authors', 'Violet always means AI, teal always means a person, on every screen.'],
      ['Reader in control', 'AI findings can be dismissed, and AI overlays toggle on and off.'],
      ['Clear research-use labels', 'AI output is labelled as not for diagnostic use where it applies.']
    ],
    image: '/images/atusa/ai-segmentation.jpg',
    alt: 'AI segmentation outlined in violet on the coronal view',
    caption: 'AI segmentation shown in violet across the volume'
  },
  {
    badge: '3D',
    title: 'Orientation in 3D, then back to the image',
    text: 'A dome view places every finding by clock position and depth, and flags change since the prior study. The rendered 3D view moves from structural detail to tissue-realistic rendering.',
    decisions: [
      ['Orientation first', 'Findings sit on a clock-face dome readers already think in.'],
      ['Jump back to 2D', 'Selecting a finding in 3D opens it in the 2D planes.'],
      ['Change since prior', 'Growth since the last study is highlighted, with an option to show only what changed.']
    ],
    image: '/images/atusa/orientation-dome.jpg',
    alt: 'Orientation dome with three AI detections placed by clock position',
    caption: 'Orientation dome placing findings by clock position and depth'
  },
  {
    badge: 'Implants',
    title: 'Reading breast implants',
    text: 'Plastic surgeons wanted ATUSA for implant follow-up. The Implant view marks suspicious regions directly on the implant shell and summarizes integrity, with the same findings inspectable on a rotating 3D shell.',
    decisions: [
      ['Findings on the shell', 'Suspicious regions are marked where they are on the implant.'],
      ['Implant date captured at the source', 'Any control that records an implant asks for its placement date at that moment.'],
      ['Same review tools', 'Annotation and measurement work the same as in Review.']
    ],
    image: '/images/atusa/implant-map.jpg',
    alt: 'Implant view with findings marked on the implant shell',
    caption: 'Implant view with suspicious regions marked on the shell'
  },
  {
    badge: 'Report',
    title: 'From findings to a signed report',
    text: 'Every finding opens into its detail with the assessment scale alongside. A progress bar shows how many findings are still open, and templates with keyboard shortcuts speed up the impression.',
    decisions: [
      ['Nothing lost from the old app', 'A line-by-line audit of the legacy report made sure every item carried over.'],
      ['Visible progress', 'Readers see how many findings remain before they can sign.'],
      ['Templates and shortcuts', 'Standard impressions insert in one keystroke.']
    ],
    image: '/images/atusa/report.jpg',
    alt: 'Report screen listing findings with thumbnails and report status',
    caption: 'Report with findings, status checklist and sign-off'
  }
];

const AtusaDesktopCaseStudy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study isono-case-study atusa-case-study">
      <nav className="case-nav">
        <div className="container">
          <button onClick={onBack} className="back-button">
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </nav>

      <section className="hero-image-section isono-hero">
        <div className="hero-image-container">
          <img src="/images/atusa/hero-3d-volume.jpg" alt="ATUSA reconstructed 3D breast volume" />
        </div>
      </section>

      <section className="title-section">
        <div className="container">
          <h1 className="case-title">ATUSA Desktop App</h1>
          <p className="case-subtitle">Designing and building a 3D breast ultrasound reading app, from scanner to signed report</p>
          <p className="case-description">
            <span className="atusa-meta"><strong>Company:</strong> iSono Health</span><span className="atusa-meta"><strong>Timeline:</strong> 2025 to present</span><span className="atusa-meta"><strong>My role:</strong> Lead UI/UX designer and human factors engineer</span>
          </p>
        </div>
      </section>

      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <Users className="overview-icon" />
              <h3>Users</h3>
              <p>Radiologists, breast surgeons and sonographers</p>
            </div>
            <div className="overview-item">
              <Stethoscope className="overview-icon" />
              <h3>Product</h3>
              <p>Automated 3D breast ultrasound, FDA-regulated medical device software</p>
            </div>
            <div className="overview-item">
              <PenTool className="overview-icon" />
              <h3>What I did</h3>
              <p>End-to-end UX and UI, plus a working React and Three.js front end</p>
            </div>
            <div className="overview-item">
              <ShieldCheck className="overview-icon" />
              <h3>Standards</h3>
              <p>IEC 62366-1 usability engineering for FDA submission</p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-method-section">
        <div className="container">
          <h2>Challenge</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p>
                ATUSA scans the whole breast in one sweep and reconstructs it as a 3D volume. iSono was replacing its
                legacy desktop software with a new app that radiologists and surgeons could trust for diagnostic
                reading, without losing anything the old app did.
              </p>
              <p>
                I led the design of the new app and built it as working software rather than static mockups. The
                prototype connects to the physical scanner, runs the AI models and reconstructs real scans, and it
                became the foundation of the release codebase the engineering team now ships from.
              </p>
            </div>
            <div className="problem-highlights">
              <h4>Design goals</h4>
              <ul>
                <li>Keep readers oriented in a 3D volume using views they already know</li>
                <li>Catch incomplete scans while the patient is still in the room</li>
                <li>Make AI suggestions clearly distinct from human findings</li>
                <li>Carry over every function of the legacy app</li>
                <li>Meet IEC 62366-1 human factors requirements for FDA submission</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section atusa-video-section">
        <div className="container">
          <div className="feature-intro">
            <h2>Product walkthrough</h2>
            <p>A narrated tour of the reading workflow. AI detections in this demo are illustrative and generated from demonstration data.</p>
          </div>
          <video className="atusa-video" controls preload="metadata" poster="/images/atusa/review-planes.jpg">
            <source src="/videos/atusa-demo.mp4" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </section>

      <section className="feature-section alt-bg">
        <div className="container">
          <div className="feature-intro">
            <h2>The reading workflow</h2>
            <p>Seven connected screens take a study from the worklist to a signed report.</p>
          </div>

          {steps.map((step, i) => (
            <div key={step.badge} className={`workflow-step ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="workflow-content">
                <div className="workflow-text">
                  <div className="step-badge">{step.badge}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <div className="design-decisions">
                    <h4>Key design decisions</h4>
                    <ul>
                      {step.decisions.map(([label, detail]) => (
                        <li key={label}><strong>{label}:</strong> {detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="workflow-image">
                  <img src={step.image} alt={step.alt} />
                  <p className="image-caption">{step.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="feature-intro">
            <h2>How I worked</h2>
          </div>
          <div className="atusa-process-grid">
            <div className="atusa-process-item">
              <MessageSquare className="overview-icon" />
              <h3>Weekly clinical feedback</h3>
              <p>
                I reviewed builds with radiologists, sonographers and surgeons every week and turned their requests
                into design rules, such as linked breast-side switching and workstation-style windowing.
              </p>
            </div>
            <div className="atusa-process-item">
              <Cpu className="overview-icon" />
              <h3>Designing in working code</h3>
              <p>
                I built the front end in React and Three.js with AI coding tools and connected it to the real
                scanner, the reconstruction pipeline and the AI detection models, so design decisions were tested
                on real scans.
              </p>
            </div>
            <div className="atusa-process-item">
              <ClipboardCheck className="overview-icon" />
              <h3>Human factors for FDA</h3>
              <p>
                I wrote the use-related risk analysis and updated the software requirements. I also designed the
                summative usability study and moderate its sessions with reading physicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section alt-bg">
        <div className="container">
          <div className="feature-intro">
            <h2>Outcome</h2>
          </div>
          <div className="problem-highlights atusa-outcomes">
            <ul>
              <li>The prototype became the base of the company's release codebase for the new Desktop App.</li>
              <li>Live acquisitions from the physical scanner stream into the new interface end to end.</li>
              <li>The summative usability study with reading physicians is under way for the FDA submission.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AtusaDesktopCaseStudy;
