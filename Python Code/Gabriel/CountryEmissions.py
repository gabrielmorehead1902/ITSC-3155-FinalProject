import pandas as pd
import plotly.offline as pyo
import plotly.graph_objs as go
import numpy as np
from pandas import DataFrame
from plotly.offline import plot
import chart_studio
import chart_studio.plotly as py
import chart_studio.tools as tls

username = 'avander7'
api_key = 'poRT8nzcpb2Yt1EVj7aN'
chart_studio.tools.set_credentials_file(username=username, api_key=api_key)

df = pd.read_csv('ghg-emissions.csv')

countries = df['Country/Region']

top = countries[:10]

data = [go.Bar(x=top, y=df['2018'])]

layout = go.Layout(title='Emissions of CO2 by Country', xaxis_title="Countries",
                   yaxis_title="Metric tons of CO2 emissions")

fig = go.Figure(data=data, layout=layout)
py.plot(fig, filename = 'country emissions', auto_open=True)
fig.show()