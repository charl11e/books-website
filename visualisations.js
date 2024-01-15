// Declare that d3 and Plot are global variables for ESLint (ESLint, 2023a)
/* global d3, Plot */

// Graph for number of pages (separate dataset used as to remove abnormally large values) (Observable, 2024a) (Observable, 2023a)
d3.csv('/graphdata/numpages.csv').then(data => {
  const numpages = Plot.plot({
    x: { label: 'Number Pages' },
    y: { label: 'Frequency' },
    marks: [
      Plot.rectY(data, Plot.binX({ y: 'count' }, { x: 'num_pages', tip: true })),
      Plot.ruleY([0])
    ]
  });
  const append = document.getElementById('numpages');
  append.append(numpages);
});

d3.csv('data.csv').then(data => {
  const averagerating = Plot.plot({
    marks: [
      Plot.rectY(
        data,
        Plot.binX({ y: 'count' }, { x: 'average_rating', tip: true })
      ),
      Plot.ruleY([0])
    ]
  });
  const append = document.getElementById('averagerating');
  append.append(averagerating);
});
