import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
from pandas import DataFrame
from plotly.offline import plot

df = pd.read_csv('ghg-emissions.csv')

countries = df['Country/Region']

top = countries[:10]

data = [go.Bar(x=top, y=df['2018'])]

layout = go.Layout(title='Emissions of CO2 by Country', xaxis_title="Countries",
                   yaxis_title="Metric tons of CO2 emissions")

fig = go.Figure(data=data, layout=layout)
fig.show()