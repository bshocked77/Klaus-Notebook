

// Recipe card sketch elements

const rcanvas = rough.canvas(document.getElementById('recipe-canvas'));
rcanvas.linearPath([[0, 0], [30, 2],[100, 3], [165, 5]]); // x1, y1, x2, y2


// VFD Logo SVG
var vfdCanvas = document.getElementById('vfd-canvas');
var roughSvg = rough.canvas(vfdCanvas);

roughSvg.path("M61.51,0C95.53,0,123,27.53,123,61.63c-0.01,33.96-27.6,61.37-61.76,61.36C27.3,122.98-0.03,95.32,0,61C0.03,27.45,27.71,0,61.51,0z M93.02,105.65c0.27-0.16,0.41-0.23,0.54-0.33c12.94-9.8,20.36-22.73,21.99-38.91c0.35-3.46,0.26-3.5-3.07-4.36c-16.19-4.19-31.31-2.08-44.9,8c-11.33,8.4-18.31,19.81-22.13,33.25c-0.87,3.06-1.43,6.21-2.14,9.38c6.9,2.41,13.74,3.4,20.98,3.06c-11.36-7.31-11.51-20.43-6.67-27.88c5.31-8.18,15.52-11.39,24.56-7.64C89.91,83.42,97.12,93.04,93.02,105.65z M55.89,7.52c-0.49,0.04-0.72,0.04-0.96,0.07c-17.46,2.41-30.77,11.19-40.12,26.09c-0.65,1.04-0.57,1.8,0.13,2.65c0.18,0.22,0.35,0.44,0.53,0.65c7.17,8.64,12.67,18.24,16.48,28.8c0.11,0.3,0.27,0.59,0.53,1.16c2.57-10.61,5.74-20.7,9.63-30.56C46,26.53,50.56,16.98,55.89,7.52z M54.65,64.8c8.9-6.29,18.58-10.25,29.2-11.84c10.64-1.6,21.11-0.65,31.42,2.3c0.06-0.2,0.1-0.28,0.1-0.35c-0.01-0.2-0.02-0.4-0.05-0.6c-1.15-8.65-4.21-16.56-9.21-23.7c-0.26-0.37-1.01-0.58-1.51-0.55c-9.13,0.56-17.73,2.94-25.65,7.57c-10.86,6.34-18.49,15.63-24.18,26.66C54.71,64.38,54.71,64.49,54.65,64.8z M99.24,22.48c-0.5-0.48-0.83-0.81-1.18-1.12c-9.14-8.21-19.82-12.9-32.08-14c-1.21-0.11-1.74,0.2-2.24,1.28C57.48,22.08,52.34,35.93,48.5,50.26c-0.83,3.09-1.58,6.2-2.37,9.3C58.3,39.36,75.28,26.19,99.24,22.48z M26.08,102.67c1.14-12.62-9.01-50.6-15.8-59.24c-3.42,9.89-4.03,19.85-1.76,29.95C11.12,84.99,17.01,94.66,26.08,102.67z M74.49,87.63c-6.05-0.05-10.99,4.83-10.98,10.84c0.01,5.93,4.81,10.79,10.73,10.86c6.04,0.07,11-4.78,11.03-10.79C85.3,92.56,80.48,87.68,74.49,87.63z", {roughness: 0.9, fill:'black'});
