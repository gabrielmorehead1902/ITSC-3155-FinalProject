// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plotly.com/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */

trace1 = {
  name: 'China (Coal)', 
  type: 'scatter', 
  xsrc: 'avander7:2:ed6675', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:ecb82f', 
  y: [159.6, 171.7, 175.8, 176.61, 181.54, 187.54, 200.26, 210.47, 222.32, 215.86, 212.2, 209.19, 225.45, 239.68, 252.53, 298.87, 345.73, 385.23, 418.56, 449.53, 472.9, 507.43, 558.42, 613.15, 642.58, 647.33, 630.98, 610.31]
};
trace2 = {
  name: 'Saudi Arabian Oil Company (Aramco)', 
  type: 'scatter', 
  xsrc: 'avander7:2:825776', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:35082e', 
  y: [83.51, 85.49, 105.77, 130.27, 134.34, 130.74, 133.4, 133.89, 135.66, 134.93, 138.94, 129.28, 138.79, 139.17, 133.99, 156.46, 156.2, 177.31, 177.21, 170.95, 178.58, 166.81, 172.92, 191.33, 202.96, 202.07, 206.3, 215.47]
};
trace3 = {
  name: 'National Iranian Oil Co', 
  type: 'scatter', 
  xsrc: 'avander7:2:273a6f', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:e9698b', 
  y: [36.32, 46.86, 50.45, 51.92, 55.67, 59.04, 58.08, 60.53, 64.18, 91.39, 99.11, 100.08, 79.41, 80.95, 83.25, 70.03, 88.06, 97.29, 97.03, 93.89, 102.5, 98.83, 121.58, 139.56, 127.18, 125.35, 123.01, 166.33]
};
trace4 = {
  name: 'Gazprom OAO', 
  type: 'scatter', 
  xsrc: 'avander7:2:a88ce2', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:2c8f00', 
  y: [0.0, 206.44, 211.37, 210.2, 201.69, 194.54, 191.3, 189.97, 181.12, 173.84, 181.45, 181.37, 174.76, 172.71, 178.37, 186.45, 191.71, 190.14, 191.43, 188.78, 187.93, 131.22, 137.18, 133.43, 123.84, 122.17, 110.7, 107.97]
};
trace5 = {
  name: 'Sonatrach SPA', 
  type: 'scatter', 
  xsrc: 'avander7:2:ab116c', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:e08234', 
  y: [32.83, 46.46, 35.73, 36.3, 39.45, 38.39, 38.23, 39.29, 42.98, 44.64, 43.79, 44.05, 47.58, 47.23, 53.62, 63.63, 63.41, 68.47, 70.14, 70.61, 70.66, 63.18, 63.95, 60.23, 58.75, 59.05, 58.59, 88.51]
};
trace6 = {
  name: 'Rosneft OAO', 
  type: 'scatter', 
  xsrc: 'avander7:2:6d4de6', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:4be7b1', 
  y: [0.0, 0.0, 4.17, 3.87, 3.52, 5.55, 5.12, 5.08, 4.96, 4.8, 5.48, 5.89, 6.31, 7.0, 7.8, 9.31, 10.23, 24.33, 26.17, 32.35, 31.59, 32.4, 33.82, 34.8, 37.62, 65.72, 79.92, 82.75]
};
trace7 = {
  name: 'China National Petroleum Corp (CNPC)', 
  type: 'scatter', 
  xsrc: 'avander7:2:64216c', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:3434c8', 
  y: [6.65, 39.91, 40.32, 41.03, 41.55, 42.99, 43.84, 44.5, 49.19, 48.99, 49.3, 47.44, 40.63, 38.89, 40.75, 43.81, 46.08, 52.01, 58.86, 65.11, 70.31, 74.24, 80.36, 66.74, 70.33, 74.78, 78.84, 81.33]
};
trace8 = {
  name: 'Qatar Petroleum Corp', 
  type: 'scatter', 
  xsrc: 'avander7:2:098e56', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:ba182a', 
  y: [5.07, 5.38, 6.31, 7.08, 8.33, 9.05, 9.03, 9.29, 9.94, 11.9, 14.01, 14.99, 18.39, 17.87, 18.72, 20.59, 24.64, 27.83, 29.78, 34.75, 40.3, 45.29, 56.76, 66.82, 70.94, 71.96, 70.45, 72.78]
};
trace9 = {
  name: 'Russia (Coal)', 
  type: 'scatter', 
  xsrc: 'avander7:2:7f4197', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:7d6ddc', 
  y: [0.0, 0.0, 0.0, 0.0, 57.55, 52.08, 46.32, 44.7, 43.71, 41.72, 39.77, 42.78, 43.71, 45.12, 43.21, 46.74, 47.1, 51.45, 51.76, 52.57, 55.47, 50.2, 54.33, 53.77, 59.91, 59.29, 64.97, 67.87]
};
trace10 = {
  name: 'Abu Dhabi National Oil Co', 
  type: 'scatter', 
  xsrc: 'avander7:2:2c0579', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:7903ba', 
  y: [18.83, 24.53, 26.83, 31.95, 30.87, 30.49, 32.83, 31.79, 32.21, 34.04, 37.73, 37.96, 38.8, 38.78, 38.87, 41.34, 43.22, 47.38, 50.13, 49.5, 50.62, 45.89, 47.64, 50.25, 52.16, 53.34, 55.92, 60.9]
};
trace11 = {
  name: 'Petroliam Nasional Berhad (Petronas)', 
  type: 'scatter', 
  xsrc: 'avander7:2:57c332', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:3c6d76', 
  y: [15.59, 15.0, 16.73, 16.97, 19.5, 19.28, 19.17, 22.95, 31.42, 35.72, 22.0, 36.77, 31.31, 33.87, 39.38, 41.65, 39.05, 40.04, 39.46, 42.57, 44.67, 44.79, 44.95, 53.99, 54.15, 57.12, 58.1, 58.71]
};
trace12 = {
  name: 'Coal India', 
  type: 'scatter', 
  xsrc: 'avander7:2:52ba7b', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:eda6a7', 
  y: [16.72, 17.79, 18.14, 20.85, 21.91, 21.81, 22.32, 23.32, 25.2, 26.02, 26.21, 26.26, 27.03, 28.19, 29.3, 30.88, 32.61, 34.61, 36.38, 38.25, 40.69, 43.47, 43.47, 43.93, 45.58, 46.61, 49.81, 54.28]
};
trace13 = {
  name: 'ExxonMobil Corp', 
  type: 'scatter', 
  xsrc: 'avander7:2:baa3d2', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:a61c0a', 
  y: [67.81, 68.66, 67.32, 69.5, 68.17, 68.18, 70.76, 66.84, 67.36, 67.55, 66.87, 66.69, 67.39, 66.61, 65.06, 64.41, 64.88, 64.88, 68.17, 65.83, 61.19, 60.18, 61.0, 65.0, 65.0, 67.0, 57.0, 54.0]
};
trace14 = {
  name: 'TurkmenGaz', 
  type: 'scatter', 
  xsrc: 'avander7:2:e56748', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:f76c28', 
  y: [0.0, 0.0, 0.0, 0.0, 32.66, 37.0, 20.33, 18.44, 21.13, 14.56, 7.54, 12.73, 26.55, 27.52, 30.55, 33.75, 33.44, 35.97, 36.09, 39.33, 40.25, 21.78, 25.87, 37.8, 39.4, 48.42, 51.1, 53.41]
};
trace15 = {
  name: 'Petroleos Mexicanos (Pemex)', 
  type: 'scatter', 
  xsrc: 'avander7:2:ac0a32', 
  x: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], 
  ysrc: 'avander7:2:513060', 
  y: [61.87, 62.16, 64.94, 67.54, 65.24, 65.37, 74.73, 73.7, 79.6, 83.0, 85.94, 82.81, 84.53, 86.1, 86.28, 90.56, 91.53, 91.12, 91.53, 89.85, 86.76, 73.91, 64.05, 53.31, 43.34, 47.08, 55.62, 52.5]
};
data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12, trace13, trace14, trace15];
layout = {
  title: {text: 'Top 10 Companies releasing Green House Gasses'}, 
  xaxis: {title: {text: 'Years'}}, 
  yaxis: {title: {text: 'Metric Tons of Carbon Emissions'}}, 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}, 
          error_x: {color: '#2a3f5f'}, 
          error_y: {color: '#2a3f5f'}
        }
      ], 
      pie: [
        {
          type: 'pie', 
          automargin: true
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: '#EBF0F8'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: '#C8D4E3'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }, 
          baxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: '#2a3f5f', 
            minorgridcolor: 'white', 
            startlinecolor: '#2a3f5f'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      barpolar: [
        {
          type: 'barpolar', 
          marker: {line: {
              color: '#E5ECF6', 
              width: 0.5
            }}
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          line: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}, 
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: '', 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: '', 
            outlinewidth: 0
          }, 
          colorscale: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: '#E5ECF6', 
        showlakes: true, 
        subunitcolor: 'white'
      }, 
      font: {color: '#2a3f5f'}, 
      polar: {
        bgcolor: '#E5ECF6', 
        radialaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        angularaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        yaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }, 
        zaxis: {
          ticks: '', 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: '#E5ECF6'
        }
      }, 
      title: {x: 0.05}, 
      xaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      yaxis: {
        ticks: '', 
        title: {standoff: 15}, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white', 
        zerolinewidth: 2
      }, 
      mapbox: {style: 'light'}, 
      ternary: {
        aaxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        baxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        caxis: {
          ticks: '', 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        bgcolor: '#E5ECF6'
      }, 
      colorway: ['#636efa', '#EF553B', '#00cc96', '#ab63fa', '#FFA15A', '#19d3f3', '#FF6692', '#B6E880', '#FF97FF', '#FECB52'], 
      coloraxis: {colorbar: {
          ticks: '', 
          outlinewidth: 0
        }}, 
      hovermode: 'closest', 
      colorscale: {
        diverging: [['0', '#8e0152'], ['0.1', '#c51b7d'], ['0.2', '#de77ae'], ['0.3', '#f1b6da'], ['0.4', '#fde0ef'], ['0.5', '#f7f7f7'], ['0.6', '#e6f5d0'], ['0.7', '#b8e186'], ['0.8', '#7fbc41'], ['0.9', '#4d9221'], ['1', '#276419']], 
        sequential: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']], 
        sequentialminus: [['0.0', '#0d0887'], ['0.1111111111111111', '#46039f'], ['0.2222222222222222', '#7201a8'], ['0.3333333333333333', '#9c179e'], ['0.4444444444444444', '#bd3786'], ['0.5555555555555556', '#d8576b'], ['0.6666666666666666', '#ed7953'], ['0.7777777777777778', '#fb9f3a'], ['0.8888888888888888', '#fdca26'], ['1.0', '#f0f921']]
      }, 
      hoverlabel: {align: 'left'}, 
      plot_bgcolor: '#E5ECF6', 
      paper_bgcolor: 'white', 
      shapedefaults: {line: {color: '#2a3f5f'}}, 
      autotypenumbers: 'strict', 
      annotationdefaults: {
        arrowhead: 0, 
        arrowcolor: '#2a3f5f', 
        arrowwidth: 1
      }
    }
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});