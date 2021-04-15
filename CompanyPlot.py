import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
df = pd.read_csv('companyGraph.csv')
# Sort by row???
# df.iloc[:, np.argsort(df[28])]
df.sort_values(by="2015", ascending=0)

plots = []
for c in df.iloc[:, 1:]:
    fig = go.Scatter(x=df["Year"], y=df[c], name=c)
    plots.append(fig)

fig = go.Figure(data=plots)
fig.show()
