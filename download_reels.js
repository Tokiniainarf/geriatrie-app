const https = require('https');
const fs = require('fs');
const path = require('path');

const reels = [
  {
    "id": "reel-01",
    "title": "Reel 1 : Vieillissement & Fragilité de Fried",
    "filename": "reel_01_vieillissement_fragilite_fried.mp4",
    "duration": "1:17",
    "theme": "Physiopathologie du vieillissement (Modèle 1+2+3 de Bouchon) & Phénotype de Fried",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX-vrPNVq9eWeYG_rA9Bpukim8BSbt8i76rnX465nU7W9cDOSpcK53myQKzyuGyUCXyEiC9tmlT6tPmdpkoXt09uwfdRn_l1y-ObrG23sAdZLc3uZw4NjIjY_FJqQG-nHQF4w6Zc9tL24f_wwUFlmhcWbmF8TUI=mm,15,22?authuser=0"
  },
  {
    "id": "reel-02",
    "title": "Reel 2 : Autonomie : ADL vs IADL",
    "filename": "reel_02_autonomie_adl_iadl.mp4",
    "duration": "1:17",
    "theme": "Évaluation de la dépendance : Katz ADL (élémentaires) vs Lawton IADL (instrumentales)",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX9ZNLeeTEHEBQJfMIJMeIIHOOrS9-LmyF7mh-b8gThr4b_EVdsiuZobZCR3dxtQbvZpyUOqCOncUkqwaHFEnsRrGWgsmEuwAZ_4qQBJTL889s0Up0S2CVvwAHNGayM6ViCVhjpE-zRYy1tqZ3EQrn78OSFhK2A=mm,15,22?authuser=0"
  },
  {
    "id": "reel-03",
    "title": "Reel 3 : Dépendance Iatrogène à l'Hôpital",
    "filename": "reel_03_dependance_iatrogene_hopital.mp4",
    "duration": "1:07",
    "theme": "Prévention de la perte d'autonomie liée à l'hospitalisation selon les recommandations HAS",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX8NIxdJBtTdI0XdAX_QUDweXsIg0WssvPribMp9IgOEHCk13nlz_Z_Xzq6Ur8kIzMm04TMiiZfpCCWjt6jWYy1hI1ZQsGrfwVJoSqojclTm4aez-ed34LDP5xESKQQUuaQ36qldcahYfTVnukTWbEYKleAENeQ=mm,15,22?authuser=0"
  },
  {
    "id": "reel-04",
    "title": "Reel 4 : Alerte Ostéoporose & T-Score",
    "filename": "reel_04_osteoporose_tscore.mp4",
    "duration": "1:09",
    "theme": "Diagnostic ostéodensitométrique, fractures sévères/non sévères et prise en charge",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX-Vx2B3gL8G39WWyupyBIhliW02-w5GznG-I0JQzhG1PtbMQSDvdG9ZISj2MQdneieEHDBbSRhT1jWpaGI4f7anY2gjsAFVxKqSsEf7Gvf9ynpId5coLdEg2LDE0Ej_WTybXz5Ir3kObI_-SYoHh2ymKNbADu0=mm,15,22?authuser=0"
  },
  {
    "id": "reel-05",
    "title": "Reel 5 : Les Pièges de l'Arthrose Gériatrique",
    "filename": "reel_05_arthrose_geriatrique_pieges.mp4",
    "duration": "0:58",
    "theme": "Gonarthrose / Coxarthrose destructrice rapide et contre-indications absolues des AINS",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_I1_yP3Lu0aIsLv4Nmj_isnehqLJ55XKdoDMpyoY7ZcsRhXk-6zFv4ckv9xowjaqX1c8sSCiGtqBn9FiCcycem7s_O3joLrQG9s4QdRS_GHvUOTW4OATaT1L9RWsNCEbTaLWFJDEDLD3vF1xyjro3Y3XKfQ4M=mm,15,22?authuser=0"
  },
  {
    "id": "reel-06",
    "title": "Reel 6 : Repérer la Douleur Invisible",
    "filename": "reel_06_douleur_invisible_algoplus_dn4.mp4",
    "duration": "1:00",
    "theme": "Évaluation de la douleur chez le patient non communicant (Algoplus) et douleur neuropathique (DN4)",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX9Gasf26iOjBD8zaIuDr_FAUG0nZffraF-JD2_Qj9g_r-FixpzdpZADdY6qQv3zUswOnqTosrDXGt5LhMWjxSfQ4QAukAmqYPI2wVl4FPeVGFUWmoHWopgh0xce9AuxMITGhPuprAvuGHHMBUxhtkavWWkEmA=mm,15,22?authuser=0"
  },
  {
    "id": "reel-07",
    "title": "Reel 7 : Diagnostic des TNC : Léger vs Majeur",
    "filename": "reel_07_tnc_leger_vs_majeur.mp4",
    "duration": "1:05",
    "theme": "Différenciation clinique des Troubles Neurocognitifs (TNC) légers vs majeurs, Alzheimer, Lewy, Vasculaire",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX91MCqmCqCkG9BG8vFSc9wR25DCm0CyUmB_bk3P_dQPzxNoILbp1KhZnkeg6f_FXdj7aV_BAhg8nwApyy7ZRJoZ0T2fkgMzYenRxq2ULymhOEWSpxyELyGsAEQWvGtYk0UHKf0DoItMjrFQwtn8AOc2eWU8t1U=mm,15,22?authuser=0"
  },
  {
    "id": "reel-08",
    "title": "Reel 8 : Dépression Masquée & Score RUD",
    "filename": "reel_08_depression_masquee_score_rud.mp4",
    "duration": "1:08",
    "theme": "Sémiologie atypique de la dépression du sujet âgé, risque suicidaire (RUD) et maniement des ISRS",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX9rqRDSOIIgT18aQycMSep3Q6Az5tgvInMHuYm2vd0zDNSKjU-jPWTkYmt6d7akS9OulyVaeCJgSQekCL1n76M43P6xYykRZzmGOD4889qx-JSxi0J3h7R40DLMeM1BKJpBh6mVfCb9zqAYPLNMvQKKXPqEqK8=mm,15,22?authuser=0"
  },
  {
    "id": "reel-09",
    "title": "Syndrome Confusionnel : Urgence & Pièges",
    "filename": "reel_09_syndrome_confusionnel_urgences_pieges.mp4",
    "duration": "1:10",
    "theme": "Critères diagnostiques DSM-5, échelle CAM, recherche étiologique systématique et éviction des contentions",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX-pyLUWUG8Nnsb8reahcm-io9J_nPRZMLjtl4wVGg8WXJasDXR8-vTKY0VRPsX-2oGSD_vpTEds4I4bgQEDdiVYdSj2TFq9zND6t517t3c9BCBWivH_xNNKxkLg5_bG_j5WiYFbUTbFwRhbIZvAdXjsA6r0Kzc=mm,15,22?authuser=0"
  },
  {
    "id": "reel-10",
    "title": "La Chute : Risques & Syndrome Post-Chute",
    "filename": "reel_10_chute_risques_syndrome_post_chute.mp4",
    "duration": "1:15",
    "theme": "Évaluation motrice (TUG, appui unipodal), urgence du syndrome post-chute et rhabdomyolyse",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX9nabA-k6BcF173zYtaUCnL9jADn5bSuK5WDFnec-K6gPykgSl2AuN81uZjGq2w-yzbc3fTpPfpUZKgETz7yS1blDqAJH5MICT9hGISJCjZOyiC5H4Xtg-CO7pnxmuOVwnY6k9d_xB4vVlS950c8S37g7keuQ=mm,15,22?authuser=0"
  },
  {
    "id": "reel-11",
    "title": "Reel 11 : Immobilisation & Escarres",
    "filename": "reel_11_immobilisation_escarres_4_stades.mp4",
    "duration": "1:07",
    "theme": "Échelles Norton / Braden, physiopathologie d'ischémie de pression, 4 stades et nursing de prévention",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_TZTWMBfUCEdSkwPHz2M7mOic9hSL7WcVnYfFXB26ze2RdMwfAbgiR2vRSLj-Uiz2xTju00G87TSLPkdjmEAHiM-gkVul1lwv3ty74BqJUeudG7lrjjukNqRLtg4XskCzd_kSweQim1MjXpzc13ol1O6vSjHY=mm,15,22?authuser=0"
  },
  {
    "id": "reel-12",
    "title": "Reel 12 : Nouveaux Critères HAS Dénutrition",
    "filename": "reel_12_nouveaux_criteres_has_denutrition.mp4",
    "duration": "1:13",
    "theme": "Recommandations HAS 2021 (≥70 ans), seuils IMC < 22, albuminémie < 35 g/L et diagnostic de la sarcopénie",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_kN09fn4YU7Ane8l38zBBSehLikXRlYko8WHu2Wqf0crang3jAjd_jr1hK0mcaQL4eE9LWYt07OGA5UlH4_GSHQ8ZcFSlj0vuRgRYRN2RQNeRPV8KB_2csZDcyU9NDUtIAYLQ8oLeckN6qpM3y80QPY53POVU=mm,15,22?authuser=0"
  },
  {
    "id": "reel-13",
    "title": "Reel 13 : Incontinence & DIAPPERS",
    "filename": "reel_13_incontinence_diappers_globe.mp4",
    "duration": "1:11",
    "theme": "Incontinence aiguë transitoire (acronyme DIAPPERS), rétention aiguë d'urines et miction par regorgement",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX8sNRaI1bf9QOmm8UJ3dwf2_2pf0g2NH50mXi_Kmf3ftDin6xI3uZZSwIa85bCuAr21zdqLhsfSPZkaomCULS6UbhgCjqC3c_n68NeNVoAflknoDXx09CPtM2rPAB-GOqXZAsij1uYsza_3olihIo6nNAksqH0=mm,15,22?authuser=0"
  },
  {
    "id": "reel-14",
    "title": "Reel 14 : STOPP-START & Surdosage AVK",
    "filename": "reel_14_stopp_start_surdosage_avk.mp4",
    "duration": "1:18",
    "theme": "Sécurisation médicamenteuse, règles STOPP-START et algorithme d'urgence du surdosage en AVK",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_bz_v8Pt6LGNs8zLeyBo406TqCuEnV3Y_2wxCUGtEYvYawLHYWifAhlN8W1QzKAX9gaU32zuqITKppoCjrGmH4Q_Se2LP002tDVIxBQ3PAasqCA1zTusI44LJkzBE3bg3pA5TLrj8rkXlNkIj5hBK2FQfM7Vw=mm,15,22?authuser=0"
  },
  {
    "id": "reel-15",
    "title": "Lécanémab & Surveillance des ARIA",
    "filename": "reel_15_lecanemab_surveillance_aria.mp4",
    "duration": "1:17",
    "theme": "Recommandations SFGG 2024-2025 : critères d'éligibilité, CI absolues (APOE4, AVK) et protocole IRM anti-ARIA",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX8DlUJrWAJCquuTHyPH6vyu55hbzyf0Cs9hxybVoAz5hivkCM7kzHUaM6qHSJHRLsyitmA3dS-QAEVb8tQCCXrexyUM71280x5I84Vz9_ovJFkt3oHp2aPGYuwbLkgdUh7JWomECSd_u6zZOvEOnSDU_ESRXg=mm,15,22?authuser=0"
  },
  {
    "id": "reel-16",
    "title": "Insuffisance Cardiaque : Protocole Hanon",
    "filename": "reel_16_insuffisance_cardiaque_protocole_hanon.mp4",
    "duration": "1:12",
    "theme": "Algorithme d'optimisation cardiogériatrique (HFrEF), 4 piliers, titration à 1/4 de dose et feux rouges d'arrêt",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_TgmqGdS9FcKnKWvxah5ZWR1zZFbDAYxExCPiZsBMtJl9JLh1geeVHdb4iSRJr1PX2uNF8PMCmTjCPDhbU_c1bI_f2vqkNoWUiswnOP_aNJ-Qv0QnnKzFc-XHk-aiS8uL9Ly4WBW-BqJRWQR_R3jvDAwWd0A=mm,15,22?authuser=0"
  },
  {
    "id": "reel-17",
    "title": "Exacerbation BPCO : Choix Antibiotique",
    "filename": "reel_17_exacerbation_bpco_choix_antibiotique.mp4",
    "duration": "1:23",
    "theme": "Guide HAS parcours de soins BPCO : critères d'hospitalisation, corticothérapie orale et antibiothérapie ciblée",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX_KR8HC8kjyqtr9VgV0oGMO_HqeQr85Z1yAyw2q2AbRZ4iAmP1yGM-qBvrNgwT4ywwgSiHPsGHDzN7YG-Xxx-O0DRbMzfsDMHVTs2wDCXMjSCIgm24gqguNIpTkxrbexujy7_2LhHA6KZl_g22lX1ROxukAkA=mm,15,22?authuser=0"
  },
  {
    "id": "reel-18",
    "title": "Comment la grille AGGIR évalue l'autonomie",
    "filename": "reel_18_grille_aggir_evaluation_autonomie.mp4",
    "duration": "1:04",
    "theme": "Mesure médico-sociale de l'autonomie : 10 variables discriminantes, 7 illustratives et GIR 1 à 6",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX99wss1dp9qTeQFKUunfHHX5j1bhofk_4LpotacWSwP85vIltxR_-Bys4by55c0cuPtYkqeeZ9Dq3bycCQXDRPM2XrnKyCOEi-qw0HbumSrn_D89e2o0Cdn85uON-JCeEYV_9ey3v1JyQcdzYZFY14FCEwJjTs=mm,15,22?authuser=0"
  },
  {
    "id": "reel-19",
    "title": "Comment diagnostiquer la dénutrition gériatrique",
    "filename": "reel_19_diagnostic_denutrition_geriatrique.mp4",
    "duration": "1:20",
    "theme": "Critères phénotypiques et étiologiques HAS 2021 de la dénutrition chez le sujet âgé",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX__OF4_Cqwewv-cdtk_556M-zRYY-61agzWfPbgLqJVSnDJPn-0fpRJ8DKRXJaM443bYx_i9VuTLxzdbKPLha4s2p2zxQ1T15YVVUcrw9E_uee96v_dwk_KFDR5EKuiRKJ6BwQxeYepD5D2t72PtRGiTggh8gY=mm,15,22?authuser=0"
  },
  {
    "id": "reel-20",
    "title": "Délirium EVC Gériatrie (Aperçu Vidéo Complet)",
    "filename": "video_20_delirium_evc_geriatrie_apercu.mp4",
    "duration": "2:15",
    "theme": "Aperçu vidéo approfondi : diagnostic positif, étiologies médicamenteuses et prise en charge du delirium",
    "url": "https://lh3.googleusercontent.com/notebooklm/AKYWMX90g2zjV7jZ02m5TvZ7RdpEhR7BKg5w_bzwV2lAPLlP9Z0c53pQnG23ocWFqggNz5b40ZBtkraHFIAcgBmWCyZcM7YLlF5Y0ismkBzExs8Ec1ewH0uMBb5MeGyxoRDftwb7m-EJYgJx-rOiP-NGE1iLlzXT33g=mm,15,22?authuser=0"
  }
];

const targetDir = path.join(__dirname, 'images', 'feed', 'videos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed with status: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${reels.length} reels into ${targetDir}...`);
  for (let i = 0; i < reels.length; i++) {
    const reel = reels[i];
    const outPath = path.join(targetDir, reel.filename);
    console.log(`[${i+1}/${reels.length}] Downloading ${reel.title} -> ${reel.filename}...`);
    try {
      await downloadFile(reel.url, outPath);
      const stat = fs.statSync(outPath);
      console.log(`✓ Done: ${reel.filename} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`✗ Error downloading ${reel.title}:`, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();
