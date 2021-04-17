import plotly.graph_objs as go
from plotly.offline import plot

x  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y1 = [9, 6, 2, 1, 5, 4, 6, 8, 1, 3]
y2 = [19, 36, 12, 1, 35, 4, 6, 8, 1, 3]
trace1 = go.Bar(x=x,
                y=y1,
                name='Boats')
trace2 = go.Bar(x=x,
                y=y2,
                name='Cars')

data = [trace1, trace2]
layout = go.Layout(title='Title',
                   xaxis=dict(title='X axis',
                              tickfont=dict(size=14,
                                            color='rgb(107, 107, 107)'),
                              tickangle=-45),
                   yaxis=dict(title='Y axis',
                              titlefont=dict(size=16,
                                             color='rgb(107, 107, 107)'),
                              tickfont=dict(size=14,
                                            color='rgb(107, 107, 107)')),)

fig = go.Figure(data=data, layout=layout)
plot(fig,
     include_plotlyjs=False,
     output_type='div')