/* Index exact des figures du manuel. La source de vérité est FIGURE_META. */
var FIGURES_INDEX = Object.entries(FIGURE_META).map(([number, meta]) => ({
  id: `fig-ch${number.replace('.', '-')}`,
  number,
  chapitre: `ch${number.split('.')[0]}`,
  description: meta.title,
  type: meta.kind,
  interactive: meta.kind === 'diagram' || meta.kind === 'tool',
  clinical: meta.kind === 'clinical'
}));
