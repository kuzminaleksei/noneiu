function determineVisualizationType(mark) {
  return mark === 'rect' || mark === 'geoshape' ? 'heatmap' : 'ramp';
}

console.log(determineVisualizationType('rect'));        // Output: 'heatmap'
console.log(determineVisualizationType('geoshape'));    // Output: 'heatmap'
console.log(determineVisualizationType('circle'));      // Output: 'ramp'
