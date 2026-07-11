/**
 * Bibliothèque audio / vidéo NotebookLM — révision immersive.
 * Fichiers servis via media/notebook-lm/ (junction locale vers le dossier source).
 * 1 piste principale + bonus par chapitre quand disponibles.
 */
const AUDIO_LIBRARY = {
  version: 1,
  basePath: 'media/notebook-lm/',
  artist: 'Gériatrie · NotebookLM',
  albums: [
    {
      id: 'alb-ch1',
      chapter: 'ch1',
      title: 'Vieillissement',
      subtitle: 'Comprendre le corps qui change',
      color: '#0891B2',
      cover: 'images/chapters/ai-heroes/ch1-aging.jpg',
      coverFallback: 'images/notebooks/ch01-biology/p01.jpg',
      notebookId: 'nb-ch01-biology',
      tracks: [
        {
          id: 'tr-ch1-main',
          role: 'main',
          kind: 'audio',
          title: 'Pourquoi vieillir n’est pas une maladie',
          file: 'Pourquoi_vieillir_n_est_pas_une_maladie (1).m4a',
          durationHint: 951
        },
        {
          id: 'tr-ch1-video',
          role: 'video',
          kind: 'video',
          title: 'Gériatrie et vieillissement',
          file: 'Gériatrie_et_Vieillissement (1).mp4',
          durationHint: 419
        }
      ]
    },
    {
      id: 'alb-ch2',
      chapter: 'ch2',
      title: 'Raisonnement gériatrique',
      subtitle: 'Méthode EVC & pièges diagnostiques',
      color: '#059669',
      cover: 'images/chapters/ai-heroes/ch2-complex.jpg',
      coverFallback: 'images/notebooks/ch02-architecture/p01.jpg',
      notebookId: 'nb-ch02-architecture',
      tracks: [
        {
          id: 'tr-ch2-main',
          role: 'main',
          kind: 'audio',
          title: 'Maîtriser le raisonnement aux EVC',
          file: 'Maîtriser_le_raisonnement_gériatrique_aux_EVC.m4a',
          durationHint: 1066
        },
        {
          id: 'tr-ch2-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Les pièges du diagnostic en gériatrie',
          file: 'Les_pièges_du_diagnostic_en_gériatrie.m4a',
          durationHint: 996
        },
        {
          id: 'tr-ch2-bonus2',
          role: 'bonus',
          kind: 'audio',
          title: 'Pourquoi le corps âgé nous trompe',
          file: 'Pourquoi_le_corps_âgé_nous_trompe.m4a',
          durationHint: 921
        }
      ]
    },
    {
      id: 'alb-ch3',
      chapter: 'ch3',
      title: 'Autonomie',
      subtitle: 'ADL, IADL, dépendance & hôpital',
      color: '#0D9488',
      cover: 'images/chapters/educational/ch3-1.jpg',
      coverFallback: 'images/notebooks/ch03-autonomie/p01.jpg',
      notebookId: 'nb-ch03-autonomie',
      tracks: [
        {
          id: 'tr-ch3-main',
          role: 'main',
          kind: 'audio',
          title: 'Quinze secondes pour évaluer l’autonomie',
          file: 'Quinze_secondes_pour_évaluer_votre_autonomie.m4a',
          durationHint: 1348
        },
        {
          id: 'tr-ch3-video',
          role: 'video',
          kind: 'video',
          title: 'Autonomie et dépendance',
          file: 'Autonomie_et_Dépendance.mp4',
          durationHint: 397
        },
        {
          id: 'tr-ch3-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Quand l’hôpital aggrave la dépendance',
          file: 'Quand_l_hôpital_aggrave_la_dépendance.m4a',
          durationHint: 1393
        }
      ]
    },
    {
      id: 'alb-ch4',
      chapter: 'ch4',
      title: 'Éthique & protection',
      subtitle: 'Claeys-Leonetti, tutelle, dignité',
      color: '#DC2626',
      cover: 'images/chapters/ai-heroes/ch4-ethics.jpg',
      coverFallback: 'images/notebooks/ch04-ethique/p01.jpg',
      notebookId: 'nb-ch04-ethique',
      tracks: [
        {
          id: 'tr-ch4-main',
          role: 'main',
          kind: 'audio',
          title: 'Éthique médicale · loi Claeys-Leonetti',
          file: 'L_éthique_médicale_selon_la_loi_Claeys-Leonetti.m4a',
          durationHint: 925
        },
        {
          id: 'tr-ch4-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Maître de son corps malgré la tutelle',
          file: 'Maître_de_son_corps_malgré_la_tutelle.m4a',
          durationHint: 790
        }
      ]
    },
    {
      id: 'alb-ch5',
      chapter: 'ch5',
      title: 'Troubles sensoriels',
      subtitle: 'Vision, audition & autonomie',
      color: '#0284C7',
      cover: 'images/chapters/educational/ch5-1.jpg',
      coverFallback: 'images/notebooks/ch05-sensory/p01.jpg',
      notebookId: 'nb-ch05-sensory',
      tracks: [
        {
          id: 'tr-ch5-main',
          role: 'main',
          kind: 'audio',
          title: 'Vision, audition et autonomie',
          file: 'Vision_audition_et_autonomie_en_gériatrie.m4a',
          durationHint: 920
        }
      ]
    },
    {
      id: 'alb-ch6',
      chapter: 'ch6',
      title: 'Ostéoporose',
      subtitle: 'Fractures, pièges, décision EVC',
      color: '#047857',
      cover: 'images/chapters/ai-heroes/ch6-bone.jpg',
      coverFallback: 'images/notebooks/ch06-osteo/p01.jpg',
      notebookId: 'nb-ch06-osteo',
      tracks: [
        {
          id: 'tr-ch6-main',
          role: 'main',
          kind: 'audio',
          title: 'Ostéoporose gériatrique et pièges cliniques',
          file: 'L_ostéoporose_gériatrique_et_ses_pièges_cliniques.m4a',
          durationHint: 1050
        },
        {
          id: 'tr-ch6-video',
          role: 'video',
          kind: 'video',
          title: 'Décision ostéoporose · EVC',
          file: 'Décision_Ostéoporose_EVC.mp4',
          durationHint: 406
        }
      ]
    },
    {
      id: 'alb-ch7',
      chapter: 'ch7',
      title: 'Arthrose',
      subtitle: 'Pièges EVC & continuum vieillissement',
      color: '#0369A1',
      cover: 'images/chapters/educational/ch7-1.jpg',
      coverFallback: 'images/notebooks/ch07-arthrose/p01.jpg',
      notebookId: 'nb-ch07-arthrose',
      tracks: [
        {
          id: 'tr-ch7-main',
          role: 'main',
          kind: 'audio',
          title: 'Pièges de l’arthrose gériatrique aux EVC',
          file: 'Pièges_de_l_arthrose_gériatrique_aux_EVC.m4a',
          durationHint: 842
        },
        {
          id: 'tr-ch7-video',
          role: 'video',
          kind: 'video',
          title: 'Vieillissement à arthrose',
          file: 'Vieillissement_à_Arthrose.mp4',
          durationHint: 429
        }
      ]
    },
    {
      id: 'alb-ch8',
      chapter: 'ch8',
      title: 'Douleur',
      subtitle: 'Douleur invisible du sujet âgé',
      color: '#BE123C',
      cover: 'images/chapters/ai-heroes/ch8-pain.jpg',
      coverFallback: 'images/notebooks/ch08-douleur/p01.jpg',
      notebookId: 'nb-ch08-douleur',
      tracks: [
        {
          id: 'tr-ch8-main',
          role: 'main',
          kind: 'audio',
          title: 'Traquer la douleur invisible des aînés',
          file: 'Traquer_la_douleur_invisible_des_aînés.m4a',
          durationHint: 891
        }
      ]
    },
    {
      id: 'alb-ch9',
      chapter: 'ch9',
      title: 'Troubles neurocognitifs',
      subtitle: 'Plainte mnésique, mécanismes, TNC',
      color: '#0E7490',
      cover: 'images/chapters/ai-heroes/ch9-cognitive.jpg',
      coverFallback: 'images/notebooks/ch09-neuro/p01.jpg',
      notebookId: 'nb-ch09-neuro',
      tracks: [
        {
          id: 'tr-ch9-main',
          role: 'main',
          kind: 'audio',
          title: 'Mécanismes des troubles neurocognitifs majeurs',
          file: 'Les_mécanismes_des_troubles_neurocognitifs_majeurs.m4a',
          durationHint: 1111
        },
        {
          id: 'tr-ch9-video',
          role: 'video',
          kind: 'video',
          title: 'Plainte mnésique et TNC',
          file: 'Plainte_Mnésique_et_TNC.mp4',
          durationHint: 403
        }
      ]
    },
    {
      id: 'alb-ch10',
      chapter: 'ch10',
      title: 'Dépression',
      subtitle: 'Formes masquées & dépistage',
      color: '#64748B',
      cover: 'images/chapters/educational/ch10-1.jpg',
      coverFallback: 'images/notebooks/ch10-mood/p01.jpg',
      notebookId: 'nb-ch10-mood',
      tracks: [
        {
          id: 'tr-ch10-main',
          role: 'main',
          kind: 'audio',
          title: 'La dépression masquée des seniors',
          file: 'La_dépression_masquée_des_seniors.m4a',
          durationHint: 1053
        },
        {
          id: 'tr-ch10-video',
          role: 'video',
          kind: 'video',
          title: 'Dépression gériatrique',
          file: 'Dépression_Gériatrique.mp4',
          durationHint: 408
        }
      ]
    },
    {
      id: 'alb-ch11',
      chapter: 'ch11',
      title: 'Syndrome confusionnel',
      subtitle: 'Urgence vitale · delirium',
      color: '#7C3AED',
      cover: 'images/chapters/ai-heroes/ch11-delirium.jpg',
      coverFallback: 'images/notebooks/ch11-delirium/p01.jpg',
      notebookId: 'nb-ch11-delirium',
      tracks: [
        {
          id: 'tr-ch11-main',
          role: 'main',
          kind: 'audio',
          title: 'Urgence vitale du syndrome confusionnel',
          file: 'L_urgence_vitale_du_syndrome_confusionnel_gériatrique.m4a',
          durationHint: 807
        },
        {
          id: 'tr-ch11-video',
          role: 'video',
          kind: 'video',
          title: 'Le syndrome confusionnel',
          file: 'Le_syndrome_confusionnel.mp4',
          durationHint: 439
        }
      ]
    },
    {
      id: 'alb-ch12',
      chapter: 'ch12',
      title: 'Chutes & marche',
      subtitle: 'Jamais banale · EVC',
      color: '#EA580C',
      cover: 'images/chapters/ai-heroes/ch12-falls.jpg',
      coverFallback: 'images/notebooks/ch12-falls/p01.jpg',
      notebookId: 'nb-ch12-chutes',
      tracks: [
        {
          id: 'tr-ch12-main',
          role: 'main',
          kind: 'audio',
          title: 'La chute n’est jamais banale',
          file: 'La_chute_n_est_jamais_banale.m4a',
          durationHint: 843
        },
        {
          id: 'tr-ch12-video',
          role: 'video',
          kind: 'video',
          title: 'Chute gériatrique · EVC',
          file: 'Chute_Gériatrique___EVC.mp4',
          durationHint: 360
        },
        {
          id: 'tr-ch12-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Quinze secondes pour éviter la chute',
          file: 'Quinze_secondes_pour_éviter_la_chute.m4a',
          durationHint: 1361
        }
      ]
    },
    {
      id: 'alb-ch13',
      chapter: 'ch13',
      title: 'Alitement & escarres',
      subtitle: 'Urgence gériatrique absolue',
      color: '#B45309',
      cover: 'images/chapters/educational/ch13-1.jpg',
      coverFallback: 'images/notebooks/ch13-immobility/p01.jpg',
      notebookId: 'nb-ch13-immobilisation',
      tracks: [
        {
          id: 'tr-ch13-main',
          role: 'main',
          kind: 'audio',
          title: 'L’alitement est une urgence gériatrique',
          file: 'L_alitement_est_une_urgence_gériatrique_absolue.m4a',
          durationHint: 1417
        },
        {
          id: 'tr-ch13-video',
          role: 'video',
          kind: 'video',
          title: 'Danger de l’alitement',
          file: 'Danger_de_l_Alitement.mp4',
          durationHint: 419
        },
        {
          id: 'tr-ch13-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Mouvement et nutrition contre les escarres',
          file: 'Mouvement_et_nutrition_contre_les_escarres.m4a',
          durationHint: 90
        },
        {
          id: 'tr-ch13-video2',
          role: 'bonus',
          kind: 'video',
          title: 'Analyse · les escarres',
          file: 'Analyse___Les_Escarres.mp4',
          durationHint: 116
        }
      ]
    },
    {
      id: 'alb-ch14',
      chapter: 'ch14',
      title: 'Nutrition & sarcopénie',
      subtitle: 'Dénutrition, muscle, pathologie silencieuse',
      color: '#16A34A',
      cover: 'images/chapters/ai-heroes/ch14-nutrition.jpg',
      coverFallback: 'images/notebooks/ch14-nutrition/p01.jpg',
      notebookId: 'nb-ch14-nutrition',
      tracks: [
        {
          id: 'tr-ch14-main',
          role: 'main',
          kind: 'audio',
          title: 'Dénutrition et sarcopénie du sujet âgé',
          file: 'Dénutrition_et_sarcopénie_du_sujet_âgé.m4a',
          durationHint: 1379
        },
        {
          id: 'tr-ch14-video',
          role: 'video',
          kind: 'video',
          title: 'La pathologie silencieuse',
          file: 'La_pathologie_silencieuse.mp4',
          durationHint: 435
        }
      ]
    },
    {
      id: 'alb-ch15',
      chapter: 'ch15',
      title: 'Incontinence',
      subtitle: 'Au-delà des couches',
      color: '#0891B2',
      cover: 'images/chapters/educational/ch15-1.jpg',
      coverFallback: 'images/notebooks/ch15-continence/p01.jpg',
      notebookId: 'nb-ch15-urinary',
      tracks: [
        {
          id: 'tr-ch15-main',
          role: 'main',
          kind: 'audio',
          title: 'Incontinence gériatrique au-delà des couches',
          file: 'L_incontinence_gériatrique_au-delà_des_couches.m4a',
          durationHint: 1272
        },
        {
          id: 'tr-ch15-video',
          role: 'video',
          kind: 'video',
          title: 'Troubles vésico-sphinctériens',
          file: 'Troubles_Vésico-Sphinctériens.mp4',
          durationHint: 501
        }
      ]
    },
    {
      id: 'alb-ch16',
      chapter: 'ch16',
      title: 'Prescription gériatrique',
      subtitle: 'Iatrogénie, IC, déprescription',
      color: '#4F46E5',
      cover: 'images/chapters/ai-heroes/ch16-prescribing.jpg',
      coverFallback: 'images/notebooks/ch16-prescribing/p01.jpg',
      notebookId: 'nb-ch16-prescribing',
      tracks: [
        {
          id: 'tr-ch16-main',
          role: 'main',
          kind: 'audio',
          title: 'Le paradoxe mortel des médicaments',
          file: 'Le_paradoxe_mortel_des_médicaments_pour_seniors.m4a',
          durationHint: 1016
        },
        {
          id: 'tr-ch16-video',
          role: 'video',
          kind: 'video',
          title: 'Prescription gériatrique',
          file: 'Prescription_Gériatrique.mp4',
          durationHint: 534
        },
        {
          id: 'tr-ch16-bonus',
          role: 'bonus',
          kind: 'audio',
          title: 'Insuffisance cardiaque, caméléon gériatrique',
          file: 'L_insuffisance_cardiaque_ce_caméléon_gériatrique.m4a',
          durationHint: 970
        }
      ]
    },
    {
      id: 'alb-ch17',
      chapter: 'ch17',
      title: 'Soins palliatifs',
      subtitle: 'Dignité, sédation, cadre français',
      color: '#9333EA',
      cover: 'images/chapters/ai-heroes/ch17-palliative.jpg',
      coverFallback: 'images/notebooks/ch17-palliative/p01.jpg',
      notebookId: 'nb-ch17-palliatif',
      tracks: [
        {
          id: 'tr-ch17-main',
          role: 'main',
          kind: 'audio',
          title: 'Sédation profonde et dignité',
          file: 'Sédation_profonde_et_dignité_en_gériatrie.m4a',
          durationHint: 90
        },
        {
          id: 'tr-ch17-video',
          role: 'video',
          kind: 'video',
          title: 'Soins palliatifs en France',
          file: 'Soins_palliatifs_en_France.mp4',
          durationHint: 439
        }
      ]
    }
  ]
};

// Bonus transversal non rattaché strictement
AUDIO_LIBRARY.extras = [
  {
    id: 'tr-extra-soigner',
    albumId: 'alb-ch2',
    chapter: 'ch2',
    role: 'bonus',
    kind: 'audio',
    title: 'Soigner les seniors sans les briser',
    file: 'Soigner_les_seniors_sans_les_briser.m4a',
    durationHint: 1189,
    cover: 'images/chapters/ai-heroes/ch2-complex.jpg',
    color: '#059669',
    notebookId: 'nb-ch02-clinical'
  },
  {
    id: 'tr-extra-raisonnement',
    albumId: 'alb-ch2',
    chapter: 'ch2',
    role: 'bonus',
    kind: 'audio',
    title: 'Réussir le raisonnement aux EVC',
    file: 'Réussir_le_raisonnement_aux_EVC_de_gériatrie.m4a',
    durationHint: 1160,
    cover: 'images/chapters/ai-heroes/ch2-complex.jpg',
    color: '#059669',
    notebookId: 'nb-ch02-architecture'
  }
];

if (typeof window !== 'undefined') {
  window.AUDIO_LIBRARY = AUDIO_LIBRARY;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AUDIO_LIBRARY };
}
