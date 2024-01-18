// This JS file contains the code that makes the graphs on the home page work.
// I decided to add graphs for certain parts of the dataset as it would be a good way to visualise the data.
// Initially, I was going to use D3 for the graphs, but I found a similar library called Plot, which is based on D3, but is much easier to use.
// Especially since D3 is not strictly a requirement for the assignment, I decided to use Plot instead.
// I also used Observable to create the graphs, as it is easier to use and visualise what you are doing there
// I added this as it gives a good insight into some of the data

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

// Graph for average rating (Observable, 2024a) (Observable, 2023a)
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
