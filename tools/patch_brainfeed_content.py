import re, pathlib

P = pathlib.Path('C:/Users/tokin/geriatrie-app/brainfeed.js')
s = P.read_text(encoding='utf-8')

def replace_block(name, new_text):
    global s
    pattern = r'  const ' + re.escape(name) + r' = \[.*?\];'
    s = re.sub(pattern, new_text, s, count=1, flags=re.DOTALL)

def replace_ratio(new_text):
    global s
    s = re.sub(r'  const TYPE_RATIO = \{.*?\};', new_text, s, count=1, flags=re.DOTALL)

replace_block('CITATIONS', '''  const CITATIONS = [
    { text: '« Chez le sujet âgé, tout symptôme atypique doit faire évoquer une infection. »', author: 'Gériatrie clinique' },
    { text: '« Une chute n\\'est jamais un accident : c\\'est toujours un symptôme. »', author: 'HAS' },
    { text: '« Le bon médicament, à la bonne dose, pour le bon patient, au bon moment. »', author: 'Appropriation gériatrique' },
    { text: '« La polymédication est le plus fréquent des facteurs de risque iatrogène. »', author: 'SFGG' },
    { text: '« Le delirium, urgence médicale masquée, a toujours une cause. »', author: 'CAM' },
    { text: '« Dépister la dépression, c\\'est prévenir la démence. »', author: 'GDS-15' },
    { text: '« La prévention de la perte d\\'autonomie passe par la préservation de l\\'activité physique. »', author: 'PAQS' },
    { text: '« La nutrition est un médicament : il faut la prescrire et la réévaluer. »', author: 'MNA' }
  ];''')

replace_block('CHIFFRES_CLES', '''  const CHIFFRES_CLES = [
    { value: 30, unit: '%', line: '... % des personnes de 65 ans et plus chutent au moins une fois par an', source: 'HAS' },
    { value: 15, unit: '%', line: '... % des personnes de 65 ans et plus ont une dépression non diagnostiquée', source: 'GDS-15' },
    { value: 5, unit: ' critères', line: 'Nombre de critères de Fried : au moins ... critères = syndrome de fragilité', source: 'Fried' },
    { value: 0.8, unit: ' m/s', line: 'Seuil de vitesse de marche en dessous duquel on suspecte la fragilité : ... m/s', source: 'Fried' },
    { value: 10, unit: ' s', line: 'Timed Up and Go : plus de ... secondes = risque de chute élevé', source: 'TUG' },
    { value: 24, unit: '/30', line: 'Seuil MMSE interprété comme « normal » chez un sujet jeune instruit : ... /30', source: 'MMSE' },
    { value: 5, unit: '/15', line: 'Seuil GDS-15 à partir duquel on dépiste une dépression : ... /15', source: 'Yesavage' },
    { value: 19, unit: '/28', line: 'Score Tinetti (POMA) inférieur à ... = risque élevé de chute', source: 'Tinetti' },
    { value: 23.5, unit: '/30', line: 'Seuil MNA entre dénutrition et risque de dénutrition : ... /30', source: 'MNA' },
    { value: 5, unit: ' médicaments', line: 'À partir de ... médicaments quotidiens, on parle de polymédication', source: 'SFGG' },
    { value: 30, unit: '%', line: 'Environ ... % des personnes de 65 ans et plus présentent une polymédication', source: 'Institut de la longévité' },
    { value: 50, unit: '%', line: '... % des personnes de 65 ans et plus ont au moins deux affections chroniques', source: 'Comorbidité' },
    { value: 20, unit: '%', line: 'Environ ... % des personnes de 85 ans et plus ont un trouble cognitif déclaré', source: 'Démographie' },
    { value: 6, unit: ' mois', line: 'Perte de poids significative si ≥ 5 % en ... mois ou ≥ 10 % en 6 mois', source: 'Dénutrition' },
    { value: 30, unit: ' mg/j', line: 'Apport protéique recommandé : 1–1,2 g/kg/j, soit environ ... g/j pour un sujet de 60 kg', source: 'Nutrition' }
  ];''')

replace_block('PIEGES_EXAM', '''  const PIEGES_EXAM = [
    { trap: 'Dépression vs démence', explain: 'Une dépression peut imiter une démence (pseudo-démence). Utiliser GDS-15 et rechercher une réversibilité avant d\\'attribuer un diagnostic de démence.' },
    { trap: 'Delirium = agitation seulement', explain: 'Le delirium peut être hypoactif (apathie, somnolence) dans 50 % des cas. Le CAM reste l\\'outil de référence.' },
    { trap: 'Benzodiazépine dans le delirium', explain: 'Les BZD aggravent confusion et chutes. Privilégier la cause, l\\'environnement, et les antipsychotiques de façon très brève si agitation dangereuse.' },
    { trap: 'MMS sans correction âge/éducation', explain: 'Le MMSE brut n\\'est pas interprétable seul. Toujours pondérer selon l\\'âge, la scolarité et le niveau socioculturel.' },
    { trap: 'Chute = accident', explain: 'Toute chute mérite un bilan multifactoriel : orthostatisme, vision, psychotropes, démarche (TUG/Tinetti), environnement.' },
    { trap: 'Douleur sous-estimée', explain: 'En cas d\\'aphasie ou de trouble cognitif, utiliser l\\'ECPA (échelle comportementale) plutôt que l\\'EVA verbale.' },
    { trap: 'Arrêt brutal des psychotropes', explain: 'Le sevrage doit être progressif. L\\'arrêt brutal peut déclencher delirium, insomnie sévère, agitation ou convulsions.' },
    { trap: 'Albumine basse = dénutrition', explain: 'L\\'albuminémie est un marqueur d\\'inflammation et d\\'hydratation. Une hypoalbuminémie n\\'est pas un diagnostic de dénutrition à elle seule.' },
    { trap: 'Polymédication = seulement ≥ 5 médicaments', explain: 'Au-delà de 5 médicaments, le risque d\\'interactions et d\\'effets indésirables augmente exponentiellement. Penser déprescription.' },
    { trap: 'Autonomie préservée = pas de bilan gériatrique', explain: 'Même un GIR 5-6 nécessite un dépistage de la fragilité, du risque de chute, de la dénutrition et de la dépression.' },
    { trap: 'Sédation profonde = euthanasie', explain: 'La SPCMD vise à soulager une souffrance réfractaire. Elle ne vise pas à provoquer la mort.' },
    { trap: 'AOMI = aspirine systématique', explain: 'Le bénéfice de l\\'aspirine secondaire chez le très grand âge doit être pondéré par le risque hémorragique. La balance bénéfice/risque est individuelle.' }
  ];''')

replace_ratio('''  const TYPE_RATIO = {
    memo_jour: 0.18,
    cas_choc: 0.18,
    quiz_flash: 0.20,
    chiffre_cle: 0.14,
    citation: 0.05,
    piege_exam: 0.15,
    flash: 0.05,
    synthesis: 0.03,
    case: 0.02,
    reco: 0.05
  };''')

P.write_text(s, encoding='utf-8')
print('brainfeed.js content updated')
