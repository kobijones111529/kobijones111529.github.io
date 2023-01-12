const sections =
  Array.from(document.getElementById('sections').children)
    .filter(el => el.className === 'section');

const dropdownArrows =
  sections
    .map(el => {
      return {
        section: el,
        arrow: el.getElementsByTagName('i')[0]
      };
    });

var dropdowns = dropdownArrows
  .map(el => {
    return {
      el: el,
      expanded: true
    };
  });

dropdowns.forEach(el => {
  el.el.arrow.addEventListener('click', () => {
    const content = el.el.section.getElementsByClassName('content')[0];
    if (el.expanded) {
      el.el.arrow.style.transform = 'rotate(-90deg)';
      expand(content, false);
    } else {
      el.el.arrow.style.transform = 'rotate(0deg)';
      expand(content, true);
    }
    el.expanded = !el.expanded;
  });
});

const expand = (el, shouldExpand) => {
  console.log(el);
  Array.from(el.children)
    .filter(el => el.className !== 'header')
    .forEach(el => {
      if (shouldExpand)
        el.style.display = 'block';
      else
        el.style.display = 'none';
    });
};
